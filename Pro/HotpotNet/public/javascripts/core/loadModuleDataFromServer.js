(function(win, $) {
    'use strict';

    win.Kdo = win.Kdo || {};
    var counter=0;

    //转义特殊字符
    var _replaceTemplateEscape = function(template) {
        if (!!template) {
            return template.replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&amp;/g, "&");
        }

    }
    var isEmpty = function(obj) {
        var key;
        if (!!obj) {
            for (key in obj) {
                return false;
            }
        }
        return true;
    };

    /* art-template 扩展*/
    template.helper('toString', function(data) {
        return JSON.stringify(data);
    });

    template.helper("trim", function(data) {
        return $.trim(data);
    });

    template.helper("toUrl", function(data, columnName) {
        var _router = "";
        $.each(data, function(idx,parent) {
            _router = _router + "/" + parent[columnName]
        });
        return _router;
    });

    //处理DataConfig动态数据配置，并渲染模块
    var _buildDataConfigs = function(_$box, controlConfig) {
        var reload = !!controlConfig && !!controlConfig.reload,
            isAsync = !!_$box.data('asyncload');
        //获取data config数据配置对象
        var _getDataConfig = function(tpl) {
            var dataConfig = _$box.data('controldataconfig');
            return dataConfig;
        }

        //处理data config配置对象，并获取数据整体返回结果集。
        var _getData = function(dataConfigs, callback) {
            var count = 0,
                _data = {},
                finished = false,
                _complete = function() {
                    count++;
                    if (count >= dataConfigs.length && !finished) {
                        callback(_data);
                        finished = true
                    }
                };
            dataConfigs = Array.isArray(dataConfigs) ? dataConfigs : [];
            if (dataConfigs.length <= 0) {
                return _complete();
            }
            dataConfigs.forEach(function(cfg) {
                //build mock data（用于Mock Data）
                var _queryString = [],
                    _postData = {},
                    _isEmpty = isEmpty(cfg);
                if (!cfg.mockData) cfg.mockData = {};
                //mock query string对象
                (cfg.queryString || []).forEach(function(item) {
                    if (item.indexOf("<%=") == -1) {
                        _queryString.push(item);
                    } else {
                        var _val = item.substring(item.indexOf("<%="));
                        _queryString.push(item.replace(_val, cfg.mockData[_val] || ""));
                    }
                });
                //mock post data对象
                for (var key in cfg.postData) {
                    if (cfg.postData[key].indexOf("<%=") == -1) {
                        _postData[key] = cfg.postData[key];
                    } else {
                        _postData[key] = cfg.mockData[cfg.postData[key]];
                    }
                }
                if (!_isEmpty) {
                    var url = lanh.apiHost + cfg.path + "?" + _queryString.join("&"),
                        formBody = !!cfg.contentType ? JSON.stringify(_postData) : _postData,
                        data,
                        cache = !!Kdo && !!Kdo.utils && !!Kdo.utils.cache ? Kdo.utils.cache : null,
                        cacheKey,
                        load = function(next) {
                            $.ajax({
                                url: url,
                                method: cfg.method,
                                dataType: "json",
                                data: formBody,
                                contentType: cfg.contentType || null,
                                async: isAsync,
                                success: function(result) {
                                    var curResult = _data[cfg.objName] = result;
                                    // 修正返回结果数据，如果没有data属性，则默认添加data属性，值为""(空字符串).
                                    if (!!curResult && !curResult.data) {
                                        curResult.data = "";
                                    }!!next && next(result);
                                },
                                complete: _complete
                            });
                        };

                    if (!!cache) {
                        cacheKey = JSON.stringify(cfg); //cfg.method+'-'+url+'&'+$.param(_postData,true);
                        data = cache.getOrSetModuleData(cacheKey, load, reload);
                        if (!!data) {
                            _data[cfg.objName] = data;
                            _complete();
                        }
                    } else {
                        load();
                    }

                } else {
                    _complete();
                }
            });
        }
        var applyFictitiousData = function(controlConfig, data) {
            var ctrlKey = controlConfig.key,
                ctrlId = controlConfig.controlId,
                fd = Kdo.menus.getFictitiousData(),
                map = fd.control_map_path,
                dataConfig = map[ctrlKey],
                objName,
                path,
                curdata,
                orgdata,
                vd = $.extend(true, {}, data || {}),
                emptier = 0;

            if (!!dataConfig) {
                dataConfig.forEach(function(cfg) {
                    objName = !!ctrlId ? cfg['objName'].replace(/_panelId_/g, ctrlId) : cfg['objName'];
                    orgdata = vd[objName];
                    if (isEmpty(orgdata) || isEmpty(orgdata.data)) {
                        path = cfg['path'];
                        curdata = fd[path];
                        vd[objName] = $.extend(true, vd[objName] || {}, curdata);
                        emptier++;
                    }
                });
                if (emptier === dataConfig.length) {
                    $.extend(true, data || {}, vd);
                }
            }
        }

        //执行数据查询，并重新渲染模板(HTML & JavaScript)
        _getData(_getDataConfig(_$box.html()), function(data) {
            counter--;
            //编辑样式时传的对象中不包含controlId，则只有在对象是满足的情况才做如下操作 by linna
            if (!!controlConfig && controlConfig.controlId) {
                applyFictitiousData(controlConfig, data);
                var filterStrategy = Kdo.page.create.dynamicDataFilterStrategy[controlConfig.key];
                if (typeof filterStrategy === 'function') {
                    for (var d in data) {
                        var serData = data[d]['data'];
                        controlConfig = filterStrategy(controlConfig, serData);
                    }
                    //重新保存模块对象到页面对象中
                    Kdo.data.controls.set(controlConfig);
                }
            }
            //使用{{ }}解析动态数据
            template.config("openTag", "{{");
            template.config("closeTag", "}}");
            //------------build _$box START------------
            var $tplDiv = _$box.children("div[id^='control_']"),
                _template = $tplDiv.prop("outerHTML"),
                ctrlId = $tplDiv.attr('id');
            if (!!isAsync) {
                ctrlId = (_$box.attr('id') || '').replace('modulebox_', '');
                _template = $('#template_' + ctrlId).html();     
            }
            _template = (_template || '').replace(/scr_ipt/ig,'script').replace(/\{_\{/g, '{{').replace(/\}_\}/g, '}}');
            _template = _replaceTemplateEscape(_template);
            _template = !!_template ? template.compile(_template)(data) : '';
            if (isAsync) {
                _template = $(_template).attr('id', ctrlId);
                _template.find('img[data-onerror]').each(function(idx, el) {
                    var $el = $(el);
                    $el.attr('onerror', $el.data('onerror'));
                });
            }
            //替换掉视图
            $tplDiv.replaceWith(_template);
            // _$box.children("div[id^='control_']").show();
            //------------build _$box END------------
            setTimeout(function() {
                _$box.trigger('rendered', data, _$box);
            }, 17);

            //恢复默认解析静态数据的标记
            template.config("openTag", "{{{");
            template.config("closeTag", "}}}");
        });
    }


    

    /**
        异步加载模块数据，只针对异步模块进行处理
    */
    var _asyncLoadModuleData = function() {
        $(function() {
            var $box = $('div[data-asyncload="true"]'),
                idx=0,
                len=$box.length,
                timer,
                loadfn=function(){
                    if(idx===len) {
                       return clearTimeout(timer);
                    };
                    if(counter<=3){
                        counter++;
                        var $el = $($box.get(idx));
                        _buildDataConfigs($el);
                        idx++;
                    }
                    timer=setTimeout(loadfn,0);
                };
                loadfn();
        });
    }

    var exportObj = {
        buildDataConfigs: _buildDataConfigs,
        asyncLoadModuleData: _asyncLoadModuleData

    };
    win.Kdo = win.Kdo || {};
    $.extend(true, win.Kdo, {
        page: {
            create: exportObj
        }
    });

}(window, jQuery))

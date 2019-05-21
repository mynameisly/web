(function ($, template) {
    window.midway = {};

    // ---------- art-template设置 START----------
    // 语法标记
    template.config("openTag", "{~");
    template.config("closeTag", "~}");
    // 扩展方法
    template.helper('toString', function (data) { return JSON.stringify(data) });
    template.helper('toJSON', function (data) { return JSON.stringify(data) });
    template.helper('trim', function (data) { return $.trim(data) });
    template.helper("toUrl", function (data, columnName) {
        var _router = "";
        for(var item in data){
            _router = _router + "/" + data[item][columnName];;
        }
        return _router;
    });
    // ---------- art-template设置 END----------

    // 数据异步请求
    window.midway.request = function (dataConfigs, target, opts) {
        var $target = $(target),
            targetHTML = $target.prop("outerHTML"),
            ajaxResults = {},
            ajaxDeferreds = [];

        opts = $.extend(true, {
            loading: 'default'
        }, opts || {});

        // 如果设置了loading
        switch (opts.loading) {
            case 'default':
                $target.html('<div style="min-width:32px; min-height:32px; background: url(\'/public/images/loading-placeholder.gif\') no-repeat center;"></div>');
                break;
        }

        // 组装每个ajax请求
        $.each(dataConfigs, function (i, cfg) {
            // 组装ajax请求URL地址
            var url = cfg.path;
            if (cfg.queryString) {
                url += (url.indexOf("?") == -1 ? "?" : "&") + cfg.queryString.join("&");
            }
            // 将配置转换为ajax请求对象
            ajaxDeferreds.push(
                $.ajax({
                    url: window.lanh.apiHost + url,
                    method: cfg.method || "get",
                    contentType: "application/json",
                    dataType: "json",
                    data: cfg.postData,
                    success: function (data, textStatus, jqXHR) {
                        ajaxResults[cfg.objName] = data;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        ajaxResults[cfg.objName] = {};
                    }
                })
            )
        });
        // 执行ajax对象
        $.when.apply(null, ajaxDeferreds).done(function () {
            // 模板绑定
            $target.replaceWith(template.compile(targetHTML)(ajaxResults));
        });
    }

})(jQuery, template); //jQuery和artTemplate为必要依赖项

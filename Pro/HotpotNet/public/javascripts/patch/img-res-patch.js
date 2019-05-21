(function ($) {
    'use strict';
    var patch = window.KDPatch = window.KDPatch || {},
        fn;
    patch['imgResPatch'] = fn = function () {
        var kid = lanh.kid || '',
            customExtend = lanh.customExtend || {},
            resRule = (customExtend.resRule || '').replace('{kid}', kid),
            resPath = '/userdatas/' + resRule + '/public_html/runtime/uploads/',
            basePath = '/runtime/uploads/';

        $('img').each(function (idx, img) {
            var $el = $(this),
                src = $el.attr('src')||$el.attr('data-src'),
                host,
                protocol,
                origin,
                ts = src;
            if (!!ts&&ts.indexOf(basePath) > -1 && ts.indexOf(resPath) === -1) {
                if (/^\/\//.test(ts)) {
                    ts = 'http:' + ts;
                }
                protocol = ts.substr(0, ts.indexOf('://') + 3);
                ts = ts.replace(protocol, '');
                host = ts.substr(0, ts.indexOf('/'));
                origin = protocol + host;
                var reg = new RegExp('^' + origin + '.*' + basePath, 'i');
                if (reg.test(src) && host.indexOf('cdn') === -1) {
                    $el.attr('raw-src', src).attr('src', src.replace(reg, origin + resPath));
                }
            }
        });
    }
    // 自动执行补丁
    $(fn);
})(jQuery);
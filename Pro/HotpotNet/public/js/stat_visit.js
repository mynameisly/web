(function () {
    var _client_type = "web", //如果是pc就是web，mobile就是app
        _session_sid="",
        _client_version = "2.2";

    var _statVisit = function () {
        //统计日志数据收录接口
        $.post(lanh.apiHost + "service/shop_visit_logs/stat_visit.html?client_type=" + _client_type + "&client_version=" + _client_version + "&session_sid=" + _session_sid, JSON.stringify({
            "referer_url": document.referrer,       //来源路径
            "access_url": window.location.href,     //当前访问路径
            "app_type": 1
        }), function (result) {
            window.onbeforeunload = function () {
                $.ajax({
                    url: lanh.apiHost + "service/shop_visit_logs/visit_time.html?client_type=" + _client_type + "&client_version=" + _client_version + "&session_sid=" + _session_sid,
                    data: JSON.stringify({
                        "access_url": window.location.href,  //当前访问路径
                        "app_type": 1
                    }),
                    dataType: "json",
                    async: false,
                    type: "POST",
                    success: function (result) { }
                });
            }
        }, "json");
    }
   
    $.ajax({
        url: lanh.apiHost + "service/home/service_init.html?client_type=" + _client_type,
        method: "GET",
        contentType: "applicaton/json",
        dataType: "json",
        async: false,
        success: function (result) {
            if (result.status == 0) {
                _session_sid = result.session_sid;
                _statVisit();
            }
        }
    });

   
    
})();
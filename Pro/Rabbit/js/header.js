$(function () {
    var $header = $("<nav class=\"navbar navbar-default\">\n" +
        "    <div class=\"container-fluid\">\n" +
        "        <!-- Brand and toggle get grouped for better mobile display -->\n" +
        "        <div class=\"navbar-header\">\n" +
        "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
        "                <span class=\"sr-only\">Toggle navigation</span>\n" +
        "                <span class=\"icon-bar\"></span>\n" +
        "                <span class=\"icon-bar\"></span>\n" +
        "                <span class=\"icon-bar\"></span>\n" +
        "            </button>\n" +
        "            <img class=\"navbar-brand\" src=\"img/brands.png\" style=\" height: 80px;\">\n" +
        "        </div>\n" +
        "\n" +
        "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
        "        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
        "            <ul class=\"nav navbar-nav\">\n" +
        "                <li class=\"active\"><a href=\"index.html\">首页 <span class=\"sr-only\">(current)</span></a></li>\n" +
        "                <li><a href=\"news.html\">资讯</a></li>\n" +
        "                <li class=\"dropdown\">\n" +
        "                    <a href=\"terminal.html\" class=\"dropdown-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\">目的地 <span class=\"caret\"></span></a>\n" +
        // "                    <ul class=\"dropdown-menu\">\n" +
        // "                        <li><a href=\"#\">Action</a></li>\n" +
        // "                        <li><a href=\"#\">Another action</a></li>\n" +
        // "                        <li><a href=\"#\">Something else here</a></li>\n" +
        // "                        <li role=\"separator\" class=\"divider\"></li>\n" +
        // "                        <li><a href=\"#\">Separated link</a></li>\n" +
        // "                        <li role=\"separator\" class=\"divider\"></li>\n" +
        // "                        <li><a href=\"#\">One more separated link</a></li>\n" +
        // "                    </ul>\n" +
        "                </li>\n" +
        "                <li><a href=\"comitte.html\">社区</a></li>\n" +
        "                <li><a href=\"#\">游记</a></li>\n" +
        "                <li><a href=\"connect.html\">联系我们</a></li>\n" +
        "                <li><a href=\"download.html\">APP</a></li>\n" +
        "\n" +
        "            </ul>\n" +
        "            <!--<form class=\"navbar-form navbar-left\">-->\n" +
        "                <!--<div class=\"form-group\">-->\n" +
        "                    <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\">-->\n" +
        "                <!--</div>-->\n" +
        "                <!--<button type=\"submit\" class=\"btn btn-default\">Submit</button>-->\n" +
        "            <!--</form>-->\n" +
        "            <ul class=\"nav navbar-nav navbar-right\">\n" +
        "                <li><a href=\"#\"><img src=\"img/search.png\" alt=\"\"></a></li>\n" +
        "                    <li><a href=\"#\" ><img src=\"img/qqlogin.png\" alt=\"\"> </a></li>\n" +
        "                    <li><a href=\"#\" ><img src=\"img/wechatlogin.png\" alt=\"\"> </a></li>\n" +
        "                    <li><a href=\"login.html\" >登录</a></li>\n" +
        "                    <li style=\"right: 20px\"><a href=\"\">|</a></li>\n" +
        "                    <li style=\"right: 40px\"><a href=\"#\" >注册</a></li>\n" +
        "            </ul>\n" +
        "        </div><!-- /.navbar-collapse -->\n" +
        "    </div><!-- /.container-fluid -->\n" +
        "</nav>")
    $('#head').append($header)
});
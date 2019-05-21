$(function(){
    var $head = $(`
    <nav class="navbar navbar-fixed-top" role="navigation">
        <div class="container">
            <div>
                <ul class="nav navbar-nav navbar-left">
                    <li>
                        <a href="" class="idx_logo" style="padding-top:10px;">
                            <img src="./img/logo.png" alt="爱地球">
                        </a>
                    </li>
                    <li>
                        <a href="./index.html" class="fill">首页</a>
                    </li>
                    <li class="dropdown">
                        <a href="./news.html">资讯</a>
                    </li>
                    <li>
                        <a href="./ecological.html">生态环境</a>
                    </li>
                    <li>
                        <a href="./protect.html">濒危动物</a>
                    </li>
                    <li>
                        <a href="./airquality.html">空气质量</a>
                    </li>
                    <li>
                        <a href="./contact.html">联系我们</a>
                    </li>
                    <li>
                        <a href="./login.html">登录</a>
                    </li>
                    <li>
                        <a href="./register.html">注册</a>
                    </li>
                </ul>
                <form class="navbar-form navbar-right">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="请输入你的内容">
                    </div>
                    <span class="glyphicon glyphicon-search" aria-haspopup="true"></span>
                </form>
            </div>
        </div>
    </nav>
    `);

    var $foot = $(`
    <div class="row foot">
        <div class="col-md-12">
            <img src="./img/logo.png" alt="爱地球">
        </div>
    </div>
    `);

    $('#head').append($head);
    $('#foot').append($foot);
})
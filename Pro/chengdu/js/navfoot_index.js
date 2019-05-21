$(function(){
    var $head = $(`
    <nav class="navbar navbar-fixed-top" role="navigation">
        <div class="container">
            <div>
                <ul class="nav navbar-nav navbar-left">
                    <li>
                        <a href="" class="idx_logo" style="padding-top:10px;">
                            <img src="./images/idx_img/logo.png" alt="爱成都自由行">
                        </a>
                    </li>
                    <li>
                        <a href="#" class="fill">首页</a>
                    </li>
                    <li class="dropdown">
                        <a href="pages/scenicSpot.html">
                            景点
                            <b class="caret"></b>
                        </a>
                    </li>
                    <li>
                        <a href="pages/delicious.html">美食</a>
                    </li>
                    <li>
                        <a href="pages/trip.html">出行</a>
                    </li>
                    <li>
                        <a href="pages/history.html">历史</a>
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
            <img src="./images/idx_img/logo.png" alt="游成都，爱自由">
            <p class="text-center">Copyright &copy; 2019 游成都 All Rights Reserved</p>
        </div>
    </div>
    `);

    $('#head').append($head);
    $('#foot').append($foot);
})
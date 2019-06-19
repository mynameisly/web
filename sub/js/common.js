$(function() {
   var $head = $(`
       <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>nav</title>
                <style>
                    *{
                        margin: 0;
                        padding: 0;
                    }
                    
                    a{
                        text-decoration: none;
                    }
                    
                    #header {
                        width:100%;
                        height:90px;
                        overflow:hidden;
                        padding:0;
                        margin:0 auto;
                        background:#33495E;
                        position:relative;
                    }
                    .header {
                        width:1000px;
                        height:90px;
                        overflow:hidden;
                        padding:0;
                        margin:0 auto;
                        position:relative;
                    }
                    #logo {
                        width:450px;
                        height:90px;
                        overflow:hidden;
                        background: url(./images/idx_img/com_logo.png) no-repeat left center;
                        background-size: 100%;
                        background-color: rgb(51,73,94);
                        float:left;
                        position:relative;
                    }
                    .header_right {
                        width:275px;
                        height:60px;
                        overflow:hidden;
                        padding:30px 0 0 0;
                        float:right;
                        position:relative;
                    }
                    .search_sou {
                        width:44px;
                        height:30px;
                        overflow:hidden;
                        float:right;
                        position:relative;
                    }
                    .search_put {
                        width:228px;
                        height:28px;
                        overflow:hidden;
                        border:1px solid #5E7C98;
                        float:right;
                        position:relative;
                    }
                    .search_main {
                        width:225px;
                        height:28px;
                        line-height:28px;
                        overflow:hidden;
                        padding:0 0 0 3px;
                        margin:0 auto;
                        color: #FFF;
                        background:#33495E;
                        border:none;
                        position:relative;
                    }
                    #nav {
                        width:100%;
                        height:54px;
                        overflow:hidden;
                        padding:0;
                        margin:0 auto;
                        background:#BE392A;
                        position:relative;
                    }
                    .nav {
                        width:1009px;
                        height:54px;
                        overflow:hidden;
                        padding:0;
                        margin:0 auto;
                        position:relative;
                    }
                    .nav ul li {
                        width:112px;
                        height:54px;
                        overflow:hidden;
                        line-height:54px;
                        text-align:center;
                        float:left;
                        position:relative;
                    }
                    .nav ul li a:active, .nav ul li a:link, .nav ul li a:visited {
                        color:#FFF;
                        font-size:16px;
                        font-weight:bold;
                    }
                    .nav ul li a:hover {
                        color:#FFCA26;
                    }
                    
                </style>
            </head>
            <body>
            <div id="header">
              <div class="header">
                <div id="logo"></div>
                <div class="header_right">
                  <div class="search_sou">
                    <input type="image" name="Submit" src="./images/ss.jpg" value="提交" onclick="chksearch()">
                  </div>
                  <div class="search_put">
                    <input name="SeaStr" type="text" class="search_main" id="SeaStr" value="请输入关键词" onfocus="if (value =='请输入关键词'){value =''}" onblur="if (value ==''){value='请输入关键词'}">
                  </div>
                </div>
              </div>
            </div>
            <div id="nav">
              <div class="nav">
                <ul>
                  <li><a href="./index.html">首页</a></li>
                  <li><a href="./pages/news.html">新闻公告</a></li>
                  <li><a href="./pages/signup.html">竞赛报名</a></li>
                  <li><a href="./pages/success.html">成果展示</a></li>
                  <li><a href="./pages/train.html">竞赛培训</a></li>
                  <li><a href="./pages/teambuild.html">团队建设</a></li>
                  <li><a href="./pages/linetime.html">竞赛历程</a></li>
                  <li><a href="./pages/download.html">资料下载</a></li>
                  <li><a href="./pages/aboutus.html">关于我们</a></li>
                </ul>
              </div>
            </div>
            </body>
        </html>
   `);

   var $foot=$(`<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>foot</title>
            <style type="text/css">
                *{
                    margin: 0;
                    padding: 0;
                }
                a{
                    text-decoration: none;
                }
                #footer {
                    width:100%;
                    height:auto;
                    overflow:hidden;
                    padding:15px 0 10px;
                    background:#33495E;
                    position:relative;
                }
           
                .footer_bottom {
                    width:1000px;
                    height:auto;
                    overflow:hidden;
                    padding:10px 0;
                    margin:0 auto;
                    line-height:200%;
                    font-size:14px;
                    color:#A8B0C7;
                    position:relative;
                }
                .footer_bottom a:active, .footer_bottom a:link, .footer_bottom a:visited {
                    font-size:14px;
                    color:#A8B0C7
                }
                .footer_bottom a:hover {
                    color:#F00;
                }
            </style>
        </head>
        <body>
        <div id="footer">
          <div class="footer_bottom" align="center">Copyright © 2019 四川工商学院计算机学院学科竞赛综合信息网站</div>
        </div>
        </body>
    </html>
`);
    $('#head').append($head);
    $('#foot').append($foot);

});
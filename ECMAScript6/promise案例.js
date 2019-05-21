//现在有一个需求，上面是一个新闻，下面是评论
//新闻的展现是要发请求给服务器，然后从数据库拿，我们怎么知道要哪条新闻，这里就有一个新闻ID，通过ID来找

//onreadystatechange一共有0,1,2,3,4   这五种状态码，所以这个函数会被调用4次
//定义获取新闻的功能函数
function getNews(){
    var promise = new Promise((resolve,reject) => {
        //执行异步任务
        //创建xmlHttp实例对象
        let xmlHttp = new XMLHttpRequest();
        //绑定监听 readyState
        xmlHttp.onreadystatechange = function () {
            if(xmlHttp.readyState === 4){//请求成功

                if(xmlHttp.status == 200){
                    console.log(xmlHttp.responseText);
                    //修改状态
                    resolve(xmlHttp.responseText);//修改promise状态为成功状态
                } else {
                    reject('暂时没有新闻内容');
                }
            }
        };

        //open 设置请求的方式和URL
        xmlHttp.open('GET', url);

        //发送
        xmlHttp.send();
    });
    return promise;
}

getNews('这里要写一个URL，是一个实参')
    .then((data) => {
        console.log(data);
    }, (error) => {
        console.log(error);
    })
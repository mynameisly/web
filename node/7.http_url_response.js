var http = require('http')

//1、创建Server
var server = http.createServer()

//2、监听request请求事件，设置请求处理函数
server.on('request',function(req,res){
    // console.log('收到请求了，请求路径是：'+req.url)
    // res.write('hello')
    // res.write('world')
    // res.end()
    //上面的方式比较麻烦，几乎不用，推荐使用更简单的方式，直接end的同时发送响应数据
    // res.end('hello Node.js!')


    // 根据不同的请求路径发送不同的响应结果
    //1、获取请求路径
    //      req.url获取到的是端口号之后的那一部分路径
    //      也就是说所有的url都是以/开头的
//注意：浏览器默认在端口号后面有一个/，因为你不加浏览器会默认给你补上一个/
//F12打开调试平台里面的NetWork,下面有一个favicon.ico表示的是每个页面的title内的小图标，这是浏览器的默认行为
//它希望每个页面title都有小图标，以此来区分
    //2、判断路径出来响应
    var url = req.url

/*
    if(url === '/'){//一般而言，/就是对于网站的首页
        res.end('index page')
    }else if(url === '/login'){
        res.end('login page')
    }else{
        res.end('404 Not Found')
    }
*/

//这里只是举一个例子，实际中是放在数据库中的

    if(url === '/products'){
        var products = [
            {
                name:'苹果 X',
                price:8888
            },
            {
                name:'菠萝 X',
                price:5000
            },
            {
                name:'小辣椒',
                price:6600
            }
        ]

        //响应内容只能是二进制数据(buffer)或者是字符串(string)，数组、对象、布尔值、数字都不行
        //怎么把一个数组转换为字符串？
        res.end(JSON.stringify(products))
    }
    //在服务器中输出客户端的IP地址和端口号
    console.log('请求我的客户端的地址是：',req.socket.remoteAddress, req.socket.remotePort)

}) 

//3、绑定端口号，启动服务
server.listen(3000,function(){
    console.log('服务器启动成功，可以访问了......')
})

//80比较特殊，是浏览器默认的，写URL的时候不用写80，直接写http://127.0.0.1
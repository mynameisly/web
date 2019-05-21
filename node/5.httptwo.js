var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
//在服务端默认发送的数据，默认是utf-8,但是浏览器不知道你是utf-8编码的内容
//浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
//中文操作系统默认是gbk,解决方法是正确的告诉浏览器我给你发送的内容是什么编码的
//在 http 协议中，Content-type就是用来告知对方我给你发送的数据内容是什么类型

//  下面来解释一下plain和html的区别
//  plain是普通文本的意思
//  html是HTML格式的文本，如果你发送的是HTML格式的字符串，则也要告诉浏览器我给你发送的是text/html
    var url = req.url
    if(url == '/plain'){
        res.setHeader('Content-type','text/plain;charset=utf-8')
        res.end('我的编码类型是普通的！')
    }else if(url == '/html'){
        res.setHeader('Content-type','text/html;charset=utf-8')
        res.end('<p>Hello HTML<a href="#">点我</a></p>')
    }
})

server.listen(3000,function(){
    console.log('Server is running……')
})


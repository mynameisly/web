
var http = require('http')

var server = http.createServer()


//request请求事件处理函数，需要接收两个参数
//  request请求对象
//      请求对象可以用来获取客户端的一些请求信息，例如请求路径
//  response响应对象
//      响应对象可以用来给客户端发送响应消息
server.on('request',function(){
    console.log('收到客户端的请求！')
})

server.listen(3001,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3001/来进行访问')
})

//结合fs发送文件中的数据
//不同的资源对应的Content-type是不一样的，图片不需要指定编码，只有字符才需要指定

var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request',function(req,res){
    var url = req.url;
    if(url === '/'){
        //我们要发送给浏览器的是文件中的内容，这里的文件是index.html
        fs.readFile('./resources/index.html',function(err,data){
            if(err){
                res.setHeader('Content-type','text/plain;charset=utf-8')
                res.end('文件读取失败，请稍后重试！')
            }else{
                //data默认是二进制数据，一种是二进制，另一种是字符串
            res.setHeader('Content-type','text/html;charset=utf-8')
            res.end(data)
            }
            
        }) 
        //下面的leaf可以随便起，只是输入到地址栏的时候要使用，就是一个标识，具体的标识怎么起后面会说
    }else if(url === '/leaf'){
        //url:统一资源定位符
        //一个url最终其实是要对应到一个资源的
        fs.readFile('./resources/leaf.jpg',function(err,data){
            if(err){
                res.setHeader('Content-type','text/plain;charset=utf-8')
                res.end('文件读取失败，请稍后重试！')
            }else{
                //图片不需要指定编码，因为我们常说的编码一般指的是字符编码
                res.setHeader('Content-type','image/jpeg;charset=urf-8')
                res.end(data)
            }
        })
    }
})

server.listen('3000',function(){
    console.log('Server is running!')
})
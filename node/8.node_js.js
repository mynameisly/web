//用来获取机器信息的
var os = require('os')


//用来操作路径的
var path = require('path')


//获取当前机器的cpu信息
console.log(os.cpus())

//获取服务器的内存信息  memory是内存的意思
//G M KB B 其中B就是字节，我的本机是8G的内存，只能识别出7.8959236145个G
console.log(os.totalmem())


//获取一个路径中的扩展名部分
//extname : extension name
console.log(path.extname('c:/a/b/c.txt'))
//详情见官网：http://nodejs.cn/api/os.html

//浏览器中的JavaScript是没有文件操作能力的
//但是Node中的JavaScript具有文件操作能力

//fs是file-system的简写，就是文件系统的意思
//在Node中如果想要进行文件操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有文件操作有关的API
//例如：fs.readFile就是用来读取文件的


//1.使用require方法加载fs核心模块
//注意：浏览器是不认识下面这些代码的
var fs = require('fs')

//2、读取文件
//第一个参数是我们要读取的文件路径，第二个参数是一个回调函数
//回调函数接收两个参数：error和data
//    如果读取成功：data就是数据，error就是null；
//    如果读取失败：data就没有数据，error就是错误对象
fs.readFile('./helloworld.txt',function(error,data){


//为什么要写这个if-else语句呢？因为我们要判断文件是否读取成功！
    if(error){
        console.log('读取文件失败！')
    }else{
        console.log(data.toString())//<Buffer 68 65 6c 6c 6f 77 6f 72 6c 64 21 0d 0a 68 65 6c 6c 6f 77 6f 72 6c 64 21>
    }
    

    //默认文件中存储的都是二进制数据 0 1
    //这里为什么看到的不是0  1 呢？原因是二进制转换为十六进制了，我们都不认识
    //所以我们可以通过toString方法把其转换为我们能认识的字符
})
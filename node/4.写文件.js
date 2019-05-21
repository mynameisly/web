var fs = require('fs')

//第一个参数是要写入的文件路径，第二个参数是文件内容,第三个参数是回调函数
//      成功；文件写入成功；error是null
//      失败：文件写入失败；error是错误对象
fs.writeFile('./你好.md','大家好，我是Node.js',function(error){

    if(error){
        console.log('写入失败！')
    }else{
        console.log('写入成功！')
    }
})


//执行：在命令行里面切换到项目node下面，输入node  写文件.js
//cls:是clear的意思，清屏
//上箭头  调出历史记录
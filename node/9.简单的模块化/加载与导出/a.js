//require有两个作用：
//  1、加载文件模块并执行里面的代码
//  2、拿到被加载文件模块导出的接口对象
   
//每个文件模块中都提供了一个对象：exports
//exports 默认是一个空对象

//你要做的就是把所有需要被外部访问的成员挂载到这个  exports  对象中
var bExports = require('./b')
console.log(bExports.foo)

console.log(bExports.add(10,20))

console.log(bExports.age)

//注意：这里的readFile就只是一个普通的方法，不是fs里面的读文件的那个方法
bExports.readFile('./a.js')



//把b.js读出来
var fs = require('fs')
fs.readFile('./b.js',function(err,data){
    if(err){
        console.log('读取文件失败')
    }else{
        console.log(data.toString())
    }
})
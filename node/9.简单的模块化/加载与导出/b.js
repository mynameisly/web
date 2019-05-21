// var foo = 'bbb'

console.log(exports)

exports.foo = 'hello'

exports.add = function(x,y){
    return x+y
}

//这个方法不生效，因为需要把add方法挂载到exports上
function add(x,y){
    return x-y
}


var age = 18
exports.age = age

//注意：这个readFile不是fs上面的的读文件那个方法
exports.readFile = function(path,callback ){
    console.log('文件路径' , path)
}



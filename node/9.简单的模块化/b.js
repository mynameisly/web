console.log('b start')

var foo = 'bbb'
console.log(add(2,3))//运行a.js的时候，这里会报错，说找不到add这个方法
//因为node没有全局作用域，互相之间不会污染

require('./c.js')

console.log('b end')
//选中局部右键Run Code可以运行选中的局部的代码

//1.可以这样定义变量
let a = 1,b = 2,c = 3;
console.log('a:', a);
console.log('a:', b);
console.log('a:', c);

//2.或者是这样定义变量
let a = 1;
let b = 2;
let c = 3;
console.log('a:', a);
console.log('a:', b);
console.log('a:', c);

//3.上面那两种写法很麻烦，下面介绍ES6中数组的解构赋值,a就是1,b就是22,c就是33
let [a,b,c] = [1,22,33];
console.log('a:', a);
console.log('a:', b);
console.log('a:', c);

//4.复杂的解构赋值,这里的b是一个数组
let [a,[b],c] = [1,[5],10];
console.log('a:', a);
console.log('a:', b);
console.log('a:', c);

//5.越过解构,这时候输出的结果是：b数组里面的33和44被越过了。输出结果是：选中右键Run Code
let [a, ,b] = [10,20,30];
console.log('a:', a);
console.log('a:', b);

//6.配合展开运算符
//下面的...表示配合展开运算符，也叫三点运算符，如果是数组，就展开数组里面的元素；如果是对象，就展开对象的属性
//下面的代码a就是1,b就是5,c就是10,d展开是33和44, 那么33和44就是d的元素。输出结果是：选中右键Run Code
let [a,[b,...d],c] = [1,[5,33,44],10];
console.log('a:', a);
console.log('a:', b);
console.log('a:', c);
console.log('d:', d);

//7.如果解构不成功，变量的值就等于undefined,输出结果是：选中右键Run Code
let [a,b] = [10];
console.log('a:', a);
console.log('a:', b);

//8.不完全解构,输出结果是：选中右键Run Code
let [a,[b],c] = [1, [5, 33, 44], 10];
console.log('a:', a);
console.log('a:', b);
console.log('a:', c);

//9.数组的解构赋值，如果等号右边不是可以遍历的，那么将会报错  iterable  不可迭代的，不可遍历的
let [a,b] = null;
let [a,b] = undefined;
let [a,b] = {};
let [a,b] = 123;

//只要实现右边是可以遍历的（可迭代的）就OK 像数组、对象、字符串就可以
let [a,b] = 'sunday';
console.log('a:',a);
console.log('a:', b);

//10.解构赋值允许指定默认值,如果右边没有就会使用默认值
let [a = 9,b = 0, c = 3] = [1, 2];
console.log('a:', a);
console.log('a:', b);
console.log('a:', c);


//11.当一个数组的成员严格等于undefined的时候，默认值才会生效
let [a= 2, b = 9] = [undefined, 2]
console.log('a:', a);
console.log('a:', b);

//12.默认值可以引用解构赋值的其他变量，但改变量必须已经声明
let [a = 9, b = a] = [1];
console.log('a:', a);
console.log('a:', b);





/*
*箭头函数的作用是：定义匿名函数
*基本语法：
    *没有参数： () => console.log('xxxx')
    *一个参数： i => i+2
    *大于一个参数： (i,j) => i+j
    *函数体不用大括号：默认返回结果
    *函数体如果有多个语句，需要用{}来包围，如果有需要返回的内容，需要手动返回
*使用场景：多用来定义回调函数

*箭头函数的特点：
*1.简洁
*2.箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是在定义的时候所处的对象就是它的this
    *注意：这一点刚好和传统的函数相反，常规函数是谁调用它，this就指向谁
*3.扩展理解：箭头函数的this看外层是否有函数
        *如果有，外层函数的this就是内部箭头函数的this
        *如果没有，则this就是window
*/
//1.常规函数的写法
let foo = function(){
    console.log('我是箭头函数');
}

//2.使用箭头函数的写法
let foo = () => console.log('我是箭头函数');
foo();

//3.箭头左边形参的情况
//3.1没有形参的时候,()不能省略
let foo1 = () => console.log('我是没有形参的箭头函数');
foo1();

//3.2有一个形参的时候,()可以省略
let foo2 = (a) => console.log('我有一个形参a,值为',a);
foo2(10);

//3.3有两个及两个以上的形参的时候,()不能省略
let foo3 = (x,y) => console.log(x,y);
foo3(10,20);

//4.箭头右边函数体的情况
//4.1函数体只有一条语句或者是表达式的时候，{}可以省略,会自动返回语句执行的结果或者是表达式的结果
let foo4 = () => console.log('我的函数体只有一条语句');

let foo41 = (x , y) => x + y;
console.log(foo41(20,30));//50

let foo41 = (x , y) => {x + y};
console.log(foo41(20,30));//undefined

let foo41 = (x , y) => {return x + y};//手动返回
console.log(foo41(20,30));

//4.2函数体不止一条语句或者是表达式的时候,{}是不能省略的
let foo5 = (x,y) => {
    console.log(x,y);
    x + y;
}
console.log(foo5(10,20));//undefined

//因为你不手动的return的话，函数默认返回的值就是undefined,手动返回之后就不会是undefined了
let foo5 = (x,y) => {
    console.log(x,y);
    return x + y;
}
console.log(foo5(10,20));

//5.箭头函数的this
//5.1现在要看内部箭头函数的this，那么它外层函数的this就是它的this，
//它的外层是一个常规函数,谁调用它，this就指向谁，调用它的是obj这个对象，所以this就是obj对象，箭头函数的this也是obj对象
let obj = {
    name: '箭头函数',
    getName: function foo6(){
        btn1.onclick = () => {
            console.log(this);
        }
    }
}
obj.getName();

//5.2这里内部箭头函数的外层还是一个箭头函数，就看外层箭头函数的外层的this是谁，是window
//所以打印结果是window
let obj = {
    name: '箭头函数',
    getName: () => {
        btn1.onclick = () => {
            console.log(this);
        }
    }
}
obj.getName();
obj.getName = () => {}
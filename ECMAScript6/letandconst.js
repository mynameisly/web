//变量提升
{
    var a = 10;
    console.log(a);//10
}

console.log(a);//10

//在执行前会先进行变量提升，提升到全局作用域最顶层,实际执行代码如下：
var a = undefined;
{
    a = 10;
    console.log(a);
}
console.log(a);
//-------------------------------------------------------------
//函数提升
foo();
function foo(){
    console.log(a);
    var a = 99;
    console.log(a);
}

//这里的函数是先调用后声明，在执行之前会进行变量提升和函数提升，实际执行代码如下：
function foo(){
    var a = undefined;
    console.log(a);//undefined
    var a = 99;
    console.log(a);//99
}
foo();

//--------------------------------------------------------------
//用var声明的变量都可以用let来声明，我们在写代码的时候要尽量使用let来声明变量
//let声明的变量，有块级作用域，我们写的for() while() 等等这些都是块级作用域
{
    let b = 100;
    console.log(b);//100
}
console.log(b);//报错

//let声明的变量没有变量提升，而且有暂时性死区
{
    console.log(c);//报错
    let c = 'my name is lucy';
    console.log(c);
}



//--------------------------------------------------------------
for(var i = 0; i < 10; i++){
    setTimeout(()=>{
        console.log(i);//输出10个10
    },1000)
}

//闭包解决这个问题
for(var i = 0;i < 10; i++){
    //把i作为一个参数传递到前面的方法体内部
    (function(index) {
        setTimeout(()=>{
            console.log(index);
        },1000)
    })(i)
}

//使用let解决
for(let i = 0; i < 10; i++){
    //let i = 0，这里的i会增加，下面输出的i就是它，它不受外部影响
    setTimeout(()=>{
        console.log(i);//输出10个10
    },1000)
}


//let是不能重复声明的
let d = 10;
let d = '20';//SyntaxError: Identifier 'd' has already been declared




//const声明的常亮是不能修改的，而且声明的时候必须马上赋值
//const e;//SyntaxError: Missing initializer in const declaration

const e = 20;
const e = 30;//SyntaxError: Identifier 'e' has already been declared


//const也有暂时性死区
{
    console.log(f);//ReferenceError: f is not defined
    const f = 'my name is Bob';
    console.log(f);
}

//const与复杂类型
const stu = {};//要求指向的具体的内存地址不能更改
stu.age = 28;
console.log(stu);//{ age: 28 }

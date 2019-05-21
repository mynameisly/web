/*用途：
* 1.rest(可变)参数
    *用来取代arguments, 但比arguments 灵活，只能是最后部分形参参数
    function foo(...values){
        console.log(arguments);
        arguments.forEach(function (item, index){
            console.log(item, index);
        });
        console.log(values);
        values.forEach(function(item, index){
            console.log(item, index);
        })
    }
    foo(1,2,3);

    *扩展字符串
    let arr1 = [1,3,5];
    let arr2 = [2,...arr1,6];
    arr2.push(arr1);
    console.log(arr2);
*/

//1.arguments的使用,callee是arguments的属性，callee就是函数本身
//注意：在定义的时候使用...value，使用的时候直接使用value
//注意：在定义形参的时候，...value必须放在最后，不能这样写function foo(a,...value,b,c)
//注意：只能是最后部分的形参
function foo(a,...value){
    console.log(arguments);
    console.log(value);//[ 4, 10, 5 ] 发现2没了
    arguments.callee();//这句话就是指向函数本身
    value.forEach(function(item, index){
        console.log(item, index);
    })
}
foo(2,4,10,5);

//2.扩展字符串
let arr = [1, 6];
let arr2 = [2,3,4,5];
arr = [1,...arr2,6];
console.log(arr);
//自动遍历数组，并且拿到里面的值
console.log(...arr);




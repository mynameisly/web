/**1.Promise基本介绍：
 * Promise对象：代表了未来某个将要发生的事件（通常是一个异步操作）
 * 有了Promise对象，可以将异步操作以同步的流程表达出来，避免了层层嵌套的回调函数（俗称‘回调地狱’）
 * ES6的Promise是一个构造函数，用来生成promise实例
 */

 /**2.使用Promise的基本步骤：
  * 创建promise对象
  * let promise = new Promise((resolve, reject) => {
  *     //初始化promise状态为pending
  *     //执行异步操作
  *     if(异步操作成功){
  *         resolve(value);//修改promise的状态为fullfilled
  *     } else {
  *         reject(errMsg);//修改promise的状态为rejected
  *     }
  * })
  * 调用promise的then()
  * promise.then(function(
  *     result => console.log(result),
  *     errorMsg => alert(errorMsg)
  * ))
  */

/**3.promise对象的3个状态
* penging:初始化状态
* fullfilled：成功状态
* rejected:失败状态
*/

/**4.应用
 * 使用promise实现超时处理
 * 使用promise处理ajax请求
 *      let request = new XMLHttpRequest();
 *      request.onreadystatechange = function(){
 *          
 *      }
 *      request.responseType = 'json';
 *      request.open("GET", url);
 *      request.send();
 */
//.then()可以链式调用

//创建promise对象
let promise = new Promise((resolve, reject) => {
    //初始化promise状态  penging的意思是初始化
    console.log('aa');
    //执行异步操作，通常是发送ajax请求，或者开启定时器
    setTimeout(() => {
        console.log('cc');
        //根据异步任务的返回结果去修改promise的状态
        //如果异步任务成功了就修改promise的状态为fullfilled  这个状态是成功状态
        resolve('hahaha');

        //如果异步任务失败了就修改promise的状态为rejected  这个状态是失败状态
        //reject('fail');
    },3000)
})
console.log('bb');

promise.then((data) => {
    //成功的回调
    console.log(data,'成功了。。。。');
}, (error) => {
    //失败的回调
    console.log(error,'失败了。。。。');
})


//形参的默认值

function Point(x, y){
    this.x = x;
    this.y = y;
}
let point1 = new Point(20,30); 
console.log(point1);


//形参的默认值，当不传入参数的时候使用形参里的默认值
//指定当用户没有传入形参的时候，默认x = 0, y = 0.当然这里可以随便更改
function Point(x = 0, y = 0){
    this.x = x;
    this.y = y;
}
let point2 = new Point();
console.log(point2);
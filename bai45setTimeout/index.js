// setTimeOut
// clearTimeout

// setTimeout(function(), ms); // timer milliseconds  // khi goi setTimeout function ben trong khong chay ngay ma doi het khoang thoi gian ms roi moi bat dau chay

console.log("start");


setTimeout(function(){
  console.log("finish");
}, 1000)

console.log("Done");


// hoac viet ham o ngoai roi truyen vao:
/* function done() {
  console.log("Done2");
}

setTimeout(done, 1000);
 */


// ham setTimeout nat tra ve 1 cai id de trong truong hop muon huy timer nay di thi chi viec clear timeout

function done() {
  console.log("Done2");
}

var timeoutID = setTimeout(done, 2000);
console.log("Done3");
clearTimeout(timeoutID);














/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */


function done(){
  console.log('haha');
}

function doAfter(functionX, x){
  setTimeout(functionX,x)
}

doAfter(done,5000);







/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms VÀ trả về 1 promise để có thể gọi như sau
 */
let doAfter = (fn, time) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn());
    }, time)
  })
}

let sayHello = () => {
  console.log('Hello');
}

let sayGoodbye = () => {
  console.log('Goodbye');
}

doAfter(sayHello, 1000).then(sayGoodbye);
// Expect: 
// Đợi 1s
// Hello
// Goodbye
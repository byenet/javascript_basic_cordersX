// node module
// Hang tram constructor function kho quan ly phai chia nho

var Mouse = require('./mouse');


var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);



var Cat = require("./cat");

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);

console.log(tom);




























//---------------------------------------------

/**
 * 1. Require module math
 * 2. Sử dụng method `add` để tính tổng 2 số bất kì
 * 3. Log ra kết quả phép tính tổng ở trên
 */

var math = {
   add: function(a, b) {
     return a + b;
   }
 };

 module.exports = math;


var math = require("./math");

console.log(math.add(6,7))





/**
 * 1. Thêm method multiply vào module `math` nhận vào 2 số bất kì, trả về tích 2 số
 * 2. Require module math và tính tích 2 số bất kì dùng method multiply đã tạo ở trên
 * 3. Log ra kết quả
 */

var math = {
  add: function(a, b) {
    return a + b;
  },

  multiply: function(a, b) {
    return a * b;
  }
};

module.exports = math;



var math = require('./math');

console.log(math.multiply(4,5));







/**
 * 1. Thêm method `sum` cho module `math`, nhận vào 1 array các số, trả về tổng các số
 * 2. Require module math và sử dụng method sum để tính tổng 1 array các số bất kì
 * 3. Log kết quả
 */


var math = {
  add: function(a, b) {
    return a + b;
  },

  sum: function(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    }, 0);
  }
};

module.exports = math;



var math = require('./math');

console.log(math.sum([3,5,6]))




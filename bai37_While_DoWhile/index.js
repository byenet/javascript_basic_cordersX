// while, do ... while loops

// while (condition) {
  
// }

// do {
  
// } while (condition);


var i = 1;
while (i <= 10) {
  console.log(i);
  ++i
}

var i2 = 1;
do{
  console.log(i2);
  ++i2;
} while(i2 <= 10);



/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
  // viết code ở đây.
  var sum = 0;
  var i = 1;
  while(i < x){
      if(i%2 !== 0)
      sum+=i;
      ++i;
  }
  
  return sum;
} 



/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */

var i = 0;
while(i <= 1000){
  if(i%3 == 0 && i%5 == 0){
    console.log(i);
  }
  ++i;
}





/**
 * Thử chạy code sau
 */
var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');


do{
  if(result !== secretPassword)
  console.log("Wrong password! Vui lòng nhập lại!");
  var result = readline.question('Nhập vào mật khẩu: ');
}while(result !== secretPassword);

console.log("Welcome!");
/**
 * Viết đoạn chương trình yêu cầu người dùng nhập vào mật khẩu (để login vô máy tính chẳng hạn), nếu người dùng nhập sai, hiển thị ra "Wrong password", nhập đúng thì hiển thị ra "Welcome!"
 */
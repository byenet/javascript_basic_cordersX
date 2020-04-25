//Hien thi ra man hinh 0 -> 9
for (var i = 0; i < 10; i++) {
  console.log(i);
}

//Hien thi ra man hinh 9 -> 0
for (var i = 9; i >= 0; i--) {
  console.log(i);
}

// Hien thi ten nhan vien line by line
var employees = [
  { name: "Thinh", age: 28 },
  { name: "Huy", age: 22 },
  { name: "Nga", age: 21 }
];

for (i = 0; i < employees.length; i++) {
  console.log(employees[i].name);
}

/**
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
 */

var x = 5;
function isPrimeNumber(x) {
  if (x === 1) {
    return false;
  }
  if (x === 2) {
    return true;
  }
  for (var i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}

// in bang chu cai bang fromCharCode 

console.log(isPrimeNumber(x));

  var bangChuCai = "";
  for (var i = 97; i < 123; i++) {
    bangChuCai += String.fromCharCode(i);
  }
  console.log(bangChuCai);

// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */

function sumMultiplyArray(a, b) {
  // viết code ở đây.
  var sum1 = 0;
  var sum2 = 0;
  for(i=0;i<a.length;i++){
      sum1+=a[i];
  }
  for(i=0;i<b.length;i++){
      sum2+=b[i];
  }
  return sum1*sum2;
}

/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
  // viết code ở đây.
  var s = 1;
  for(var i = start; i< end; i++){
      s*=i;
  }
  return s;
}

/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
function has(array, value) {
  // viết code ở đây
  var isValue = true;
  for(var i = 0; i<array.length; i++){
      if(array[i] !== value){
          isValue = false;
      }
      else{
          isValue = true;
      }
  }
  return isValue;
}
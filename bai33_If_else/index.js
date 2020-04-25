
// if (condition) {
  
// }else{

// }


function shouldIDateHer(params) {
  var value = Math.random();
  if (value < 0.5) {
    console.log("Yes, of course");
  } else {
    console.log("No, she has a boyfriend");
  }
}

shouldIDateHer();


// Dem tien

var bills = [
  { value: 10000 },
  { value: 20000 },
  { value: 50000 },
  { value: 100000 },
  { value: 200000, fake: true },
  { value: 500000 }
];

function countBills(bills){
  var total = 0;
  for (var bill of bills){
    if (!bill.fake) {
      total += bill.value;
    } else {
      console.log("fake bilk: ", bill.value);
      break;
    }
  }
  return total;
}


var total = countBills(bills);
console.log(total);





/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
  // your code here
  var max = arr[0];
  
  arr.map(function(item,index){
      if(arr[index] > max){
          max = arr[index];
      }
  })
  
  return max;
}



/**
 * Viết hàm isTruthy nhận vào 1 giá trị x, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

// https://kipalog.com/posts/truthy-va-falsy-value-trong-Javascript---lam-sao-cho-de-nho


// Kiểu Boolean có giá trị true và false, vậy giá trị false dĩ nhiên sẽ là falsy rồi.
// Kiểu dữ liệu thứ hai là số (Number). Number thì chứa tất cả những con số, nhưng có hai giá trị đặc biệt đó là số không (0) và Not a Number (NaN), vậy 0 và NaN là falsy value.
// Kiểu dữ liệu chuỗi (String) thì mình có chuỗi rỗng (chuỗi không chứa bất kỳ một ký tự nào khác) là falsy value.
// Và còn lại 2 giá trị null và undefined cũng sẽ là falsy value.

function isTruthy(x) {
  // your code here!
  if(x){
      return true;
  }else{
      return false;
  }
}




/**
 * Viết hàm xếp hạng điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
  // your code here!
  if(score >= 0 && score < 5){
      return 'C';
  }
  else if(score >= 5 && score < 7){
      return 'B';
  }
  if(score >= 7 && score <= 10){
      return 'A';
  }
}
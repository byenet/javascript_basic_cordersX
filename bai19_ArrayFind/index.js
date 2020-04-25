/*arr.find(function(item){
    //find
    return x; // true or false
})

*/

var number = [1, 2, 3, 4];
var event = number.find(function(item) {
  console.log(item);
  return item % 2 === 0;
}); //2

console.log(event);

// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
  // your code here

  var chan = array.find(function(item) {
    return item % 2 === 0;
  });

  return chan;
}

/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example:
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

function findDivisibleNum(array, x) {
  // viết code ở đây.
  var chiaHet = array.find(function(item) {
    return item % x === 0;
  });
  return chiaHet;
}

/**
 * Phương thức find() sẽ trả về giá trị đầu tiên tìm thấy ở trong mảng được cung cấp. Hoặc có thể trả về undefined .
 */

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

/**
 * arr.find(callback(element[, index[, array]])[, thisArg])
Parameters ( thông số đầu vào )
callback
Hàm thực thi với mỗi giá trị trong mảng, chuyền vào 3 giá trị :
element
Phần tử hiện tại đang được xử lý trong mảng.
index Optional
Thứ tự của phần tử hiện tại đang được xử lý trong mảng..
array Optional
Mảng được gọi.
thisArg Optional
Đối tượng tùy chọn để sử dụng như thế này khi thực hiện callback.
Return value ( giá trị trả về )
Giá trị ( value ) của phần tử đầu tiên ( first element ) trong mảng thỏa mãn chức năng kiểm tra được cung cấp. Nếu không, sẽ trả về undefined.
 */

//  Tìm một đối tượng trong một mảng bằng một trong các thuộc tính
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 }
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

// Sử dụng arrow function ( ES2015 )
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 }
];

const result = inventory.find(fruit => fruit.name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

// Tìm số nguyên tố trong mảng
// Theo ví dụ sau đây tìm thấy một phần tử trong mảng là số nguyên tố (hoặc sẽ trả về undefined nếu trong mảng không có số nguyên tố nào).

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5

// Ví dụ sau đây cho thấy các phần tử không tồn tại và bị xóa vẫn được truy cập và giá trị được chuyển cho callback lại là giá trị của chúng khi được truy cập.

// Declare array with no element at index 2, 3 and 4
const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those that have been assigned values
array.find(function(value, index) {
  console.log("Visited index " + index + " with value " + value);
});

// Shows all indexes, including deleted
array.find(function(value, index) {
  // Delete element 5 on first iteration
  if (index == 0) {
    console.log("Deleting array[5] with value " + array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log("Visited index " + index + " with value " + value);
});
// expected output:
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6

/**
 *
 * FIND INDEX
 *
 * Phương thức findIndex() trả về chỉ số (index) của phần tử đầu tiên trong mảng thỏa mãn hàm truyền vào. Nếu không phần tử nào thỏa mãn, phương thức trả lại -1
 */

function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].findIndex(isBigEnough); // Trả về 3, phần tử thứ 4.

/**
 * Cú pháp
arr.findIndex(callback[, thisArg])
Tham số
callback
Hàm kiểm tra, được thực thi cho mỗi phần tử của mảng, có thể chứa 3 tham số:
element
Phần tử đang xét.
index
Chỉ số của phần tử đang xét.
array
Mảng được gọi.
thisArg
Optional. Object to use as this when executing callback.
Giá trị trả về
Một chỉ số của mảng nếu tìm được phần tử đầu tiên thỏa mãn hàm kiểm tra; otherwise, -1.
 */


//  Tìm chỉ số của một số nguyên tố trong mảng
// Ví dụ dưới đây tìm chỉ số của một phần tử trong mảng mà là số nguyên tố (trả về -1 nếu không tìm thấy).

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
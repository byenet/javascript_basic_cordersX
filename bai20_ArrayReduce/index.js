/**
 * Cu phap:
 * arr.reduce(function(item1, item2){
 *    //caculation
 * return x;
 * });
 */

var numbers = [1, 2, 3, 4];
var sum0 = numbers.reduce(function(item1, item2) {
  console.log(item1, item2);

  return item1 + item2;
},0);
console.log(sum0);


//gio hang
var orders = [
  { name: "A", quantity: 2, unitPrice: 100 },
  { name: "B", quantity: 1, unitPrice: 400 },
  { name: "C", quantity: 5, unitPrice: 15 }
];

var sum = orders.reduce(function(item1, item2) {
  console.log(item1, item2);
  
  return item1 + item2.unitPrice;

},0);

console.log(sum);

// Turn an array of voter objects into a count of how many people voted

var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
  // write code here...
  return arr.reduce(function(item1,item2){
    console.log (item1 , item2.voted);
     return item1 + item2.voted;
  },0)
} //7

totalVotes(voters)

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(wishlist) {
  // Write code here...
  return wishlist.reduce(function(item1, item2){
      return item1+=item2.price;
  },0)
}

// Given an array of all your wishlist items, returns an array of titles

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function arrayTitle(wishlist) {
  // Write code here...
  return wishlist.reduce(function(item1,item2){
      return item1.concat(item2.title);
  },[])
}

/**
 * Phương thức reduce() dùng để thực thi một hàm lên từng phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.
 */

 const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

/*
Cú pháp
arr.reduce(callback[, initialValue])
Các tham số
callback
Hàm dùng để thực thi với từng phần tử (element) của mảng, nhận vào 04 tham số:
accumulator
Biến tích lũy, truyền giá trị trả về của mỗi lần gọi callback; nó là giá trị tích lũy được trả về trong lần gọi callback trước, hoặc giá trị của tham số initialValue, nếu được cung cấp (xem bên dưới).
currentValue
Phần tử trong mảng hiện tại đang được xử lý.
currentIndexOptional
Chỉ mục (index) của phần tử đang được xử lý. Bắt đầu tại 0, nếu giá trị initialValue được cung cấp, và tại 1 nếu không có initialValue.
arrayOptional
Mảng đang được gọi với reduce().
initialValueOptional
Giá trị cho tham số thứ nhất (accumulator) của hàm callback trong lần gọi đầu tiên. Nếu giá trị ban đầu này không được cung cấp, phần tử đầu tiên của mảng sẽ được dùng. Do đó, gọi reduce() trên một mảng rỗng và không có giá trị ban đầu sẽ gây ra lỗi.
Giá trị trả về
Giá trị sau khi rút gọn.
*/

// Ví dụ
// Tính tổng của tất cả các phần tử của mảng
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// sum is 6

// Tương tự, nhưng viết bằng hàm arrow function

var total = [ 0, 1, 2, 3 ].reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0
);

// Tính tổng các giá trị bên trong một mảng các object
// Để tính tổng các giá trị nằm bên trong các phần tử là object, bạn phải cung cấp một giá trị ban đầu để từng phần tử đều được callback chạy qua (và accumulator luôn luôn là giá trị kiểu số):

var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6
// Tương tự, viết bằng arrow function:

var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    ,initialValue
);

console.log(sum) // logs 6


// Trải phẳng một mảng chứa nhiều mảng con
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue);
  },
  []
);
// flattened is [0, 1, 2, 3, 4, 5]
// Tương tự, viết bằng arrow function:

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
);

// Đếm số lần xuất hiện của phần tử trong mảng
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


// Nhóm các đối tượng theo giá trị property nào đó
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }


// Ghép các mảng con bên trong các object sử dụng toán tử spread và initialValue
// friends - an array of objects 
// where object field "books" - list of favorite books 
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - list which will contain all friends' books +  
// additional list contained in initialValue
var allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

// Xóa các phần tử bị trùng trong mảng
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);
console.log(result); //[1,2,3,4,5]
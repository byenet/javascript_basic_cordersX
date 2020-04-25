// map - ánh xạ ( bien doi 1 cai gi thanh cai gi moi)

/**
 * arr.map(function(item)){
 *   //transform
 *  return newValue;
 * }
 * 
 * 
 * Hay
 * 
 * var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Trả về element mới cho new_array
}[, thisArg])

Tham số
callback
Hàm để tạo ra phần tử cho mảng mới, nhận vào ba tham số:

currentValue
Giá trị của phần tử trong mảng đang được xử lý
indexOptional
Index của phần tử trong mảng đang được xử lý
arrayOptional
Mảng đang được gọi với map
thisArgOptional
Giá trị gán cho từ khóa this bên trong callback.
Giá trị trả về
Một mảng mới với phần tử là kết quả của hàm callback.
 */

 var number = [1,2,3,4];
 var squardNumbers = number.map(function(item){
    return item*item;
 });

 squardNumbers; // [1,4,9,16]

 //xử lý một mảng các object và trả về một mảng mới chứa các object đã được format lại:
 var kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{ 
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});
// reformattedArray bây giờ là: [{1: 10}, {2: 20}, {3: 30}], 

// kvArray vẫn là: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]

/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

function tripple(num) {
  // Write code here...
  return num*3;
}

function multiply(numbers) {
  // Write code here...
  return numbers.map(function(item){
  return tripple(item);
});
    
}

// Use array map make an array of strings of the names

var users = [
  {
    name: "Angelina Jolie",
    age: 80
    
  },
  {
    name: "Eric Jones",
    age: 2
    
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
    
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]

function namesOnly(arr) {
  // Write code here...
  return arr.map(function(item){
      return item.name;
  })
}

// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>

const users = [
  {
    name: "Angelina Jolie",
    age: 80
    
  },
  {
    name: "Eric Jones",
    age: 2
    
  },
  {
    name: "Paris Hilton",
    age: 5
    
  },
  {
    name: "Kayne West",
    age: 16
    
  },
  {
    name: "Bob Ziroll",
    age: 100
    
  }
]

function readyToPutInTheDOM(arr) {
  // Write code here...
  return arr.map(function(item){
      return "<h1>"+item.name+"</h1>" + "<h2>" +item.age+ "</h2>";
  })
}


// For each
/**
 * Phương thức forEach() sẽ thực thi một hàm khi duyệt qua từng phần tử của mảng.
 */
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

/**
 * Cú pháp
arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);
Parameters
callback
Hàm sẽ thực thi lên từng phần tử của mảng được gọi, hàm này nhận 3 tham số:
currentValueOptional
Giá trị của phần tử đang được duyệt.
indexOptional
Chỉ mục của phần tử đang được duyệt.
arrayOptional
Mảng mà hàm forEach() đang duyệt.
thisArg Optional
Giá trị được gán cho từ khóa this bên trong hàm callback khi được thực thi.

Giá trị trả về
undefined.
 */

//  Ví dụ
// Converting a for loop to forEach
// before

const items = ['item1', 'item2', 'item3'];
const copy = [];

for (let i=0; i<items.length; i++) {
  copy.push(items[i])
}
// after

const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function(item){
  copy.push(item)
});



// Printing the contents of an array
// The following code logs a line for each element in an array:


function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Notice that index 2 is skipped since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
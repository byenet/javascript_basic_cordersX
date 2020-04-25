/**
 * arr.filter(function(item){
 *  //filter
 * return newValue; //true or false
 * });
 * 
 * 
 * Cú pháp
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
Tham số
callback
Đây là hàm thử, dùng để kiểm tra từng phần tử của mảng.  Trả về true để giữ lại phần tử, hoặc false để loại nó ra. Nó được gọi với ba tham số:
element
Phần tử đang được xử lý trong mảng.
indexOptional
Chỉ mục (index) của phần tử đang được xử lý.
arrayOptional
Mảng nguồn mà hàm filter đang xử lý.
thisArg Optional
Không bắt buộc. Giá trị của this bên trong hàm callback.

Giá trị trả về
Một mảng mới với các phần tử đã thỏa điều kiện của hàm test. Nếu không có phần tử nào thỏa điều kiện, một mảng rỗng sẽ được trả về.
 */

var number = [1, 2, 3, 4];

var eventNumber = number.filter(function(item){
  return item%2 === 0;
});

console.log(eventNumber);


// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  // your code here
  return arr.filter(function(item){
      return item >= 5;
  })
}

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  // your code here!
  return arr.filter(function(item){
      return item%2===0;
  })
}


/**
 * Give a list of students, filter out non-female 
 * 
 * C1
 */
 
 var members = [
  	{ name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
  ];
function filterOutFemales(members) {
  // your code here!
  return members.filter(function(item){
        if(item.gender !== 'female'){
            return true;
        }else{
            return false
        }
  })
}

/**
 * Give a list of students, filter out non-female 
 */
 
 var members = [
  	{ name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
  ];
function filterOutFemales(members) {
  // your code here!
  return members.filter(function(item){
        return item.gender !== 'female';
  })
}



//---------------------------------
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//----------------------
// Lọc bỏ các giá trị nhỏ
// Ví dụ sau sẽ dùng filter() để tạo một mảng lọc không có các phần tử nào nhỏ hơn 10.

function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

//-----------------

var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  } 
  invalidEntries++;
  return false; 
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID); 
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries); 
// Number of Invalid Entries = 5

//------------------------------------------
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']


//Ví dụ ở trên với ES2015
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']

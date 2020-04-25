// filter, find, reduce, map
// array sort


//https://www.tutorialspoint.com/which-algorithm-does-the-javascript-arrayhashsort-function-use
// Which algorithm does the JavaScript Array#sort() function use?
// Javascript specification doesn't specify a particular algorithm to be used in the Array.sort implementation. This is left on the implementor to decide. So different JS engines use different sorting algorithms.

// Mozilla(Spider Monkey JS engine) uses mergeSort. You can see the code written for it in C in the Mozilla repository: https://dxr.mozilla.org/seamonkey/source/js/src/jsarray.c

// WebKit(Chrome, Safari, etc) do not directly use a sorting algorithm, instead they choose the algorithm based on element types and length of the array. For example,

// Numeric arrays use C++ Std library's quick sort function.

// Non-numeric arrays use merge sort.

// In some other cases it uses selection sort.

// It depends on the datatype and size of array elements which algorithm will be used to sort the array.




// syntax: array.sort(function(a,b) {}) -> return a sorted array


// if sort function
//  returns a value < 0
//    a will come before b
//  returns a value > 0
//    a will come after b
//  return 0
//  a and b will stay unchanged

/**
 * function compare(a, b) {
  if (a nhỏ hơn b) {
    return -1;
  }
  if (a lớn hơn b) {
    return 1;
  }
  // a bằng b
  return 0;
}
 */


// neu bo a,b trong function se so sanh theo unicode

var numbers = [2, 9, 30, 4, 1];

// [1,2,4,9,30] // ascending order
var ascendingNumbers = numbers.sort(function(a,b){
  return a - b;
});
console.log(ascendingNumbers);

// [30, 9, 4, 2, 1] // descending order
var descendingNumbers = numbers.sort(function (a, b){
  return b - a;
})
// a,b la 2 phan tu bat ky trong mang lay ra so sanh
console.log(descendingNumbers);


//VD thuc te
var employees = [
  { name: 'zeo', age: 18 },
  { name: 'Xiu', age: 20 },
  { name: 'Ti', age: 19 },
]

var sortedEmployees = employees.sort(function(a,b){
  return a.age - b.age;
})

console.log(sortedEmployees);

// sắp xếp theo name (tên)
var sortedName = employees.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
  var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // Doi dau +-1 de xet theo chieu nguoc lai
  // name trùng nhau
  return 0;
});

console.log(sortedName);


// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)

function sortNumber(arr) {
  // Write code here...
  return arr.sort(function(a,b){
      return a - b
  })
}

//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)

function sortNumber(arr) {
  // Write code here...
  return arr.sort(function(a,b){
      return b - a;
  })
}


// Sort an array from shortest string to longest

function lengthSort(arr) {
  // Write code here...
  return arr.sort(function(a,b){
      return a.length - b.length;
  })
}

// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length



// Sort an array alphabetically

function alphabetical(arr) {
  // Write code here...
  return arr.sort(function(a,b){
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
  } )
}

// Sort the objects in the array by age

var arr = [
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  }
]

function byAge(arr){
  // Write code here...
  return arr.sort(function(a,b){
      return a.age - b.age;
  })
}




/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
var students = [
  { name: 'A', score: 100 },
  { name: 'B', score: 10 },
  { name: 'C', score: 101 },
  { name: 'D', score: 50 },
  { name: 'E', score: 75 }
];

function getTopStudents(students) {
  // Write code here...
  var sorted = students.sort(function(a,b){
      return b.score - a.score;
  })
  
  var Leaderboard = sorted.slice(0,3);
  
  return Leaderboard.map(function(students) {
      return students.name;
  });
  
}
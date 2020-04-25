/**
*Part 2
 */

var numbers = [1, 2, 3, 4];
var sum0 = numbers.reduce(function(item1, item2) {
  // console.log(item1, item2);
  return item1 + item2;
},0);



// cú pháp
/**
 * arr.reduce(function(item1, item2)){
 *    caculator
 *    
 *  return x;
 * },init)
 * 
 * 
 * init sẽ được dùng trong làm biến tích lũy trong lần lặp đầu tiên (thế chỗ item1).
 * Nếu giá trị này không dc cung cấp thì sao phần tử đầu tiên của mảng sẽ dc dùng. nên khi gọi reduce() trên một mảng rỗng và không có giá trị ban đầu sẽ gây ra lỗi.
 */


var products = [
  {name: 'A', quantity: 2, unitPrice: 10},
  {name: 'B', quantity: 3, unitPrice: 20},
  {name: 'C', quantity: 4, unitPrice: 30}
]

var total = products.reduce(function(CurrentTotal, product){
  return CurrentTotal + product.quantity * product.unitPrice;
},0);

// 0 + 2 * 10  = 20
// 20 + 3 * 20 = 80
// 80 + 4 * 30 = 200



//----------------------------------------

// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

function flatten(arr) {
  // viết code ở đây.
 return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}


//---------------------------------------------
/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  // viết code ở đây.
  return arr.reduce((newObject, key) => {
   if (newObject[key]) 
      key = newObject[key]++;
   else newObject[key] = 1;
   return newObject
 },{});
}
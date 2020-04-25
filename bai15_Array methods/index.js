/**
 * Các method  của 1 array
 * 
 * a.concat(b) noi b vao sau a // method tra ve, tao ra 1 mang moi, a khong thay doi, b cung khong thay doi, co the ghep nhieu hon 2 mang voi nhau.
 * 
 * a.push(b) - Them phan tu vao cuoi mang // gia tri tra ve khong phai la mang moi ma la do dai lenght cua mang moi, log a ra thi se thay a co them 1 phan tu cuoi la b
 * 
 * a.pop() - Xoa phan tu cuoi mang // tra ve phan tu bi day ra. log mang ra de thay mang a khong con phan tu cuoi
 * 
 * a.shift(b) - Xoa phan tu dau mang // tra ve phan tu dau bi day ra, log mang ra de xem mang da bi mat di gia tri dau
 * 
 * a.unshift(b) - Them phan tu dau mang // tra ve do dai moi cua mang, log mang ra xem da them duoc phan tu b vao dau.
 * 
 * a.slice - Sao chep 1 mang // trả về một bản sao tham chiếu (shallow copy) một phần của một mảng dưới dạng một mảng nhận các giá trị có chỉ số từ begin dến end (không bao gồm end). Mảng ban đầu không bị thay đổi.
 * 
 * a.splice - xoa 1 phan tu bang chi muc cua no // tra ve mang bi xoa... Phương thức splice() thay đổi phần tử của mảng bằng cách xóa phần tử đang tồn tại và/hoặc thêm phần tử mới.
 */


 //lenght
 var a= [1,2,3];
 console.log(a.length); // do dai mang

 var b=[10,20];

 //concat
console.log(a.concat(b));
console.log(b.concat(a));
var c = a.concat(b);

// push
var d = 5;
console.log(a.push(d)); // tra ve lenght a chu khong tra ve mot mang moi
console.log(a);

//pop
console.log(a.pop()); // tra ve phan tu cuoi bi day ra
console.log(a);

//shift 
console.log(a.shift()); // tra ve phan tu dau bi day ra
console.log(a);

// unshift
console.log(a.unshift(100));
console.log(a);

// slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]


// splice
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // chèn 'drum' vào vị trí 2
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // xóa 1 phần tử từ vị trí 2
// myFish is ["angel", "clown","mandarin", "sturgeon"]



/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
  // your code here!
  arr.splice(arr.length - n); // xoa moi phan tu sau vi tri do
  return arr;
}

/** 
 * Write a JavaScript function to get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array. 
*/

function first(arr, n) {
  // your code here...
  return arr.slice(0,n);
}

// console.log(first([1, 2, 3], 2)); // expect [1, 2]




 
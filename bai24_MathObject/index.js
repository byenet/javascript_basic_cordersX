// Math object in js
// Math.PI
// Math.celi(number)
// Math.floor(number)
// Math.max(x1,x2,...)
// Math.min(x1,x2,...)
// math.random()
// Key word for google search: Mozilla Math object


// Math.PI

function discAreo(r){
  return r * r * Math.PI;
}

var s = discAreo(5);

console.log(s);

console.log(Math.PI);


// Math.celi(number)
console.log(Math.ceil(9.2));

// Math.floor(number)
console.log(Math.floor(9.8));
//VD: lam tron so tien gio hang

// Max
console.log(Math.max(10,20,-1));

// Min
console.log(Math.min(10.20, -1));
//VD: Tim so lon nhat, nho nhat trong mang

// random (tra ve 1 so ngau nhien nam trong khoang tu 0 -> 1)

console.log('Random: ',Math.random());
// VD tung dong xu khong biet khi nao sap ngua, muon cho dong xu co sap ngua co ty le nhu nhau

function tossACoin(){
  var random = Math.random();
  return random > 0.5;
}

console.log('Mat sap: ', tossACoin());







// ----------------------------------------------------------------------------

// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

// function powerup(arr) {
//   for( var i =0; i<= arr.length ;i++){
//       if(arr[i] % 2 === 0){
//         arr[i] *= arr[i];
//       }
//   }
//   return arr;
// }

var arrs = [10,5,6,7];

function powerup(arr) {
  // your code here!
  arr.map(function(item, index){
      if(item%2 === 0){
          arr[index] = Math.pow(item,2);
      }
  })
  return arr;
}
console.log(powerup(arrs));




/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

function average(arr) {
  // your code here!
  var count = 0;
  var sum = arr.reduce(function(a,b){
      count++;
      return a+b;
  },0);
  
  return Math.round(sum/count);
}



/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  // your code here
  arr.map(function(item, index){
      arr[index] = Math.abs(item);
  })
  
  return arr;
}




// Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100

function random() {
  // your code here!
  return Math.random() * 100
}

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }




/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
  // your code here
    var check = true;
    if(a===0,b===0,c===0){
      check = false;
    }
    else if(Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)||Math.pow(a,2)+Math.pow(c,2)===Math.pow(b,2)||Math.pow(b,2)+Math.pow(c,2)===Math.pow(a,2)){
        check = true;
    }
else{
        check = false;
    }
    return check;
}



/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/


const PI = 3.14;

function circumferenceOfCircle(r) {
  // your code here!
  return 2*r*PI;
}
function acreageOfCircle(r) {
  //your code here!
  return Math.pow(r,2)*PI;
}




/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

function trigonim(number) {
  // your code here
  var arr = [];
  arr[0] = Math.sin(number).toFixed(3); 
  arr[1] = Math.cos(number).toFixed(3);
  arr[2] = Math.tan(number).toFixed(3);
  
  return arr;
}


// Các cách làm tròn js
// Rounding Decimals in JavaScript
/* http://www.jacklmoore.com/notes/rounding-in-javascript/ */
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

/* http://stackoverflow.com/a/11832950 */
Math.round(num * 100) / 100;

/* http://stackoverflow.com/a/12830454 */
parseFloat("123.456").toFixed(2);


// setInterval
// clearInterval

// Khong khac gi cach dung setTime out may.

// setInterval(fn,ms)
// setInterval se thuc hien ham fn lien tuc cu sau khoang ms  (lap di lap lai);

var i = 0;
var intervalID  = setInterval(function(){
  ++i;
  console.log(i);
  if( i === 10){
    clearInterval(intervalID);
  }
}, 1000);









/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */


function countDown(x) {
  var intervalID = setInterval(function(){
    console.log(x);
    --x;
    if( x < 0){
      clearInterval(intervalID);
      console.log('Happy new year');
    }
  },1000)
}

countDown(5);





/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
  return promise = new Promise(function(resolve,reject){
    var intervalID = setInterval(function(){
      console.log(x);
      --x;
      if(x < 0) {
        clearInterval(intervalID);
        resolve();
      }
    },1000)

  })
}

function sayHappyNewYear() {
  console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);
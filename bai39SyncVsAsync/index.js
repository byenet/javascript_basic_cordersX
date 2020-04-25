// Sync vs Async (Synchoronous vs Asynchronous)

var fs = require('fs');

console.log('Start');

var song1 = fs.readFileSync('song1.txt', { encoding: 'utf8'});
// readFileSync no doi thuc hien xong thi no moi qua cai tiep theo
console.log(song1);
var song2 = fs.readFileSync("song2.txt", {encoding: "utf8"});
console.log(song2);

console.log("end");


// Make coffee -> 5 minutes // cu de no day lam nhung viec khac
// Wear clothes
// Making bed

// Sync
// ||==================||=====================||==================||==>
// Make coffee       Coffee done           wear done           all done
//                   Wear clothes          Make bed


// ASync
// ||=============||=========||==========||==>
//Make coffee Wear clothes Make bed    all done
//  -----> Tiet kiem duoc thoi gian cho, toi uu hieu suat

// Ham readFile
// macOS, Linux, and Windows
// fs.readFile('<directory>', (err, data) => {
  // => [Error: EISDIR: illegal operation on a directory, read <directory>]
// });

//  FreeBSD
// fs.readFile('<directory>', (err, data) => {
  // => null, <data>
// });


console.log('Start');
//Bat dau doc file nhu bat dau pha coffee
fs.readFile('song1.txt', {encoding: 'utf8'}, function(err, data){
    console.log(song1);
})
console.log('End');

// Read/Write to FileSystem
// Network (Lay truyen du lieu len server)








/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request) để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 * 
 * Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link. Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */

const request = require('request');
var url = "https://randomuser.me/api/";

console.time("Time this");
function getData() {
  return request(url, function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  })
}
getData();
console.timeEnd("Time this");


//----------------------------------------------------------------------------------






/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

const axios = require('axios');


  
  // axios({
  //          method: "GET",
  //          url:
  //           "https://jsonplaceholder.typicode.com/todos/1"
  //        })
  //        .then(function (response) {
  //           console.log(response.data);
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });

  // axios({
  //          method: "GET",
  //          url:
  //           "https://jsonplaceholder.typicode.com/todos/2"
  //        })
  //        .then(function (response) {
  //           console.log(response.data);
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });

      
function getUser1() {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

function getUser2() {
  return axios.get('https://jsonplaceholder.typicode.com/todos/2');
}

axios.all([getUser1(), getUser2()])
.then(axios.spread(function (user1, user2) {
  // Tất cả request đều đã được thực hiện xong
  console.log(user1.data);
  console.log(user2.data);
}));

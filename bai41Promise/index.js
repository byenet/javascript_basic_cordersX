// Promise
// VD 1 module su dung Promise: npm i --save promise-fs




// var fs = require('promise-fs');

/*
fs.readFile('song1.txt', {encoding: 'utf8'}) // readfile tra ve 1 promise, promise duoc tao ra do co 2 method chinh la then va catch
    .then(function(song1){
        console.log(song1);
    })
    .then(function(){
        return fs.readFile('song2.txt', {encoding: 'utf8'})
    })
    .then(function(song2){
        console.log(song2);
    })
    .catch(function(error){
        console.log(error);
    })

// console.log('huy');

*/



// function onDone(song) {
//   console.log(song);
// }

// function onError(error){
//     console.log(error);
// }

// function readFile(path){
//     return fs.readFile(path,{encoding: 'utf8'});
// }

// readFile("song1.txt")
//   .then(onDone)
//   .then(function() {
//     return readFile("song2.txt");
//   })
//   .then(onDone)
//   .catch(onError);



var fs = require('fs');

function readFilePromise(path){
    return new Promise(function (resolve, reject){
        fs.readFile(path, {encoding: 'utf8'}, function(err, data){
            if(err){
                reject(err); // nhung gi la loi thi truyen vao reject
            }else{
                resolve(data); // nhung gi la data tra ve thi truyen vao resolve
            }
        })
    })
}


readFilePromise('song1.txt')
    .then(function(song1){
        console.log(song1);
    })
    .catch(function (error){
        console.log(error);
    })
    







    

var request = require('request');

/**
 * Module `request` dùng để tải về 1 đường dẫn nào đó. Hãy thử chạy code để xem cách hoạt động
 */
console.log('Start fetching...');

request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
  if (error !== null) {
    console.log('error:', error); // Print the error
  }
  console.log('Done:', body);
});

console.log('Nothing');

/**
 * Viết function `load` nhận vào 1 tham số là 1 đường link dạng string, trả về 1 promise sao cho khi gọi:
 * load('some url').then(function(body) {
 *   console.log('Done', body);
 * });
 * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link đã truyền vào.
 * Sau 30' không làm được thì có thể lên Slack hỏi
 */



function load(path) {
  return new Promise(function(resolve, reject) {
    return request(path, function(err, response, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

load("https://jsonplaceholder.typicode.com/todos/1").then(function(body) {
  console.log("Done", body);
});
// Promise.all


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

// Lam nhu bai truoc quan tam den thu tu
// readFilePromise("./song1.txt")
//   .then(function(song1) {
//     console.log(song1);
//     return readFilePromise("./song2.txt");
//   })
//   .then(function(song2) {
//     console.log(song2);
//     return readFilePromise("./song3.txt");
//   })
//   .then(function(song3){
//     console.log(song3);
//   })
  
// trong truong hop khong de y no doc theo thu tu nao

Promise.all([ // tra ve dung chi 1 promise
  readFilePromise("./song1.txt"),
  readFilePromise("./song2.txt"),
  readFilePromise("./song3.txt")
]).then(function(values){  // then duoc goi khi dong thoi ca 3 promise duoc resolve
  console.log(values);
}).catch(function(err){
  console.log(err);
})





/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

const axios = require('axios');

// Promise.all([
//   axios.get('https://jsonplaceholder.typicode.com/todos/1'),
//   axios.get('https://jsonplaceholder.typicode.com/todos/2'),
//   axios.get('https://jsonplaceholder.typicode.com/todos/3')
// ]).then(function(values){
//   console.log(values);
// }).catch(function(err){
//   console.log(err);
// })


Promise.all([
  axios.get('https://jsonplaceholder.typicode.com/todos/1'),
  axios.get('https://jsonplaceholder.typicode.com/todos/2'),
  axios.get('https://jsonplaceholder.typicode.com/todos/3')
]).then(function(values){
  values.map(function(item){
    console.log(item.data);
  })
}).catch(function(err){
  console.log(err);
})
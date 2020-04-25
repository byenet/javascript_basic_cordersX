// Node co // 1 module duoc phat trien boi ben thu 3 - Ho tro don gian Hoa lap trinh khong dong bo, mot cach viet dep hon, sang sua hon

// npm i co --s

var fs = require("fs");
var co = require("co");

function readFilePromise(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, { encoding: "utf8" }, function(err, data) {
      if (err) {
        reject(err); // nhung gi la loi thi truyen vao reject
      } else {
        resolve(data); // nhung gi la data tra ve thi truyen vao resolve
      }
    });
  });
}

// Cach dung 1
co(function*() {
  //generator function

  // cach 1 dung yield tung dong
  /* var song1 = yield readFilePromise('./song1.txt');
    var song2 = yield readFilePromise('./song2.txt')
    var song3 = yield readFilePromise('./song3.txt') */

  // console.log(song1,song2,song3);

  // co the ngung tai day

  // tra ve 1 promise

  /* return [song1, song2, song3]; */

  // cach 2 yield theo 3 cai lun (yield array)

  var values = yield [
    readFilePromise("./song1.txt"),
    readFilePromise("./song2.txt"),
    readFilePromise("./song3.txt")
  ];
  return values;
})
  .then(function(values) {
    console.log(values);
  })
  .catch(function(err) {
    console.log(err);
  });

// Cach dung 2
// co co 1 method la wrap de trong truong hop muon khai bao cai tren nhu mot cai ham (tra ve 1 ham)

// var readFile = co.wrap(function*(files) {});

var readFile = co.wrap(function*(files) {
  // [String] --> [Promise]
  var values = yield files.map(function(files) {
    return readFilePromise(files);
  });

  return values;
});

readFile(["song1.txt", "song2.txt", "song3.txt"])
  .then(function(values) {
    console.log(values);
  })
  .catch(function(err) {
    console.log(err);
  });








  
/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */

const axios = require("axios");
const co = require("co");

var urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5"
];

// Cách 1: Sử dụng vòng lặp for

// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise

function readFileAxios(path) {
  return axios
    .get(path)
    .then(function(values) {
      console.log(values.data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

var readFiles = co.wrap(function*(files) {
  var values = yield files.map(function(file) {
    return readFileAxios(file);
  });
  return values;
});

readFiles(urls);

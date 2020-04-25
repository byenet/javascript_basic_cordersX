// async await (Node >= 7.6)

var fs = require("fs");


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


async function run(){
  var song1 = await readFilePromise('./song1.txt');
  var song2 = await readFilePromise("./song2.txt");
  var song3 = await readFilePromise("./song3.txt"); 

  console.log(song1,song2, song3);
  return [song1, song2, song3];
}


run().then(function(values){  // async wait tra ve 1 promise
  console.log(values);
}).catch(function(err){
  console.log(err);
})


















var fs = require("fs");
var axios = require("axios");

fs.readFile("./data.json", { encoding: "utf8" }, function(err, data) {
  console.log("Data loaded from disk", data);

  axios.get("https://jsonplaceholder.typicode.com/todos/1").then(function(res) {
    console.log("Data downloaded from url", res.data);
  });
});

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */

function getAxios(path) {
  return axios.get(path);
}

function readFiles(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, { encoding: "utf8" }, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function getData() {
  await readFiles("./data.json")
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });

  await getAxios("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(data) {
      console.log(data.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

getData();




















const axios = require("axios");

// Giải thích điểm khác nhau giữa 1 và 2:
// 1.
async function fetchUrls(urls) {
  const results = [];
  for (const url of urls) {
    const res = await axios.get(url);
    results.push(res);
  }
  return results;
}

// 2.
async function fetchUrlsParallel(urls) {
  const results = await Promise.all(
    urls.map(function(url) {
      return axios.get(url);
    })
  );
  return results;
}

// Chạy thử 2 hàm trên với đầu vào dưới đây và so sánh tốc độ
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3"
];

fetchUrls(urls).then(() => console.log("Done"));
fetchUrlsParallel(urls).then(() => console.log("Done 2"));
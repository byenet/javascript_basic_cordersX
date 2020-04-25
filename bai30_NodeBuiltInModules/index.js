// File system: https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
// gioi thieu 2 method:
// fs.readFileSync(path[,options])
// fs.writeFileSync(file, data[, option])


// fs.readFileSync(path[,options])
var fs = require('fs');

var text = fs.readFileSync('./song.txt', { encoding: 'utf8' });
console.log(text);


// fs.writeFileSync(file, data[, option])

fs.writeFileSync('./song_2.txt','I am coder');









//---------------------------------------------------




/**
 * 1. Require module `path` (built-in sẵn trong node)
 * 2. Sử dụng method extname để tìm extension (đuôi) của một đường dẫn (path) tới file nào đó.
 * Tra cứu: https://nodejs.org/dist/latest-v8.x/docs/api/path.html#path_path_extname_path
 * 
 * 
 *  https://viblo.asia/p/imports-va-exports-trong-javascript-es6-6J3ZgjyAKmB
 */

// require module here!
var path = require('path');

function getExtension(fileName) {
  // your code here!
  return path.extname(fileName);
}
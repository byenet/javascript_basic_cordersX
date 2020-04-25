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
fs.readFile('song1.txt', {encoding: 'utf8'}, function(err, data1){
    console.log(data1);
})

fs.readFile('song2.txt', {encoding: 'utf8'}, function(err, data2){
    console.log(data2);
})
console.log('End');

// Read/Write to FileSystem
// Network (Lay truyen du lieu len server)







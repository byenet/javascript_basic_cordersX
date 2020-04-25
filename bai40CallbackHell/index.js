// Callback hell


// Muon goi 3 bai hat don gian dong bo: 
// var fs = require('fs');
// var song1 = fs.readFileSync('song1.txt', { encoding: "utf8"});
// var song2 = fs.readFileSync('song2.txt', {encoding: 'utf8'});
// var song3 = fs.readFileSync("song3.txt", { encoding: "utf8" });

// console.log(song1);
// console.log(song2);
// console.log(song3);
// console.log("Huy");


// Muon goi 3 bai hat bat dong bo
var fs = require('fs');

// fs.readFile('./song1.txt', { encoding: 'utf8'}, function(err, song1){
//   console.log(song1);
//   //Ham nay chay sau khi file nay roi
// });

// fs.readFile("./song2.txt", { encoding: "utf8" }, function(err, song2) {
//   console.log(song2);
//   //Ham nay chay sau khi file nay roi
// });

// fs.readFile("./song3.txt", { encoding: "utf8" }, function(err, song3) {
//   console.log(song3);
//   //Ham nay, chay sau khi file nay roi
// });


fs.readFile("./song1.txt", { encoding: "utf8" }, function(err, song1) {
  console.log(song1);
  //Ham nay chay sau khi file nay roi
  fs.readFile("./song2.txt", { encoding: 'utf8'}, function(err2, song2){
    console.log(song2);
    fs.readFile("./song3.txt", { encoding: "utf8" }, function(err3, song3) {
      console.log(song3);
    });
  })
});






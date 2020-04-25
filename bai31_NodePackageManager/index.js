// npm
// co nhung module mk tu tao cung co nhieu module cua cong dong phat trien ta chi dung laibundleRenderer.renderToStream
// khi cai nodejs thì co 2 phan dc cai 1 la node 2 la npm, no di cung nhau nen luc cai se tu dong cai lun 2 cai.

// VD 1 module do cong dong phat trien la: readline-sync
// https://www.npmjs.com/package/readline-sync
// vi no o ben ngoai nen phai cai no bang npm.
// Khi bat tao 1 project ta dung npm init (khoi tao).
// Bat dau cai module: npm install readline-sync --save
// dat ten bien de require theo cameCase(nhu bua h:)) )

var readlineSync = require("readline-sync");

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var pet = {};

var name = readlineSync.question('your pet name: ');
var gender = readlineSync.question('pet gender (Male/Female): ');
var weight = readlineSync.question('Weight?: ');

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);

console.log(pet);





/**
 * 1. Check file package.json bạn sẽ thấy module password-generator nằm trong danh sách dependencies
 * 2. Đọc cách dùng module này dưới đây
 * https://www.npmjs.com/package/password-generator
 * 3. Tìm hiểu cách require một 3rd-party module trên repl.it: https://repl.it/site/blog/npm
 * 4. Require module này và tạo ra 1 password ngẫu nhiên có 8 ký tự, dạng dễ nhớ
 */
// npm install password-generator -g
// npm install password-generator -save

 var generatePassword = require("password-generator");
 var password = generatePassword(8, false);

 console.log(password);
 




 /**
 * 1. Sử dụng module `markdown` (https://www.npmjs.com/package/markdown) để chuyển đổi đoạn text (viết bằng markdown) sau sang html
 * 2. Tìm hiểu xem markdown là cái gì (dev nên biết về markdown)
 */

var markdown = require("markdown").markdown;

var markdownText = "Hello *Coders.Tokyo*!";



/**
 * 1. Sử dụng module `markdown` (https://www.npmjs.com/package/markdown) để chuyển đổi đoạn text (viết bằng markdown) sau sang html
 * 2. Tìm hiểu xem markdown là cái gì (dev nên biết về markdown)
 */

var markdown = require( "markdown" ).markdown;
var markdownText = 'Hello *Coders.Tokyo*!';
console.log(markdown.toHTML(markdownText));


/**
 * https://github.com/sindresorhus/awesome-nodejs
 * Đây là một trang tổng hợp nhiều node module rất hay (không phải là tất cả)
 * Hãy thử học cách dùng 1 module mà bạn hiểu, tạo 1 ví dụ và giải thích về nó.
 * Sau này bạn sẽ cần phải google rất nhiều, học cách đọc tài liệu sẽ giúp cho công việc của bạn trong tương lai.
 */




/**
 * https://github.com/sindresorhus/awesome-nodejs
 * Đây là một trang tổng hợp nhiều node module rất hay (không phải là tất cả)
 * Hãy thử học cách dùng 1 module mà bạn hiểu, tạo 1 ví dụ và giải thích về nó.
 * Sau này bạn sẽ cần phải google rất nhiều, học cách đọc tài liệu sẽ giúp cho công việc của bạn trong tương lai.
 */
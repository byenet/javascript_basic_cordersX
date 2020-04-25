// Date - tim hieu object Date cach xu ly ngay thang 
// moment.js - mot module

var now = new Date();
var myBirthday = new Date(1998, 0, 12); // 12/1/1998  // thang bat dau tu 0;

// Date luu tru number of milliseconds 1-1-1970 timezone: 0; (o viet nam la +7);
console.log(now.getTime());        // 1582759352615 // log ra gia tri milliseconds tinh tu ngay 1/1/1970 // neu chay lai now se thay doi vi now lay thoi gian hien tai nen tgian luon thay doi.
console.log(myBirthday.getTime()); // 884538000000

console.log(now.getFullYear());  // lay nam
console.log(now.getDate());       // lay ngay 1-31
console.log(now.getMonth() + 1);  // lay thang 0-11
console.log(now.getDay());        // lay vi tri ngay trong tuan 0-6 la so may (Tinh 0 tu ngay chu nhat)
console.log(now.getHours());  // lay gio 0-23
console.log(now.getMinutes()); // lay phut 0-59
console.log(now.getSeconds()); // lay giay 0-59



// tim hieu medule momentjs
// npm i moment --s
console.log("-----------------------------------------------");
var moment2 = require("moment");

// khoi tao 1 moment object
// var now2 = moment2();
// console.log(now2);

// no co rat nhieu method tra cuu tren https://momentjs.com/docs/, https://viblo.asia/p/gioi-thieu-ve-momentjs-63vKjnwAK2R

var now3 = moment2('2020-01-27 07:00'); //tinh thoi gian ke tu bay gio đến 'xxx' xem la bao lau ve truoc hay bao lau nua toi (trong cac ung dung tin nhan phan binh luan facebook)
console.log(now3.fromNow());
console.log(now3.format('YYYY/MM/DD'));

//nen doc them --> dung mudule nay rat nhieu













/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
  // Write code here...
  var date = new Date(dateString);
  if(date.getDay() === 0 || date.getDay() === 6){
      return true;
  }
    return false;
}


console.log(isWeekend('2019/02/27'))
console.log(isWeekend('2019/10/27'));





/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
var fromDate = new Date('2019/9/17');
var toDate = new Date('2019/10/21');
 
function diff(fromDate, toDate) {
  // Write code here...
  return (toDate.getTime() - fromDate.getTime())/(24*3600*1000)
}





/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {
  // Write code here...
  return date.getTime() - n*24*60*60*1000 // 24h, 60p, 60s, 1000mllis
}





/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
 // viết code ở đây
 return (new Date(b)).getTime()-(new Date(a)).getTime();
}











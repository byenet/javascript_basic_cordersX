//  > < >= <= === !== (Bài khác: == !=)

var a = 5;
var b = 5;

console.log(5 === 5);
console.log(a === b);
console.log(a >= b);
console.log(a !== b);
console.log(a > b);

var b = 10 !== 100; // => a = true
'c' === 'c';

var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.

var a = {
  foo: 'bar'
};

var b = {
  foo: 'bar'
};

console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.

var a = '1000';
var b = '200';

console.log(a > b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200. Viết câu trả lời ở dưới đây.
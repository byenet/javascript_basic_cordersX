/**
 * Arthmetic Operators
 * Các phép toán số học trong lập trình
 * 1. ++ -- (increment decrement)
 * 2. * / %
 * 3. + -
 */

 var a = 1;
 var b = 1;
 console.log(a++); // thay doi gia tri nhung tra ve gia tri truoc khi thay doi
 console.log(++b); // thay doi gia tri ngay luc goi va tr ve gia tri do
 
var a = 5;
    a++ + ++a;
//  5   + ++a; // a = 6
//  5   +   7
// 12

var a = 5
    a++ + ++a - --a + a--;
//  5   + ++a - --a + a-- // a = 6
//  5   +   7 - --a + a-- // a = 7
//  5   +   7 -   6 + a-- // a = 6
//  5    +  7 -   6 + 6   // a = 5
// 12

var a = 5;
var b = 10;

    a++ * b-- + --a * ++b; // a = 5, b = 10
//  5   * b-- + --a * ++b  // a = 6, b = 10
//  5   * 10  + --a * ++b  // a = 6, b = 9
//  5   * 10  +   5 *   10 // a = 5, b = 10
// 100 

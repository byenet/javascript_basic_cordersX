// scope
// 1. Global scope // Bien khai bao trong ham
// 2. Local scope  // Ben trong 1 ham

// when a function is executed -> create a new scope

// function callByValue(varOne, varTwo) {
//   console.log("Inside Call by Value Method");
//   varOne = 100;
//   varTwo = 200;
//   console.log("varOne =" + varOne + "varTwo =" + varTwo);
// }
// var varOne = 10;
// var varTwo = 20;
// console.log("Before Call by Value Method");
// console.log("varOne =" + varOne + "varTwo =" + varTwo);
// callByValue(varOne, varTwo);
// console.log("After Call by Value Method");
// console.log("varOne =" + varOne + "varTwo =" + varTwo); 





// console.log(b); bi loi vi no khong hieu b (scope giong nhu trong java va c++)

//viblo.asia/p/hoisting-javascript-WAyK8RmmlxX
//https://developer.mozilla.org/vi/docs/Tu-dien-thuat-ngu/Hoisting


function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tigger");








// var a = 1;

// var b = {
//   a: 2,
//   foo: function() {
//     console.log(this.a);
//   }
// };

// b.foo();

// var fooCopy = b.foo;
// fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13
// từ khóa this trong foo() của object b truy xuất đến property a nằm trong object b
// Còn fooCopy thì chỉ copy method foo() của b, this.a lúc này sẽ truy xuất đến a ở line 1

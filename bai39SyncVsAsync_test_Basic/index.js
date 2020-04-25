// console.log('this is the frisrt line');
// console.log('this is the second line');
// console.log('this is the last line');


//-----------------------------------------------


// console.log("this is the frisrt line");

// setTimeout(function() {
//   console.log("this is the second line");
// }, 2000);

// setTimeout(function() {
//   console.log("this is the third line");
// }, 1500);

// setTimeout(function() {
//   console.log("this is the forth line");
// }, 1000);


// console.log("this is the last time");


//--------------------------------------------------

function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
  foo();
}

function baz() {
  console.log("baz");
}


////Execute function to test Messages queue & call stack
bar();
baz();



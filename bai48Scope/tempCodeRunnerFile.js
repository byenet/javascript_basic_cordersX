
var a = 1; // global scope


function random(c){
  var b = Math.random();  // local scope
  a = c; // khong nen de pham vi hoat dong cua bien lon qua nen giu toi thieu
  console.log(b);
  console.log(a + ' trong');
}

random(500);
console.log(a);

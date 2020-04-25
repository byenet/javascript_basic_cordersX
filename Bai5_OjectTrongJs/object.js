/* Khai bao 
var object = {
    key : value
};
*/

var myDog = {
    name: 'Lợn',
    weight: 5.2,
    isAlive: false
};

console.log(myDog);
console.log(myDog.name);
console.log(myDog.weight);
myDog.weight = 10;
console.log(myDog.weight);

// myDog.name
console.log(myDog['name']);
myDog['isAlive'] = true;
console.log(myDog);



var myBestFriend = {
    nickName: 'Chó',
    age: 21,
    gender: 'male'
};

// Quy tac dat ten bien: camelCase

//object khong co thuoc tinh gi
var a = {};
console.log(a);


/* Bai tap */
/**
 * Sử dụng kiến thức đã học khai báo object person gồm các property name, age, gender. 
 * Ví dụ:
 *  var person = {
 *    name: 'Pham Thinh',
 *    age: 25,
 *    gender: 'male'
 *  };
 */

var person = {
    name: 'Huy',
    age: 21,
    gender: 'male'
}
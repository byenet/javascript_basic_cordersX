// Object methods
// các phương thức của object

var myDog = {
  weight: 5,
  name: 'Đần',
  age: 1,

  bark: function(){ // anonymous function
    console.log('Meo Meo, my name is', this.name);
  },

  eat: function(bone){
    this.weight += bone.weight;
    return this;
  }
};


console.log(myDog);
console.log(myDog.name);
console.log(myDog.bark()); // function này khong return gì cả (có return undifined) 

var bone = { weight: 0.5};
console.log('Before eating',myDog.weight);
myDog.eat(bone);
console.log('After eating', myDog.weight);



/**
 * Khai báo biến rectangle là 1 object gồm có các property:
 * - width: chiều rộng
 * - height: chiều dài
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều dài
 * - getArea: trả về diện tích
 */
 
 var rectangle = {
   width: 5,
   height: 6,
   getWidth: function(){
     return this.width;  
   },
   getHeight: function(){
       return this.height;
   },
   getArea: function(){
       return this.width*this.height;
   }
   
 }

// Create a new object, object literal

//cach moi
// constructor function
function Mouse(color, weight){
  this.type = 'mouse';
  this.color = color;
  this.weight = weight;

  // this.sleep = function(){
  //   console.log('Sleeping...');
  // }
}
// tao ra 1 object tu constructor function
var mouse1 = new Mouse('white', 0.5);
console.log(mouse1);
console.log(Mouse.prototype.constructor === Mouse);


Mouse.prototype.sleep = function(){
  console.log(this.color + ' Sleeping...');
};

var mitkey = new Mouse('black', 30) 
var jerry = new Mouse('orange', 20 )
console.log(jerry);

console.log(jerry.sleep());
console.log(mitkey.sleep());

console.log(jerry.sleep === mitkey.sleep);
// tiet kiem bo nho vi chia se

// Best practive



/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

function Student(name, level) {
    this.name = name;
    this.level = level;
}

Student.prototype.school = "CodersX"

var s1 = new Student('huy', 26);

console.log(s1);

console.log(s1.school);



/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/

function Student(diemToan, diemLy, diemHoa) {
  this.diemHoa = diemHoa;
  this.diemLy = diemLy;
  this.diemToan = diemToan;
}

Student.prototype.average = function() 
{
    return Number(((this.diemHoa + this.diemLy + this.diemToan) / 3).toFixed(0));
};

var student1 = new Student(6, 7, 7);
var student2 = new Student(8, 9, 6);

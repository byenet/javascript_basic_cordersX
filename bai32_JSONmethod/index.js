//JSON object
// 1. stringify - Convert an object to a JSON string
// 2. parse - Convert a JSON string to an object


// 1.
var myDog = { 
    name: 'Milu',
    age: 1,
    dead: false
}
console.log(myDog);
console.log(typeof myDog);


var myDogString = JSON.stringify(myDog);
console.log(myDogString);
console.log(typeof(myDogString));

//2.

var myCatString = '{"name": "Tom", "age" : 2, "dead" : true }'
console.log(myCatString.name);

var myCat = JSON.parse(myCatString);
console.log(myCat.name);
console.log(myCat);











//----------------------------------------------

/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */

//1.
var fs = require('fs');

var data = fs.readFileSync("./data.json", "utf8" );
console.log(data);

// 2.
data = JSON.parse(data);
console.log(data);

//3. 
console.log(data.name);

//4
var members = [
    {
        name: 'Huy',
        age: 21,
        gender: 'male'
    }
]

data.members = members;
console.log(data);

//5.
data = JSON.stringify(data);
console.log(data);

fs.writeFileSync('./data.json', data)



// Terms: Array, element, index, length
// Khai bao: var name = [e1, e2, e3]; index bat dau tu 0, length = 3

// Khai bao 1 dan cho
var dog1 = {
    type: 'cho ta'
};

var dog2 = {
    type: 'lap xuong'
};

var dog3 = {
    name: 'Đần',
    type: 'husky'
};

var bunchOfDog = [dog1, dog2, dog3];

console.log(bunchOfDog);
console.log(bunchOfDog[2]);
console.log(bunchOfDog[2].name);

var dog4 = {
    type: 'shiba'
};

bunchOfDog[0] = dog4;
console.log(bunchOfDog);

var contacts = [
    {name: 'nga', phone: '123456789'},
    {name: 'kha', phone: '123456789'},
    {name: 'hung', phone: '123456789'},
]

console.log(contacts);

/*
Khai báo một array "listAnimal" chứa các object mô tả danh sách các con vật.
Mỗi con vật có 2 thuộc tính: name và age trong đó name có kiểu string, age có kiểu number.
 * {name}: string;
 * {age}: number;
*/
var listAnimal = [
        {name:'cho', age:10},
        {name:'bo', age:20}
    ];
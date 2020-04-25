//other For loops
//1. for ...of
//2. for ...in

var employees = [
  { name: 'Huy', age: 28},
  { name: 'Huy2', age: 27},
  { name: 'Huy3', age: 26},
];

// for in lap qua cac phan tu trong mang

//hien thi ten nhan vien tung dong 1:
for (var employee of employees){  // employee dai dien cho moi phan tu cua mang object qua moi lan lap
  console.log(employee.name,employee.age);
}

// dung for of ta kho the biet duoc chi so lap (index) hien tai cua phan tu (bat loi) neu muon dem phai khai bao 1 bien phu o ngoai;

//VD thuc te:
var content= '';
for (var employee of employees){ 
  content+='<li>' + employee.name + '</li>'
}

document.getElementById('contact-list').innerHTML = content;

// for in //lap qua cac key trong 1 object

var myDog = {
  name: "Đần",
  age:1,
  weight: 5
};


// truy xuat myDog.key thi bang myDog['name'] = Đần
for (var key in myDog){
  console.log(key, myDog[key]);
}



/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
 
function multiply(arr) {
  // Write code here...
  var s=1;
  for(var tich of arr){
      s*=tich;
  }
  return s;
}


/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */
 
 function has(object, key) {
   for (var key1 in object){
       if (key1 !== key){
           return false;
       }else{
           return true;
       }
   }
 }


 /**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
 
function sum(numbers) {
   // Write code here...
   s = 0;
   if(numbers.length !==0){
       for(var item of numbers){
           s+=item;
       }
   }else{
       s=0;
   }
   
   return s;
}
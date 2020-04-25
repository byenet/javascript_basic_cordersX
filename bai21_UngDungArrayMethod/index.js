var users = [
    { name: 'Tom', gender: 'male' },
    { name: 'Maria', gender: 'female' },
    { name: 'Jason', gender: 'male' },
    { name: 'Sora', gender: 'female' },
    { name: 'Teo', gender: 'male' },
];


var userList = $('#userList');
var genderFilter = $('#genderFilter');

render(userList, users);

genderFilter.on('change', function(){
  var selectedGender = this.value; // male or female

  var filteredUser = users.filter(function(user){
    return user.gender === selectedGender;
  })
  

  if (selectedGender === 'male' || selectedGender === 'female') {
    render(userList, filteredUser);
  } 
  else{
    render(userList, users);
  }
});


function render(container, items){

  var htmlItems = items.map(function(item){
    return '<li class = "list-group-item">' + item.name + '</li>'
  })

  var html = htmlItems.join(''); // thanh 1 chuoi duy nhat gop cac chuoi nay vao
  container.html(html);
}




// -----------------------------------------------------------------------------------------------------






/* Filter các sản phẩm khi biết id danh mục sản phẩm
  Ví dụ đây là 1 danh sách các danh mục sản phẩm, 
  khi người dùng muốn lọc các sản phẩm thuộc danh mục nào 
  thì filter các sản phẩm của danh mục đó.
  var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
  ];
*/

var listProducts = [
 {id: 1, categoryId: 1, name: 'Tivi'},
 {id: 2, categoryId: 1, name: 'Tủ lạnh'},
 {id: 3, categoryId: 3, name: 'Ghế sofa'},
 {id: 4, categoryId: 1, name: 'Máy giặt'},
 {id: 5, categoryId: 2, name: 'Chén bát'},
 {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
 {id: 7, categoryId: 3, name: 'Cửa kính'},
 {id: 8, categoryId: 1, name: 'Điều hoà'},
 {id: 9, categoryId: 3, name: 'Bàn tròn'},
 {id: 10, categoryId: 2, name: 'Lò vi sóng'},
]

function filterProductsByCategoryId(products, categoryId) {
  // your code here! 
    
    return products.filter(function(product){
        return product.categoryId === categoryId;
    })
}


// --------------------------------------------------------------------------------
/**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
*/

function removeDuplicate(array) {
  // write code here...
  return array.filter(function(item, index){
     console.log(indexOf(item));
      return array.indexOf(item) === index;
  })
}



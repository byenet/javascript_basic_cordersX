/**
 * Define a function
 * 
 * function doSomething(intput1, input2,...){
 *  //code
 *  return something;
 * }
 * 
 * 
 * Execute/ call a function
 * 
 * doSomething(input1, input2,..);
 * 
 */



function caculateTriangleSquare(a,h){
    return a*h / 2;
}

var a = caculateTriangleSquare(10,5);
console.log(a);


function caculateDiscSquare(r){
    return r*r*3.14;
}

caculateDiscSquare(10);

// Bài tập: Viết hàm tính thể tích khối hộp.
// Nhận vào các tham số như dưới, trả về thể tích của khối hộp.

/**
 * Tính thể tích khối hộp
 * w là chiều rông khối hộp, kiểu dữ liệu là number
 * l là chiều dài khối hộp, kiểu dữ liệu là number
 * h là chiều cao khối hộp, kiểu dữ liệu là number
 */
function getBoxVolume(w, h, l) {
  // Viết code ở đây
  return w*h*l;
}


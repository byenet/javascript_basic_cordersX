// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str) {
  // viết code ở đây.
 var string=str.split("");
 var arrStr=string.reverse();
 return arrStr.join("");
}
--------------------bài 2
// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
	// viết code ở đây
	var strArr=str.split(" ");
	for(var i=0;i<strArr.length;i++){
      var charArr=strArr[i].split("");
	    charArr[0]=charArr[0].toUpperCase();
      strArr[i]=charArr.join("");
	    
	}
	return strArr.join(" ");
}
---------------------bài 3
// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename(filename) {
  // viết code ở đây.
  var strArr=filename.split(".");
  return strArr[strArr.length-1];
}

-----------bài 4
// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a,b,c){
// viết code ở đây.
    // return (a>b)? (a>c)? a: c : (b>c)? b:c;
    return Math.max(a, b, c);
}
------------bài 5
// viết hàm Kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str){
  // viết code ở đây.
  return str.indexOf("Java")===0;
}
----------------bài 6
/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
function findMaxDiff(arr) {
  // viết code ở đây.
  if(arr.length<2)
    return 0;
  else{
      var maxDiff=0;
      for(var i=1;i<arr.length;i++)
        maxDiff=(maxDiff<Math.abs(arr[i]-arr[i-1]))? Math.abs(arr[i]-arr[i-1]): maxDiff;
      return maxDiff;
  }
}
--------------------bài 7
//Viêt 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str){ 
 // viết code ở đây.
 if(str==="")
    return true;
 else{
    var countP=0,countT=0;
    for(var i=0;i<str.length;i++)
    {
        if(str.charAt(i)=='p')
         countP++;
         if(str.charAt(i)=='t')
         countT++;
    }
    return countP==countT;
 }
}
------------------------bài 8
// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng 
//(hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
function first(array, n) {
  // viết code ở đây.
  if(n===undefined)
   return [array[0]];
  else if(n<=0)
   return [];
  else if(n<=array.length)
      return array.splice(0,n);
  else return array;
}
-------------------bài 9
//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý: cho chuỗi 'abcd' :
// 		element    'a'  |  'b'  |  'c'   | 'd'
//		index 	    0	  |	 1	  |	  2	   |	3
//
//  n = 1 ------------------->  'acd'
//  n = 2 ------------------->  'abd'

function omitCharAt(str, n) {
  // viết code ở đây.	
  if(n>str.length-1||n<0)
   return str;
  else{
      var strArr=str.split("");
       for(var i=n;i<strArr.length-1;i++)
        strArr[i]=strArr[i+1];
      strArr[strArr.length-1]="";
      return strArr.join("");
  }
}
-------------------bài 10
// Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
function nearestTo100(a, b){
  // viết code ở đây.
  return (Math.abs(100-a)<Math.abs(100-b))?a:b;
}
---------bài11
/* Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
  Nếu có 1 số âm và một số dương thì trả về true. 
  Các trường hợp khác trả về false. 
  Số 0 là số không âm cũng không dương
  Tham số:
  - number1: số nguyên thứ nhất
  - number2: số nguyên thứ hai
*/

function checkInt(number1, number2) {
  // viết code ở đây.	
  return (number1*number2<0)?true:false;
}

----------bài 12
/*
Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
Example: 
n = 20 // return 14
n = 5 // return 8

*/
function difference(n) {
  // viết code ở đây.
  return (n>13)? Math.abs((n-13))*2:Math.abs(n-13);
}

--------------bài 13
/* Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
Tham số:
- String: chuỗi nhập vào lúc đầu.
pyString("Coders X") => "PyCoders X"
*/

function pyString(String) {
  // viết code ở đây.
  if(String.indexOf("Py")===0)
    return String;
  else{
      return "Py"+String;
  }
}
------------------bài 14
/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
  // viết code ở đây.	
  var strArr=str.split("");
  for(var i=0;i<str.length;i++){
      strArr[i]=String.fromCharCode(str.charCodeAt(i)+1);
  }
  return strArr.join("");
}
 
 ----------bài 15
 // viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n){
// viết code ở đây.
 var arr=[];
 for(var i=0;i<n;i++)
  arr.push(str.charAt(i));
 for(var i=str.length-n;i<str.length;i++)
    arr.push(str.charAt(i));
 return arr.join("");
}
--------------bài 16

/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size){
  // write code here.
  var kq=[],j=1,temp=[];
  
  for(var i=0;i<arr.length;i++)
    {
        if(j<=size){
            temp.push(arr[i]);
            j++;
        }
        if(j>size||i==arr.length-1){
            j=1;
            kq.push(temp);
            temp=[];
        }
    }
    return kq;
}


-----------bài 17
/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
function maxOfSumChain(arr,k){
  // write code here.
  var sums=0,temp=0;
  for(var i=0;i<=arr.length-k;i++){
   for(var j=i;j<i+k;j++)
     temp+=arr[j];
    if(sums<temp)
         sums=temp;
    temp=0;
  }
  return sums;
}

----------------bài 18
/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
// Viết code tại đây!
var kq=[0,0,0,0,0,0,0,0,0,0];
    for(var i=0;i<arr.length;i++)
     kq[arr[i]]=kq[arr[i]]+1;
     console.log(kq);
    var maxs=0;
    for(var i=0;i<kq.length;i++)
        if(kq[i]!=NaN)
        if(maxs<kq[i])
          maxs=kq[i];
    var result=[];
     for(var i=0;i<kq.length;i++)
        if(kq[i]!=NaN)
        if(maxs==kq[i])
         result.push(i);
  console.log(kq);
    return result;
}

---------------bài 19
/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False

rearrangeChar('yhnbgt','hybtgn') -> true
*/

function rearrangeChar(str1, str2) {
// Viết code tại đây!
    var dem1=[],dem2=[];
    for(var i=0;i<=26;i++)
    {
        dem1[i]=0;
        dem2[i]=0;
    }
    if(str1.length!=str2.length)
        return false;
    for(var i=0;i<str1.length;i++){
        dem1[str1.charCodeAt(i)-97]++;
         dem2[str2.charCodeAt(i)-97]++;
    }
    for(var i=0;i<=26;i++)
    {
        if(dem1[i]!=dem2[i])
            return false;
    }
    return true;
}

------bài 20
/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr){
  // Viết code tại đây
  var maxs=0;
  for(var i=0;i<arr.length-1;i++)
    for(var j=i+1;j<arr.length;j++)
     if(maxs<Math.abs(arr[i]-arr[j]))
       maxs=Math.abs(arr[i]-arr[j]);
  return maxs;
}
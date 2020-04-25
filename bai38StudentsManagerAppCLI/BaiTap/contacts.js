 /*
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var readlineSync = require("../node_modules/readline-sync");
var fs = require("fs");

var contacts = [];

function loadData() {
  var fileContent = fs.readFileSync("./contacts.json");
  contacts = JSON.parse(fileContent);
}

function showMenu() {
  console.log("1. Hiển thị contacts");
  console.log("2. Nhập dữ liệu contacts");
  console.log("3. Sửa dữ liệu contacts");
  console.log("4. Xóa contacts");
  console.log("5. Tìm kiếm contacts");
  console.log("6. Save & Exit");

  var option = readlineSync.question("> ");
  switch (option) {
    case "1":
      showContact();
      break;
    case "2":
      createContacts();
      showMenu();
      break;
    case "3":
      editContact();
      showMenu();
      break;
    case "4":
      deleteContact();
      showMenu();
      break;
    case "5":
      searchContact();
      break;
    case "6":
      saveAndExit();
      break;
    default:
      console.log("Số bạn nhập không có trong menu!");
      showMenu();
      break;
  }
}

function showContact() {
  console.log("------------Danh Bạ--------------");
  console.log("Name  SĐT  ");
  console.log("---------------------------------");

  contacts.map(function(item) {
    console.log(item.name, item.phone);
  });
}

function createContacts() {
  var name = readlineSync.question("Name to create: ");
  if (kiemTraTrung(name) === 0) {
    var phone = readlineSync.question("Number Phone: ");
    var contact = {
      name: name,
      phone: parseInt(phone)
    };
    contacts.push(contact);
    console.log("---------------------------------");
    console.log("Thêm thành công hãy chon Save & Exit để lưu");
    console.log("---------------------------------");
  } else {
    console.log("---------------------------------");
    console.log("Tên bạn Nhập bị trùng trong danh bạ!");
    console.log("---------------------------------");
  }
}

function editContact() {
  showContact();
  console.log("---------------------------------");

  var chooseName = readlineSync.question("Choose name edit: ");
  if (kiemTraTrung(chooseName) !== 0) {
    var newName = readlineSync.question("New name: ");
    var newNumber = readlineSync.question("New phone number: ");
    contacts.map(function(item) {
      if (item.name === chooseName) {
        if (newName !== "") item.name = newName;
        if (newNumber !== "") item.phone = newNumber;
      }
      console.log("---------------------------------");
      console.log("Choose Save & Exit to save");
      console.log("---------------------------------");
    });
  } else {
    console.log("---------------------------------");
    console.log("Tên Bạn nhập Không có trong danh bạ!");
    console.log("---------------------------------");
  }
}

function deleteContact() {
  showContact();
  var name = readlineSync.question("Choose name delete: ");
  if (kiemTraTrung(name) !== 0) {
    contacts = contacts.filter(function(item) {
      return item.name !== name;
    });
    console.log("---------------------------------");
    console.log("delete completed, choose Save & Exit to save");
    console.log("---------------------------------");
  } else {
    console.log("---------------------------------");
    console.log("Tên bạn chọn không có trong danh sách");
    console.log("---------------------------------");
  }
}

function searchContact() {
  var name = readlineSync.question("Search name: ");
  var newContacts = contacts.filter(function(item) {
    return item.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
  });

  if (!isEqual(newContacts)) {
    console.log("---------------------------------");
    console.log("Danh Bạ tìm kiếm được");
    console.log("Name  SĐT  ");
    console.log("---------------------------------");
    newContacts.map(function(item) {
      console.log(item.name, item.phone);
    });
  } else {
    console.log("---------------------------------");
    console.log("Tên bạn tìm kiếm không có trong danh bạ");
    console.log("---------------------------------");
    showMenu();
  }
}

function saveAndExit() {
  var content = JSON.stringify(contacts);
  fs.writeFileSync("./contacts.json", content, { encoding: "utf8" });
}

function kiemTraTrung(name) {
  var dem = 0;
  contacts.map(function(item) {
    if (item.name === name) {
      dem++;
    }
  });
  return dem;
}


//Ham kiem tra 2 obj co bang nhau khong
function isEqual2(objA, objB) {   
  // Tạo các mảng chứa tên các property
  var aProps = Object.getOwnPropertyNames(objA);
  var bProps = Object.getOwnPropertyNames(objB);
  // Nếu độ dài của mảng không bằng nhau,
  // thì 2 objects đó không bằnh nhau.
  if (aProps.length != bProps.length) {
    return false;
  }
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    // Nếu giá trị của cùng một property mà không bằng nhau,
    // thì 2 objects không bằng nhau.
    if (objA[propName] !== objB[propName]) {
      return false;
    }
  }
  // Nếu code chạy đến đây,
  // tức là 2 objects được tính lằ bằng nhau.
  return true;
}

function isEqual(obj){
  return Object.keys(obj).length === 0;
};


function main() {
  loadData();
  // console.log(contacts);
  showMenu();
}

main();





/**
 * Ctrl+Enter    Run code
Ctrl+S        Save session

Console 
Shortcuts

Enter         Evaluate the entered command.
Shift+Enter   Continue to the next line.
Tab           Indent.
Shift+Tab     Unindent.
Up            Previous history item.
Down          Next history item.
Ctrl+Up       Move to the line above the cursor.
Ctrl+Down     Move to the line below the cursor.
Ctrl+E        Move to the end of the current line.
Ctrl+A        Move to the start of the current line.
Ctrl+K        Clears the console.
Ctrl+Z        Cancel current prompt.
Ctrl+L        Open languages selector.
Ctrl+G        Open examples preview.
Ctrl+H        Open this help page.
Ctrl+S        Save session (new revision).
Escape        Close current view
 */
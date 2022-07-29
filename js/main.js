//input:
var arrDiem = [];
var arrTen = [];

//primitive value: string, number, boolean, undefined
//reference value: object, array,...

//IIFE
(function getInputValue() {
  // Dom đến tất cả thẻ tdTen
  var arrTdTen = document.querySelectorAll("#tblBody td:nth-child(3)");
  console.log(arrTdTen);
  // Duyệt qua các thẻ td để đưa các giá trị innerHTML vào mảng Tên
  for (var index = 0; index < arrTdTen.length; index++) {
    var td = arrTdTen[index];
    var hoTen = td.innerHTML;
    arrTen.push(hoTen);
  }
  console.log(arrTen);
})();

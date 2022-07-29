//input:
var arrDiem = [];
var arrTen = [];

//primitive value: string, number, boolean, undefined
//reference value: object, array,...

//IIFE
(function getInputValue() {
  // Dom đến tất cả thẻ tdTen
  var arrTdTen = document.querySelectorAll("#tblBody td:nth-child(3)");
  // Duyệt qua các thẻ td để đưa các giá trị innerHTML vào mảng Tên
  for (var index = 0; index < arrTdTen.length; index++) {
    var td = arrTdTen[index];
    var hoTen = td.innerHTML;
    arrTen.push(hoTen);
  }
  console.log(arrTen);

  // Điểm => lấy danh sách điểm
  var arrTdDiem = document.querySelectorAll("#tblBody td:nth-child(4)");
  for (var index = 0; index < arrTdDiem.length; index++) {
    var diem = Number(arrTdDiem[index].innerHTML);
    arrDiem.push(diem);
  }
  console.log(arrDiem);
})();

// Tìm sinh viên có điểm cao nhất
document.querySelector("#btnSVCaoDiemNhat").onclick = function () {
  // input: arrDiem[], arrayTen[]
  // ouput: index (vị trí của người có điểm cao nhất)
  var indexMax = 0; // Mặc định vị trí đầu tiên có điểm cao nhất
  var maxScore = arrDiem[indexMax];
  // process: xử lý
  for (var index = 0; index < arrDiem.length; index++) {
    if (arrDiem[index] > maxScore) {
      // Tìm thấy đứa có điểm lớn hơn maxScore (gán lại indexMax và maxScore)
      maxScore = arrDiem[index];
      indexMax = index;
    }
  }
  // Hiển thị dữ liệu ra giao diện
  document.querySelector("#svGioiNhat").innerHTML =
    arrTen[indexMax] + " - " + arrDiem[indexMax];
};

// Tìm sinh viên có điểm thấp nhất
document.querySelector("#btnSVThapDiemNhat").onclick = function () {
  // input: arrTen[], arrDiem[]
  // output: index (vị trí của người có điểm thấp nhất)
  var indexMin = 0;
  var minScore = arrDiem[indexMin];
  // process: xử lý
  for (var index = 0; index < arrDiem.length; index++) {
    if (arrDiem[index] < minScore) {
      minScore = arrDiem[index];
      indexMin = index;
    }
  }
  // Hiên thị dữ liệu ra giao diện
  document.querySelector("#svYeuNhat").innerHTML =
    arrTen[indexMin] + " - " + arrDiem[indexMin];
};

// Tìm số SV Giỏi
document.querySelector("#btnSoSVGioi").onclick = function () {
  // input: arrDiem, diemGioi = 8
  // output: soluong: number
  var output = 0;
  // process:
  output = demSVGioi(arrDiem, 8);

  document.querySelector("#soSVGioi").innerHTML = output;
};

// Tìm số SV có điểm TB trên 5
document.querySelector("#btnSVDiemHon5").onclick = function () {
  // input: arrTen, arrDiem
  // output: [], string
  var output = "";
  output = dsSVDiemHon5(arrDiem, arrTen);
  document.querySelector("#dsDiemHon5").innerHTML = output;
};

// Giả sử a = 97, b = 98, c = 99

// Học cách sử dụng hàm sort
// var arrTen = ["Nguyễn", "Nam", "Minh", "Tùng", "Khải"];
// function sortTheoTen() {
//   var result = arrTen.sort(function (ten, tenTruoc) {
//     // Biến đổi tên thành chữ thường: "Nam" => nam
//     ten = ten.toLowerCase();
//     tenTruoc = tenTruoc.toLowerCase();
//     // return về số âm thì hoán đổi vị trí
//     // return về số dương thì giữ nguyên vị trí
//     if (ten < tenTruoc) {
//       return -1;
//     }
//     return 1;
//   });
//   console.log(result);
// }
// sortTheoTen();

// Sắp xếp SV theo thứ tự điểm tăng dần
document.querySelector("#btnSapXepTang").onclick = function () {
  // input: arrDiem
  // output: danh sách điểm tăng dần []
  var output = sortTheoSo(arrDiem);
  for (var index = 0; index < output.length; index++) {
    document.querySelector("#dtbTang").innerHTML +=
      "<p>" + output[index] + "</p>";
  }
};

// Sắp xếp
var arrNum = [23, 45, 34, 3, 23, 32, 5, 56];
var result = _.sortBy(arrNum);
console.log(result);

// Tìm max
var max = _.max(arrNum);
console.log(max);

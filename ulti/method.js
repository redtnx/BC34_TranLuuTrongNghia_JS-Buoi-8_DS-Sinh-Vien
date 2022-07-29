// jsDoc
/**
 * Hàm nhận vào 1 mảng điểm và điểm giỏi
 * @param {*} arrDiem arrDiem: là mảng number người dùng truyền vào
 * @param {*} diemGioi diemGioi: là giá trị định nghĩa giỏi
 * @returns Kết quả trả về là số lượng sinh viên giỏi trong mảng
 */

// Đếm số SV Giỏi
function demSVGioi(arrDiem, diemGioi) {
  // input: arrDiem[], điểm giỏi
  // output: số sinh viên có điểm giỏi
  var soSVGioi = 0;
  for (var index = 0; index < arrDiem.length; index++) {
    if (arrDiem[index] >= diemGioi) {
      // Nếu điểm trong mảng lớn hơn hoặc bằng điểm giỏi => giỏi => tăng số lượng
      soSVGioi += 1;
    }
  }
  return soSVGioi;
}

/**
 * Hàm nhận vào arrDiem và arrTen
 * @param {*} arrDiem arrDiem: là mảng number người dùng truyền vào
 * @param {*} arrTen arrTen: là mảng chứa tên sinh viên
 * @returns Kết quả trả về html các thẻ p nối tiếp nhau
 */
function dsSVDiemHon5(arrDiem, arrTen) {
  //input; điểm, tên
  //output: html
  var html = "";
  for (index = 0; index < arrDiem.length; index++) {
    // Mỗi lần duyệt lấy điểm của các phần tử ra so với 5
    if (arrDiem[index] >= 5) {
      // Nếu vị trị index hợp lệ thì lấy tên tại vị trí đó đưa vào output
      html += "<p>" + arrTen[index] + " - " + arrDiem[index] + "</p>";
    }
  }
  return html;
}

function sortTheoTen(arrTen) {
  var result = arrTen.sort(function (ten, tenTruoc) {
    // Biến đổi tên thành chữ thường: "Nam" => nam
    ten = ten.toLowerCase();
    tenTruoc = tenTruoc.toLowerCase();
    // return về số âm thì hoán đổi vị trí
    // return về số dương thì giữ nguyên vị trí
    if (ten < tenTruoc) {
      return -1;
    }
    return 1;
  });
  console.log(result);
}

function sortTheoSo(arrNumber) {
  var result = arrNumber.sort(function (num, numTruoc) {
    return num - numTruoc;
  });
  return result;
}

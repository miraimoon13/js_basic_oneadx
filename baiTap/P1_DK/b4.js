console.log(`Viết chương trình cho phép người dùng nhập vào mã số sinh viên
Sau đó kiểm tra xem mã số này có đúng với định dạng đã cho hay không.
Định dạng mã số sinh viên là “Bxxxxxxx” với x là số nguyên từ 1-9. (Sử dụng biểu thức chính quy để ràng buộc định dạng)`)


let msv = prompt('Nhập vào mã sinh viên: ');

const regex = /.B*\d{7}.*/;
if (msv.match(regex) && msv.length == 8) {
    console.log('Đúng');
} else {
    console.log('KHông Đúng');
}
console.log(`Viết chương trình cho phép người dùng nhập vào 1 chuỗi, kiểm tra chuỗi này có phù hợp với yêu cầu hay không.
Nếu có thì in ra “Duyệt!”, ngược lại in ra “Không duyệt”.
Yêu cầu về chuỗi là: Có độ dài không quá 20 ký tự, không được chứa ký tự khoảng trắng, bắt đầu bằng một ký tự chữ viết hoa (A - Z), kết thúc bằng một số (0 - 9). (Sử dụng biểu thức chính quy để ràng buộc định dạng)`);

let chuoi = prompt('Nhập vào chuỗi: ');
console.log(`Chuỗi vừa nhập là: ${chuoi}`);


let regex = /^[A-Z][^\s]{0,18}\d$/;

if(chuoi.match(regex)) {
    console.log('Duyệt!');
}else{
    console.log('Không duyệt');
}

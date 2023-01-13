console.log(`Viết chương trình cho phép người dùng nhập vào mã số sinh viên
Sau đó kiểm tra xem mã số này có đúng với định dạng đã cho hay không.
Định dạng mã số sinh viên là “Bxxxxxxx” với x là số nguyên từ 1-9. (Sử dụng biểu thức chính quy để ràng buộc định dạng)`)

let ip = prompt('Nhập vào mã sinh viên: ');

const check = (n) =>{
    let msg= `${n} không đúng định dạng mã sinh viên`;;
    if(n == `^B\d{7}$`){
        msg = `${n} Đúng định dạng mã sinh viên`
    }
    return msg;
}
console.log(check(ip));
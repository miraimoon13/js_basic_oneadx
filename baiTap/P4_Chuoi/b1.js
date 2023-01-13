console.log(`Viết chương trình cho phép người dùng nhập vào một chuỗi, sau đó nhập vào một ký tự.
Kiểm tra xem ký tự đó có xuất hiện trong chuỗi hay không? Nếu có in ra “Có”, ngược lại in ra “Không”.
`);

let chuoi = prompt('Nhập vào một chuỗi: ');
console.log(`Chuỗi vừa nhập là: ${chuoi}`);
let kiTu = prompt('Nhập vào ký tự muốn kiểm tra: ');
console.log(`Ký tự muốn kiểm tra là: ${kiTu}`);

let tonTai = false;

let mangKiTu = chuoi.split('');

for(let i = 0; i<mangKiTu.length; i++) {
    if(kiTu == mangKiTu[i]) {
        console.log(`Có`);
        tonTai = true;
    }
}

if(tonTai == false) {
    console.log(`Không`);
}
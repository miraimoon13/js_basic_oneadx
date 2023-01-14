console.log(`Viết chương trình cho phép nhập vào một chuỗi
Kiểm tra xem chuỗi này ký tự “a” xuất hiện bao nhiêu lần
In ra số lần đó.
`);

let chuoi = prompt('Nhập vào một chuỗi: ');
console.log(`Chuỗi vừa nhập là: ${chuoi}`);

let mangKiTu = chuoi.split('');
let count = 0;

for (let i = 0; i < mangKiTu.length; i++) {
    if (mangKiTu[i] === "a") {
        count++;
    }
}
console.log(`So ky tu 'a' xuat hien trong chuoi la: `,count);



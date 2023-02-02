console.log(`Viết chương trình cho phép người dùng nhập vào một chuỗi, sau đó nhập vào một ký tự.
Kiểm tra xem ký tự nhập vào đó nằm ở vị trí thứ mấy trong chuỗi(nếu có, số đếm bắt đầu từ 0).
Nếu nó có xuất hiện trong chuỗi thì in ra vị trí của nó trong chuỗi, nếu không thì in ra “Không tồn tại trong chuỗi”.
`);

let chuoi = prompt('Nhập vào 1 chuỗi: ');
console.log(`Chuỗi vừa nhập là: ${chuoi}`);

let kiTu = prompt('Nhập vào ký tự tìm kiếm: ');

// let mangKiTu = chuoi.split('');

// let tonTai = false;

// for(let i = 0; i < mangKiTu.length; i++) {
//     if(kiTu == mangKiTu[i]) {
//         console.log(`${i}`);
//         tonTai = true;
//     }
// }

// if(tonTai == false) {
//     console.log('Không');
// }

//cach toi uu
let result = chuoi.indexOf(kiTu);

if(result == -1){
    console.log('Không tồn tại ký tự này!');
}else{
    console.log(`Ký tự cần tìm kiếm là '${kiTu}' ở vị trí thứ ${result+1}`);
}
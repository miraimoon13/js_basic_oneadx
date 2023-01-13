console.log(`Viết chương trình cho phép nhập vào một chuỗi, kiểm tra xem chuỗi này có xuất hiện số hay không.
Nếu có tin ra “Có”, ngược lại, in ra “Không”.`);

let chuoi = prompt('Nhập vào 1 chuỗi: ');
console.log(`Chuỗi vừa nhập là: ${chuoi}`);

const regex = /.*\d.*/;
if(chuoi.match(regex)){
    console.log('có');
}else{
    console.log('KHông');
}
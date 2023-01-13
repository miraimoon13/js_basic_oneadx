console.log(`Viết chương trình cho phép nhập vào n, sau đó nhập vào n phần tử số nguyên.
Cuối cùng, chương trình sẽ xuất ra giá trị trung bình của mảng này.`);

//let ip = prompt('Nhập vào số phần tử mảng: ');
// let temp = 0;
// const ip = [2,3,4];
// let sum =0;
// for(let i = 0; i< ip.length; i++){
//     sum +=  ip[i];
// }
// temp = sum / ip.length;

// console.log(temp)



let ip = prompt('Nhap vao so phan tu mang: ');
let n = [];
let arr = 0;

for (i = 0; i < ip; i++) {
    n[i] = prompt('Nhập phan tu thứ: ');
    arr+=+n[i]; // thêm dấu + ở +n[i] là convert kiểu string sang number. Vì khi debug thấy code nhận n[i] là chuỗi.
}
arr = arr/ip;
console.log(arr);

console.log(`Viết chương trình cho phép nhập vào n, sau đó nhập vào n phần tử số nguyên (có thể dương hoặc âm).
Cuối cùng, chương trình sẽ xuất ra phần tử có giá trị nhỏ nhất.
`);

let ip = prompt('Nhập vào số phần tử mảng: ');
console.log(`Số phần tử của mảng: ${ip}`);
let n = [];
let min = 0;

for(i = 0; i<Number(ip); i++) {
    n[i] = prompt(`Nhập vào phần tử thứ ${i} :`);
    console.log(`Phần tử thứ ${i}: ${Number(n[i])}`);
    if(n[i] < min){
        min = n[i];
    }
}
console.log(`Gía trị nhỏ nhất trong mảng là: `, min);
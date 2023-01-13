console.log(`Viết chương trình cho phép nhập vào n, sau đó nhập vào n phần tử số nguyên dương.
Cuối cùng, chương trình sẽ xuất ra phần tử có giá trị lớn nhất`);

let ip = prompt('Nhập vào số phần tử mảng: ');
console.log(`Số phần tử mảng: ${Number(ip)}`);
let n = [];
let max = 0;

for(i=0;i<Number(ip);i++){
    n[i]= prompt(`Nhập phần tử thứ ${i}: `);
    console.log(`Phần tử thứ ${i}: ${Number(n[i])}`);
    if(Number(n[i]) > max){
        max = Number(n[i]);
    }
}
console.log(`Phần tử lớn nhất trong mảng là: `,max);

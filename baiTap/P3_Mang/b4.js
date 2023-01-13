console.log(`Viết chương trình cho phép nhập vào n, sau đó nhập vào n phần tử số nguyên.
Sắp xếp các phần tử trong mảng theo thứ tự ngược lại.`);

let ip = prompt('Nhập số phần tử mảng: ');
console.log(`Số phần tử trong mảng: ${ip}`);
let n = [];

for(let i = 0; i<ip; i++) {
    n[i] = prompt(`Phần tử thứ ${i}`);
    console.log(`Phần tử thứ ${i}: ${n[i]}`); 
}
//đảo ngược
let temp;
for(i = 0; i<(ip/2); i++){
    temp = n[i];
    n[i] = n[ip-i-1];
    n[ip-i-1]= temp;
}
console.log(`Mảng sau khi đảo ngược:`);
for(let i = 0;i<ip;i++){
    console.log(`${n[i]}`)
}

console.log(`Viết chương trình cho phép nhập vào một số nguyên n ( n < 1000 )
In ra tất cả số nguyên tố trong khoảng từ 0 - n.`);


const isPrime = (n) => {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
let ip = prompt('Nhập số nguyên dương: ');
if (isPrime(ip)) {
    console.log(`${ip} là số nguyên tố`);
} else {
    console.log(`${ip} không là số nguyên tố`)
}
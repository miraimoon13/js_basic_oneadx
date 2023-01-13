console.log(`Viết chương trình cho phép nhập vào số nguyên n( n <= 20 ), in ra số Fibonacci ứng với nó.
Số Fibonacci là số mà nó bằng tổng của 2 số Fibonacci trước nó.
Với giả thuyết là Fi(0) = 1, Fi(1) = 1.

Ta có ví dụ: Fi(2) = Fi(0) + Fi(1) = 1+1 = 2, Fi(3) =Fi(2) + Fi(1) = 2+1 = 3, Fi(4) = Fi(3) + Fi(2) = 3+2 = 5, … Giả sử n = 4, đầu ra sẽ là 5.`);

let n = prompt('Nhap n: ');

const checkFibo = (n) => {
    if (n == 0 || n == 1) {
        return 1;
    }
    return checkFibo(n - 1) + checkFibo(n - 2);
}
console.log(checkFibo(n))
console.log(`Viết chương trình cho phép nhập vào số nguyên n( n <= 20 ), in ra số Fibonacci ứng với nó.
Số Fibonacci là số mà nó bằng tổng của 2 số Fibonacci trước nó.
Với giả thuyết là Fi(0) = 1, Fi(1) = 1.

Ta có ví dụ: Fi(2) = Fi(0) + Fi(1) = 1+1 = 2, Fi(3) =Fi(2) + Fi(1) = 2+1 = 3, Fi(4) = Fi(3) + Fi(2) = 3+2 = 5, … Giả sử n = 4, đầu ra sẽ là 5.`);


let n = prompt('Nhap vao so nguyen <= 20');

    if(n <= 20){
        let fib = [0,1];
    
        for(let i = 2; i<=n; i++) {
            fib[i] = fib[i - 2] + fib[i-1];
            console.log(`So fib thu ${i} = ${fib[i]}`);
        }
    }
    else{
        console.log('Vui long nhap so nguyen <= 20');
    }


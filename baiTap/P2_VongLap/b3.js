console.log(`Viết chương trình cho phép nhập vào một số nguyên n ( n < 1000 )
In ra tất cả số nguyên tố trong khoảng từ 0 - n.`);


let ip = prompt('Nhap so nguyen < 1000');


for(let i = 3; i<=ip ; i++) {
    let snt = true;
    for(let j = 2; j< i;i++) {
        if(i%j == 0){
            snt = false;
        }
    }
    if(snt){
        console.log('Số nguyên tố là: ',i);
    }
}

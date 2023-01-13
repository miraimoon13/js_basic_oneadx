console.log(`Viết chương trình cho phép nhập vào một số nguyên dương n, tính tổng tất cả số chẵn trong khoảng từ 0 - n.`);


let n = prompt('Nhập vào số nguyên dương: ');


let temp = 0;

for(let i = 0; i<= n; i++){
    if(i% 2 == 0){
        console.log(i);
        temp +=i;
    }
}
console.log(`Tổng số chãn nhỏ hơn ${n} = ` , temp);
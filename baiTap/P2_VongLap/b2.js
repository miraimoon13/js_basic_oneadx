console.log(`Viết chương trình để nhập nhập một số nguyên, tìm kết quả phép nhân của số đó với các số từ 1 - 20 , sau đó in kết quả ra màn hình.`)


let ip = prompt('Nhập số nguyên từ bàn phím: ');
let temp = 1;
for (let i = 1; i <= 20; i++) {
   temp = ip * i;
   console.log(temp)
}
console.log(`Viết chương trình cho phép nhập vào một số nguyên dạng số, sau khi chạy thì chương trình sẽ ghi số đó ra dưới dạng chữ.
VD: 1 -> Một, 2 -> Hai, …`);


// let n = prompt('Nhập : ');
// //console.log(typeof n)

// if (n == 1) {
//     // console.log(typeof n)
//     console.log('Một');
// } else if (n == 2) {
//     console.log('Hai')
// } else if (n == 3) {
//     console.log('Ba');
// } else if (n == 4) {
//     console.log('Bốn')
// } else if(n == 5){
//     console.log('Năm')
// } else if(n == 6){
//     console.log('Sáu')
// } else if(n == 7){
//     console.log('Bảy')
// } else if(n == 8){
//     console.log('Tám')
// } else if(n == 9){
//     console.log('Chín')
// } else {
//     console.log('Không')
// }

//cách 2: sử dụng switch case

let ip = prompt('Nhập số bất kỳ: ');
console.log(typeof ip);
let msg ;
switch(ip){
    case '0':
        msg = `${ip} => Khoong`;
        break;
    case '1':
        msg = `${ip} => Một`;
        break;
    case '2':
        msg = `${ip} => Hai`;
        break;
    case '3':
        msg = `${ip} => Ba`;
        break;
    case '4':
        msg = `${ip} => Bốn`;
        break;
    case '5':
        msg = `${ip} => Năm`;
        break;
    case '6':
        msg = `${ip} => Sáu`;
        break;
    case '7':
        msg = `${ip} => Bảy`;
        break;
    case '8':
        msg = `${ip} => Tám`;
        break;
    case '9':
        msg = `${ip} => Chín`;
        break;
}
console.log(msg)

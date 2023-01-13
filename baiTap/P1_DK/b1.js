console.log(`nhập vào một số nguyên, in ra màn hình “Đây là số nguyên dương”
nhập vào là một số lớn hơn hoặc bằng 0, ngược lại in ra “Đây là số nguyên âm”.`);

let n = prompt('Nhập vào số nguyên: ');

const ktra = (a) =>{
    let msg = `${a} `;
    if(a > 0){
        msg = `${a} là số nguyên dương`;
    }else if(a <=0){
        msg = `${a} là sô nguyên âm`;
    }
    return msg;
}
console.log(ktra(n))
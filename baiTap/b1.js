/*// tính tổng 2 số nguyên dương

let a = 4;
let b = 6;
let c = a+b;

console.log(`Tổng  ${a} + ${b} = ${c}`);

// tính tổng 2 số nguyên dương dạng arrow function

const tinhTong = (a,b) => {
    return a + b;
}
console.log('4 + 9 = ', tinhTong(4,9));

// kiểm tra số âm, dương
*/

// kiểm tra số âm, dương

/*let ktra = (a,b) => {
   if(a == 0 && b == 0){
    console.log(`${a}, ${b} là số không âm, không dương`);
    }
    else if(a == 0 && b != 0){
        if( b > 0){
            console.log(`${a} là số 0, ${b} là số dương`);
        }else{
            console.log(`${a} là số 0, ${b} là số âm`);
        }
    }
    else if(a != 0 && b == 0){
        if( a > 0){
            console.log(`${b} là số 0, ${a} là số dương`);
        }else{
            console.log(`${b} là số 0, ${a} là số âm`);  
        }
    }
    return;
}
console.log(ktra(-2,4));

*/
// kiểm tra 
/*let ktra = (a,b) => {
    if(a == 0 && b == 0){
     console.log(`${a}, ${b} là số không âm, không dương`);
    }
    else{
        if( a > 0 && b < 0){
            console.log(`${a} là số dương, ${b} là số âm`)
        }else if( a < 0 && b>0){
            console.log(`${a} là số âm , ${b} là số dương`)
        }else{
            console.log(`${a}, ${b} là số dương`)
        }
    }

 }
 console.log(ktra(0,-7));*/

// let check = (n) =>{
//     let temp = 0;
//     if(n > 0) temp = 1;
//     else if(n<0) temp = -1;
//     return temp;
// }







/*

let ktr= (a,b) =>{

    if(a>0 && b > 0){
        //return a > 0 && b < 0;
        console.log(`${a}, ${b} là số duong`)
    }else if ( a<0 && b <0){
        //return a < 0 && b < 0;

        console.log(`${a}, ${b} là số âm`)
    }else if ( a>0 && b <0){
       // return a > 0 && b < 0;

        console.log(`${a} là số dương, ${b} là số âm`)
    }else if ( a<0 && b >0){
       // return a < 0 && b > 0;

        console.log(`${a} là số âm, ${b} là số dương`)
    }else if ( a==0 && b <0){
       // return a == 0 && b < 0;

        console.log(`${a} không dương, không âm, ${b} là số âm`)
    }else if ( a==0 && b >0){
        //return a == 0 && b > 0;

        console.log(`${a} không dương, không âm, ${b} là số dương`)
    }else if ( b==0 && a <0){
        //return b == 0 && a < 0;

        console.log(`${b} không dương, không âm, ${a} là số âm`)
    }else if ( b==0 && a >0){
        //return b == 0 && a > 0;

        console.log(`${b} không dương, không âm, ${a} là số dương`)
    }
    else{
        console.log(`${b} là số không dương và không âm`)
    }
 return (a,b);
}

console.log(ktr(-7,8));
*/




// hàm kiểm tra số âm, số dương
   
    let ip = prompt('Nhập số phần tử cần kiểm tra');
    for(let i = 1; i <= ip; i++){
        let n = prompt("Nhập số: ");
        const check = (number) => {
            let msg = `${number} không phải là số âm hay duong`;
            if(number > 0){
                msg = `${number} là số dương`;
            }else if (number < 0){
                msg = `${number} là số âm`
            }
            return msg;
        }
        console.log(check(n));
    }



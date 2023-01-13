console.log(`Viết chương trình cho phép nhập vào 3 số thực
Chương trình này sẽ kiểm tra 3 số này có phải là 3 cạnh của một tam giác hay không.`)

let ip = prompt('Nhập số cạnh của n giác');
let arr = [];

for (i = 1; i <= ip; i++) {
    let n = prompt('Nhập cạnh thứ: ')
    arr.push(n);
    console.log(arr)
}
const check = (n) => {
    if (arr[0] <= 0 || arr[1] <= 0 || arr[2] <= 0) {
        console.log(`không là 3 cạnh của 1 tam giác`)
    } 
    // else if (arr[0] + arr[1] > arr[2] && arr[0] + arr[2] > arr[1] && arr[1] + arr[2] > arr[0]) {
    //     console.log(`là 3 cạnh của 1 tam giác`);
    // } 
    else if (arr[0]*arr[0] + arr[1]*arr[1] == arr[2]*arr[2] || arr[0]*arr[0] + arr[2]*arr[2] == arr[1]*arr[1] || arr[1]*arr[1] + arr[2]*arr[2] == arr[0]*arr[0]){
        console.log(`Là 3 cạnh của tam giác vuông`)
    } else{
        console.log(`Không phải 3 cạnh của tam giác vuông`)
    }
}
check();
//cách 2
// let a = prompt('Nhập cạnh thứ nhất');
// let b = prompt('Nhập cạnh thứ hai');
// let c = prompt('Nhập cạnh thứ ba');

// if(a <= 0 || b <= 0 || c <= 0){
//     console.log(`${a}, ${b}, ${c} không là 3 cạnh của 1 tam giác`)
// }else if(a + b > c && a+c > b && b+c>a){
//     console.log(`${a}, ${b}, ${c}  là 3 cạnh của 1 tam giác`);
// }

// else if(arr[0] + arr[1] == arr[2]  arr[0] + arr[2] == arr[1] || arr[1] + arr[2] == arr[0]){
//     console.log(`${a}, ${b}, ${c} là 3 cạnh của tam giác vuông`)
// }

// 3 cạnh của tam giác vuông
/*if(arr[0] + arr[1] == arr[2] || arr[0] + arr[2] == arr[1] || arr[1] + arr[2] == arr[0]){

}
*/
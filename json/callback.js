// //callbacl?

// //là hàm (function) được truyền qua đối số khi gọi hàm khác

// //1. Là hàm
// //2. Được truyền qua đối số
// //3. Được gọi lại (trong hàm nhận đối số)

// // function myFunction(param) {

// // }

// // function myCallback(value) {
// //     console.log('Value: ', value);
// // }

// // myFunction(myCallback);

// Array.prototype.map2 = function(callback){ //định nghĩa phương thức map2
//     let output = [];
//     let arrayLength = this.length; // gán this.length vì vòng lặp chạy nhiều lần, nếu đưa trực tiếp vào vòng lặp thì mỗi lần lặp nó đều chọc vào thwcooj tính length
//     for(let i = 0; i < arrayLength; ++i){
//         let result = callback(this[i], i); //nhan duoc index
//         output.push(result);
//     }

//     return output;
// }

// let courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// let htmls = courses.map2(function(course,index) {
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));
// // courses.map(function (course) {
// //     console.log(courses);
// // })

// //Bài tập: foreach. reduce, find, filter : áp dụng các kiến thức vòng lặp, prototype, callback để tạo ra các phương thức trên


let courses = new Array(10);
courses.push('Javascript','php');
console.log(courses);

for(let index in courses) {
    console.log(courses[index]);
}
// sync/async
// đồng bộ là chạy lần lượt, dòng nào viết trước chạy trc
// bất đồng bộ(async) là chạy không lần lượt, dòng nào xử lý nhanh hơn thì nó in ra trước

// setTimeout(function() {
//     console.log(1);
// },1000); //đây là tác vụ bất đồng bộ(async)

// console.log(2); //đây là tác vụ đồng bộ (sync)

//theo đồng bộ: thì 1 sẽ chạy trc, xong đến 2. Theo bất đồng bộ: thì 2 chạy trc, sau 1s ms chạy 1.

//như vậy async(bất đồng bộ) gồm những: setTimeout, setInterval, fetch, XMLHttpRequest, đọc file(file reading), request animation frame >> vì vậy sinh ra thằng callback để xử lý bất đồng bộ.

// khi setimeout chạy sau 1s thì thực thi callback

//callback hell : vấn đề khi sd callback : viết functon lồng function. chờ để chạy tuần tự, từng task vụ/ vì task vụ 2 sẽ lấy dữ liệu của task vụ 1.
//pyramid of doom : tổng quan khi viết code

// setTimeout(function() {
//     console.log(1); //việc 1
//     setTimeout(function() {
//         console.log(2); //việc 2. đòi hỏi việc 1 phải xong để lấy dữ liệu vc 1, sdung trong việc 2
//         setTimeout(function() {
//             console.log(3);
//             setTimeout(function() {
//                 console.log(4);
//             },1000)
//         },1000)
//     },1000)
// },1000)

//concept:

/**
 * 2 bước tạo Promise
 * 1. new Promise : khởi tạo promise
 * 2. Executor : tạo ra executor
 */

// let promise = new Promise(

//     //Executor
//     function(resolve, reject) {
//         //Logic
//         //Thành công: resolve()
//         //Thất bại: reject()

//         //Fake call API
//         reject('co loi');
//     }
// );

// promise
//     .then(function(courses){
//         console.log(courses)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
//     .finally(function(){
//         console.log('Done!')
//     })

//3 thằng này đều nhận 1 callback (function). Khi nào function được thực thi? Khi thằng promis trong executor. nếu resolve được gọi thì callback của.then được gọi. khi mà reject được gọi thì callback.catch() được gọi. và 1 trong thằng resolve or reject đc gọi thì callback của .final được gọi.

//chain :chuỗi
// function sleep(ms){
//     return new Promise((resolve) =>{
//         setTimeout(resolve,ms);
//     });
// }

// sleep(1000) // gọi hàm sleep( chế độ ngủ 1s)
//     .then(function(){
//         console.log(1); //sau 1s in ra 1
//         return sleep(1000); //delay 1s cho thằng tiếp theo
//     })
//     .then(function(){
//         console.log(2); //sau 2s in ra 2
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(3); //sau 3s in ra 3
//         return sleep(1000);
//     })

// const getTimezone = () => {
//   return new Promise((resolve, reject) => {
//     //trả về đối tượng Promise với 2 tham số 'resolve' và 'reject'
//     fetch("https://time.hidemyacc.com/") //sử dụng fetch lấy dữ liệu từ URL để gọi API
//       .then((response) => response.json()) // gọi thành công >> chuyển thành định dạng JSON
//       .then((data) => resolve(data)) // dữ liệu JSON truyền vào hàm resolve()
//       .catch((error) => reject(error));
//   });
// };

// getTimezone()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

axios.get('https://time.hidemyacc.com/')
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));


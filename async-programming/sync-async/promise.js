// promise => 
// let p1 = new Promise((resolve, reject)=>{
//     console.log("this is a promise...");
//     resolve({
//         name : "sam",
//         age : 22,
//     })
//     reject("something went wrong...")

// });
// console.log(p1);
// // p1.then((data)=>{
// //     console.log(data);
// // })
// // p1.catch((err)=>{
// //     console.log(err);
// // })

// p1.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({
//             name : "sam"
//         })
//         reject("not loading...")
//     }, 3000);
// })
// p1.then((data)=>{
//     console.log(data);
// }).catch((errr)=>{
//     console.log(errr);
// })


// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("kam ho gya ")
//         }, 3000);
//     })
// }
// function fetchData2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("kam ho gya ")
//         }, 3000);
//     })
// }
// console.log("fetching data.....");
// let result = fetchData();
// result.then((data)=>{
//     console.log("pehla data agya", data);
//     let result = fetchData2();
//     result.then((data)=>{
//         console.log("doosra data agaya", data);
//     })
// })



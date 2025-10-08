// callback is a function .

// example 1
// function hod(name, callback){
//     callback(name)
// }

// function printName(name){
//     console.log("Hello", name);
// }
// hod("sam", printName);

// example 2 
// function calculate(a,b, callback){
//     callback(a,b)
// }
// function sum(a,b){
//     console.log(a + b);
// }
// function subtract(a,b){
//     console.log(a - b);
// }

// calculate(1,3, sum)


// async nature 
// console.log("fetching data......");

// function fetchData(processData){
//     setTimeout(() => {
//         console.log("Data fetch ho chuka he ");
//         processData();
//     }, 3000);
// }

// function processData(){
//     console.log("processing with data");
// }
// fetchData(processData);

// console.log("Some other tasks....");



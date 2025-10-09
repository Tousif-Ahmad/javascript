// destructuring
// let obj = {
//     name : "sam",
//     streetAddress : 8,
//     isMarried : false,
//     address : {
//         pinCode : "2345",
//     }
// }
// destructuring
// let {name, streetAddress, isMarried, address:{pinCode}} = obj;
// console.log(name);
// console.log(streetAddress);
// console.log(isMarried);
// console.log(pinCode);

// let arr = [1,2,3];
// let [one, two, three] = arr;
// console.log(one);
// console.log(two);
// console.log(three);


// array destructuring 
// let arr = [1,2,3,"sam", null, undefined, true];
// let [one, two, three,name,,,b] = arr;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(name);
// console.log(b);

// destructuring with rest operator 
// let arr = [1,2,3,"sam"];
// let [first, second, ...rest] = arr;
// console.log(first);
// console.log(second);
// console.log(rest);


// swap 
// let a = 5;
// let b = 10;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);


// nested arrays 
// let arr = [10,20,30, [40,50]]
// let [first, second,,d] = arr;
// let [x,y] = d;
// console.log(first);
// console.log(second);
// console.log(x);


// OBJECT DESTRUCTURING 
// let obj = {
//     name : "sam",
//     age : 21,
// }
// let {name, age} = obj;
// console.log(name);
// console.log(age);


// DESTRUCTURING with rest operator 
// let obj = {
//     name : "sam",
//     age : 21,
//     city : "chitral",
//     isMArried : true,
// }
// let {name, age,...rest} = obj;
// console.log(name);
// console.log(age);
// console.log(rest);

// default values 
// let obj = {
//     name : "sam",
//     // age : 21,
//     city : "chitral",
//     isMArried : true,
// }

// let {name, age = 20} = obj;
// console.log(name);
// console.log(age);


// Renaming variables 
// let obj = {
//     name : "sam",
//     city : "chitral",
//     isMArried : true,
// }

// let {name:FullName} = obj;
// console.log(FullName);


// nested objects 
// let obj = {
//     name : "sam",
//     age : 21,
//     address : {
//         city : "chitral",
//         pinCode : "2345",
//         arr : [1,2,3,4,5],
//     }
// }
// let {name, address:{city}, arr:[a,b]} = obj;
// let {pinCode} = address;

// console.log(name);
// console.log(pinCode);
// console.log(city);
// console.log(arr);
// console.log(a);

// array destructuring in function parameters 
// function sum([a,b]){
//     // console.log(a + b);
//     return a + b;
// }
// let arr = sum([10,20]);
// console.log(arr);


// object destructuring in function parameters 
// function greet({name, age}){
//     console.log(`Hello ${name} your age is ${age}`);
// }
// let obj = {
//     name : "sam",
//     age : 21,
// }
// greet(obj);



// questions 
// q1. 
// const arr = [1,2,3];
// const obj = {...arr};
// console.log(obj);




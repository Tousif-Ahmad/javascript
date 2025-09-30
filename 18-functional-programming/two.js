// FIRST CLASS FUNCTION - HIGHER ORDER FUNCTION - CALLBACK FUNCTIONS
// function greetHello(){
//     return "Hello"
// }

// function greetUrdu(){
//     return "kese ho"
// }

// function greetWithName(fn, name){
//     return fn() + " " + name;
// }
// let result = greetWithName(greetUrdu, "sam");
// console.log(result);

//  PRACTICE QUESTIONS
// q1.
// let user = {
//     name : "sam",
//     age : 23,
// }

// function updateName(user, name){
//     let newObj = {...user, name};
//     return newObj
// }
// let result = updateName(user, "ufeez");
// console.log(result);
// console.log(user);

// let randomNumber = Math.floor(Math.random() * 10);
// function greeting(name){
//     console.log(`Hello ${name} your lucky number is ${randomNumber}`);

// }
// greeting("Hamad");

// q3. chaining
// let str = "sam";
// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr);

// q4. compose
let add2 = (num) => num + 2;
let multiply5 = (num) => num * 5;
let subtract10 = (num) => num - 10;

// let result = (subtract10(multiply5(add2(6))));
// console.log(result);

// compose => left to right
// pipe => right to left
// function compose(...fnc) {
//   return function (val) {
//     return fnc.reduceRight((acc, currFn) => {
//       return currFn(acc)
//     }, val);
    
//   };
// }


// function pipe(...fnc) {
//   return function (val) {
//     return fnc.reduce((acc, currFn) => {
//       return currFn(acc)
//     }, val);
    
//   };
// }
// // let res = compose(subtract10, multiply5, add2) (6)
// // console.log(res(10));
// // console.log(res);
// let res = pipe(subtract10, multiply5, add2) (6)
// // console.log(res(10));
// console.log(res);


// q4. create your own  map method 
let arr = [1,2,3,4,5];

let squareLogic = (r)=>{
    return r * r;
}
let calculate = function(arr, logic){
    let output = [];
    for(let i = 0; i<arr.length; i++){
        output.push(logic(arr[i]))
    }
    return output;
}

Array.prototype.ownMap = calculate;
let ans = arr.ownMap(squareLogic);
console.log(ans);
// let squareArray = calculate(arr, squareLogic);
// console.log(squareArray);
// let ans = sqaure(arr);
// console.log(ans);



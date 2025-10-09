// let name = "alpha";
// let age = 21;
// // common js SYNTAX 
// // module.exports = name;
// module.exports = {
//     name,
//     age,
// }    /* default export  */


// function sum(a,b){
//     return a + b;
// }
// function subtract(a,b){
//     return a - b;
// }
// module.exports = {
//     sum,
//     subtract,
// }

// ES6 MODULES  (default wala)

// export default{
//     sum,
//     subtract,
// }
// function sum(a,b){
//     return a + b;
// }
// function subtract(a,b){
//     return a - b;
// }

// let age = 21;
// export default age;


// NAMED EXPORT 
function divide(a,b){
    return a / b;
}
function multiply(a,b){
    return a * b;
}

export{
    multiply,
    divide,
}
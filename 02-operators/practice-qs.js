// q1. 
// let num1 = +prompt("Enter first number")
// let num2 = +prompt("Enter second number")

// console.log("Addition :", num1 + num2);
// console.log("Subtraction :", num1 - num2);
// console.log("Multiplication :", num1 * num2);
// console.log("Division :", num1 / num2);
// console.log("Modulus :", num1 % num2);

// q2. 
// let a = b =  c = 3;
// let a,b,c;
// a = b = c = 20;
// console.log(a); /* 20 */
// console.log(b); /* 20 */
// console.log(c); /* 20 */

// q3.
// let num = prompt("Enter a number ");

// let res = (num % 2 === 0) ? "even" : "Odd";
// console.log(res);

// q4. 
// let x = 5;
// x+=3;
// x-=2;
// x*=4;
// x/=6;
// x%=3;
// console.log(x);

// q5. 
// let x = 7;

// let ans = (x >= 0 && x <=10) ? "in a range" : "not in a range";
// console.log(ans);

// q6. 
// let num1 = 2;
// let num2 = 4;
// let num3 = 6;

// let ans = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
// console.log(ans);

// q7. 
// let userName = "sam";
// let userPassword = "sam123";

// let name = prompt("Enter your name ");
// let password = prompt("Enter your password ");

// if (name !== userName && password !==userPassword){
//     console.log("Email or password is incorrect");
// }
// else{
//     console.log("Successfully Logged In ");
// }

// q8. 
let a = 5;
let b = 3;
let c = 2;

let result = a++ + --b * c-- - ++a + b-- / --c;
console.log("a ", a);
console.log("b ", b);
console.log("c", c);
console.log("result ", result);
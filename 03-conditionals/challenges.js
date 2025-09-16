// q1.
// let color = "white";
// let theme = prompt("select a color (light, dark, yellow,  pink)");

// if (theme === "light"){
//     color = "white";
// }
// else if (theme === "dark"){
//     color = "black";
// }
// else if (theme === "pink"){
//     color = "pink"
// }
// else if (color === "yellow"){
//     color = "yellow";
// }

// if (theme !== "light" && theme !== "dark" && theme !== "yellow" && theme !== "pink") {
//     console.log("Invalid colors");
// }
// else{
//     console.log(`your selected theme color is ${color}`);
// }

// q2.
// let num1 = 2;
// let num2 = 42;
// let num3 = 6;

// if (num1 > num2 && num1 > num3){
//     console.log(num1);
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log(num2);
// }
// else {
//     console.log(num3);
// }

// q3.
// let role = "viewer";

// if (role === "admin"){
//     console.log("Full Access!");
// }
// else if (role === "editor"){
//     console.log("edit access");
// }
// else{
//     console.log("no access");
// }

// using switch
// let role = "viewer";
// switch(role){
//     case "admin":
//         console.log("Full Access!");
//         break;
//     case "editor":
//         console.log("edit access");
//         break;
//     case "viewer":
//         console.log("no access");
//         break;
//     default:
//         console.log("invalid");
// }

// q4.
// let num = 5;
// if (num % 3 === 0 && num % 5 === 0){
//     console.log("FizzBuzz");
// }
// else if (num % 3 === 0){
//     console.log("Fizz");
// }
// else if (num % 5 === 0){
//     console.log("Buzz");
// }

// q5.
// let num1 = 4;
// let num2 = 6;

// let operator = "+";
// switch(operator){
//     case "+":
//         console.log(`Addition : ${num1} + ${num2} = ${num1 + num2}`);
//         break;
//     case "-":
//         console.log(`Substraction : ${num1} - ${num2} = ${num1 - num2}`);
//         break;
//     case "*":
//         console.log(`Multiplication : ${num1} * ${num2} = ${num1 * num2}`);
//     case "/":
//         console.log(`Division : ${num1} / ${num2} = ${num1 / num2}`);
//         break;
//     default:
//         console.log("Invalid operation");
// }

// q6. ATM PROGRAM
let totalBalance = 500;
let userChoice = +prompt(
  "Enter your choice [1. Check Balance 2. Deposit 3. Withdraw 4. Exit]"
);
if (userChoice === 1) {
  console.log(`Your current Balance is ${totalBalance}`);
} else if (userChoice === 2) {
  let depositAmount = Number(prompt("Enter Amount to deposit"));
  if (depositAmount > 0) {
    totalBalance += depositAmount;
    console.log("Deposit Successful 😎");
    console.log(`Your total Amount after deposit ${totalBalance}`);
  } else {
    console.log("please enter a valid deposit amount");
  }
} else if (userChoice === 3) {
  let withDrawAmount = Number(prompt("Enter Amount to Withdraw"));
  if (withDrawAmount > 0 && withDrawAmount <= totalBalance) {
    totalBalance -= withDrawAmount;
    console.log("Withdraw Successful 😍");
    console.log(`Your total amount after withdraw is ${totalBalance}`);
  } else {
    console.log("please enter a valid withdraw amount");
  }
} else{
    console.log("Thanks for using ATM");
}

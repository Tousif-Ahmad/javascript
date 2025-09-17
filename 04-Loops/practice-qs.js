// q1. 
// let n = 5;
// let sum = 0;
// for (let i = 1; i<=n; i++){
//     sum = sum + i;
// }
// console.log(sum);

// q2. 
// let m = 2;
// let n = 4;
// sum = 0;
// for (let i = m; i<=n; i++){
//     sum = sum + i;
// }
// console.log(sum);


// q3.
// let num = 20;
// for(let i = 1; i<=num; i++){
//     if (i % 2 !== 0){
//         console.log(i);
//     }
// }


// q4. 
// let computerNumber = 8;
// let guess = null;


// while(guess !== computerNumber){
//     guess = Number(prompt("Enter a number : "))
//     if (isNaN(guess)){
//         alert("number is invalid, please try again!")
//     }
//     else if (guess < computerNumber){
//         alert("number is low, please try again!")
//     }
//     else if (guess > computerNumber){
//         alert("number is high, please try again!")
//     }
//     else{
//         alert("Congratulations... your guess is correct")
//     }
// }

// q5.
// let password = "alpha";
// let noOfAttempts = 0;
// let userPassword = null;

// while(userPassword !== password && noOfAttempts < 3){
//     userPassword = prompt("Enter  password ");
//     noOfAttempts++;
//     if (userPassword === password){
//         alert("Congratulations your password is correct");
//     }
//     else if (noOfAttempts >= 3){
//         alert("Your attempts are over, please try again later..")
//     }
//     else{
//         alert("Your password is incorrect, please try again");
//     }

// }

// q6. 
// let n = 6;
// let fact = 1;
// for(let i = 1; i<=n; i++){
//     fact*=i;
// }
// console.log(fact);

// q7. TEXT BASED ADVENTURE GAME 
let playAgain = "yes";

while(playAgain === "yes"){
    alert("You wake up in the dark forest")

    let userChoice = prompt("You want to go left or right?");

    if (userChoice === "left"){
        alert("You see something shiny in the mud");
        userChoice = prompt("Yo want to pick it up (yes / no)");
        if (userChoice === "yes"){
            alert("It is magical stone, you are teleported to safety!")
        }
        else {
            alert("mar gya tuu")
        }
    }
    else {
        alert("You find a cave");
        userChoice = prompt("Do you enter the cave ? (yes / no)");
        if (userChoice === "yes"){
            alert("You barely escape");
        }
        else{
            alert("Achaa raat beetega apka");
        }

    }
    userChoice = prompt("Do you want to play again ? (yes / no) ");
    playAgain = "no"
    if (userChoice === "no"){
        alert("Thanks for playing");
    }

}



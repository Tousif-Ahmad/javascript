// LOOPS => to repeat a block of code again and again.
// 1. for loop
// for (let i = 1; i<=10; i++){
//     console.log("School 4u");
// }

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 2. while loop
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// 3. do while loop
// let i = 1
// do{
//     console.log(i);
//     i++;
// }
// while(i <= 10)

// 4. forof loop => gives values
// let text = "hello Sam";
// for (let txt of text){
//     console.log(txt);
// }

// 5. forin loop => give keys in objects
// let text = "hello";
// for (let txt in text){
//     console.log(txt);
// }

// challenge 1.
// for (let i = 1; i<=100; i++){
//     if (i % 2 === 0){
//         console.log("Even", i);
//     }
// }

// challenge 2.
let str = "Hello";
let vowels = 0;
let consonents = 0;
for (let letter of str) {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u" ||
    letter === "A" ||
    letter === "E" ||
    letter === "I" ||
    letter === "O" ||
    letter === "U"
  ) {
    vowels++;
  } else {
    consonents++;
  }
}
console.log("Vowels = ", vowels);
console.log("Consonents = ", consonents);

// q1. 
// let marks = [20, 30, 40, 50, 60];
// let totalSum = marks.reduce((acc, currVal)=>{
//     return acc + currVal;
// }, 0)

// let averageMarks = totalSum / marks.length;
// console.log(`Average marks of the class is ${averageMarks}`);

// q2. 
// let arr = new Array(20).fill(0);
// console.log(arr);

// q3. 
// let arr = new Array(25).fill(0);
// arr.forEach((item, index)=>{
//     arr[index] = index + 1;
    
// })
// console.log(arr);

// q4. 
// const heroes = ["ironman", "captain", "blackwidow", "wanda", "hulk", "black panther"];
// heroes.push("spiderman");
// heroes.unshift("thor");
// console.log(heroes);

// heroes.splice(2,1,"hawkeye");
// console.log(heroes);

// let check = heroes.includes("captain");
// console.log(check);

// q5. 
// let test = "123";
// console.log(Array.isArray(test));
// console.log(Array.from(test));

// let obj = {
//     name : "ali",
// }
// console.log(Array.from(obj));

// q6
// let num = 123;
// let str = "sam";
// let obj = {
//     name : "sam",
// }
// let arr = ["sam", 22, 5.3]
// console.log(Array.of(num, str, obj, arr));

// q7. 
// let str = "sam";
// let reverseStr = str.split("").reverse().join("");

// if (str === reverseStr){
//     console.log("Palindrome string");
// }
// else{
//     console.log("Not a palindrome string");
// }

// q8. 
// let str = "hello how are you";
// let newArr = str.split(" ").map((word)=>{
//     return word.charAt(0).toUpperCase() + word.slice(1)
// })
// let newCapitalize = newArr.join(" ");
// console.log(newCapitalize);
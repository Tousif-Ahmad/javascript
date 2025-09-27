// q1. 
// console.log(typeof parseInt("123.45"));
// console.log(typeof Number("123.45"));

// console.log(parseInt("123.45px"));
// console.log(Number("123.45px"));

// q2. 
// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// q3. 
// let sum = Number((0.1 + 0.2).toFixed(3));
// console.log(typeof sum, sum);   /* decimal.js is a library */

// q4.  difference between slice and splice 
// let str = "sam";
// console.log(str.slice(0,2));

// let nums = [1,2,3,4,5];
// console.log(nums.splice(1,3));  /* 3 parameters hote hain  */

// q5. 
// let intro = "hey my name is sam";
// let finalresult = intro.split(" ").map((word)=>{
//     let reversedWord =  word.split("").reverse().join("");
//     return reversedWord;
// })
// console.log(finalresult);

// q6.
// let mixed = [1,"2",3,"4",,"23",8, "sam"];
// let sum = 0;
// mixed.forEach((item)=>{
//     if (typeof item === "number"){
//         sum = sum + item;
//     }
// })
// console.log(sum);


// q7. 
// let num = 123.43;
// console.log(Number.isInteger(num));

// q8. 
// function reverseNumber(num){
//     return Number(num.toString().split("").reverse().join(""));
// }
// let reversedNum = reverseNumber(1232);
// console.log(reversedNum);

// q9. 
// let string = "sam kam aam";
// function sortInalphabeticalOrder(str){
//     return str.split(" ").sort().join(" ")
// }
// console.log(sortInalphabeticalOrder(string));

// q10.
// let text = "sam is good at math";
// function capitalizeFirstLetter(str){
//    let resultArr =  str.split(" ").map((word)=>{
//        return word.charAt(0).toUpperCase() + word.slice(1); 
//     })
//     return resultArr.join(" ")
// }
// let a = capitalizeFirstLetter(text)
// console.log(a);

// q11. 
// function getArrayElem(arr, n){
//     if (!n){
//         return arr[0];
//     }
//     else if (n > arr.length){
//         return "itne elements to nhii he humare array me"
//     }
//     else{
//         return arr.slice(0, n)
//     }
// }
// let ans = getArrayElem([2,3,4,5],3);
// console.log(ans);

// q11. 
// let str = "samreen";
// function getOccurance(str){
//     let obj = {};
//     str.split("").forEach((letter)=>{
//         // console.log(letter);
//         if (obj.hasOwnProperty(letter)){
//             obj[letter] ++;
//         }
//         else{
//             obj[letter] = 1;
//         }
//     })
//     // console.log(obj);
//     let arr = Object.entries(obj);
//     arr.forEach((entryArr)=>{
//         console.log(`${entryArr[0]} ${entryArr[1]}`);
//     })
// }
// getOccurance(str)


// q12. 
// let arr = [1,2,3,3,5,4,5,7,7,3,7];
// function getOccurance(arr){
//     let freqObj = {};
//     arr.forEach((letter)=>{
//         // console.log(letter);
//         if (freqObj.hasOwnProperty(letter)){
//             freqObj[letter] ++;
//         }
//         else{
//             freqObj[letter] = 1;
//         }
//     })
//     // console.log(freqObj);
//     let maxFreq = Math.max(...Object.values(freqObj));
//     let keyValuePair = Object.entries(freqObj);
//     let filteredArray = keyValuePair.filter((entryArr)=>{
//         // console.log(`${entryArr[1]}`);
//         return entryArr[1] === maxFreq;
//     })
//     console.log(filteredArray);
// }
// getOccurance(arr);
// console.log(a);

// q13. 
let arr = [1,2,3,4,5];
for (let index in arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    // let temp = arr[index];
    // arr[index] = arr[randomIndex];
    // arr[randomIndex] = temp;

    // short method 
    [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]]

}
console.log(arr);

// let a = 2;
// let b = 4;

// // [a,b] = [b, a];
// // console.log(a, b);
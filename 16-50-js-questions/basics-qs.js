// q1.
// let fruits = ["apple", "mango", "orange", "banana", "pineapple"]
// function lastElemOfArr(arr){
//     return arr[arr.length - 1];
// }
// console.log(lastElemOfArr(fruits));

// q2.
// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// // let combination = [...arr1, ...arr2];
// let combination = arr1.concat(arr2)
// console.log(combination);

// q3.
// let randomNum = Math.floor(Math.random() * 19);
// console.log(randomNum);

// q4.
// let arr = [1,2,3,"sam", "uffeez", "8"];

// function getStr(arr){
//     let filteredArray = arr.filter(function(str){
//         return typeof str === "string";
//     })
//     console.log(filteredArray);
// }
// getStr(arr)

// q5.
// function maxNumber(arr){
//     console.log("Maximum number is ", Math.max(...arr));
// }
// maxNumber([1,2,3,45,65,76,98])

// q6.
// let person = {
//     name : "sam",
//     age : 22,
//     address : "chitral",
// }

// function getLength(obj){
//     let keys = Object.keys(obj);
//     return keys.length;
// }
// let noOfKeys = getLength(person);
// console.log(noOfKeys);

// q7.
// let arr = [
//     {name : "sam", gender : "female"},
//     {name : "ufeez", gender : "male"},
//     {name : "shax", gender : "male"},

// ]
// let filteredArray = arr.filter((obj)=>{
//     return obj.gender === "male";
// })
// console.log(filteredArray);

// q8.
// let arr = ["sam", "ali", "hamza", "uffezz"];
// function getUpperCase(arr) {
//   return arr.map((name) => {
//     return name.toUpperCase();
//   });
// }
// let newArr = getUpperCase(arr);
// console.log(newArr);


// q9. 
// let person = {
//     // name : "sam",
// }

// let keys = Object.keys(person);
// if (keys.length === 0){
//     console.log("object is empty");
// }
// else{
//     console.log("object is not empty");
// }

// q10. 
// let nums = [2,3,4,5];
// let doubleNums = nums.map((num)=>{
//     return num * 2;
// })
// console.log(doubleNums);

// q11. 
// let arrOfstrings = ["sam", "ufeez", "tousif", "asif"];
// let str = arrOfstrings.join(",");
// console.log(str);

// q12. 
// const falttenArr = [1, [1,2], 4];
// let newArr = falttenArr.flat(Infinity);
// console.log(newArr);

// q13. 
// let nums = [1,2,3,4,"sam", 23];
// function checkNumbersArray(arr){
//     let everyNum = arr.every((num)=>{
//         return typeof arr === "number"
//     })
//     return everyNum;
// }
// let numbers = checkNumbersArray(nums);
// console.log(numbers);

// q14. 
// function isprime(num){
//     if (num === 0 || num === 1) return false;
//     for (let i = 2; i<=Math.sqrt(num); i++){
//         if (num % i === 0) return false;
//     }
//     return true
// }
// console.log(isprime(3));

// q15. 
function removeDuplicate(arr){
    // let set = new Set(arr);
    // return [...set]

    let filteredArray = arr.filter((elem, index)=>{
        // console.log(elem, index);
        return arr.indexOf(elem) === index;
    })
    return filteredArray;
}
let remove = removeDuplicate([1,2,2,5,6,7,6,6,7]);
console.log(remove);
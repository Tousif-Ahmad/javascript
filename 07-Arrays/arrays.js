// Array => An array is a list that can store multiple values in a single values.
// let colors = ["red", "green", "blue", "yellow"];
// console.log(colors);
// let arr2 = ["ali". 23, true, undefined, null]

// let nesArray = [1,2,3,["ali", "khan", "hamza"], [true, undefined]];
// console.log(nesArray);

// ARRAY CONSTRUCTOR 
// let arr = new Array("spiderman", "thor", "Batman")

// let newArr = new Array(20).fill(0);
// console.log(newArr);


// let arr = [1,2,3,4];
// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for(let val of arr){
//     console.log(val);
// }

// for (let val in arr){
//     console.log(arr[val]);
// }


// ARRAY METHODS 
// let arr = [2, 5, "ali", 6, 8];
// arr.push(100);
// arr.pop()
// console.log(arr);

// arr.unshift(100);
// arr.shift();
// console.log(arr);

// let newArr = arr.slice(1,3);
// console.log(newArr);

// arr.splice(1,2, "sam", "samr");
// arr.splice(2)
// console.log(arr);


// let arr2 = [100,200];
// let arr3 = ["sam", "ufeez"];

// let newArr = arr.concat(arr2, arr3, "sunny");
// console.log(newArr);

// SPREAD OPERATOR 
// let newArr = [...arr, ...arr2, ...arr3, "sunny"];
// console.log(newArr);

// let fruits = ["mango", "litchie", "guava", "pinapple"];
// let test = fruits.join(" ")
// console.log(fruits);
// console.log(test);

// let test = fruits.includes("mango");
// console.log(fruits);
// console.log(test);

// let nesArray = fruits.toString();
// console.log(fruits);
// console.log(nesArray);


// console.log(fruits.indexOf("pinapple"));
// fruits.reverse();
// console.log(fruits);

// let fruits = ["mango", "litchie", "guava", "pinapple", "mango"];
// let newel = fruits.find(function(item){
//     return item === "mango";
// })
// console.log(newel);

// let heroes = ["spiderman", ["hulk", "thor"], ["Batman", "Sam"]]
// // console.log(heroes);
// let test = heroes.flat();
// // console.log(heroes);
// console.log(test);


// SORTING METHODS 
let arr = [10,5,1,20];
// let heroes = ["spiderman", "ironman", "hulk", "thor", "wanda"];
// heroes.sort();
// console.log(heroes);
arr.sort((a,b)=>{
    return b - a;
});
console.log(arr);
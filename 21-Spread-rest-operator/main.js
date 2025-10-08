// let arr = [1,2,3,4];
// let newArr = [...arr, "sam", true, undefined]
// console.log(arr);
// console.log(newArr);


// shallow copy 
// let arr = [1,2,3,4,5];
// let copy = [...arr];
// console.log(arr);
// console.log("copy array", copy);

// merging arrays 
// let arr1 = ["captain", "ironman", "Batman"];
// let arr2 = ["ironman", "spiderman"];
// let mergedArray =[...arr1, ...arr2];
// console.log(mergedArray);

// spread strings 
// let str = "samreen";
// let arr = [...str];
// console.log(arr);


// spread in function call 
// let users = ["sam", "aina", "sana"];
// function consoleUsers(user1, user2, user3){
//     console.log(user1);
//     console.log(user2);
//     console.log(user3);
// }
// consoleUsers(...users)


// spread  objects 
// let obj = {
//     name : "uffexx",
//     age : 22,
//     isMarried : false,
// }
// let obj2 = {
//     name : "sam",
//     age : 21,
//     isMarried : true,
// }

// let copyObj = {...obj};
// console.log(copyObj);



// let obj = {
//     name : "uffexx",
//     age : 22,
//     isMarried : false,
// }
// let obj2 = {
//     name2 : "sam",
//     age2 : 21,
//     isMarried2 : true,
// }
// let mergedObj = {...obj, ...obj2};
// console.log(mergedObj);


// REST OPERATOR 
// function sum(...arr){
//     // console.log(arr);
//     let sumArr = arr.reduce((acc, prev)=>{
//         return acc + prev;
//     })
//     return sumArr;
// }
// let output = sum(2,3,4,);
// console.log(output);



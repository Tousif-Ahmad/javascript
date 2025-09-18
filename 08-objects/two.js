// OBJECT METHODS 
// let obj = {
//     name : "sam",
//     age : 22,
// }
// let keys = Object.keys(obj);
// console.log(keys);

// let values = Object.values(obj);
// console.log(values);

// let entries = Object.entries(obj);
// console.log(entries);

// for (test in obj){
//     console.log(test, obj[test]);
// }


// OBJECT.ASSIGN 
// let obj = {
//     name : "sam",
//     age : 22,
// }
// let obj2 = {};
// Object.assign(obj2, obj);
// console.log(obj2);
// console.log(obj);


// let obj = {
//     name : "sam",
//     age : 22,
// }

// OBJECT FREEZE 
// Object.freeze(obj);
// obj.city = "chitral";

// OBJECT SEAL 
// delete obj.Myname
// obj.Myname = "ufeez";
// console.log(obj);

// HAS OWN PROPERTY
// console.log(obj.hasOwnProperty("age") );

// DESTRUCTURING => It is a way to extract values from objects and arrays and store in a variable.
let obj = {
    name : "sam",
    city : "chitral", 
    age : 22,
}

let {name : myname, city, age} = obj;
console.log(myname, city, age);


let arr = [1, "ali", {name : "something"}];
let [item1, item2, a] = arr;
console.log(item1, item2, a);
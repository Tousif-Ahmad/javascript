// objects => collection of key value pairs.
// let obj = {
//     name : "tokyo",
//     age : 23,
//     isMarried : false,
// }
// console.log(obj);

// THIS IS LITERAL METHOD 
// let car = {
//     brand : "lamborghini",
//     color : "red",
//     maxSpeed : 200,
//    "full name": "ali",
//     stop : function(){
//         console.log("stopping the car...");
//     },
//     start : function(){
//         console.log("Starting the car...");
//     }
// }
// console.log(car);
// console.log(car.brand);
// car.start();
// car.stop()

// console.log(car["brand"]);
// car["start"]()
// console.log(car["full name"]);

// CONSTRUCTOR METHOD 
// let obj = new Object({
//     name : "ali",

// });
// obj.age = 12;
// console.log(obj);

// ADD , UPDATE, DELETE 
// let obj = {
//     name : "ali",
//     age : 23,

// }
// obj.name = "Sam";
// obj.city = "chitral";
// delete obj.name;
// console.log(obj);


// THIS KEYWORD IN OBJECT => in case of object this refers to object itself.
let obj = {
    Myname : "sam",
    greet : function(){
        console.log(`Hello i am ${this.Myname}`);
    }

    // greet : ()=>{
    //     console.log(this);
    // }
}
obj.greet()
// DIFFERENT WAYS TO CREATE OBJECT AND USE OBJECTS
// 1. OBJECT LITERAL
// let Student = {
//     name : "sam",
//     age : 21,
//     passion : "programming",
//     introduceMySelf : function(){
//         console.log(`My name is ${this.name} , ${this.age}, ${this.passion}`);
//     }
// }

// Student.introduce();

// 2. FACTORY FUNCTION
// function Student(name, age, passion) {
//   return {
//     name: name,
//     age: age,
//     passion: passion,
//     introduceMySelf: function () {
//       console.log(`My name is ${this.name} , ${this.age}, ${this.passion}`);
//     },
//   };
// }
// let s1 = Student("sam", 21, "cooking");
// let s2 = Student("ali", 22, "coding")
// console.log(s1);


// 3. CONSTRUCTOR FUNCTION 
// function Student(name, age, passion){
//     this.name = name;
//     this.age = age;
//     this.passion = passion;
//     return this;
// }
// let s1 = new Student("sam", 21, "cook");
// let s2 = new Student("aina", 22, "learning")
// console.log(s1);
// console.log(s2);


//  CLASS SYNTAX 
class Student{
    constructor(name, age, passion){
        this.name = name;
        this.age = age;
        this.passion = passion;
        console.log(this);
    }
}
let s1 = new Student("sam", 21, "cooking");
let s2 = new Student("uffezx", 22, "coding");
console.log(s1);
console.log(s2);
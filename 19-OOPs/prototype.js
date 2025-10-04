// function Student(name, age) {
//   this.name = name;
//   this.age = age;
//   // this.introduce = function(){
//   //     console.log(`my name is ${this.name} my age is ${this.age}`);
//   // }
// }
// // console.log(Student.prototype);
// Student.prototype.introduce = function () {
//   console.log(`my name is ${this.name} my age is ${this.age}`);
// };
// let s1 = new Student("sam", 21);
// let s2 = new Student("ufeexx", 22);
// console.log(s1);
// console.log(s2);
// // s1.introduce();
// // s2.introduce();

function BankAccount(holdersName, balance = 0) {
  this.holdersName = holdersName;
  this.balance = balance;
//   this.deposit = function (balance) {
//     this.balance = this.balance + balance;
//   };
//   this.withdraw = function (balance) {
//     this.balance = this.balance - balance;
//   };
}

BankAccount.prototype.deposit = function (balance) {
  this.balance = this.balance + balance;
};
BankAccount.prototype.withdraw = function (balance) {
  this.balance = this.balance - balance;
};
let samAccount = new BankAccount("sam", 200);
let ainaAccount = new BankAccount("aina", 400);
console.log(samAccount);
console.log(ainaAccount);

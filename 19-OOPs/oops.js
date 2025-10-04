// class Car{
//     constructor(name, color, mileage){
//         this.name = name;
//         this.color = color;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log(`${this.name} is starting...`);
//     }
//     stop(){
//         console.log(`${this.name} is stopping...`);
//     }
// }
// let c1 = new Car("bmw", "darkblue", 45);
// let c2 = new Car("toyota", "green", 30);
// console.log(c1);
// console.log(c2);

// 1. ABSTRACTION AND ENCAPSULATION
// class Car{
//     #fuel = 100;

//     burnFuel(){
//         this.#fuel-=1;
//     }
//     start(){
//         this.burnFuel();
//         console.log(`Car is starting...`);
//     }
// }

// let bugatti = new Car();
// bugatti.start();
// console.log(bugatti);
// bugatti.#fuel = 1000;

// e.g 2
// class BankAccount{
//     constructor(holdersName, balance = 100){
//         this.holdersName = holdersName;
//         this.balance = balance;

//     }
//     deposit(balance){
//         this.balance += balance;
//     }

// }

// let samAccount = new BankAccount("sam", 500);
// // samAccount.deposit(500)
// // console.log(samAccount);

// INHERITANCE
// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }
//   start() {
//     console.log(`${this.brand} is starting...`);
//   }
//   stop(){
//     console.log(`${this.brand} is stopping...`);
//   }

// }

// class ElectricCar extends Car{
//     constructor(brand, color, battery){
//         super(brand, color)
//         this.battery = battery;
//     }
//     charging(){
//         console.log(`${this.brand} is charging...`);
//     }
// }
// let tesla = new ElectricCar("tesla", "black", 99);
// console.log(tesla);
// tesla.charging();
// tesla.start();
// tesla.stop();


//  POLYMORPHISM 

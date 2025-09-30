// imperative programming ..........................
// let arr = [1,2,3,4,5];
// let double = [];

// for (let i = 0; i<arr.length; i++){
//     // console.log(arr[i]);
//     let db = arr[i] * 2;
//     double.push(db);
// }
// console.log(double);
// console.log(arr);

// declarative programming ............................
// let arr = [1,2,3,4];
// let newArr = arr.map((elem)=>{
//     return elem * 2;
// })
// console.log(newArr);

//  PURE FUNCTIONS .......................
// function sum(a,b){
//     return a + b;
    
// }
// console.log(sum(1,2));

// IMPURE FUNCTIONS 
// function sum(a,b){
//     let sum = a + b;
//     console.log(sum);
// }
// sum(2,3);

// IMMUTABILITY 
// const user ={
//     name : "ali",
//     age : 21,

// }

// function replaceName(name){
//     let newObj = {...user, name};
//     return newObj;
// }
// let result = replaceName("sam");
// console.log(result);

// console.log(user);

// q2. 
// let arr = ["sam", "ayesha", "aina"];
// function removeLastItem(arr){
//     return arr.slice(0,-1);
// }
// let result = removeLastItem(arr);
// console.log(result);
// console.log(arr);

// AVOID SHARE STATE 
// let total = 0;

// function addAmount(){
//     total+=100;
// }
// addAmount(100)
// console.log(total);

// AVOID SIDE EFFECT 
// function capitalize(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// let result = capitalize("sam")
// console.log(result);

//  REUSE OR COMPOSE LOGIC 
// let name = "Tousif Ahmad";

// function createUser(str){
//     console.log("@" + str.toLowerCase().replaceAll(" ", "") + str.length);
// }
// createUser(name)

// let name = "Tousif Ahmad";
// let lower = str => str.toLowerCase();

// let removeSpaces = str => str.replaceAll(" ", "");

// let AddAtTheRate = str => "@" + str;

// function createUserName(str){
//     return AddAtTheRate(removeSpaces(lower(str)))
// }
// let result = createUserName
// (name);
// console.log(result);

// LOOSE  COUPLING 
// let endPoint = "https://www.example.com"
// function getUser(){
//     fetch(`${endPoint}/user`);
// }
// function getProduct(){
//     fetch(`${endPoint}/product`)
// }
// function getReviews(){
//     fetch(`${endPoint}/Review`)
// }

// function fetchData(endPoint, route){
//     fetch(`${endPoint}/${route}`)
// }
// fetchData(endPoint, user)
// fetchData(endPoint, product);
// fetchData(endPoint, Reviews)
// getUser(endPoint);
// getProduct(endPoint);
// getReviews(endPoint)



// function fetchData(endPoint, route){
//     fetch(`${endPoint}/${route}`)
// }
// fetchData(endPoint, user)
// fetchData(endPoint, product);
// fetchData(endPoint, Reviews)


// notification system 
// function sentEmail(user){
//     console.log("Email send to :", user.email);
// }

// function sentSms(user){
//     console.log("sms send to :", user.phone);
// }

// function sentWpSms(user){
//     console.log("Wp sms send to :", user.phone);
// }
let user = {
    name : "sam",
    email : "sam@gmail.com",
    phone : "03490953602",
}
// sentEmail(user)
// sentSms(user)
// sentWpSms(user)


// function sentMsg(msg, sentTo){
//     console.log(`${msg} ${sentTo}`);
// }
// sentMsg("Email sent to :", user.email);
// sentMsg("text msg sent to :", user.phone);
// sentMsg("Wp msg sent to :", user.phone);



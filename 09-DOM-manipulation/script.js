// FIVE PHASES OF DOM MANIPULATION
// 1. DOM ✔
// 2. SELECTION OF HTML ELEMENTS ✔
// 3. HOW TO CHANGE OR MANIPULATE HTML ✔
// 4. HOW TO THE CHANGE CSS ✔
// 5. EVENT LISTENER => event ko kaise suna jaye. ✔


// SELECTION 
// let a = document.querySelector("h1");
// console.log(a);
// let p = document.querySelector("p");
// console.log(p);

// CHANGE HTML 
// let h1 = document.querySelector("h1");
// h1.innerHTML = "I am fine thank you.."

// let para = document.querySelector("p");
// para.innerHTML = "lorem20lorem10loremloremloremloremloremloremloremloremloremlorem"

// CHANGE CSS 
// let h1 = document.querySelector("h1");
// h1.style.backgroundColor = "teal";
// h1.style.color = "black";

// EVENT LISTENER 
// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function(){
//     // alert("clicked")
//     h1.style.backgroundColor = "green"
// })

let box = document.querySelector("p");
let btn = document.querySelector("button");
let offBtn = document.querySelector(".offBtn")
btn.addEventListener("click", function(){
    box.style.scale = 1;
})
offBtn.addEventListener("click", function(){
    box.style.scale = 0.5;
})

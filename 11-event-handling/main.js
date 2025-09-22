// let decBtn = document.querySelector(".decBtn");
// let incBtn = document.querySelector(".incBtn");
// let counter = document.querySelector(".counter");

// let count = 1;
// counter.textContent = count;
// function increment() {
//   count++;
//   counter.textContent = count;
// }
// incBtn.addEventListener("click", increment);

// function decrement() {
//   if (count > 0) {
//     count--;
//     counter.textContent = count;
//   }
// }

// decBtn.addEventListener("click", decrement);


// q2
let form = document.querySelector("form");
let nameInp = document.querySelector("#userName");
let email = document.querySelector("#email");
let btn = document.querySelector("#submitBtn");
let body = document.querySelector("body");

form.addEventListener("submit", function(e){
    e.preventDefault()
    // console.log(e);
    if (!nameInp.value || !email.value){
        alert("please fill out all the fields")
        return;
    }
    let div = document.createElement("div");
    div.innerHTML = `
    <p>Name : ${nameInp.value}</p>
    <p>Email : ${email.value}</p>
    `
    body.append(div);

})
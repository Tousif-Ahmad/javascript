let userName = document.querySelector("#name")
let userEmail = document.querySelector("#email")
let userPassword = document.querySelector("#password");

let nameError = document.querySelector(".nameError")
let emailError = document.querySelector(".emailError")
let passwordError = document.querySelector(".passwordError")

userName.addEventListener("input", function(e){
    let name = e.target.value;
    // console.log(target);
    if (name.length < 3){
        nameError.textContent = "name must be at least 3 characters long";

    }
    else{
        nameError.textContent = ""
    }
})
userEmail.addEventListener("input", function(e){
    let email = e.target.value;
    if (!email.includes("@") || !email.includes(".")){
        emailError.textContent = "email is invalid"
    }
    else{
        emailError.textContent =""
    }
    // console.log(target);
})
userPassword.addEventListener("input", function(e){
    let password = e.target.value;
    // console.log(target);
    if (password.length < 6){
        passwordError.textContent = "password must be at least 6 characters long";

    }
    else{
        passwordError.textContent = ""
    }
})

let passwordInp = document.querySelector("#password");
// console.log(passwordInp.type);
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    // let passwordType = passwordInp.type;
    if (passwordInp.type === "password"){
        passwordInp.type = "text"
        btn.textContent = "Hide"
    }
    else{
        passwordInp.type = "password";
        btn.textContent = "Show";
    }

})
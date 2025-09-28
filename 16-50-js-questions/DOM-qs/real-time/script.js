let userName = document.querySelector("#name")
let userEmail = document.querySelector("#email")
let nameValue = document.querySelector(".nameValue")
let emailValue = document.querySelector(".emailValue")

userName.addEventListener("input", function(){
    let value = userName.value.trim();
    nameValue.textContent = value;
    

})
userEmail.addEventListener("input", function(){
    let value = userEmail.value;
    emailValue.textContent = value;
})
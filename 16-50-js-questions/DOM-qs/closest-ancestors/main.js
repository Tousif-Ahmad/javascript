let child = document.querySelector("#child")
child.addEventListener("click", function(e){
    // alert("click howa")
    console.log(e.target.closest(".parent"));
})
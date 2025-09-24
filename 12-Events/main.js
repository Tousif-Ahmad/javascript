// let grandParent = document.querySelector(".grand-parent");
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");

// // grandParent.addEventListener("click", function(){
// //     alert("GrandParent")
// // }, true)

// // parent.addEventListener("click", function(){
// //     alert("Parent")
// // }, true)

// // child.addEventListener("click", function(){
// //     alert("Child")
// // }, true)

// grandParent.addEventListener("click", function(e){
//     console.log("ye apka grandparent he ");
//     console.log(e.target);
//     console.log(e.currentTarget);
// })
// parent.addEventListener("click", function(e){
//     // console.log("parent pe click howa");
//     console.log("parent he ");
//     console.log(e.target);
//     console.log(e.currentTarget);
//     // e.stopPropagation();
//     // e.stopImmediatePropagation()

// })
// child.addEventListener("click", function(e){
//     // console.log("Child pe click howa");
//     console.log("child je ");
//     console.log(e.target);
//     console.log(e.currentTarget);
// })

// //          THIS 
// // parent.addEventListener("click", function(e){
// //     console.log(e.target);
// //     console.log(e.currentTarget);
// //     console.log(this);
// // })

// let container = document.querySelector(".container");
// container.childNodes.forEach((elem)=>{
//     elem.addEventListener("click", function(){
//         console.log(elem.textContent);
//     })
// })


// SECOND APPROACH 
let container = document.querySelector(".container");
container.addEventListener("click", function(e){
    if (e.target.classList.contains("box")){
        // console.log("child pe click howa");
        console.log(e.target.textContent);
    }
})
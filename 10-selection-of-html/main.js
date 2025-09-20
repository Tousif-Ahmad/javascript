// SELECTION OF HTML ELEMENTS 
// let a = document.getElementsByTagName("div");
// console.log(a);

// let heading = document.getElementById("heading");
// console.log(heading);

// let h1 = document.getElementsByClassName("hi");
// console.log(h1);

// let q = document.querySelector("#heading");
// console.log(q);

// let qa = document.querySelectorAll(".hi");
// console.log(qa);


//  MANIPULATE  THE HTML
// 1. tag name 
// let h1 = document.querySelector("h1");
// console.log(h1.tagName);
// console.log(h1.nodeName);
// console.log(h1.firstChild.nodeName);

// 2.text
// console.log(h1.innerText);
// console.log(h1.textContent);

// h1.innerText = "i am good how about you.."

// 3. element
// console.log(h1.innerHTML);

// 4. inserting 
let div = document.querySelector("div");

let a = document.createElement("p");
a.textContent = "new para";
// div.append(a)
// div.prepend()

// div.before(a);
// div.after(a)


// TO DO APP 
let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector(".addBtn");
let todoContainer = document.querySelector(".todoContainer");

let API = "https://68e4e7a58e116898997d876a.mockapi.io/api/v1/todos";
addBtn.addEventListener("click", postData);

// FUNCTION FETCH DATA 
async function fetchData() {
  todoContainer.innerHTML = "";
  let response = await fetch(API);
  let data = await response.json();
  data.forEach((obj) => {
    console.log(obj);
    // console.log(data);
    let divElem = document.createElement("div");
    divElem.className = "todo";
    divElem.innerHTML = `
        <p>${obj.text}</p>
          <div>
            <button class="deleteBtn">Delete</button>
            <button class="editBtn">Edit</button>
          </div>
        `;

    let deleteBtn = divElem.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", function () {
      deleteData(obj.id);
    });
    let editBtn = divElem.querySelector("button:last-child")
    editBtn.addEventListener("click", function(){
        let newText = prompt("Edit Task :", obj.text);
        if (newText && newText.trim()){
            updateData(obj.id, newText.trim())
        }
    })

    todoContainer.append(divElem);
  });
}

// POST DATA 
async function postData() {
  let value = taskInput.value.trim();
  if (!value) {
    alert("Please enter a task...")
  }
  let obj = {
    text: value.trim(),
  };

  let response = await fetch(API, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  //   console.log(response);
  if (response.status === 201) {
    taskInput.value = "";
    fetchData();
  }
}

// DELETE DATA 
async function deleteData(id) {
  // console.log(id);
  let response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  if (response.status === 200) {
    fetchData();
  }
}

// FUNCTION EDIT DATA 
async function updateData(id, newText) {
    let response = await fetch(`${API}/${id}`, {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify({text : newText})
    })
    if (response.status === 200){
        fetchData();
    }
}

fetchData();

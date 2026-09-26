// const inputBox = document.querySelector("#inputBox")
// const addBtn = document.querySelector("#addBtn")
// const todolist = document.querySelector("#todolist")

// const addTodo = ()=>{
//    const inputText = inputBox.value.trim();
//    if(inputText.length<=0)
//    {
//     alert("you have'nt write anything")
//     return false; 
//    }

//     const li= document.createElement("li");
//     const p= document.createElement("p");
//     p.innerHTML = `${inputBox.value}`
//     li.appendChild(p);
 
//     const deleteBtn = document.createElement("button")
//     deleteBtn.textContent="Remove";
//     deleteBtn.classList.add("btn","deleteBtn")
//     li.appendChild(deleteBtn)

//     const editBtn = document.createElement("button")
//     editBtn.textContent = "Edit"
//     editBtn.classList.add("btn","editBtn")
//     li.appendChild(editBtn)


//     todolist.appendChild(li);
//     inputBox.value="";

// }

// const updateTodo = (e)=>{ 
//     if(e.target.innerHTML==="Remove"){
//         console.log(e.target.parentElement)
//     }
// }

   


// addBtn.addEventListener('click',addTodo)
// todolist.addEventListener('click',updateTodo)

const inputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector("#addBtn");
const todolist = document.querySelector("#todolist");
let editingTodo = null;

const addTodo = () => {
    const inputText = inputBox.value.trim();

    if (inputText.length <= 0) {
        alert("You haven't written anything");
        return;
    }

    if (editingTodo) {
        editingTodo.querySelector("p").textContent = inputText;
        editingTodo = null;
        addBtn.textContent = "Add";
        inputBox.value = "";
        return;
    }

    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    todolist.appendChild(li);

    inputBox.value = "";
};

const updateTodo = (e) => {

    if (e.target.innerHTML === "Remove") {
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }
    if(e.target.innerHTML === "Edit"){
        editingTodo = e.target.parentElement;
        inputBox.value = editingTodo.querySelector("p").textContent;
        inputBox.focus();
        addBtn.textContent = "Edit";
    }


};

addBtn.addEventListener("click", addTodo);

todolist.addEventListener("click", updateTodo);
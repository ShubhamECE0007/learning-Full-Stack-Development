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

const addTodo = () => {
    const inputText = inputBox.value.trim();

    if (inputText.length <= 0) {
        alert("You haven't written anything");
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
        inputBox.value=inputBox.value = e.target.previousElementSibling.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit"
        `${inputBox.value}`=
        

    }


};

addBtn.addEventListener("click", addTodo);

todolist.addEventListener("click", updateTodo);
// let todos=[{
//     id:Date.now(),
//     text:"Go to Gym",
//     isCompleted:'false'
// },{
//      id:Date.now(),
//     text:"alk",
//     isCompleted:'false'
// },
// { id:Date.now(),
//     text:"study",
//     isCompleted:'false'}]

// const todoform = document.querySelector("#todo-form")
// const todoinput = document.querySelector("#todo-input")
// const todoList = document.querySelector("#todo-list")
// todoform.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     // console.log(todoinput.value)
//     const todoValue = todoinput.value;
//     todos.push(todoValue);
// let newTodo={
//      id:Date.now(),
//     text:todoValue,
//     isCompleted:'false'
// }
//     addTodo(todoValue);

// })
//  function renderTodo(){
//     todoList.innerHTML=""
//     todos.forEach(function (todo){
//     // const li = document.createElement("li");
//     // li.textContent = todo;
//     // todoList.append(li);
//     addTodo(todoValue);
//      })  
//  }

//  renderTodo();

//  function addTodo(todo){
// const li = document.createElement("li");
// li.textContent = todo;
//  todoList.append(li);
//  }

let todos = [
    {
        id: Date.now(),
        text: "Go to Gym",
        isCompleted: false
    },
    {
        id: Date.now() + 1,
        text: "Walk",
        isCompleted: false
    },
    {
        id: Date.now() + 2,
        text: "Study",
        isCompleted: false
    }
];

const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");


todoform.addEventListener("submit", (e) => {

    e.preventDefault();

    const todoValue = todoinput.value;

    let newTodo = {
        id: Date.now(),
        text: todoValue,
        isCompleted: false
    };

    todos.push(newTodo);

    renderTodo();

    todoinput.value = "";
});


function renderTodo() {

    todoList.innerHTML = "";

    todos.forEach(function(todo) {

        addTodo(todo);

    });
}


function addTodo(todo) {

    const li = document.createElement("li");

    // li.textContent = todo.text;
    li.innerHTML = `
    <li data-set="1" class="flex items-center gap-3 border border-slate-300 p-4 rounded-xl ">
            <li data-set="1" class="flex items-center gap-3 border border-slate-300 p-4 rounded-xl ">

                    <input type="checkbox">

                    <p class="flex-1">
                        Go To Gym
                    </p>

                    <div class=" flex gap-2 ">
                        <button class="border border-red-300">Edit</button>
                        <button>Delete</button>
                    </div>

                </li>
`

    todoList.append(li);
}

todoList.addEventListener('click',(e)=>{
    console.log(e.target)
})






// console.log("task 1");
// console.log("task 2");
// setTimeout(()=>{
//     console.log(" Shubham")
// },)

// console.log("Task 5000")

// for(let i = 0;i<100000000000;i++)
// {

// }

// let  startTime = Date.now();
// while(Date.now()-startTime<10000){

// }
// console.log("task 3")


// console.log(globalThis);
// console.log("Task 1");
// function cb(){
//     console.log("Task 7")
// }
// setTimeout(cb,3000);





// let count = 0;
// let id = setInterval(function(){
//     console.log("Hii");
//     count++;    
//     if(count>=5)     {
//         clearInterval(id)
//     }
// },1000)

const body = document.querySelector("body")


let colorStr = "0123456789abcdef"



setInterval(() => {
    let color = ""
    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * colorStr.length)
        color = color + colorStr[randomValue]

    }
    body.style.backgroundColor = `#${color}`

}, 500)
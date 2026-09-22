// Create an array of users containing name and isActive. Use filter() to get only the active users. 
// Example: 
// Input: 
// [ 
// { name: "Rahul", isActive: true }, 
// { name: "Priya", isActive: false } 
// ] 
// Output: 
// [ 
// { name: "Rahul", isActive: true } 
// ] 
let array = [
    {
        name:"Rahul",
        isActive:"true"
    },
    {
        name:"Priya",
        isActive:"false"
    }
]

let activeUser= array.filter((value)=>{
    return value.isActive ==="true"
});

console.log(activeUser);
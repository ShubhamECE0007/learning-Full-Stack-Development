// Create an array of user objects containing name and role. Use filter() to get all users whose role is 
// "developer". 
// Example: 
// Input: 
// [ 
// { name: "Rahul", role: "developer" }, 
// { name: "Priya", role: "student" } 
// ] 
// Output: 

// [ 
// { name: "Rahul", role: "developer" } 
// ] 

let credentials = [
    {
        name: "Rahul",
        role: "developer"
    }
    ,
    {
        name: "Priya",
        role: "student"
    }
]

let availableUsers = credentials.filter((value)=>{
    return value.role ==="developer"
});
console.log(availableUsers);
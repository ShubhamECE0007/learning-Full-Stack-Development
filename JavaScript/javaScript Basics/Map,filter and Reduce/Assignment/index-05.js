// 5. Transform User Data
// Given an array of user objects with properties like id, name, and email, use map() to create a new array of objects with only the id and name properties.
// Example:
// Input:
// [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" }
// ]
// Output:
// [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ]
let obj1=[
    {
       id:1,
       name:"Alice",
       email:"alice@example.com" 
    },
    {
        id:2,
        name:"Bob",
        email:"bob@example.com"
    }
];

let newObj = obj1.map((value)=>{
    return {
        id:value.id,
        name:value.name
    }
})

console.log(newObj);

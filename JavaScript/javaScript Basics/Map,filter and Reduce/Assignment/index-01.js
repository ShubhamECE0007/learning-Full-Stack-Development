// 1. Convert Product Names to Uppercase 
// Create an array of product names and use map() to create a new array where every product name is 
// converted to uppercase. 
// Example: 
// Input: 
// ["laptop", "mobile", "headphones"] 
// Output: 
// ["LAPTOP", "MOBILE", "HEADPHONES"]

// 
let productNames = ["Laptop", "Mobile", "Headphones"];
let uppercase = productNames.map((value)=>{
    return value.toUpperCase();
})
console.log(uppercase);

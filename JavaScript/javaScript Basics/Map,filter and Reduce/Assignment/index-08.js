//  Create a New Array Using map() 
// Using the same array of frontend technologies, use map() to create a new array where every technology 
// is converted to uppercase. 
// Example: 
// Input: 
// ["html", "css", "javascript"] 
// Output: 
// ["HTML", "CSS", "JAVASCRIPT"]


let technologies = ["HTML","CSS","JavaScript"];
let upperCase = technologies.map((value)=>{
    return value.toUpperCase();
})
console.log(upperCase);
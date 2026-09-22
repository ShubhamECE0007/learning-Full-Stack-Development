// 14. Filter Gmail Addresses 
// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com". 
// Example: 
// Input: 
// ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"] 
// Output: 
// ["rahul@gmail.com", "aman@gmail.com"] 

let array = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];
let gmailAddresses = array.filter((value)=>{
    return value.includes("@gmail.com");
});
console.log(gmailAddresses);
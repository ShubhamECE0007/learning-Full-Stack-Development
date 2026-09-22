// 17. Calculate the Total Quantity 
// Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total 
// quantity of all items. 
// Example: 
// Input: 
// [ 
// { name: "Laptop", quantity: 1 }, 
// { name: "Mouse", quantity: 2 } 
// ] 
// Map, Filter & Reduce in JavaScript Assignment  
// PW EARNERS : Coding and Web Development  
// By : Nishant Saini Sir 
// Output: 
// 3 

let CartItems = [
    {
        name: "Laptop",
        quantity: 1
    }, {
        name: "Mouse",
        quantity: 2
    }
];
let TotalQuantity = CartItems.reduce((accumulator,currentValue
)=>{
    accumulator= accumulator + currentValue.quantity
;
    return accumulator;
},0);
console.log(TotalQuantity);
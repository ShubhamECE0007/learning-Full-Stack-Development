// 18. Calculate Total Order Amount 
// Create an array of order objects containing amount. Use reduce() to calculate the total order amount. 
// Example: 
// Input: 
// [ 
// { amount: 500 }, 
// { amount: 1000 }, 
// { amount: 750 } 
// ] 
// Output: 
// 2250 
let arr=[
    {
        amount: 500
    },{
        amount: 1000
    },{
        amount: 750
    }
];
let totalAmount = arr.reduce((accumulator,currentValue) => {
    accumulator+=currentValue.amount;
    return accumulator;

},0);
console.log(totalAmount);
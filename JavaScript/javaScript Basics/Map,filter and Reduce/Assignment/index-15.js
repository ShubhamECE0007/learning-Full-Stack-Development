// 15. Calculate the Total Cart Price 
// Create an array of product prices and use reduce() to calculate the total price of all items in the cart. 
// Example: 
// Input: 
// [500, 1200, 300] 
// Output: 
// 2000
let productPrices = [500,1200,300];
let totalprice = productPrices.reduce((accumulator, currentValue)=>{
   accumulator = accumulator + currentValue;
   return accumulator;
});

console.log(totalprice);

// 2. Add a Currency Symbol to Prices 
// Create an array of product prices and use map() to create a new array where each price is displayed with 
// a ₹ symbol. 
// Example: 
// Input: 
// [100, 250, 500] 
// Output: 
// ["₹100", "₹250", "₹500"] 
let productPrices = [100,250,500];
let currencySymbol = productPrices.map((value)=>{
    return "₹"+value;
})
console.log(currencySymbol);
// 4. Create Updated Product Prices 
// Create an array of product prices. Use map() to create a new array where every price is increased by 
// 10%. Keep the original array unchanged. 
// Example: 
// Input: 
// [100, 200, 300] 
// Output: 
// Original: [100, 200, 300] 
// New: [110, 220, 330]
productPrices = [100,200,300];
let updatedPrices = productPrices.map((value)=>{
    return value+(value*0.1);
})
console.log(updatedPrices);
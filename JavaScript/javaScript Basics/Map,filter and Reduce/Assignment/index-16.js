// Create an array of product names and use reduce() with an accumulator to count the total number of 
// products. 
// Example: 
// Input: 
// ["Laptop", "Mouse", "Keyboard"] 
// Output: 
// 3 

let productNames = ["Laptop","Mouse","keyboard"];
let obj ={

};
productNames.forEach((value)=>{
    if(obj[value]){
        obj[value]++
    }
else{
        obj[value] = 1;
    }
});

console.log(obj)

let totalProducts = productNames.reduce((accumulator, currentValue)=>{
    accumulator = accumulator + 1;
    return accumulator;
}
,0);
console.log(totalProducts);
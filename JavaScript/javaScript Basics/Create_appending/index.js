let products = [
    {
        name:"Iphone 20",
        price: 123455
        
    },
    {
        name:"Samsung S15",
        price: 134222,
        
    },
    {
        name:"Google Pixel 6",
        price: 123098

    },
    {
        name:"One Plus 12",
        price: 135790
    }
]

let div = document.createElement("div");
let div2 = document.createElement("div2");

div.textContent = "Hello";
div2.textContent = "Hello";


let body = document.querySelector("body");
body.append(div,div2);
body.prepend(div,div2);

let product_list = document.getElementById("product-list");
// products.forEach((product) => {
//     console.log(product);
// })
products.forEach((product)=>{
    const card = document.createElement("p");
    card.textContent = `${product.name} - ${product.price}`;
    product_list.appendChild(card);
})
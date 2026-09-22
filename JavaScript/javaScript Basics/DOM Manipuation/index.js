// let btn = document.querySelector("#reveal-gift");
// let h1 = document.querySelector("#gift");

// //add event listener
// //three things to remember:eventtype,callbaack
// //addEventListner(eventype,callback)
// // btn.addEventListener('dblclick',()=>{
   
// // })
// function revealGift(event){
//     // console.log("You got your first phone")
//     h1.classList.toggle("hidden")
//     console.log(event)
//     console.log(event.target)
//     console.log(event.currentTarget)
// }
// btn1 = document.querySelector("#btn1")
// btn.addEventListener('click',revealGift)
// btn.addEventListener('click',(e)=>{
//      console.log(e);
//      console.log(e.type)
//      console.log(e.clientX)
//      console.log(e.clientY)
// })

//event Object
// let counter = 0
// function fun(e){
//     console.log
//     counter++;
//     console.log(counter);
//     if(counter<=3)
//     btn.addEventListener('click',fun)
// else{
//     btn.removeEventListener('click',fun)
// }


// }


// let outer = document.querySelector(".outer");
// let inner = document.querySelector(".inner");
// let btn2 = document.querySelector("#btn2");

// outer.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log("outer")

// })
// inner.addEventListener('click',(e)=>{
//      e.stopPropagation()
//     console.log("inner")
// })
// btn2.addEventListener('click',(e)=>{
//      e.stopPropagation()
//     console.log("btn2")

// })
// 
let products = [
    {
        id: "1",
        name: "Iphone 20",
        price: 12342,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: "2",
        name: "Samsung 15",
        price: 62324,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: "3",
        name: "MI 23",
        price: 35354,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        id: "4",
        name: "Poco 10",
        price: 43534,
        imgUrl: "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: "5",
        name: "Lava 12",
        price: 53422,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
]


let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    card.dataset.productId = product.id;
    const dltBtn = document.createElement("button");
    // const addToCartBtn = document.createElement("button");
    const addToCartBtn = document.createElement("button");
    dltBtn.textContent = "Remove product"
    addToCartBtn.textContent = "Add to cart"
    // addToCartBtn.textContent = "Add to cart"

    // dltBtn.addEventListener("click" , (e) => {
    //     e.stopPropagation()
    //     card.remove()
    // })


    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
        <div> 
          <div>
                <div> 
                    <div id="inner-div"> 

                    </div>
                </div> 
            </div>
        </div>
    </div>
    `

    // document.querySelector("inner-div").append(dltBtn)
    card.append(dltBtn)
    card.append(addToCartBtn);
    // card.append(addToCartBtn)

    productList.append(card)

})

productList.addEventListener("click", (e) => {
    e.stopPropagation();

    const dltBtn = e.target;

    // console.log(dltBtn.parentElement);
    // console.log(dltBtn.tagName);
    // console.log(dltBtn.textContent);
    if (dltBtn.tagName === "BUTTON" && dltBtn.textContent ==="Add to cart") {
        e.target.parentElement.append();
    //     e.target.parentElement.remove()
    }       
    else{
        e.target.parentElement.remove();
    }

    // console.log(dltBtn.parentElement.dataset.productId);

    if (dltBtn.textContent === "Remove product" && dltBtn.tagName === "BUTTON") {
        // dltBtn.parentElement.remove()
        // dltBtn.closest(".si
        // ngleProduct").remove()
    }

    // console.log(dltBtn.closest(".singleProduct"));

})
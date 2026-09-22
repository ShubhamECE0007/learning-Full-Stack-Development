// // Section 1 – Form and Input Events 
// 1. Handle Form Submit Event 
// Create a simple form with a name input and submit button. Use the submit event to display a message 
// when the form is submitted. 
// Example: 
// Input: 
// Name: Rahul 
// Output: 
// Form submitted successfully!

const nameInput=document.querySelector("#nameInput");
const btn=document.querySelector("#btn");  
const form=document.querySelector("#form");
const output_message=document.querySelector("#output-message")
const webInput = document.querySelector("#webInput");
const field = document.querySelector("#field");


// form.addEventListener("submit",(e)=>{
//    e.preventDefault();
//     // console.log("form submission successfully")
//  const nameValue = nameInput.value.trim();
//  if(nameValue){
//     output_message.textContent = "Form submitted successfully";
//  }
//  nameInput.value = "";
// })
//solution 1
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const nameValue = nameInput.value.trim();
//     if(nameValue){
//         output_message.textContent="Form submitted successfully" ;
//     }
//     nameInput.value = "";

// })


// question 2
// 2. Prevent Form Submission 
// Create a form with a submit button and use preventDefault() inside the submit event to stop the page 
// from refreshing. 
// Example: 
// Expected Result: 
// When the user clicks Submit, the form should not reload the page. 
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
// })


// 3. Display Input Using the input Event 
// Create an input field and use the input event to display the value entered by the user in a paragraph. 
// Form Events & Input Validation with DOM in Javascript - Assignment Solution 
// PW EARNERS : Coding and Web Development 
// By : Nishant Saini Sir 
// Example: 
// Input: 
// JavaScript 
// Output: 
// You entered: JavaScript 
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const webInput1 = webInput.value.trim();
//     const li = document.createElement("li");
//     li.textContent=`you have entered ${webInput1}`;
//     field.append(li);   
// })

// 4. Detect Changes Using the change Event 
// Create a <select> dropdown containing three programming languages. Use the change event to display 
// the selected language. 
// Example: 
// Options: 
// HTML 
// CSS 
// JavaScript 
// When JavaScript is selected: 
// Selected Language: JavaScript 

// form.addEventListener("change",(e)=>{
//     e.preventDefault();

    
    

// })

// 5. Handle the focus Event 
// Create an input field and use the focus event to change its border or background color when the user 
// clicks inside it. 
// Example: 
// Before Focus: 
// Normal input style 
// After Focus: 
// Input border changes.

// form.addEventListener("focusin",(e)=>{
//     e.preventDefault();
//     btn.classList.add("dynamic-box")
//     const btn1 = btn;
//    btn1.textContent=`
//    .dynamic-box{
//    border:1px solid red;
//    }`

//    document.head.appendChild(btn1);
// })
form.addEventListener("input",(e)=>{
e.preventdefault();

})

nameInput.addEventListener("focus", () => {
  nameInput.classList.add("dynamic-box");
});

btn.addEventListener("blur", () => {
    nameInput.classList.remove("dynamic-box");
});
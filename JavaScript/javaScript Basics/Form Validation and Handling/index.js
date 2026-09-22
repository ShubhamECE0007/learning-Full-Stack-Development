// const form = document.querySelector("#form")
// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   console.log("shubham");
// })

// const form = document.querySelector("#form")
// const btn = document.querySelector("#btn")
// btn.textContent = "Create Account"
// const username = document.querySelector("#username")
// const left = document.querySelector("#char-count")
// const bio = document.querySelector('#bio')
// const checkbox = document.querySelector("#checkbox");
// const country = document.querySelector("#country");
// const passwordHint = document.querySelector(".password-Hint")
// const password = document.querySelector("#password").value
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = document.getElementById("name").value
//   // const password = document.getElementById("password").value
//   const email = document.getElementById("email").value
//   // function isvalidateUsername(username) {
//   const isUserValid = validUserName(username);
//   if (isUserValid) {
//     console, log("Form is Valid")
//   }
//   else {
//     console.log("Form is invalid")
//   }
//   //   console.log({ username: username.value, name, password, email });

//   // }


// })
// bio.addEventListener("input", (e) => {
//   const remaining = 150 - bio.value.length;
//   left.textContent = `${remaining} character remaining`;
// })
// checkbox.addEventListener("change", (e) => {
//   console.log("hello")
// })
// username.addEventListener("focus", (e) => {
//   console.log("focus")
// })
// username.addEventListener("blur", () => {
//   console.log("blur")
// })
// password.addEventListener("focus", (e) => {
//   passwordHint.remove("hidden")

// })
// password.addEventListener("blur", (e) => {
//   passwordHint.add("hidden")
// })
// function validUserName(username) {
//   if (username.value.trim().length === 0) {
//     errorMessage.textContent = "Enter your name"
//     return false;

//   }
//   else {
//     return true;
//   }
// }

//function showError(input,errorMessage){
//input.parentElement.querySelector(".error-message").textContent = errorMessage
//}




const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#password-hint")
const password = document.querySelector("#password")

const LIMIT = 200

charCount.textContent = `${LIMIT} characters remaining`

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage
}

function clearError(input) {
    input.parentElement.querySelector(".error-message").textContent = ""
}

function validUsername(username) {
    //check 1
    if (username.value.trim().length === 0) {
        showError(username, "Please Enter you name")
        return false
    }

    //check 2
    if (username.value.trim().length < 3) {
        showError(username, "username must be at least 3 character")
        return false
    }

    clearError(username)
    return true
}

function validPassword(password) {
    //check 1
    if (password.value.trim().length === 0) {
        showError(password, "Please Enter you password")
        return false
    }

    //check 2
    if (password.value.trim().length < 8) {
        showError(password, "password must be at least 8 character")
        return false
    }

    clearError(password)
    return true
}





form.addEventListener("submit", (e) => {
    e.preventDefault();
    // const password = document.querySelector("#password").value

    const isUsernameValid = validUsername(username);// passing username element
    const isPasswordValid = validPassword(password);// passing password element

    if (isUsernameValid && isPasswordValid) {
        document.querySelector("h1").classList.remove("hidden")
    } else {
        document.querySelector("h1").classList.add("hidden")

    }
})



// bio.addEventListener("input", (e) => {
//     const remaining = LIMIT - bio.value.length;
//     charCount.textContent = `${remaining} characters remaining`;
// })

// username.addEventListener("change", (e) => {
//     console.log("change event" , username.value);
// }) 

// username.addEventListener("input", (e) => {
//     console.log("input event" , username.value);
// }) 

// checkbox.addEventListener("change", (e) => {
//     console.log(checkbox.checked);
// })

// country.addEventListener("input", (e) => {
//     console.log(country.value);
// })


// username.addEventListener("focus", (e) => {
//     console.log("focus");
// })


// username.addEventListener("blur", (e) => {
//     console.log("blur");
// })

// password.addEventListener("focus", (e) => {
//     passwordHint.classList.remove("hidden")
// })


// password.addEventListener("blur", (e) => {
//     passwordHint.classList.add("hidden")
// })
let showPassword = false;

const showHidePassword = ()=> {
    showPassword = !showPassword
    showPassword? passwordInput.setAttribute("type", "text")
    : passwordInput.setAttribute("type", "password")
}

//Creating the password input
const passwordInput = document.createElement("input")
passwordInput.setAttribute("type", "password")
passwordInput.setAttribute("placeholder", "Enter your password")
passwordInput.setAttribute("name", "password")

//Creating the email input
const emailInput = document.createElement("input")
emailInput.setAttribute("type", "email")
emailInput.setAttribute("placeholder", "Enter your email")
emailInput.setAttribute("name", "email")

//Creating the submit button
const btnLogIn = document.createElement("button")
btnLogIn.textContent = "Sign In"
btnLogIn.setAttribute("type", "submit")

//Creating the new user button
const btnNewUser = document.createElement("button")
btnNewUser.textContent = "Sign Up"
btnNewUser.setAttribute("type", "submit")

//Creating the login form
const loginForm = document.createElement("form")
loginForm.setAttribute("action", "https://url-to-your-server.com")
loginForm.appendChild(emailInput)
loginForm.appendChild(passwordInput)
loginForm.appendChild(btnLogIn)
loginForm.appendChild(btnNewUser)

// Creating user data input
let formData = {
    email: "",
    password: ""
}


//Implement the submit event
loginForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    formData = {
        email: event.target.email.value,
        password: event.target.password.value
    }

    console.log(event.submitter)
    if(event.submitter === btnLogIn){
        logInUser();
    }
    else if(event.submitter === btnNewUser){
        insertNewUser();
    }
    
    loginForm.reset();
})

//creating the show hide button
const btn = document.createElement("button")
btn.textContent = "Show/hide Password"
btn.addEventListener("click", showHidePassword)

//Adding created elements to the body
document.body.appendChild(loginForm)
document.body.appendChild(btn)

const user = {
    username: "Edwinna",
    password: "12345",
    email: "edwinna@gmail.com"
}

const insertNewUser = () =>{
    fetch("http://localhost:3000/users", {
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
    }).then((response) => {
        return response.json()
    }).then ((data) => data);
}

const logInUser = () => {
    fetch("http://localhost:3000/profile").then((response) => {
        return response.json()
    }).then((data) => {
        if(formData.email === data.email && formData.password === data.password){
            alert(`Welcome ${data.username}`)
            window.location.replace("http://127.0.0.1:5501/home.html")
        }
        else{
            alert(`Wrong credentials. Please try again.`)
        }
    })
}
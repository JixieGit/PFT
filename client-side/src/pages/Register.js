/* 
1. User clicks Sign Up button. // Need to select the button and add eventListener to it.
2. Javascript initializes register page. //Need to make it clickable only once
3. User enters personal data(username,password,email)
4. Button to Sign Up
*/

const signUp_BTN = document.getElementById("navbutton_signup")

function setAttributes(elements, attributes) {
    Object.keys(attributes).forEach(function(name) {
      elements.setAttribute(name, attributes[name]);
    })
  }


function registerUsernameForm() {
    const createDiv = document.createElement("div")
    createDiv.setAttribute("class","username_reg")
    const createInput = document.createElement("input")
    setAttributes(createInput, {
        class: "username_input",
        type: "text",
        placeholder: "Enter your username"
    })
    createDiv.appendChild(createInput)
    document.body.appendChild(createDiv)  
}
function registerPasswordForm() {
    const createDiv = document.createElement("div")
    createDiv.setAttribute("class","password_reg")
    const createInput = document.createElement("input")
    setAttributes(createInput, {
        class: "password_input",
        type: "password",
        placeholder: "Enter your password"
    })
    createDiv.appendChild(createInput)
    document.body.appendChild(createDiv) 
}
function registerEmailForm() {
    const createDiv = document.createElement("div")
    createDiv.setAttribute("class","email_reg")
    const createInput = document.createElement("input")
    setAttributes(createInput, {
        class: "email_input",
        type: "email",
        placeholder: "Enter your email"
    })
    createDiv.appendChild(createInput)
    document.body.appendChild(createDiv) 
}
function signUpBTN() {
    const createDiv = document.createElement("div")
    createDiv.setAttribute("class","button_signup")
    const createBTN = document.createElement("button")
    setAttributes(createBTN, {
        class: "button_signUp",
        type: "button",
    })
    const textBTN = document.createTextNode("Sign Up")
    createDiv.appendChild(createBTN)
    createBTN.appendChild(textBTN)
    document.body.appendChild(createDiv) 

}
function removeNodes() {
    const parentNode = document.getElementById("header_parent")
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild)
    }
}
function registerForm() {
    registerUsernameForm()
    registerPasswordForm()
    registerEmailForm()
    signUpBTN()
    removeNodes()
}
signUp_BTN.addEventListener('click', function(e) {
    registerForm()
})

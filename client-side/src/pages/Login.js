/* 
1. Login button working logic: user clicks login button and it redirects him to
separate page where login form is located at.
2.
*/

const signIn_BTN = document.getElementById("navbutton_signin")

function setAttributes(elements, attributes) {
    Object.keys(attributes).forEach(function(name) {
      elements.setAttribute(name, attributes[name]);
    })
  }


function signInUsernameForm() {
    const createDiv = document.createElement("div")
    createDiv.setAttribute("class","username_auth")
    const createInput = document.createElement("input")
    setAttributes(createInput, {
        class: "username_input",
        type: "text",
        placeholder: "Enter your username"
    })
    createDiv.appendChild(createInput)
    document.body.appendChild(createDiv)  
}
function signInPasswordForm() {
    const createDiv = document.createElement("div")
    createDiv.setAttribute("class","password_auth")
    const createInput = document.createElement("input")
    setAttributes(createInput, {
        class: "password_input",
        type: "password",
        placeholder: "Enter your password"
    })
    createDiv.appendChild(createInput)
    document.body.appendChild(createDiv) 
}
function signInBTN() {
    const createDiv = document.createElement("div")
    createDiv.setAttribute("class","button_signin")
    const createBTN = document.createElement("button")
    setAttributes(createBTN, {
        class: "button_signIn",
        type: "button",
    })
    const textBTN = document.createTextNode("Sign In")
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
function signInForm() {
    signInUsernameForm()
    signInPasswordForm()
    signInBTN()
    removeNodes()
}
signIn_BTN.addEventListener('click', function(e) {
    signInForm()
})

import { checkUsername } from "./auth.js";

// Check if logged in and update state 

const isLoggedIn = false;

if(isLoggedIn === true){
    document.querySelector('main').style.display = 'flex'
    document.querySelector('#auth').style.display = 'none'
}else{
    document.querySelector('main').style.display = 'none'
    document.querySelector('#auth').style.display = 'block'
}

// Password inputs

const passwordButtons = document.querySelectorAll('.eye-input-container div i')
const passwordInputs = document.querySelectorAll('.eye-input-container input')

passwordButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.classList.toggle('fa-eye')
        button.classList.toggle('fa-eye-slash')
        passwordInputs[index].type = passwordInputs[index].type == 'text' ? 'password' : 'text'
    })
})

// Check if input's empty and load a message
const checkInputValue = (value) => {
    if(value){
        return true
    }
    return false
}

// Prevent default for all buton
document.querySelectorAll('button:not(.input-container button)').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
    })
})

// register username button
const usernameBtn = document.querySelector('.username-btn')
const usernameMsg = document.querySelector('.same-username-message')
usernameBtn.disabled = true
document.querySelector('.choose-username input').addEventListener('keyup', (e) => {
    if(checkInputValue(e.target.value)){
        if(checkUsername(e.target.value) === true){
            usernameBtn.disabled = false
            usernameMsg.textContent = ''
        }else{
            usernameMsg.textContent = 'Please choose another username.'
            usernameBtn.disabled = true
        }
    }else{
        usernameBtn.disabled = true
        usernameMsg.textContent = ''
    }
})

// register password button
const passwordBtn = document.querySelector('.password-btn')
passwordBtn.disabled = true
const passMessage = document.querySelector('.same-password-message')
const checkPasswords = (input1, input2) => {
    if(input1 && input2){
        passwordBtn.disabled = input1 !== input2
        passMessage.textContent = input1 === input2 ? ' ' : 'Passwords do not match.'
    }else{
        passwordBtn.disabled = true
    }
}

let passInput1; let passInput2
document.querySelectorAll('.choose-password input')[0].addEventListener('keyup', (e) => {
    passInput1 = e.target.value
    checkPasswords(passInput1, passInput2)
})

document.querySelectorAll('.choose-password input')[1].addEventListener('keyup', (e) => {
    passInput2 = e.target.value
    checkPasswords(passInput1, passInput2)
})

// Login section button
const loginBtn = document.querySelector('.login-btn')
loginBtn.disabled = true
let logInput1 = ''; let logInput2 = ''
document.querySelectorAll('#loginForm input')[0].addEventListener('keyup', (e) => {
    logInput1 = e.target.value
    loginBtn.disabled = logInput1 === '' || logInput2 === ''
})

document.querySelectorAll('#loginForm input')[1].addEventListener('keyup', (e) => {
    logInput2 = e.target.value
    loginBtn.disabled = logInput1 === '' || logInput2 === ''
})


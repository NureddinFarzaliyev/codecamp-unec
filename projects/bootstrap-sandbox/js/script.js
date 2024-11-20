//! Changing Language
import { LANGUAGES, data } from "./content.js";

const setLanguage = (lang) => { 
    const {elements, nodeLists} = data
    for(let [selector, text] of Object.entries(elements)){
        document.querySelector(selector).textContent = text[lang]
    }
    for(let [query, nodeList] of Object.entries(nodeLists)){
        document.querySelectorAll(query).forEach((item, index) => {
            item.textContent = nodeList[index][lang]
        })
    }
}

const langBtn = document.querySelector('#lang-btn');
langBtn.addEventListener('click', () => {setLanguage(langBtn.textContent)})
setLanguage(LANGUAGES.EN) // Set Default Language

//! Changing Theme
const themeBtn = document.querySelector("#theme-btn")
const themeIcon = document.querySelector('#theme-btn i')
const body = document.querySelector('body')

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark')
    themeIcon.classList.toggle('fa-sun')
    themeIcon.classList.toggle('fa-moon')
    document.querySelector('footer img').src = body.classList.contains('dark') ? 'assets/img/logo.png' : 'assets/img/logo-dark.png'
})


// ! Toggle Login Dialog
const loginSection = document.querySelector('.login-section')
const toggleSection = () => {
    loginSection.classList.toggle('d-none')
    body.classList.toggle('no-vertical-scroll')
}

document.querySelector('#login-btn').addEventListener('click', toggleSection)
document.querySelector('#login-close').addEventListener('click', toggleSection)

// ! Handle Login Buttons
const passBtnsInputs = {
    '.login .btn-outline-secondary': '.login-pass-input',
    '.reg-pass-1 button': '.reg-pass-1 input',
    '.reg-pass-2 button': '.reg-pass-2 input',
}

for(let [key, value] of Object.entries(passBtnsInputs)){
    document.querySelector(key).addEventListener('click', () => {
        const inputField = document.querySelector(value)
        const eyeIcon = document.querySelector(`${key} i`)

        inputField.type = inputField.type == 'password' ? 'text' : 'password'
        eyeIcon.classList.toggle('fa-eye')
        eyeIcon.classList.toggle('fa-eye-slash')
    })
}
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
const body = document.querySelector('body')
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark')
    themeBtn.innerHTML = body.classList.contains('dark') ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>'
    document.querySelector('footer img').src = body.classList.contains('dark') ? 'assets/img/logo.png' : 'assets/img/logo-dark.png'
})
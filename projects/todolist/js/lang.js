import { supportedLanguages, data } from "./langContent.js"

const setLanguage = (lang) => { 
    for(let [selector, text] of Object.entries(data)){
        document.querySelector(selector).textContent = text[lang]
    }
}

const changeLanguage = () => {
    let LANG
    if(!localStorage.getItem('lang')){
        LANG = window.navigator.language.slice(0,2)
        localStorage.setItem('lang', LANG)
    }else{
        LANG = localStorage.getItem('lang')
        if(!LANG in supportedLanguages === false){
            setLanguage(LANG)
        }else{
            setLanguage(supportedLanguages.en)
        }
    }

    document.querySelector('.language-change button').innerHTML = LANG.toLowerCase() == supportedLanguages['en'] ? 
    supportedLanguages['az'].toUpperCase() : 
    supportedLanguages['en'].toUpperCase()
}

changeLanguage()

document.querySelector('.language-change').addEventListener('click', (e) => {
    localStorage.setItem('lang', e.target.innerHTML.toLowerCase())
    changeLanguage()
})
import { LANGUAGES, data } from "./content.js";

const langBtn = document.querySelector('#lang-btn');

const setLanguage = (lang) => {
    const {elements, nodeLists} = data[lang.toLowerCase()]

    for(let [selector, text] of Object.entries(elements)){
        document.querySelector(selector).textContent = text
    }

    for(let [query, nodeList] of Object.entries(nodeLists)){
        document.querySelectorAll(query).forEach((item, index) => {
            item.textContent = nodeList[index]
        })
    }
}

langBtn.addEventListener('click', () => {setLanguage(langBtn.textContent)})
setLanguage(LANGUAGES.EN)
import { data } from "./content.js";
// console.log(data)

const langBtn = document.querySelector('#lang-btn');

const translateNodeList = (list, arr) => {
    list.forEach((item, index) => {
        item.textContent = arr[index]
    })
}

const translateElement = (element, text) => {
    element.textContent = text
}

const setLanguage = (lang) => {
    const {langBtnContent, elements, nodeLists } = data[lang.toLowerCase()]

    for(let [_, obj] of Object.entries(elements)){
        for(let [key, value] of Object.entries(obj)){
            translateElement(document.querySelector(key), value)
        }
    }

    for(let [key, value] of Object.entries(nodeLists)){
        translateNodeList(document.querySelectorAll(key), value)
    }

    langBtn.textContent = langBtnContent;

}

langBtn.addEventListener('click', () => {
    setLanguage(langBtn.textContent)
})

setLanguage("en")
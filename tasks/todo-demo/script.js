const input = document.querySelector('input')
const form = document.querySelector('form')
const list = document.querySelector('ul')

form.onsubmit = (e) => {
    e.preventDefault()

    if(input.value == ''){return}

    const element = document.createElement('li')
    element.textContent = input.value

    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'v'
    removeBtn.onclick = () => {
        element.style.textDecoration = 'line-through'
    }

    element.appendChild(removeBtn)
    list.appendChild(element)
    input.value = ''
    
}

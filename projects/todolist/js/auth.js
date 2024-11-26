

const isLoggedIn = false;
// const isLoggedIn = true;


if(isLoggedIn === true){
    document.querySelector('main').style.display = 'flex'
    document.querySelector('#auth').style.display = 'none'
}else{
    document.querySelector('main').style.display = 'none'
    document.querySelector('#auth').style.display = 'block'
}


const passwordButtons = document.querySelectorAll('.eye-input-container div i')
const passwordInputs = document.querySelectorAll('.eye-input-container input')

passwordButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.classList.toggle('fa-eye')
        button.classList.toggle('fa-eye-slash')
        passwordInputs[index].type = passwordInputs[index].type == 'text' ? 'password' : 'text'
    })
})

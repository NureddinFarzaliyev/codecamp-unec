const DURATION = 500

const fadeOutElement = (element) => {
    element.classList.add('fade-out')
    setTimeout(() => {
        element.style.display = 'none'
    }, DURATION);
}

const fadeInElement = (element) => {
    element.classList.add('fade-in')
    element.style.display = 'block'
    
    setTimeout(() => {
        element.classList.remove('fade-in')
    }, DURATION);
}

const changeProgressBar = (index) => {
    if(document.querySelector(`.progress > div:nth-child(${index-1})`)){
        document.querySelector(`.progress > div:nth-child(${index-1})`).style.backgroundColor = "rgba(255, 255, 255, .3)"
    } 
    document.querySelector(`.progress > div:nth-child(${index})`).style.backgroundColor = "rgba(255, 255, 255, 1)"
}

const changeToNextSection = (buttonSelector, fromSelector, toSelector, toProgressIndex, callback, callbackDelay) => {
    document.querySelector(buttonSelector).addEventListener('click', () => {
        fadeOutElement(document.querySelector(fromSelector))
        if(toProgressIndex) changeProgressBar(toProgressIndex)
        else if(toProgressIndex === 0) fadeOutElement(document.querySelector('.progress'))
        setTimeout(() => {
            fadeInElement(document.querySelector(toSelector))
        }, DURATION);

        if(callback && callbackDelay){
            setTimeout(() => {
                callback()
            }, DURATION*callbackDelay);
        }else{
            callback()
        }
    })
}

// Timeline for register page loading animation
document.querySelector('#create-account-btn').addEventListener('click', () => {
    fadeOutElement(document.querySelector('.login-section'))

    setTimeout(() => {
        fadeInElement(document.querySelector('.register-intro'))
    }, DURATION);

    setTimeout(() => {
        document.querySelector('.register-intro').classList.remove('fade-in')
        fadeOutElement(document.querySelector('.register-intro'))
    }, DURATION*4);
    
    setTimeout(() => {
        fadeInElement(document.querySelector('.choose-username'))
        fadeInElement(document.querySelector('.progress'))
        changeProgressBar(1)
    }, DURATION*5);
})  

changeToNextSection('.username-btn', '.choose-username', '.choose-password', 2, () => {
    console.log(document.querySelector('.choose-username input').value)
})
changeToNextSection('.password-btn', '.choose-password', '.choose-profile', 3, () => {
    console.log(document.querySelector('.choose-password input').value)
} )
changeToNextSection('.avatar-btn', '.choose-profile', '.done-register', 4)
changeToNextSection('.submit-btn', '.done-register', '.register-loading', 0, () => {location.reload()}, 3)
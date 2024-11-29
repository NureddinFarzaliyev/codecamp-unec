const bcrypt = dcodeIO.bcrypt
const saltRounds = 10;

let userData = {
    username: '',
    password: '',
    avatar: '',
    isLoggedIn: false
}

const currentUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []

const handleDoneRegister = () => {
    document.querySelector('.done-register img').src = `./img/avatar_${userData.avatar}.png`
    document.querySelector('.profile-information h1').textContent = userData.username
}

export const checkUsername = (username) => {
    for(let user of currentUsers){
        if(user.username == username) return false
    }
    return true
}

export const handleUsername = () => {
    userData.username = document.querySelector('.choose-username input').value
}

export const handlePassword = () => {
    const pass = document.querySelector('.choose-password input').value
    try {
        bcrypt.hash(pass, saltRounds, function(err, hash) {
            if(err) throw new Error(err);
            userData.password = hash;
        });
    } catch (error) {
        console.error("error occurred while hashing password", error)
    }
}

export const handleAvatar = () => {
    const avatars = document.querySelectorAll('input[type="radio"]')
    for(let avatar of avatars){
        if(avatar.checked === true){
            userData.avatar = avatar.value
        }
    }

    handleDoneRegister()
}

export const handleRegister = () => {
    localStorage.setItem("users", JSON.stringify([...currentUsers, userData]))
    userData = {username: '',password: '',avatar: '',isLoggedIn: false}
}

// Handle login
const loginMessage = document.querySelector('.login-message')
document.querySelector('.login-btn').addEventListener('click', () => {
    const username = document.querySelectorAll('#loginForm input')[0].value
    const pass = document.querySelectorAll('#loginForm input')[1].value

    try {
        if(currentUsers.length == 0) loginMessage.textContent = 'Wrong username'
        for(let user of currentUsers){
            // Check if user exists in database for extra security
            if(user.username === username){
                // Check if user entered correct password
                bcrypt.compare(pass, user.password, function(err, res) {
                    // Throw error if necessary
                    if(err) throw new Error(err);
                    if(res === true){
                        // If password is correct,
                        loginMessage.textContent = ''
                        // Update localstorage as user is logged in
                        const updatedArr = currentUsers.map((element) => element.username === username ? {...element, isLoggedIn: true} : element)
                        localStorage.setItem('users', JSON.stringify(updatedArr))
                        localStorage.setItem('loggedInUser', JSON.stringify(user))
                        // Reload the page for changes to have effect
                        location.reload()
                    }else{
                        loginMessage.textContent = 'Wrong Password'
                    }
                });
            }else{
                loginMessage.textContent = 'Wrong Username'
            }
        }
    } catch (error) {
        console.error(error)
    }
})

// Handle logout
document.querySelector('.logout-btn').addEventListener('click', () => {
    const updatedUsers = currentUsers.map((element) => {
        return element.isLoggedIn === true ? {...element, isLoggedIn: false} : element
    })
    localStorage.setItem('users', JSON.stringify(updatedUsers))
    localStorage.removeItem('loggedInUser')
    localStorage.removeItem('lang')
    location.reload()
})

window.onload = () => {
    for(let user of currentUsers){
        if(user.isLoggedIn === true){
            const user = JSON.parse(localStorage.getItem('loggedInUser'))
            document.querySelector('.login-section').style.display = 'none'
            document.querySelector('main').style.display = 'flex'

            document.querySelector('nav img').src = `./img/avatar_${user.avatar}.png`
            document.querySelector('nav h1').textContent = user.username
        }
    }
}
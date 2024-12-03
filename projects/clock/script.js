setInterval(() => {
    const currentDate = new Date()

    document.querySelector('.minute-hand').style.rotate = `${(currentDate.getMinutes() * 60 + currentDate.getSeconds()) / 3600 * 360 - 90}deg`
    document.querySelector('.second-hand').style.rotate = `${(currentDate.getMilliseconds() + currentDate.getSeconds() * 1000) / 60000 * 360 - 90}deg`

    const minutes = currentDate.getHours() > 12 ? (currentDate.getHours() - 12) * 60 + currentDate.getMinutes() : currentDate.getHours() * 60 + currentDate.getMinutes()
    document.querySelector('.hour-hand').style.rotate = `${minutes / 720 * 360 - 90}deg`
}, 50);


setInterval(() => {
    const currentDate = new Date()
    document.querySelector('.time').textContent = currentDate.toLocaleTimeString() 
    document.querySelector('.day').textContent = currentDate.toLocaleDateString()
}, 100)
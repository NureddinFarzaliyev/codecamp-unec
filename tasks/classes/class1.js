// Losing mechanism when points are below 0

const showToast = (message, isSuccess) => {
    Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: isSuccess ? "#007E33" : "#E5342F",
          borderRadius: "10px",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}

class Game {
    constructor(name, author){
        this.name = name;
        this.author = author;

        this.points = 1000;
        this.experience = 0;

        this.char = {
            name: 'Alex',
            skill: '',
            bonus: 1
        }
    }

    //! Features
    customizeChar(field, data){
        switch (field) {
            case 'name':
                this.char.name = data
                break;
            case 'skill':
                this.char.skill = data
                break;
            case 'bonus':
                this.char.bonus = data
            default:
                break;
        }
    }

    addPoints(pts, isIncreaseXp){
        const earnedPoints = Math.round(pts*this.char.bonus)
        this.points += earnedPoints

        const earnedXp = isIncreaseXp ? Math.round(earnedPoints/1.5) : 0
        
        showToast(`+${earnedPoints}PTS (${pts} + ${earnedPoints - pts})`, true)
        showToast(`+${earnedXp}XP`, true)
        console.log(`You've earned ${earnedPoints}PTS and ${earnedXp}XP! (${pts}PTS + ${earnedPoints - pts}PTS bonus)`)

        this.addExperience(earnedXp)
    }

    removePoints(pts){
        if(this.points - pts < 0){
            this.end()
            return
        }

        this.points -= pts
        console.log(`You've lost ${pts}pts`)
        showToast(`-${pts}PTS`, false)
        updatePts()
    }

    addExperience(xp, announce){
        this.experience += xp
        updateXp()
        if(announce) {
            console.log(`You've earned ${xp}xp!`)
            showToast(`+${xp}XP`, true)
        }
    }

    //! Displaying Information
    displayCharInfo(){
        console.log(`
            Your Character is called ${this.char.name}.
            ${this.char.name} has ${this.char.skill} skill.   
            Your char gives you extra ${this.char.bonus}x bonus points. 
            You currently have ${this.points} points.
        `)
    }

    displayPointsInfo(){
        console.log(`You have ${this.points}pts`)
    }

    displayExperienceInfo(){
        console.log(`You have ${this.experience}xp.`)
    }

    //! Starting / Ending the game
    showCredits(){
        console.log(`The game "${this.name}" is created by ${this.author}`)
        window.alert(`The game "${this.name}" is created by ${this.author}`)
    }

    start(){
        console.log(`The game "${this.name}" is started. You have ${this.points} points.`)
        window.alert(`The game "${this.name}" is started. You have ${this.points} points.`)
    }

    end(){
        // console.log(`The game "${this.name}" is ended. You have finished the game with ${this.points} points.`)
        console.log("Game Over. You've lost.")
        window.alert("Game Over. You've lost.")
        this.showCredits()
    }
}


// const GeneralGame = new Game('General Game', 'John Doe')
// GeneralGame.showCredits()
// GeneralGame.start()
// GeneralGame.end()
// GeneralGame.customizeChar('name', 'nureddin')
// GeneralGame.customizeChar('skill', 'coding')
// GeneralGame.customizeChar('bonus', 1.5)
// GeneralGame.addPoints(10)
// GeneralGame.displayExperienceInfo()
// GeneralGame.displayPointsInfo()
// GeneralGame.displayCharInfo()


class LuckGame extends Game{

    rollDice(pts){
        if(pts > this.points){
            console.log("Not enough funds")
            showToast("Not enough funds", false)
            return 
        }        

        const dice = Math.floor(Math.random() * 16) + 1
        let result = 0

        console.log(`-${pts}PTS`)
        this.removePoints(pts)

        if(dice === 1){
            result = 0
        }else if (dice <= 7) {
            result = pts * 0.5
        } else if (dice <= 10) {
            result = pts
        } else if (dice <= 13) {
            result = pts * 1.5
        } else if (dice <= 15) {
            result = pts * 3
        } else if (dice <= 16) {
            result = pts * 5
        } else {
            console.log('error')
        }

        this.addPoints(result, result > pts)
        updateGame()
    }

    regularBox(){
        if(this.points < 200){
            console.log("You don't have enough funds.")
            showToast("Not Enough Funds", false)
            return
        }else{
            this.removePoints(200)
            const dice = Math.floor(Math.random() * 5) + 1
            switch (dice) {
                case 1:
                    this.addExperience(200, true)
                    break;
                case 2:
                    this.addPoints(300, true)
                    break;
                case 3:
                    this.addPoints(400, true)
                    break;
                case 4: 
                    this.addPoints(200, true)
                    break;
                case 5:
                    this.addExperience(500, true)
                    break;
                default:
                    break;
            }
        }
        updateGame()
    }

    legendaryBox(){
        if(this.points < 3000){
            console.log("You don't have enough funds.")
            showToast("Not Enough Funds", false)
            return
        }else{
            this.removePoints(3000)
            const dice = Math.floor(Math.random() * 5) + 1
            switch (dice) {
                case 1:
                    this.addExperience(1500, true)
                    break;
                case 2:
                    this.addPoints(3100)
                    break;
                case 3:
                    this.addPoints(3500, true)
                    break;
                case 4:
                    this.addExperience(3000, true)
                    break;
                case 5:
                    this.addPoints(5000, true)
                    break;
                default:
                    break;
            }
        }
        updateGame()
    }

    bonusBox(){
        if(this.points < 1500){
            console.log("You don't have enough funds.")
            showToast("Not Enough Funds", false)
            return
        }

        this.removePoints(1500)
        const dice = Math.floor(Math.random() * 23) + 1
        let bonus = 0

        if (dice === 1) {
            bonus = 0.5;
        } else if (dice === 2) {
            bonus = 3;
        } else if (dice <= 4) {
            bonus = 1.5;
        } else if (dice <= 6) {
            bonus = 2;
        } else if (dice <= 8) {
            bonus = 0.75;
        } else if (dice <= 12) {
            bonus = 1.1;
        } else if (dice <= 17) {
            bonus = 1.25;
        } else {
            bonus = 1;
        }

        this.customizeChar('bonus', bonus);
        console.log(`You've gained a new bonus point: ${bonus}x!`);
        showToast(`Your bonus point is updated to ${bonus}x!`, true)
        updateGame()
    }

}

const Lucky = new LuckGame("Lucky", "John Doe")
// Lucky.customizeChar('name', 'Steve')
// Lucky.customizeChar('bonus', 1.1)
// Lucky.customizeChar('skill', 'Coding')

// Lucky.addPoints(2000)
// Lucky.displayPointsInfo()

// Lucky.legendaryBox()
// Lucky.regularBox()

// Lucky.bonusBox()
// Lucky.displayCharInfo()

const updatePts = () => {
    document.querySelector('.points').innerText = `💲 ${Lucky.points}`
}
const updateXp = () => {
    document.querySelector('.experience').innerText = `🧪 ${Lucky.experience}`
    document.querySelector('.legendary-box').disabled = Lucky.experience < 3000
    document.querySelector('.legendary-alert').style.display = Lucky.experience < 3000 ? 'block' : 'none'
    document.querySelector('.bonus-box').disabled = Lucky.experience < 5000
    document.querySelector('.bonus-alert').style.display = Lucky.experience < 5000 ? 'block' : 'none'
}
const updateChar = () => {
    document.querySelector('.char').innerText = `👤 ${Lucky.char.name}`
    document.querySelector('.bonus').innerText = `💪 ${Lucky.char.bonus}x`
}
const updateGame = () => {
    updateChar()
    updatePts()
    updateXp()
}

updateGame()

// UI
document.querySelector('.roll').addEventListener('click', () => {
    Lucky.rollDice(document.querySelector('.roll-value').value)
    document.querySelector('.roll-value').value = ''
})
document.querySelector('.regular-box').addEventListener('click', () => {Lucky.regularBox()})
document.querySelector('.legendary-box').addEventListener('click', () => {Lucky.legendaryBox()})
document.querySelector('.bonus-box').addEventListener('click', () => {Lucky.bonusBox()})
document.querySelector('.name-btn').addEventListener('click', () => {
    if(document.querySelector('.name-input').value === '') return
    Lucky.customizeChar('name', document.querySelector('.name-input').value); 
    document.querySelector('.name-input').value = ''
    updateGame()
})





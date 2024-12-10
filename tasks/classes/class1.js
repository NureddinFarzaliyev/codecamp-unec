// Class-based game system

class Game {
    constructor(name, author){
        this.name = name;
        this.author = author;

        this.points = 0;
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

    addPoints(pts){
        const earnedPoints = Math.round(pts*this.char.bonus)
        this.points += earnedPoints

        const earnedXp = Math.round(earnedPoints/1.5)
        
        console.log(`You've earned ${earnedPoints}PTS and ${earnedXp}XP! (${pts}PTS + ${earnedPoints - pts}PTS bonus)`)

        this.displayPointsInfo()
        this.addExperience(earnedXp)
    }

    addExperience(xp){
        this.experience += xp
        this.displayExperienceInfo()
    }

    //! Displaying Information
    displayCharInfo(){
        console.log(`
            Your Character is called ${this.char.name}.
            ${this.char.name} has ${this.char.skill} skill.   
            Your char gives you extra ${this.char.bonus} bonus points. 
            You currently have ${this.points} points.
        `)
    }

    displayPointsInfo(){
        console.log(`You currently have ${this.points}pts`)
    }

    displayExperienceInfo(){
        console.log(`You have ${this.experience}xp points.`)
    }

    //! Starting / Ending the game
    showCredits(){
        console.log(`The game "${this.name}" is created by ${this.author}`)
    }

    start(){
        console.log(`The game "${this.name}" is started. You have ${this.points} points.`)
    }

    end(){
        console.log(`The game "${this.name}" is ended. You have finished the game with ${this.points} points.`)
        this.showCredits()
    }

}

const GeneralGame = new Game('General Game', 'John Doe')
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
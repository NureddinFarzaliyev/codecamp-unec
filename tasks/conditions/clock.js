const time = 0 // from 0-23

try {
    if(time >= 24 || time < 0){
        throw new Error("Time is wrong");
    }else if (time >=6 && time < 11){
        console.log("Good Morning")
    }else if (time >= 11 && time < 16){
        console.log("Good Day")
    }else if (time >= 16 && time < 19){
        console.log("Good Afternoon")
    }else if (time >= 19 && time < 22){
        console.log("Good Evening")
    }else {
        console.log("Good Night")
    }

    switch (true) {
        case time >= 24 || time < 0:
            throw new Error("Time is wrong");
        case time >=6 && time < 11:
            console.log("Good Morning")
            break
        case time >= 11 && time < 16:
            console.log("Good Day")
            break
        case time >= 16 && time < 19:
            console.log("Good Afternoon")
            break
        case time >= 19 && time < 22:
            console.log("Good Evening")
            break
        default:
            console.log("Good Night")
            break;
    }

    time >= 24 || time < 0 ? (()=>{throw new Error("Time is Wrong")})() : 
    time >=6 && time < 11 ? console.log("Good Morning") :
    time >= 11 && time < 16 ? console.log("Good Day") :
    time >= 16 && time < 19 ? console.log("Good Afternoon") :
    time >= 19 && time < 22 ? console.log("Good Evening") :
    console.log("Good Night")
} catch (error) {
    console.error(error)
}


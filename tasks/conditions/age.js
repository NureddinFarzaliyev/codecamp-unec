const age = 11

try {
    if (age < 0) {
        throw new Error("Age cannot be smaller than 0");
    }else if(age < 3){
        console.log("Infant")
    }else if(age < 13){
        console.log("Kid")
    }else if(age < 18){
        console.log("Teenager")
    }else if(age < 35){
        console.log("Young")
    }else if(age < 55){
        console.log("Middle-aged")
    }else if(age < 90){
        console.log("Old")
    }else{
        console.log("Marblestone")
    }
} catch (error) {
    console.error(error)
}


try {
    switch(true){
        case age < 0:
            throw new Error("Age cannot be smaller than 0");
        case age < 3:
            console.log("Infant");
            break;
        case age < 13:
            console.log("Kid");
            break;
        case age < 18:
            console.log("Teenager");
            break;
        case age < 35:
            console.log("Young");
            break;
        case age < 55:
            console.log("Middle-aged");
            break;
        case age < 90:
            console.log("Old");
            break;
        default:
            console.log("Marblestone")
            break;
    }
} catch (error) {
    console.error(error)
}


try {
    age < 0 ? (()=>{throw new Error("Age cannot be smaller than 0")})() : 
    age < 3 ? console.log("Infant") : 
    age < 13 ? console.log("Kid") :
    age < 18 ? console.log("Teenager") :
    age < 35 ? console.log("Young") : 
    age < 55 ? console.log("Middle-aged") :
    age < 90 ? console.log("Old") : 
    console.log("Marblestone") 
} catch (error) {
    console.error(error)
}
const hourly = 3
const hours = 10

const productOne = ['bread','water','oil']; //10
const productTwo = ['onion','milk','egg']; //20
const productThree = ['meat','cola','fruits','fish']; //40
// const productFour = productOne + productTwo
const productFour = [...productOne, ...productTwo] //70
// const productFive = productTwo + productThree //120
productFive = [...productTwo, ...productThree]

const money = hourly * hours
console.log(money)

try {
    if(money < 10){
        throw new Error("You cannot buy anything");
    }else if(money < 20){
        console.log(productOne)
    }else if(money < 40){
        console.log(productTwo)
    }else if(money < 70){
        console.log(productThree)
    }else if(money < 120){
        console.log(productFour)
    }else{
        console.log(productFive)
    }


    switch (true) {
        case money < 10:
            throw new Error("You cannot buy anything");
        case money < 20:
            console.log(productOne); 
            break;
        case money < 40:
            console.log(productTwo);
            break;
        case money < 70:
            console.log(productThree);
            break;
        case money < 120:
            console.log(productFour);
            break;
        default:
            console.log(productFive)
            break;
    }

    
    money < 10 ? (()=>{throw new Error("You cannot buy anything")})() :
    money < 20 ? console.log(productOne) :
    money < 40 ? console.log(productTwo) :
    money < 70 ? console.log(productThree) :
    money < 120 ? console.log(productFour) :
    console.log(productFive)

} catch (error) {
    console.error(error)
}

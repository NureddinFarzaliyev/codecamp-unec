const image1 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F236047%2Fpexels-photo-236047.jpeg%3Fcs%3Dsrgb%26dl%3Dclouds-cloudy-countryside-236047.jpg%26fm%3Djpg&f=1&nofb=1&ipt=133bb7c19cf9dd39b6704fe0ef8d142ebf55cfc8d36c05b530636b59daa9839f&ipo=images"
const image2 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fpicjumbo.com%2Fwp-content%2Fuploads%2Fbeautiful-nature-mountain-scenery-with-flowers-free-photo.jpg%3Fw%3D2210%26quality%3D70&f=1&nofb=1&ipt=7f04fb3d4cb1d47bbfce0a8261d95f67ec6bae111aac0aedb02f4e75d5fce5d9&ipo=images"
let a = 0

document.querySelector('button').onclick = () => {
    console.log(a)
    if(a === 0){
        document.querySelector('img').attributes[0].value = image1
        a = 1
    }else{
        document.querySelector('img').attributes[0].value = image2
        a = 0
    }
}
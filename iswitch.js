function getColorMeaning(colourName){
    let colour;
   
    switch(colour){
        case "Red":
            console.log('stop')
             break;


    case "green":
        console.log('Go')
         break;


    case "yellow":
        console.log('caution')
        break;

    default:
        console.log('Uknown color')
    }
    return colour;
}
console.log(getColorMeaning())

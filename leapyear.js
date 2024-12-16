
function leapyear(year){

    if(year%100 === 0 ? year%400===0 : year%4===0){
        console.log(year+" "+"Leap year")
    }else{
        console.log(year+" "+"is not a leap year")
    }
}

leapyear(2023);
leapyear(2024);
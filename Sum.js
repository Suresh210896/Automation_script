function add(num1,num2){
    result =num1+num2;
    console.log(result);
}
add(23,45)

function trianglearea(baselength,heightlength){
    area = 0.5*baselength*heightlength;
    console.log(area)
}

trianglearea(10,5)

// function multiplication(){

// }

let age=15;

let type= age>18 ? "adult" : "Child";

console.log(type)

let mobile = 5000;

switch(true){
    case (mobile >= 10000):
    console.log("Buy android mobile");
    break;
    case (mobile <= 5000):
        console.log("Buy basic mobile");
        break;
    
    case (mobile >= 60000):
        console.log("Buy apple mobile")
        break;
    default:
        console.log("Dont buy mobile")    


}

//multiplication
function multi(number1,number2){
    result1=number1*number2;
    result2=number1/number2;

    console.log(result1);
    console.log(result2);
}
multi(23,45)

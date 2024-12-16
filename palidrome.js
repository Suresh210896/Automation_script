
function palin(str){

    let rev="";

    for(let i=str.length-1; i>=0;i--){
        rev+=str[i]
    }
    if(rev==str){
        console.log("It is a palidrome");
    }else{
        console.log("It is not a palindrome");
    }
}

palin("malayalam")
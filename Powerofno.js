let n = [4,6,9,16,11,25];

for(let i=0;i<n.length;i++){
    let num=n[i]
    let sqrt = Math.sqrt(num)
    if(sqrt%1==0){
        console.log(num+" is a power number")
    }else{
        console.log(num+" is not a power number")
    }
}
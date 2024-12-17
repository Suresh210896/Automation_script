let str = "Hello world"

let re = str.toLowerCase().replace(/[^a-z]/g,'')

let lettercount={};

for(let chr of re){
    lettercount[chr]=(lettercount[chr]||0)+1;
}
console.log(lettercount)


// var w = window.innerWidth;
// var h = window.innerHeight;

// console.log("Window width: " + w + ", Window height: " + h);


function person(name1){
    return{
        name1,
    greeding(){
        let msg = `my name is ${this.name1}`
        console.log(msg)
    }
}
}

let t = person("suresh")

t.greeding()
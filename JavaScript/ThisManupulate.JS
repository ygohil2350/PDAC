// const movies={
//     firstname:"john",
//     lastname:"wick",
//     tags:[5,10,20,30,40,50],
//     getFullName(){
       
//         this.tags.forEach(function(ele){
//             return console.log(this.firstname + " " + ele + " " + this.lastname)
//         }.bind(this))
//     }
// }

// const result=movies
// console.log(result.getFullName())


























const data={
    fisrtname:"Yash",
    lastname:"Gohil",
    skills:["C","C++","Python","JS"],
    re(){
        this.skills.forEach(function(ele){
            console.log(`Name:${this.fisrtname}   Last Name:${this.lastname}    Skill: ${ele}`)

        }.bind({ fisrtname:"Gohil" ,lastname:"Yash"}))
    }
}

console.log(data.re())
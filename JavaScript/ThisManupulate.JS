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

// const data={
//     fisrtname:"Yash",
//     lastname:"Gohil",
//     skills:["C","C++","Python","JS"],
//     re(){
//         my=this
//         this.skills.forEach(function(ele){
//             console.log(`Name:${my.fisrtname}   Last Name:${my.lastname}    Skill: ${ele}`)

//         })
//     }
// }

// console.log(data.re())

// function cons(){
//     return console.log(this)
// }

// console.log(cons.bind({value:20})())


// function getName(){
//     console.log(this)
// }
// getName()


// function getFullName(fname,lname){
//     this.firstname=fname;
//     this.lastname=lname;
//     this.arr=[3542,2345,2346,256,5247];
//     this.get=function(){
//         this.arr.forEach((Element)=>(
//             console.log(`First Name:${this.firstname}  Last Name:${this.lastname}  Rating:${Element}`)
//         ))
//     }
// }


// const Yash=new getFullName("Yash","Gohil");
// console.log(Yash.get())






function Get(fname,fage){
    this.name=fname;
    this.age=fage;
    this.bi=[{last:"Gohil", Country:"India"},{last:"khan", Country:"Uk"},{last:"Farnandis", Country:"USA"}]
    this.fun=function(){
        this.bi.forEach((Element)=>(
            console.log(`First Name :${this.name} Last Name:${Element.last} Age:${this.age} Country:${Element.Country}  `)

        ))
    }
}


const Y=new Get("Yash",19);
console.log(Y.fun())
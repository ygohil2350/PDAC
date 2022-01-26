//This referce to the obbject it belongs  or the object which is currenty executing code
//if THIS is inside a method in an object ,THIS refers to tthe object.
// if THIS is inside a callback function pass as an argument to a method is an object , 
//THIS refers to the window object in a browser and globel object in node
//if THIS is inside a regular function ,This refers to the window object in browser and globel object in node 
// if THIS is inside a constructor function then this referse to the new objerct that is created.


function GetPersonDetails(fname,lname){
    this.firstname=fname;
    this.lastname=lname;
    this.tags=[5,10,15,20,15]
    this.getDetails=function(){
        const result=this.tags.forEach((Element)=>{   
            console.log(`First name:${this.firstname}  Last name:${this.lastname}  age:${Element}`)
        })
        
    };
};
const output=new GetPersonDetails('John',"Wick")
console.log(output.getDetails())

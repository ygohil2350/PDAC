function myfun(fname,lname){
    return fname+" "+lname;
}
console.log(myfun("Yash","Gohil"));


const bignum=(num1,num2)=>
     num1>num2?num1:num2;


console.log(bignum(86,23))


let a=0,b=1
let c
console.log(a)
console.log(b)
const y=(a,b)=>{
    for(let i=0;i<5;i++){
        c=a+b
        a=b
        b=c
        console.log(c)
    }
}
y(a,b);
console.log(c)



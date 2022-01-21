//0 1 1 2 3 5 8 
let a=0,b=1;
console.log(a)
console.log(b)
for(let i=0;i<6;i++){
    c=a+b
    a=b
    b=c
    console.log(c)
}
// arr.forEach((e)=>{
//     e//itrable element

// });



let n=8,max=0;
for(let i=1;i<=n;i++){
    if(max<n%i){
        max=n%i
    }
}
console.log(max)



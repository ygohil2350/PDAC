//Default paramiter

// const intrest=(amount,time,rate=0.1)=>{
//     console.log(amount*time*rate);
//     console.log(amount);
//     console.log(time);
// }
// intrest(10000,1,0.2);

const getsum=(...num1)=>{
    let tot=0
    num1.forEach(element => {
        tot=tot+element
    });
    return tot;
}

const result=getsum(10,20,30,40,50,60,70,80)
console.log(result)


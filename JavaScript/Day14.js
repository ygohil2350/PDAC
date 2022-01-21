//array  
const arr=[10,20,30,40,50] //its by default mutable
let add1=0;
const gettotalcost=(arr,PerBundelSize,PerBundelCost,NumOfLayer)=>{
    arr.forEach((e)=>{
        add1=add1+e;
    });
    total=(((add1*NumOfLayer)/PerBundelSize)*PerBundelCost);
    console.log(total)
}
gettotalcost(arr,10,250,4)




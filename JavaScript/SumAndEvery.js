// arr=[435,26,324,3246,7,3462]
// const result= arr.every((item)=>item>0);  //Its work like And oprater on the all conditions
// console.log(result)


// const sum=arr.some((item)=>item<=7)          //Its work like or oprater on the all conditions
// console.log(sum)

// const inc=arr.includes(7);                     //its work like find function
// console.log(inc)

// const fin=arr.find((e)=>e==324)                // it will writen the element which is satisfy the condition
// console.log(fin)                               //it will give single value
// console.log(arr)

// console.log(arr.indexOf(2))                       // will give index of given value if value not found then it will give -1


// console.log(arr.findIndex(Element=>Element>5))

// const arr1=['w','i','c','k']
// const num=arr1.join('#')
// console.log(num)


// const arr1=new Array(50000000)
// console.log(arr1.fill('retw'))



// const arr3=['a','b','c','d','e'];  
// function ar(arr3,a,b){
//     if(arr3.length<a+b || a+b<0)
//     console.log("Enter the valid off-set Value")
//     else{
//         let c;
//         c=arr3.splice(a,1)[0]
//         arr3.splice(a+b, 0, c);
//         console.log(arr3)
 
//     }
// }
// ar(arr3,2,2)
// console.log(0017)





num=43254
// let temp;
// while(num>0){
//     temp=num%10
//     console.log(temp)
//     num=num/10
// }

// console.log(num)


const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) 
let j=reversedNum(num)
console.log(j)
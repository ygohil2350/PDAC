const arr=[23,10,34,35,3462,57,527,77]
// map() filter()  find() sort() forEach() reduse()

// const ma=arr.map(Element=>{
//    return Element%2==0?Element*Element:Element
// })

// const fil=arr.filter(value=> value%2==0);

// console.log(fil)
// console.log(arr)

// let a=2
// for(let i=1;i<=10;i++)
// console.log(`${a}*${i}=${a*i}`)
// too=true
// const fi=arr.find(function (element) {
//     return element==32;})
// fi===undefined?console.log("No Element found"):console.log("Element found in arr")

const re=arr.reduce((curr,acc)=> acc+curr);
console.log(re)



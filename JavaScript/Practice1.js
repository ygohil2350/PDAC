// function yash(a,b){
//     let c=a+b
//     c=c*10
//     c=c+(a*b)
//     c=c-(a-b)
//     return c;
// }

// const x=yash(2,3)
// console.log(x)


function pal(a){
    let newarr=a.split("")
    let revarr=newarr.reverse()
    let newstr=revarr.join("")
    return newstr===a?true:false
}
pal("yash")
// function Circle(radius){
//   return{
//       radius,
//       pi:22/7,
//       drow(){
//           return radius*radius*this.pi
//       }
//   }
// }
// const result1=Circle(10).drow()
// console.log(result1)



function yash(a,b){
  return{
    a,
    b,
    amit(){
      return a-b
    }
  }
}

const y=yash(8,9)
console.log(y.amit())
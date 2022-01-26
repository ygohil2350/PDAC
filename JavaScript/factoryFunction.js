function Circle(radius){
  return{
      radius,
      pi:22/7,
      drow(){
          return radius*radius*this.pi
      }
  }
}
const result1=Circle(10).drow()
console.log(result1)

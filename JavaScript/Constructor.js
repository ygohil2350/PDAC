function Circle(radius){
    this.radius=radius
    this.pi=22/7;
    this.draw=function(){
        return this.pi*this.radius*this.radius  //IN THIS cenario this is refering to parent object
    };
    return this;
}
const cir=new Circle(5)
console.log(cir.draw())





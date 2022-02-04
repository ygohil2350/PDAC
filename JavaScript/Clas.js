class person{
    constructor(fname,lname){
        this.fname=fname;
        this.lanme=lname;
    }
    getFullName(){
        return`Name:${this.fname} Last Name:${this.lanme}`
    }
}
// let Per1=new person("Yash","Gohil")
// console.log(Per1)


class detail extends person{
constructor(fname,lname,city,contry){
    super(fname,lname);
    this.city=city;
    this.contry=contry;
}
getFullDetails(){
    return`city:${this.city} country:${this.contry}`
}
}
const second=new detail("Yash","Gohil","Nanded","India")
console.log(second.getFullName())
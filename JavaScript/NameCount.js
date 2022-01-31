const str="Maharashtra";
const arr=str.split("")
const obj={}
arr.forEach((ele)=>(obj[ele]=
obj[ele]?obj[ele] +1:1));
console.log(obj)
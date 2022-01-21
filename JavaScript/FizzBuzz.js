const fizzbizz=(num)=>{
    str=""
    if(num%3==0 && num%5==0)
    str+="FizzBuzz"
    else if(num%3==0)
    str+="Fizz"
    else if(num%5==0)
    str+= ("Buzz")
    else
    str+=num
    return str
}
num=4
let j=fizzbizz(num)
console.log(j)

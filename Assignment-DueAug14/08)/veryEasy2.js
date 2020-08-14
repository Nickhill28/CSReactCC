
let a = 98
let b = 7
console.log(a,"divides",b,"is",dividesEvenly(a,b))
a = 85
b = 4
console.log(a,"divides",b,"is",dividesEvenly(a,b))
a = 2
b = 4
console.log(a,"divides",b,"is",dividesEvenly(a,b))

function dividesEvenly(a,b){
  if(a > b){
    return (a % b === 0)?true:false
  }
  else{
  return "saying divident should be greater than divisor"
}
}
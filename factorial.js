// Factorial formula: 
//    n! = n × (n – 1) × (n – 2) × … × 1 = n × (n – 1)!
// EX: 4! = 4 x 3 x 2 x 1 

function recursiveFactorial(current_num) {
  if(current_num === 1 || current_num === 0) {
    return 1
  }
  let result = current_num * factorial(current_num - 1)
  return result
}

console.log(recursiveFactorial(5))

//module.exports = factorial;

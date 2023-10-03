// Factorial formula: 
//    n! = n × (n – 1) × (n – 2) × … × 1 = n × (n – 1)!
// EX: 4! = 4 x 3 x 2 x 1 

// For Test
function factorial(num) {
    // BASE CASE
    if(current_num === 1 || current_num === 0) {
      return 1
    }
    let result = current_num * recursiveFactorial(current_num - 1);
    return result
}

// Recursion
function recursiveFactorial(current_num) {
  // BASE CASE
  if(current_num === 1 || current_num === 0) {
    return 1
  }
  let result = current_num * recursiveFactorial(current_num - 1);
  return result
}

// While Loop
function whileFactorial(current_num) {
  if(current_num === 1 || current_num === 0) {
    return 1
  }
  let result = current_num;
  while(current_num > 1) {
    result = result * (current_num - 1)
    console.log("current result:" + current_num)
    current_num = current_num - 1
  }
  return result
}

// For Loop
function forFactorial(current_num) {
  if(current_num === 1 || current_num === 0) {
    return 1
  }
  let result = current_num
  for(let i = current_num - 1; i > 1; i--) {
    result = result * i
    console.log("current i: ", i, "\ncurrent result: ", result)
  }
  return result
}

// console.log(forFactorial(5))
// console.log(whileFactorial(5))
// console.log(recursiveFactorial(5))

// module.exports = factorial;

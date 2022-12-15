//Define a function that takes an integer argument and returns 
//a logical value true or false depending on if the integer is a prime.

function isPrime(num) {
  if(num < 2) {
    return false
  }
  if(num === 2) {
    return true
  }

  const maximumDividor = Math.sqrt(num) + 1
  for (var i = 2; i < maximumDividor; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return true;
}

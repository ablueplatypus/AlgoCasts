// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let num = 1; num <=n; num++) {
    var isDivByThree = num % 3 === 0;
    var isDivByFive = num % 5 === 0;
    if (isDivByThree && isDivByFive) {
      console.log('fizzbuzz')
    } else if (isDivByThree) {
      console.log('fizz')
    } else if (isDivByFive) {
      console.log('buzz')
    } else {
      console.log(num)
    }
  }
}



module.exports = fizzBuzz;

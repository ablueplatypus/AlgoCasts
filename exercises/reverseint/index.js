// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '')
}

function reverseInt(n) {
  // Lesson Answer
  let answer;
  answer = n.toString().split('').reverse().join('')

return parseInt(answer) * Math.sign(n);
}

module.exports = reverseInt;

// First Solution
// let numStr = n + ''
// let arr = numStr.split('')
// let answer;
// if (arr[0] === '-') {
//     arr.shift()
//    answer = -arr.reverse().join('')
// } else {
//   answer = parseInt(numStr.split('').reverse().join(''))
// }
// return answer;

// Second Solution
// let str;
// let arr;
// let answer;
// if(Math.sign(n) === -1) {
//   str = n.toString()
//   arr = str.split('')
//   arr.shift()
//   answer = -arr.reverse().join('')
// } else {
//  str = n.toString()
// answer = parseInt(reverse(str))
// }
// return answer;

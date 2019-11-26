// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /* REDUCED SOLUTION */
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '')

}

// reverse('abcdefg')

module.exports = reverse;

// loop over the string.
// need a variabel that will hold the new string reversed.
  /* FOR LOOP SOLUTION */
  // let reversed = '';
  //  // start at the end of the string string length - 1.
  // for(let i = str.length - 1; i >= 0; i--) {
  //   // redefine reversed to equal each index of the string.
  //   reversed += str[i]
  // }
  // return reversed;

/* FOR OF SOLUTION */
  // let reversed = '';
	// for (let i of str) {
  //   // order here matters! You cannot add a blank string and then the character of the string.
	// 	reversed = i + reversed
	// }
  // return reversed

  // Simple solution:
  // let answer = str.split('').reverse().join('')
  // return answer;

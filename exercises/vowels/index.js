// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowels = [ 'a', 'e', 'i', 'o', 'u'];

  let answer = str.toLowerCase().split('').filter(letter => {
    return vowels.includes(letter)
  })
  return answer.length;
  }


module.exports = vowels;

// function vowels(str) {
//   let count = 0;
//   const vowels = 'aeiou';
//   const checker = ['a', 'e','i','o','u'];
//   // for (let char of str.toLowerCase()) {
//   //    if(vowels.includes(char)){
//   //     count += 1
//   //    }
//   //   }
//   str.toLowerCase().split('').forEach(letter => {
//     // if the checker array includes the letter in the string
//     if(checker.includes(letter)) {
//       //increase the count.
//       count++
//     }
//   })
//     return count;
//   }

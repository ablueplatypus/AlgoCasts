// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  // Making the character map in an object.
    for (let char of str) {
      if(charMap[char]) {
        charMap[char]++
      } else {
        charMap[char] = 1
      }
    }

    // looping over that object with for in.
    for (let char in charMap) {
      // if charMap at this character is greater then maxChar
      // we will resign max number to the new number
      // we will also reasign the maxChar to that character
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
    return maxChar
}

module.exports = maxChar;
// let arr = Object.keys(obj)
//  let answer = arr.reduce(a, b) => {
//    if(obj[a] > obj[b])  {
//      return a
//    } else {
//      return b
//    }
//  }
//  return answer;

// function maxChar(str) {
//   let obj = {};
//   let letters = str.split('')
//   let max = 0;
//   for(let i = 0; i < letters.length; i++) {
//     if(obj[letters[i]]) {
//       obj[letters[i]]++
//     } else {
//       obj[letters[i]] = 1
//     }
//   }
//
//   for(let char in obj) {
//     if(obj[char] > max) {
//       max = obj[char]
//       obj = char
//     }
//   }
//    return obj;
// }

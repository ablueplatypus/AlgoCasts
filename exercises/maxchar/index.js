// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let letters = str.split('')
  let max = 0;
  for(let i = 0; i < letters.length; i++) {
    if(obj[letters[i]]) {
      obj[letters[i]]++
    } else {
      obj[letters[i]] = 1
    }
  }

  for(let char in obj) {
    if(obj[char] > max) {
      max = obj[char]
      obj = char
    }
  }
   return obj;
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

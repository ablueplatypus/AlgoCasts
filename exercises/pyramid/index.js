// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// for recrusve solution we need to understand the base case
// we also want to ensure that we have the correct arguments in the function

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }
// check to see if the level string has a length of  2 * n -1
// This is the mid point of the row.
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1)
  }
  const midpoint = Math.floor((2 * n -1) / 2);
  let add;
  
  // if the length of the level string is grater then or equal the difference between midpoint - row.
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add)
}

module.exports = pyramid;

// function pyramid(n) {
//   // Step 3 need to calcualte the mid point of the row
//   const midpoint = Math.floor((2 * n - 1) / 2)
//
//   for(let row = 0; row < n; row++) {
//    // create an emtpy string stair
//    let step = '';
//    // from 0 to ??? iterate through columns
//    // this will start at zero and finsish at
//    for(let col = 0; col < 2 * n - 1; col++) {
//      if(midpoint - row <= col && midpoint + row >= col) {
//        step += '#';
//      } else {
//        step += ' ';
//      }
//    }
//    console.log(step)
//  }
//
// }

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  // Base case
  // if row equals n the we have hit the end of our problem
  if (row === n) {
    return;
  }
  // check if n is equal to stair.length when we hit the end of the row
  if(n === stair.length) {
    console.log(stair);
    //when we hit the end of the row we are increasing row by 1
    return steps(n, row + 1)
  }

  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }

// Tinray opirator option
stair.length <= row ? stair += '#' : stair += ' '

  steps(n, row, stair);
}

module.exports = steps;

// // From 0 to n iterate through rows
// for(let row = 0; row < n; row++) {
//   // create an emtpy string stair
//   let stair = '';
//   // from 0 to n iterate through columns
//   for(let col = 0; col < n; col++) {
//     if(col <= row) {
//       stair += '#';
//     } else {
//       stair += ' ';
//     }
//   }
//   console.log(stair)
// }

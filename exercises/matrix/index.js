// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [];
  // starting at 1 in the arrays.
  let counter = 1;

  // first we have to push anpther array into the first array.
  for(let i = 0; i < n; i++) {
    results.push([])
  }
  // need to calcualte the start column, end column start row and the end column.

  let startColumn = 0;
  let endColumn = n - 1; //last array in the  matrix.
  let startRow = 0;
  let endRow = n - 1;

  //We need a condition for fill out our array matrix.
  // This is similar to creating the matrix and code in your Tetris project.
  while(startColumn <= endColumn && startRow <= endRow) {
    // This is where we will create our rows and column matrix.
    //Top row we want to start at the start startColumn end at end column go up by 1.
    for(let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++
    }
    // we created the first row so we need to increment it.
    startRow++
    // Next we need to create the far right most column
    for(let i = startRow; i <= endRow; i++) {
      // placed the numbers in the end column
      //results [i] [n-1] = counter
      results[i][endColumn] = counter;
      //count will go up by one for each end column
      counter++;
    }
    //we are in the last column so we want to decriment from the last column to move to the first.
    endColumn--;
    // repeat these steps for the bottom row and the first column
    //Bottom row
    for(let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++
    }
    endRow--;

    //first column
    for(let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++
    }
    // finally decrease first row
    startColumn++;

  } //end of while loop
console.log(results)
return results

}

module.exports = matrix;


// let results = [];
// let counter = 1;
//
// for(let i = 0;  i < n; i++ ) {
//   results.push([])
// }
// // need to calcualte the start column, end column, start row and end column.
// let startColumn = 0;
// let endColumn = n - 1;
// let startRow = 0;
// let endRow = n - 1;
//
// while (startColumn <= endColumn && startRow <= endRow) {
//   // Top Row
//   for (let i = startColumn; i <= endColumn; i++) {
//     results[startRow][i] = counter;
//     counter++;
//   }
//   startRow++;
//   // Right column
//   for(let i = startRow; i <= endRow; i++) {
//     results[i][endColumn] = counter;
//     counter++;
//   }
//   endColumn--;
//   //Bottom row
//   for(let i = endColumn;  i >= startColumn; i--) {
//     results[endRow][i] = counter;
//     counter++;
//   }
//   endRow--;
//   // First column
//   for(let i= endRow; i >= startRow; i--) {
//     results[i][startColumn] = counter;
//     counter++;
//   }
//   startColumn++;
// }
//
// console.log(results)
// return results

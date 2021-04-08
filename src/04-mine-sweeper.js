/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let countMine = 0;
  const matrixMine = [];
  for (let i = 0; i < matrix.length; i++) {
    matrixMine.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      if (j - 1 >= 0) {
        if (matrix[i][j - 1]) countMine++;
        if (i - 1 >= 0 && matrix[i - 1][j - 1]) countMine++;
        if (i <= matrix.length - 2 && matrix[i + 1][j - 1]) countMine++;
      }
      if (j + 1 < matrix[0].length) {
        if (matrix[i][j + 1]) countMine++;
        if (i - 1 >= 0 && matrix[i - 1][j + 1]) countMine++;
        if (i <= matrix.length - 2 && matrix[i + 1][j + 1]) countMine++;
      }
      if (i - 1 >= 0 && matrix[i - 1][j]) countMine++;
      if (i <= matrix.length - 2 && matrix[i + 1][j]) countMine++;
      matrixMine[i][j] = countMine || 0;
      countMine = 0;
    }
  }
  return matrixMine;
}

module.exports = minesweeper;

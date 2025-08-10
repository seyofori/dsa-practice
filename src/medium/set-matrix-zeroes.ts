import assertTest from "../assert-test"

/**
 * Set Matrix Zeroes
 *
 * Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 *
 * Example:
 * Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: [[1,0,1],[0,0,0],[1,0,1]]
 *
 * Follow up:
 * - A straightforward solution using O(mn) space is probably a bad idea.
 * - A simple improvement uses O(m + n) space, but still not the best solution.
 * - Could you devise a constant extra space solution?
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(1)
 */

function setZeroes(matrix: number[][]): void {
  // TODO: Implement the solution
  // Use first row and first column as markers
  // Need special flags for first row and first column themselves

  const m = matrix.length
  const n = matrix[0].length

  let firstRowHasZero = false
  let firstColHasZero = false

  // Check if first row has zero
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true
      break
    }
  }

  // Check if first column has zero
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true
      break
    }
  }

  // Use first row and column as markers for other rows/columns
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0 // Mark row
        matrix[0][j] = 0 // Mark column
      }
    }
  }

  // Set zeros based on markers
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  // Handle first row
  if (firstRowHasZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0
    }
  }

  // Handle first column
  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }
}

// Helper function to deep clone matrix for testing
function cloneMatrix(matrix: number[][]): number[][] {
  return matrix.map((row) => [...row])
}

// Test cases
const test1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]
const expected1 = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
]
const test1Clone = cloneMatrix(test1)
setZeroes(test1Clone)
assertTest(test1Clone, expected1, "Set zeros - single zero in middle")

const test2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]
const expected2 = [
  [0, 0, 0, 0],
  [0, 4, 5, 0],
  [0, 3, 1, 0],
]
const test2Clone = cloneMatrix(test2)
setZeroes(test2Clone)
assertTest(test2Clone, expected2, "Set zeros - zeros in first row")

const test3 = [[1]]
const expected3 = [[1]]
const test3Clone = cloneMatrix(test3)
setZeroes(test3Clone)
assertTest(test3Clone, expected3, "Set zeros - single element, no zero")

const test4 = [[0]]
const expected4 = [[0]]
const test4Clone = cloneMatrix(test4)
setZeroes(test4Clone)
assertTest(test4Clone, expected4, "Set zeros - single zero element")

const test5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
const expected5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
const test5Clone = cloneMatrix(test5)
setZeroes(test5Clone)
assertTest(test5Clone, expected5, "Set zeros - no zeros in matrix")

const test6 = [
  [0, 0, 0],
  [1, 2, 3],
  [4, 5, 6],
]
const expected6 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]
const test6Clone = cloneMatrix(test6)
setZeroes(test6Clone)
assertTest(test6Clone, expected6, "Set zeros - first row all zeros")

const test7 = [
  [1, 2, 3],
  [0, 5, 6],
  [7, 8, 9],
]
const expected7 = [
  [0, 2, 3],
  [0, 0, 0],
  [0, 8, 9],
]
const test7Clone = cloneMatrix(test7)
setZeroes(test7Clone)
assertTest(test7Clone, expected7, "Set zeros - zero in first column")

const test8 = [
  [1, 0],
  [2, 3],
]
const expected8 = [
  [0, 0],
  [2, 0],
]
const test8Clone = cloneMatrix(test8)
setZeroes(test8Clone)
assertTest(test8Clone, expected8, "Set zeros - 2x2 matrix with zero")

const test9 = [
  [1, 2],
  [3, 4],
]
const expected9 = [
  [1, 2],
  [3, 4],
]
const test9Clone = cloneMatrix(test9)
setZeroes(test9Clone)
assertTest(test9Clone, expected9, "Set zeros - 2x2 matrix no zeros")

const test10 = [
  [0, 1],
  [2, 3],
]
const expected10 = [
  [0, 0],
  [0, 3],
]
const test10Clone = cloneMatrix(test10)
setZeroes(test10Clone)
assertTest(test10Clone, expected10, "Set zeros - zero at top-left")

const test11 = [
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [9, 10, 11, 12],
]
const expected11 = [
  [1, 0, 3, 4],
  [0, 0, 0, 0],
  [9, 0, 11, 12],
]
const test11Clone = cloneMatrix(test11)
setZeroes(test11Clone)
assertTest(test11Clone, expected11, "Set zeros - zero in middle row")

const test12 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
]
const expected12 = [
  [1, 2, 0],
  [4, 5, 0],
  [0, 0, 0],
]
const test12Clone = cloneMatrix(test12)
setZeroes(test12Clone)
assertTest(test12Clone, expected12, "Set zeros - zero at bottom-right")

const test13 = [
  [0, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
]
const expected13 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 9],
]
const test13Clone = cloneMatrix(test13)
setZeroes(test13Clone)
assertTest(test13Clone, expected13, "Set zeros - multiple zeros")

const test14 = [[1, 2, 3, 4, 5]]
const expected14 = [[1, 2, 3, 4, 5]]
const test14Clone = cloneMatrix(test14)
setZeroes(test14Clone)
assertTest(test14Clone, expected14, "Set zeros - single row no zeros")

const test15 = [[0, 2, 3, 4, 5]]
const expected15 = [[0, 0, 0, 0, 0]]
const test15Clone = cloneMatrix(test15)
setZeroes(test15Clone)
assertTest(test15Clone, expected15, "Set zeros - single row with zero")

const test16 = [[1], [2], [3], [4]]
const expected16 = [[1], [2], [3], [4]]
const test16Clone = cloneMatrix(test16)
setZeroes(test16Clone)
assertTest(test16Clone, expected16, "Set zeros - single column no zeros")

const test17 = [[1], [0], [3], [4]]
const expected17 = [[0], [0], [0], [0]]
const test17Clone = cloneMatrix(test17)
setZeroes(test17Clone)
assertTest(test17Clone, expected17, "Set zeros - single column with zero")

const test18 = [
  [1, 2, 0, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
const expected18 = [
  [0, 0, 0, 0],
  [5, 6, 0, 8],
  [9, 10, 0, 12],
]
const test18Clone = cloneMatrix(test18)
setZeroes(test18Clone)
assertTest(test18Clone, expected18, "Set zeros - zero in first row middle")

const test19 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 10, 11, 12],
]
const expected19 = [
  [0, 2, 3, 4],
  [0, 6, 7, 8],
  [0, 0, 0, 0],
]
const test19Clone = cloneMatrix(test19)
setZeroes(test19Clone)
assertTest(test19Clone, expected19, "Set zeros - zero in last row first column")

const test20 = [
  [0, 0, 0, 0],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
]
const expected20 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]
const test20Clone = cloneMatrix(test20)
setZeroes(test20Clone)
assertTest(test20Clone, expected20, "Set zeros - entire first row zeros")

const test21 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 0, 16, 17, 18],
]
const expected21 = [
  [1, 2, 0, 4, 5, 6],
  [7, 8, 0, 10, 11, 12],
  [0, 0, 0, 0, 0, 0],
]
const test21Clone = cloneMatrix(test21)
setZeroes(test21Clone)
assertTest(test21Clone, expected21, "Set zeros - larger matrix with one zero")

const test22 = [
  [1, 0, 3, 4],
  [0, 6, 7, 8],
  [9, 10, 11, 0],
]
const expected22 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]
const test22Clone = cloneMatrix(test22)
setZeroes(test22Clone)
assertTest(
  test22Clone,
  expected22,
  "Set zeros - multiple zeros result in all zeros",
)

const test23 = [
  [5, 4, 3, 2, 1],
  [10, 9, 8, 7, 6],
  [15, 14, 13, 12, 11],
]
const expected23 = [
  [5, 4, 3, 2, 1],
  [10, 9, 8, 7, 6],
  [15, 14, 13, 12, 11],
]
const test23Clone = cloneMatrix(test23)
setZeroes(test23Clone)
assertTest(test23Clone, expected23, "Set zeros - no zeros in larger matrix")

const test24 = [
  [100, 200, 300],
  [400, 0, 600],
  [700, 800, 900],
]
const expected24 = [
  [100, 0, 300],
  [0, 0, 0],
  [700, 0, 900],
]
const test24Clone = cloneMatrix(test24)
setZeroes(test24Clone)
assertTest(test24Clone, expected24, "Set zeros - larger numbers")

const test25 = [
  [-1, -2, -3],
  [-4, 0, -6],
  [-7, -8, -9],
]
const expected25 = [
  [-1, 0, -3],
  [0, 0, 0],
  [-7, 0, -9],
]
const test25Clone = cloneMatrix(test25)
setZeroes(test25Clone)
assertTest(test25Clone, expected25, "Set zeros - negative numbers")

const test26 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 0, 26, 27, 28, 29, 30],
]
const expected26 = [
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 0, 16, 17, 18, 19, 20],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
const test26Clone = cloneMatrix(test26)
setZeroes(test26Clone)
assertTest(test26Clone, expected26, "Set zeros - wide matrix")

const test27 = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
]
const expected27 = [
  [0, 0, 0, 0, 0],
  [0, 6, 7, 8, 9],
  [0, 11, 12, 13, 14],
  [0, 16, 17, 18, 19],
  [0, 21, 22, 23, 24],
]
const test27Clone = cloneMatrix(test27)
setZeroes(test27Clone)
assertTest(
  test27Clone,
  expected27,
  "Set zeros - square matrix with corner zero",
)

const test28 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 0],
]
const expected28 = [
  [1, 2, 3, 4, 0],
  [6, 7, 8, 9, 0],
  [11, 12, 13, 14, 0],
  [16, 17, 18, 19, 0],
  [0, 0, 0, 0, 0],
]
const test28Clone = cloneMatrix(test28)
setZeroes(test28Clone)
assertTest(test28Clone, expected28, "Set zeros - bottom-right corner zero")

const test29 = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0],
]
const expected29 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]
const test29Clone = cloneMatrix(test29)
setZeroes(test29Clone)
assertTest(test29Clone, expected29, "Set zeros - cross pattern of zeros")

const test30 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
const expected30 = [
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
]
const test30Clone = cloneMatrix(test30)
setZeroes(test30Clone)
assertTest(test30Clone, expected30, "Set zeros - large matrix with single zero")


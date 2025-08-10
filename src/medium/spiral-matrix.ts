import assertTest from "../assert-test"

/**
 * Spiral Matrix
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Example:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 * Time Complexity: O(m * n) where m and n are the dimensions of the matrix
 * Space Complexity: O(1) excluding the output array
 */

function spiralOrder(matrix: number[][]): number[] {
  // TODO: Implement the solution
  // Use four boundaries: top, bottom, left, right
  // Move in spiral order: right -> down -> left -> up

  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return []

  const result: number[] = []
  let top = 0,
    bottom = matrix.length - 1
  let left = 0,
    right = matrix[0].length - 1

  while (top <= bottom && left <= right) {
    // Move right along top row
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col])
    }
    top++

    // Move down along right column
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right])
    }
    right--

    // Move left along bottom row (if we still have rows)
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col])
      }
      bottom--
    }

    // Move up along left column (if we still have columns)
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left])
      }
      left++
    }
  }

  return result
}

// Test cases
assertTest(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [1, 2, 3, 6, 9, 8, 7, 4, 5],
  "Spiral order - 3x3 matrix",
)

assertTest(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
  [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  "Spiral order - 3x4 matrix",
)

assertTest(spiralOrder([[1]]), [1], "Spiral order - 1x1 matrix")

assertTest(
  spiralOrder([
    [1, 2],
    [3, 4],
  ]),
  [1, 2, 4, 3],
  "Spiral order - 2x2 matrix",
)

assertTest(spiralOrder([]), [], "Spiral order - empty matrix")

assertTest(spiralOrder([[1, 2, 3]]), [1, 2, 3], "Spiral order - single row")

assertTest(
  spiralOrder([[1], [2], [3]]),
  [1, 2, 3],
  "Spiral order - single column",
)

assertTest(
  spiralOrder([[1, 2, 3, 4, 5]]),
  [1, 2, 3, 4, 5],
  "Spiral order - single row with 5 elements",
)

assertTest(
  spiralOrder([[1], [2], [3], [4], [5]]),
  [1, 2, 3, 4, 5],
  "Spiral order - single column with 5 elements",
)

assertTest(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ]),
  [1, 2, 3, 4, 8, 7, 6, 5],
  "Spiral order - 2x4 matrix",
)

assertTest(
  spiralOrder([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
  [1, 2, 4, 6, 5, 3],
  "Spiral order - 3x2 matrix",
)

assertTest(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ]),
  [1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9],
  "Spiral order - 3x5 matrix",
)

assertTest(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ]),
  [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8],
  "Spiral order - 4x3 matrix",
)

assertTest(
  spiralOrder([[7]]),
  [7],
  "Spiral order - single element (different value)",
)

assertTest(
  spiralOrder([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ]),
  [1, 2, 3, 4, 5, 6, 12, 11, 10, 9, 8, 7],
  "Spiral order - 2x6 matrix",
)

assertTest(
  spiralOrder([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "Spiral order - 1x10 matrix",
)

assertTest(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ]),
  [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12],
  "Spiral order - 4x5 matrix",
)

assertTest(
  spiralOrder([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
  ]),
  [
    1, 2, 3, 4, 5, 6, 12, 18, 24, 23, 22, 21, 20, 19, 13, 7, 8, 9, 10, 11, 17,
    16, 15, 14,
  ],
  "Spiral order - 4x6 matrix",
)

assertTest(
  spiralOrder([
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
  ]),
  [1, 2, 3, 4, 5, 6, 7, 14, 21, 20, 19, 18, 17, 16, 15, 8, 9, 10, 11, 12, 13],
  "Spiral order - 3x7 matrix",
)

assertTest(
  spiralOrder([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]),
  [0, 1, 2, 5, 8, 7, 6, 3, 4],
  "Spiral order - 3x3 starting with 0",
)

assertTest(
  spiralOrder([
    [-1, -2, -3],
    [-4, -5, -6],
    [-7, -8, -9],
  ]),
  [-1, -2, -3, -6, -9, -8, -7, -4, -5],
  "Spiral order - negative numbers",
)

assertTest(
  spiralOrder([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "Spiral order - single row with 10 elements",
)

assertTest(
  spiralOrder([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "Spiral order - single column with 10 elements",
)

assertTest(
  spiralOrder([
    [100, 200, 300],
    [400, 500, 600],
  ]),
  [100, 200, 300, 600, 500, 400],
  "Spiral order - larger numbers",
)

assertTest(
  spiralOrder([
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  ]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  "Spiral order - 1x20 matrix",
)

assertTest(
  spiralOrder([
    [5, 4, 3, 2, 1],
    [10, 9, 8, 7, 6],
    [15, 14, 13, 12, 11],
  ]),
  [5, 4, 3, 2, 1, 6, 11, 12, 13, 14, 15, 10, 9, 8, 7],
  "Spiral order - descending values",
)

assertTest(
  spiralOrder([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]),
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  "Spiral order - all same values",
)

assertTest(
  spiralOrder([
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40,
    ],
  ]),
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 40,
    39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21,
  ],
  "Spiral order - 2x20 matrix",
)

assertTest(
  spiralOrder([
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  ]),
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 49, 48, 47, 46, 45, 44, 43,
    42, 41, 31, 21, 11, 12, 13, 14, 15, 16, 17, 18, 19, 29, 39, 38, 37, 36, 35,
    34, 33, 32, 22, 23, 24, 25, 26, 27, 28,
  ],
  "Spiral order - 5x10 matrix",
)

assertTest(spiralOrder([[1000]]), [1000], "Spiral order - single large element")


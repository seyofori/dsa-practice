import assertTest from "../assert-test"

/**
 * Maximal Rectangle
 *
 * Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
 *
 * Example:
 * Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * Output: 6
 * Explanation: The maximal rectangle is shown in the above picture.
 *
 * Time Complexity: O(rows * cols) where rows and cols are the dimensions of the matrix
 * Space Complexity: O(cols) for the heights array
 */

function maximalRectangle(matrix: string[][]): number {
  // TODO: Implement the solution
  // Convert to histogram problem for each row

  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0

  const rows = matrix.length
  const cols = matrix[0].length
  const heights: number[] = new Array(cols).fill(0)
  let maxArea = 0

  // Helper function to find largest rectangle in histogram
  function largestRectangleArea(heights: number[]): number {
    const stack: number[] = []
    let maxArea = 0

    for (let i = 0; i <= heights.length; i++) {
      const currentHeight = i === heights.length ? 0 : heights[i]

      while (
        stack.length > 0 &&
        currentHeight < heights[stack[stack.length - 1]]
      ) {
        const height = heights[stack.pop()!]
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
        maxArea = Math.max(maxArea, height * width)
      }

      stack.push(i)
    }

    return maxArea
  }

  for (let i = 0; i < rows; i++) {
    // Update heights array
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === "1") {
        heights[j]++
      } else {
        heights[j] = 0
      }
    }

    // Find max rectangle in current histogram
    maxArea = Math.max(maxArea, largestRectangleArea(heights))
  }

  return maxArea
}

// Helper function to create matrix for testing
function createMatrix(arr: string[][]): string[][] {
  return arr
}

// Test cases
const test1 = createMatrix([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
])
assertTest(maximalRectangle(test1), 6, "Maximal rectangle - example case")

const test2 = createMatrix([["0"]])
assertTest(maximalRectangle(test2), 0, "Maximal rectangle - single zero")

const test3 = createMatrix([["1"]])
assertTest(maximalRectangle(test3), 1, "Maximal rectangle - single one")

const test4 = createMatrix([])
assertTest(maximalRectangle(test4), 0, "Maximal rectangle - empty matrix")

const test5 = createMatrix([
  ["0", "0"],
  ["0", "0"],
])
assertTest(maximalRectangle(test5), 0, "Maximal rectangle - all zeros")

const test6 = createMatrix([
  ["1", "1"],
  ["1", "1"],
])
assertTest(maximalRectangle(test6), 4, "Maximal rectangle - all ones 2x2")

const test7 = createMatrix([
  ["1", "0", "1"],
  ["1", "1", "1"],
  ["1", "1", "1"],
])
assertTest(maximalRectangle(test7), 4, "Maximal rectangle - L shape")

const test8 = createMatrix([
  ["1", "1", "1", "1"],
  ["1", "1", "1", "1"],
  ["1", "1", "1", "1"],
])
assertTest(maximalRectangle(test8), 12, "Maximal rectangle - full rectangle")

const test9 = createMatrix([
  ["1", "0", "0"],
  ["1", "1", "1"],
  ["1", "1", "1"],
])
assertTest(maximalRectangle(test9), 4, "Maximal rectangle - bottom right")

const test10 = createMatrix([
  ["0", "1", "1"],
  ["1", "1", "1"],
  ["0", "1", "1"],
])
assertTest(maximalRectangle(test10), 4, "Maximal rectangle - cross pattern")

const test11 = createMatrix([
  ["1", "1", "0", "1"],
  ["1", "1", "0", "1"],
  ["1", "1", "1", "1"],
])
assertTest(maximalRectangle(test11), 4, "Maximal rectangle - vertical split")

const test12 = createMatrix([["1", "1", "1", "1", "1"]])
assertTest(maximalRectangle(test12), 5, "Maximal rectangle - single row")

const test13 = createMatrix([["1"], ["1"], ["1"], ["1"], ["1"]])
assertTest(maximalRectangle(test13), 5, "Maximal rectangle - single column")

const test14 = createMatrix([
  ["1", "0", "1", "1"],
  ["1", "0", "1", "1"],
  ["1", "0", "1", "1"],
])
assertTest(
  maximalRectangle(test14),
  6,
  "Maximal rectangle - two separate rectangles",
)

const test15 = createMatrix([
  ["0", "1", "1", "0"],
  ["1", "1", "1", "1"],
  ["1", "1", "1", "1"],
  ["0", "1", "1", "0"],
])
assertTest(
  maximalRectangle(test15),
  8,
  "Maximal rectangle - diamond with corners",
)

const test16 = createMatrix([
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
])
assertTest(maximalRectangle(test16), 3, "Maximal rectangle - cross with hole")

const test17 = createMatrix([
  ["1", "0"],
  ["1", "1"],
])
assertTest(maximalRectangle(test17), 2, "Maximal rectangle - corner L")

const test18 = createMatrix([
  ["0", "1"],
  ["1", "0"],
])
assertTest(maximalRectangle(test18), 1, "Maximal rectangle - diagonal")

const test19 = createMatrix([
  ["1", "1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1", "1"],
])
assertTest(maximalRectangle(test19), 12, "Maximal rectangle - wide rectangle")

const test20 = createMatrix([
  ["1", "1"],
  ["1", "1"],
  ["1", "1"],
  ["1", "1"],
  ["1", "1"],
  ["1", "1"],
])
assertTest(maximalRectangle(test20), 12, "Maximal rectangle - tall rectangle")

const test21 = createMatrix([
  ["1", "0", "1", "0", "1"],
  ["0", "1", "0", "1", "0"],
  ["1", "0", "1", "0", "1"],
])
assertTest(
  maximalRectangle(test21),
  1,
  "Maximal rectangle - checkerboard pattern",
)

const test22 = createMatrix([
  ["1", "1", "0", "0"],
  ["1", "1", "1", "1"],
  ["0", "1", "1", "1"],
  ["0", "0", "1", "1"],
])
assertTest(maximalRectangle(test22), 4, "Maximal rectangle - stairs pattern")

const test23 = createMatrix([
  ["0", "0", "1", "0"],
  ["1", "1", "1", "1"],
  ["1", "1", "1", "0"],
])
assertTest(maximalRectangle(test23), 6, "Maximal rectangle - irregular shape")

const test24 = createMatrix([
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "0", "1"],
  ["1", "0", "1", "0", "1"],
  ["1", "0", "0", "0", "1"],
  ["1", "1", "1", "1", "1"],
])
assertTest(maximalRectangle(test24), 5, "Maximal rectangle - border with holes")

const test25 = createMatrix([
  ["0", "1", "0", "1", "0"],
  ["1", "1", "1", "1", "1"],
  ["0", "1", "0", "1", "0"],
])
assertTest(maximalRectangle(test25), 5, "Maximal rectangle - plus shape")

const test26 = createMatrix([
  ["1", "1", "1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1", "1", "1"],
])
assertTest(
  maximalRectangle(test26),
  21,
  "Maximal rectangle - large full rectangle",
)

const test27 = createMatrix([
  ["1", "0", "1", "1", "1"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
])
assertTest(maximalRectangle(test27), 9, "Maximal rectangle - partial block")

const test28 = createMatrix([
  ["0", "0", "0", "1"],
  ["0", "0", "1", "1"],
  ["0", "1", "1", "1"],
  ["1", "1", "1", "1"],
])
assertTest(maximalRectangle(test28), 4, "Maximal rectangle - diagonal growth")

const test29 = createMatrix([
  ["1", "1", "1", "1"],
  ["1", "1", "0", "0"],
  ["1", "1", "0", "0"],
  ["1", "1", "1", "1"],
])
assertTest(maximalRectangle(test29), 8, "Maximal rectangle - with square hole")

const test30 = createMatrix([
  ["1", "0", "1", "0", "1"],
  ["1", "0", "1", "0", "1"],
  ["1", "0", "1", "0", "1"],
  ["1", "0", "1", "0", "1"],
  ["1", "0", "1", "0", "1"],
])
assertTest(maximalRectangle(test30), 5, "Maximal rectangle - vertical stripes")


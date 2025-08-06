import assertTest from "../assert-test"

/**
 * Move Zeroes (#283)
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function moveZeroes(nums: number[]): void {
  // TODO: Implement two-pointer approach
  // Hint: Use one pointer for the position to place non-zero elements
  // and another to iterate through the array
  let newNumPosition

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) continue

    newNumPosition = i
    let oldNumPosition = i + 1
    while (oldNumPosition < nums.length && nums[oldNumPosition] === 0) {
      oldNumPosition++
    }
    // so at this point, we have found a valid number
    if (oldNumPosition < nums.length) {
      nums[newNumPosition] = nums[oldNumPosition]
      nums[oldNumPosition] = 0
    }
  }
}

// Helper function to test in-place array modifications
function testMoveZeroes(
  input: number[],
  expected: number[],
  description: string,
): void {
  const testArray = [...input] // Create a copy for testing
  moveZeroes(testArray)
  assertTest(JSON.stringify(testArray), JSON.stringify(expected), description)
}

// Test cases
testMoveZeroes(
  [0, 1, 0, 3, 12],
  [1, 3, 12, 0, 0],
  "Example 1 - mixed zeros and non-zeros",
)
testMoveZeroes([0], [0], "Example 2 - single zero")
testMoveZeroes([1], [1], "Single non-zero element")
testMoveZeroes([0, 0, 0], [0, 0, 0], "All zeros")
testMoveZeroes([1, 2, 3], [1, 2, 3], "No zeros")
testMoveZeroes([0, 0, 1], [1, 0, 0], "Leading zeros")
testMoveZeroes([1, 0, 0], [1, 0, 0], "Trailing zeros")
testMoveZeroes([0, 1], [1, 0], "Alternating start with zero")
testMoveZeroes([1, 0], [1, 0], "Alternating start with non-zero")
testMoveZeroes([0, 0, 0, 1, 2, 3], [1, 2, 3, 0, 0, 0], "Multiple leading zeros")
testMoveZeroes(
  [1, 2, 3, 0, 0, 0],
  [1, 2, 3, 0, 0, 0],
  "Multiple trailing zeros",
)
testMoveZeroes([1, 0, 2, 0, 3, 0], [1, 2, 3, 0, 0, 0], "Alternating pattern")
testMoveZeroes(
  [0, 1, 0, 2, 0, 3],
  [1, 2, 3, 0, 0, 0],
  "Alternating pattern start zero",
)
testMoveZeroes(
  [5, 0, 4, 0, 3, 0, 2, 0, 1],
  [5, 4, 3, 2, 1, 0, 0, 0, 0],
  "Descending with zeros",
)
testMoveZeroes(
  [1, 2, 0, 0, 3, 4],
  [1, 2, 3, 4, 0, 0],
  "Consecutive zeros in middle",
)
testMoveZeroes([0, 0, 1, 2, 3], [1, 2, 3, 0, 0], "Two leading zeros")
testMoveZeroes([1, 2, 3, 0, 0], [1, 2, 3, 0, 0], "Two trailing zeros")
testMoveZeroes(
  [10, 0, 20, 0, 30],
  [10, 20, 30, 0, 0],
  "Larger numbers with zeros",
)
testMoveZeroes(
  [-1, 0, -2, 0, -3],
  [-1, -2, -3, 0, 0],
  "Negative numbers with zeros",
)
testMoveZeroes(
  [0, -1, 0, -2, 0],
  [-1, -2, 0, 0, 0],
  "Negative numbers between zeros",
)
testMoveZeroes(
  [100, 0, 200, 0, 300, 0],
  [100, 200, 300, 0, 0, 0],
  "Large numbers",
)
testMoveZeroes([7, 14, 0, 21, 0, 28], [7, 14, 21, 28, 0, 0], "Multiples of 7")
testMoveZeroes([0, 0, 0, 0, 1], [1, 0, 0, 0, 0], "Many leading zeros")
testMoveZeroes([1, 0, 0, 0, 0], [1, 0, 0, 0, 0], "Many trailing zeros")
testMoveZeroes([2, 0, 2, 0, 2], [2, 2, 2, 0, 0], "Repeated non-zero values")
testMoveZeroes([0, 5, 0, 5, 0], [5, 5, 0, 0, 0], "Repeated non-zero with zeros")
testMoveZeroes(
  [1, 3, 0, 2, 8, 0, 4, 7, 0],
  [1, 3, 2, 8, 4, 7, 0, 0, 0],
  "Random order",
)
testMoveZeroes(
  [9, 8, 7, 0, 6, 5, 0, 4, 3, 0, 2, 1],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0],
  "Long array",
)
testMoveZeroes(
  [42, 0, 17, 0, 84, 0, 3],
  [42, 17, 84, 3, 0, 0, 0],
  "Answer to everything pattern",
)
testMoveZeroes(
  [0, 99, 0, 88, 0, 77],
  [99, 88, 77, 0, 0, 0],
  "Large values with zeros",
)
testMoveZeroes(
  [-5, 0, -10, 0, -15],
  [-5, -10, -15, 0, 0],
  "All negative non-zeros",
)
testMoveZeroes([0, 0, 0, 0, 0], [0, 0, 0, 0, 0], "All zeros - multiple")
testMoveZeroes(
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "No zeros - longer array",
)
testMoveZeroes(
  [13, 0, 26, 0, 39, 0, 52],
  [13, 26, 39, 52, 0, 0, 0],
  "Multiples of 13",
)
testMoveZeroes(
  [6, 0, 12, 0, 18, 0, 24, 0],
  [6, 12, 18, 24, 0, 0, 0, 0],
  "Even spacing pattern",
)


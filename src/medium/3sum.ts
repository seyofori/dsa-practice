import assertTest from "../assert-test"

/**
 * 3Sum (#15)
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1) not counting the output array
 */
function threeSum(nums: number[]): number[][] {
  // TODO: Implement the solution
  return []
}

// Helper function to sort arrays for comparison
function sortTriplets(triplets: number[][]): number[][] {
  return triplets
    .map((triplet) => [...triplet].sort((a, b) => a - b))
    .sort((a, b) => {
      for (let i = 0; i < 3; i++) {
        if (a[i] !== b[i]) return a[i] - b[i]
      }
      return 0
    })
}

// Test cases
function testThreeSum(
  input: number[],
  expected: number[][],
  description: string,
) {
  const result = sortTriplets(threeSum(input))
  const expectedSorted = sortTriplets(expected)
  assertTest(
    JSON.stringify(result),
    JSON.stringify(expectedSorted),
    description,
  )
}

testThreeSum(
  [-1, 0, 1, 2, -1, -4],
  [
    [-1, -1, 2],
    [-1, 0, 1],
  ],
  "Example 1",
)
testThreeSum([0, 1, 1], [], "Example 2")
testThreeSum([0, 0, 0], [[0, 0, 0]], "Example 3")
testThreeSum([], [], "Empty array")
testThreeSum([1], [], "Single element")
testThreeSum([1, 2], [], "Two elements")
testThreeSum([0, 0, 0, 0], [[0, 0, 0]], "Multiple zeros")
testThreeSum([-1, 0, 1], [[-1, 0, 1]], "Simple case")
testThreeSum([-2, 0, 2], [[-2, 0, 2]], "Simple negative positive")
testThreeSum([1, 2, 3], [], "All positive no solution")
testThreeSum([-1, -2, -3], [], "All negative no solution")
testThreeSum([-3, -1, 0, 2, 4], [[-3, -1, 4]], "Mixed values one solution")
testThreeSum(
  [-4, -2, -1, 0, 1, 2, 4],
  [
    [-4, 0, 4],
    [-2, -1, 3],
    [-1, 0, 1],
  ],
  "Multiple solutions",
)
testThreeSum(
  [-2, -1, 0, 1, 2],
  [
    [-2, 0, 2],
    [-1, 0, 1],
  ],
  "Consecutive integers",
)
testThreeSum([1, 1, -2], [[-2, 1, 1]], "Duplicate values")
testThreeSum([2, 2, -4], [[-4, 2, 2]], "Another duplicate case")
testThreeSum([-1, -1, 2], [[-1, -1, 2]], "Negative duplicates")
testThreeSum(
  [3, 0, -2, -1, 1, 2],
  [
    [-2, -1, 3],
    [-2, 0, 2],
    [-1, 0, 1],
  ],
  "Random order",
)
testThreeSum(
  [-4, -1, -1, 0, 1, 2],
  [
    [-1, -1, 2],
    [-1, 0, 1],
  ],
  "Duplicates with solutions",
)
testThreeSum([1, -1, -1, 0], [[-1, 0, 1]], "Simple with duplicates")
testThreeSum([-1, 0, 1, 0], [[-1, 0, 1]], "Zero duplicates")
testThreeSum([5, -5, 0], [[-5, 0, 5]], "Symmetric values")
testThreeSum([6, -3, -3], [[-3, -3, 6]], "Negative pair")
testThreeSum(
  [-5, -3, -1, 1, 3, 5],
  [
    [-5, 1, 4],
    [-3, -1, 4],
    [-1, -3, 4],
  ],
  "Symmetric range",
)
testThreeSum([1, 2, -2, -1], [], "No valid triplets")
testThreeSum([-2, 0, 0, 2, 2], [[-2, 0, 2]], "Multiple duplicates")
testThreeSum([0, 0, 0, 0, 0], [[0, 0, 0]], "All zeros")
testThreeSum([-4, -2, 1, 2, 3], [[-4, 1, 3]], "Single valid triplet")
testThreeSum([10, -10, 0], [[-10, 0, 10]], "Large symmetric")
testThreeSum(
  [7, -1, 14, -12, -8, 7, 2, -15, 8, 8, -8, -14, -4, -5],
  [
    [-15, 1, 14],
    [-15, 2, 13],
    [-14, -1, 15],
    [-14, 6, 8],
    [-12, 4, 8],
    [-8, 0, 8],
    [-8, 1, 7],
    [-5, -4, 9],
    [-4, -1, 5],
  ],
  "Complex case",
)
testThreeSum([1, 1, 1], [], "All same positive")
testThreeSum([-1, -1, -1], [], "All same negative")
testThreeSum([3, -3, 0, 0], [[-3, 0, 3]], "Double zeros")
testThreeSum(
  [15, -15, 0, 1, -1],
  [
    [-15, 0, 15],
    [-1, 0, 1],
  ],
  "Multiple pairs",
)
testThreeSum(
  [2, 7, 11, 15, -13, -6],
  [
    [-13, 2, 11],
    [-6, -1, 7],
  ],
  "From two sum array",
)


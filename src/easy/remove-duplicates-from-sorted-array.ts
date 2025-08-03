import assertTest from "../assert-test"

/**
 * Remove Duplicates from Sorted Array (#26)
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
 * such that each unique element appears only once. The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
 * - Change the array nums such that the first k elements of nums contain the unique elements
 *   in the order they were present in nums initially.
 * - The remaining elements of nums are not important as well as the size of nums.
 * - Return k.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function removeDuplicates(nums: number[]): number {
  // TODO: Implement the solution
  return 0
}

// Test cases with array verification
function testRemoveDuplicates(
  input: number[],
  expectedLength: number,
  expectedArray: number[],
  description: string,
) {
  const nums = [...input] // Create a copy to avoid modifying original
  const result = removeDuplicates(nums)

  // Check length
  assertTest(result, expectedLength, `${description} - length`)

  // Check first k elements match expected
  const actualFirst = nums.slice(0, expectedLength)
  assertTest(
    JSON.stringify(actualFirst),
    JSON.stringify(expectedArray),
    `${description} - array content`,
  )
}

testRemoveDuplicates([1, 1, 2], 2, [1, 2], "Example 1")
testRemoveDuplicates(
  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
  5,
  [0, 1, 2, 3, 4],
  "Example 2",
)
testRemoveDuplicates([], 0, [], "Empty array")
testRemoveDuplicates([1], 1, [1], "Single element")
testRemoveDuplicates([1, 1], 1, [1], "Two same elements")
testRemoveDuplicates([1, 2], 2, [1, 2], "Two different elements")
testRemoveDuplicates([1, 1, 1], 1, [1], "Three same elements")
testRemoveDuplicates([1, 2, 3], 3, [1, 2, 3], "Three different elements")
testRemoveDuplicates([1, 1, 2, 2], 2, [1, 2], "Pairs of duplicates")
testRemoveDuplicates([1, 1, 1, 2, 2, 2], 2, [1, 2], "Triples of duplicates")
testRemoveDuplicates([0, 0, 0, 0], 1, [0], "All zeros")
testRemoveDuplicates([-1, -1, 0, 0, 1, 1], 3, [-1, 0, 1], "With negatives")
testRemoveDuplicates(
  [1, 2, 2, 3, 3, 3, 4, 4, 4, 4],
  4,
  [1, 2, 3, 4],
  "Increasing duplicates",
)
testRemoveDuplicates([5, 5, 5, 5, 5], 1, [5], "All same")
testRemoveDuplicates([1, 1, 1, 2, 2, 3], 3, [1, 2, 3], "Different counts")
testRemoveDuplicates([-3, -2, -2, -1, -1, -1], 3, [-3, -2, -1], "All negatives")
testRemoveDuplicates([10, 10, 20, 20, 30], 3, [10, 20, 30], "Larger numbers")
testRemoveDuplicates(
  [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
  5,
  [1, 2, 3, 4, 5],
  "All pairs",
)
testRemoveDuplicates([2, 2, 2, 2, 2, 2, 2], 1, [2], "Seven duplicates")
testRemoveDuplicates(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  10,
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "No duplicates",
)
testRemoveDuplicates(
  [0, 1, 1, 2, 2, 2, 3, 3, 3, 3],
  4,
  [0, 1, 2, 3],
  "Mixed counts",
)
testRemoveDuplicates(
  [100, 100, 200, 300, 300],
  3,
  [100, 200, 300],
  "Large values",
)
testRemoveDuplicates(
  [-50, -50, -25, -25, 0, 0, 25, 25, 50, 50],
  5,
  [-50, -25, 0, 25, 50],
  "Symmetric range",
)
testRemoveDuplicates([7, 7, 14, 14, 21, 21], 3, [7, 14, 21], "Multiples of 7")
testRemoveDuplicates([3, 3, 6, 6, 9, 9, 12], 4, [3, 6, 9, 12], "Multiples of 3")
testRemoveDuplicates([2, 4, 4, 8, 8, 16, 16], 4, [2, 4, 8, 16], "Powers of 2")
testRemoveDuplicates(
  [1, 1, 1, 1, 5, 5, 5, 10, 10],
  3,
  [1, 5, 10],
  "Groups of different sizes",
)
testRemoveDuplicates([42, 42, 42], 1, [42], "Answer to everything")
testRemoveDuplicates(
  [11, 11, 13, 13, 17, 17, 19, 19],
  4,
  [11, 13, 17, 19],
  "Prime pairs",
)
testRemoveDuplicates([0, 0, 1, 1, 1, 1, 1], 2, [0, 1], "Many ones")
testRemoveDuplicates(
  [99, 99, 100, 100, 101, 101],
  3,
  [99, 100, 101],
  "Sequential hundreds",
)
testRemoveDuplicates(
  [15, 15, 30, 30, 45, 45, 60],
  4,
  [15, 30, 45, 60],
  "Multiples of 15",
)
testRemoveDuplicates(
  [64, 64, 128, 128, 256, 256],
  3,
  [64, 128, 256],
  "Large powers of 2",
)


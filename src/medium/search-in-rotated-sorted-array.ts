import assertTest from "../assert-test"

/**
 * Search in Rotated Sorted Array (#33)
 *
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]].
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the possible rotation and an integer target, return the index of target
 * if it is in nums, or -1 if it is not in nums.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function search(nums: number[], target: number): number {

  return -1
}

// Test cases
assertTest(search([4, 5, 6, 7, 0, 1, 2], 0), 4, "Basic rotation - target found")
assertTest(
  search([4, 5, 6, 7, 0, 1, 2], 3),
  -1,
  "Basic rotation - target not found",
)
assertTest(search([1], 0), -1, "Single element - not found")
assertTest(search([1], 1), 0, "Single element - found")
assertTest(search([1, 3], 0), -1, "Two elements - not found")
assertTest(search([1, 3], 1), 0, "Two elements - first found")
assertTest(search([1, 3], 3), 1, "Two elements - second found")
assertTest(search([3, 1], 1), 1, "Two elements rotated - found")
assertTest(search([3, 1], 3), 0, "Two elements rotated - found first")
assertTest(search([1, 2, 3, 4, 5], 3), 2, "No rotation - target in middle")
assertTest(search([1, 2, 3, 4, 5], 1), 0, "No rotation - target at start")
assertTest(search([1, 2, 3, 4, 5], 5), 4, "No rotation - target at end")
assertTest(search([1, 2, 3, 4, 5], 6), -1, "No rotation - target not found")
assertTest(search([2, 3, 4, 5, 1], 1), 4, "Rotated once - target at end")
assertTest(search([2, 3, 4, 5, 1], 2), 0, "Rotated once - target at start")
assertTest(search([2, 3, 4, 5, 1], 4), 2, "Rotated once - target in middle")
assertTest(search([5, 1, 2, 3, 4], 1), 1, "Rotated four times - target found")
assertTest(
  search([5, 1, 2, 3, 4], 5),
  0,
  "Rotated four times - target at start",
)
assertTest(search([5, 1, 2, 3, 4], 4), 4, "Rotated four times - target at end")
assertTest(
  search([4, 5, 6, 7, 8, 1, 2, 3], 6),
  2,
  "Longer array - target in first half",
)
assertTest(
  search([4, 5, 6, 7, 8, 1, 2, 3], 2),
  6,
  "Longer array - target in second half",
)
assertTest(
  search([4, 5, 6, 7, 8, 1, 2, 3], 8),
  4,
  "Longer array - target at pivot",
)
assertTest(
  search([4, 5, 6, 7, 8, 1, 2, 3], 9),
  -1,
  "Longer array - target not found",
)
assertTest(search([6, 7, 1, 2, 3, 4, 5], 1), 2, "Target right after max")
assertTest(search([6, 7, 1, 2, 3, 4, 5], 7), 1, "Target at max")
assertTest(search([6, 7, 1, 2, 3, 4, 5], 5), 6, "Target at end after rotation")
assertTest(search([3, 4, 5, 6, 1, 2], 2), 5, "Target at actual end")
assertTest(search([3, 4, 5, 6, 1, 2], 6), 3, "Target before rotation point")
assertTest(search([8, 9, 2, 3, 4], 9), 1, "Small rotation - target found")
assertTest(search([8, 9, 2, 3, 4], 10), -1, "Small rotation - target not found")
assertTest(search([11, 13, 15, 17], 13), 1, "No rotation - even length")
assertTest(search([15, 17, 11, 13], 11), 2, "Rotated - even length")
assertTest(
  search([100, 200, 10, 20, 30], 10),
  2,
  "Large numbers - target found",
)
assertTest(
  search([100, 200, 10, 20, 30], 150),
  -1,
  "Large numbers - target not found",
)


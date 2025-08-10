import assertTest from "../assert-test"

/**
 * Product of Array Except Self (#238)
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the
 * product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) extra space (not counting output array)
 */

function productExceptSelf(nums: number[]): number[] {
  // TODO: Implement using left and right pass without division
  return []
}

// Test cases
assertTest(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6], "Example 1")
assertTest(
  productExceptSelf([-1, 1, 0, -3, 3]),
  [0, 0, 9, 0, 0],
  "Example 2 - with zero",
)
assertTest(productExceptSelf([1, 2]), [2, 1], "Two elements")
assertTest(productExceptSelf([2, 3, 4]), [12, 8, 6], "Three elements")
assertTest(productExceptSelf([1, 0]), [0, 1], "With one zero")
assertTest(productExceptSelf([0, 0]), [0, 0], "With two zeros")
assertTest(productExceptSelf([1, 1, 1, 1]), [1, 1, 1, 1], "All ones")
assertTest(productExceptSelf([2, 2, 2, 2]), [8, 8, 8, 8], "All same non-one")
assertTest(productExceptSelf([-1, -2, -3]), [6, 3, 2], "All negative")
assertTest(
  productExceptSelf([1, -2, 3]),
  [-6, -3, 2],
  "Mixed positive/negative",
)
assertTest(productExceptSelf([5]), [1], "Single element")
assertTest(
  productExceptSelf([1, 2, 3, 4, 5]),
  [120, 60, 40, 30, 24],
  "Five elements",
)
assertTest(
  productExceptSelf([10, 3, 5, 6, 2]),
  [180, 600, 360, 300, 900],
  "Mixed values",
)
assertTest(productExceptSelf([2, 1, 3, 4]), [12, 24, 8, 6], "Not sorted")
assertTest(productExceptSelf([1, 0, 3, 4]), [0, 12, 0, 0], "Zero in middle")
assertTest(productExceptSelf([0, 1, 2, 3]), [6, 0, 0, 0], "Zero at start")
assertTest(productExceptSelf([1, 2, 3, 0]), [0, 0, 0, 6], "Zero at end")
assertTest(productExceptSelf([2, 0, 3, 0]), [0, 0, 0, 0], "Multiple zeros")
assertTest(
  productExceptSelf([-1, 2, -3, 4]),
  [24, 12, 8, 6],
  "Alternating signs",
)
assertTest(
  productExceptSelf([1, 2, 3, 4, 5, 6]),
  [720, 360, 240, 180, 144, 120],
  "Six elements",
)
assertTest(productExceptSelf([7, 8, 9]), [72, 63, 56], "Single digits")
assertTest(productExceptSelf([100, 200]), [200, 100], "Large numbers")
assertTest(productExceptSelf([1, 1, 2, 3]), [6, 6, 3, 2], "Some duplicates")
assertTest(productExceptSelf([3, 3, 3]), [9, 9, 9], "All same triplet")
assertTest(productExceptSelf([6, 2, 4, 3]), [24, 72, 36, 48], "Various factors")
assertTest(
  productExceptSelf([1, 3, 5, 7, 9]),
  [945, 315, 189, 135, 105],
  "Odd numbers",
)
assertTest(productExceptSelf([2, 4, 6, 8]), [192, 96, 64, 48], "Even numbers")
assertTest(productExceptSelf([10, 1, 10]), [10, 100, 10], "Pattern with ones")
assertTest(productExceptSelf([5, 0, 2, 1]), [0, 10, 0, 0], "Mixed with zero")
assertTest(
  productExceptSelf([1, 2, 0, 4, 5]),
  [0, 0, 40, 0, 0],
  "Zero interrupting",
)
assertTest(
  productExceptSelf([3, 1, 4, 1, 5]),
  [20, 60, 15, 60, 12],
  "Pi approximation",
)
assertTest(productExceptSelf([1, 1, 1, 2]), [2, 2, 2, 1], "Mostly ones")


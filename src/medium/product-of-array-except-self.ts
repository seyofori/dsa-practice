import assertTest from "../assert-test"

/**
 * Product of Array Except Self (#238)
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product
 * of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) extra space (not counting the output array)
 */
function productExceptSelf(nums: number[]): number[] {
  // TODO: Implement the solution
  return []
}

// Test cases
assertTest(
  JSON.stringify(productExceptSelf([1, 2, 3, 4])),
  JSON.stringify([24, 12, 8, 6]),
  "Example 1",
)
assertTest(
  JSON.stringify(productExceptSelf([-1, 1, 0, -3, 3])),
  JSON.stringify([0, 0, 9, 0, 0]),
  "Example 2 - with zero",
)
assertTest(
  JSON.stringify(productExceptSelf([1, 2])),
  JSON.stringify([2, 1]),
  "Two elements",
)
assertTest(
  JSON.stringify(productExceptSelf([2, 3])),
  JSON.stringify([3, 2]),
  "Two different elements",
)
assertTest(
  JSON.stringify(productExceptSelf([1, 1])),
  JSON.stringify([1, 1]),
  "Two ones",
)
assertTest(
  JSON.stringify(productExceptSelf([0, 0])),
  JSON.stringify([0, 0]),
  "Two zeros",
)
assertTest(
  JSON.stringify(productExceptSelf([1, 0])),
  JSON.stringify([0, 1]),
  "One and zero",
)
assertTest(
  JSON.stringify(productExceptSelf([0, 1])),
  JSON.stringify([1, 0]),
  "Zero and one",
)
assertTest(
  JSON.stringify(productExceptSelf([1, 2, 3])),
  JSON.stringify([6, 3, 2]),
  "Three elements",
)
assertTest(
  JSON.stringify(productExceptSelf([2, 3, 4])),
  JSON.stringify([12, 8, 6]),
  "Three elements no one",
)
assertTest(
  JSON.stringify(productExceptSelf([1, 0, 3])),
  JSON.stringify([0, 3, 0]),
  "Zero in middle",
)
assertTest(
  JSON.stringify(productExceptSelf([0, 1, 3])),
  JSON.stringify([3, 0, 0]),
  "Zero at start",
)
assertTest(
  JSON.stringify(productExceptSelf([1, 3, 0])),
  JSON.stringify([0, 0, 3]),
  "Zero at end",
)
assertTest(
  JSON.stringify(productExceptSelf([-1, 2, 3])),
  JSON.stringify([6, -3, -2]),
  "With negative",
)
assertTest(
  JSON.stringify(productExceptSelf([-1, -2, 3])),
  JSON.stringify([6, 3, 2]),
  "Two negatives",
)
assertTest(
  JSON.stringify(productExceptSelf([-1, -2, -3])),
  JSON.stringify([6, 3, 2]),
  "All negatives",
)
assertTest(
  JSON.stringify(productExceptSelf([1, 1, 1, 1])),
  JSON.stringify([1, 1, 1, 1]),
  "All ones",
)
assertTest(
  JSON.stringify(productExceptSelf([2, 2, 2, 2])),
  JSON.stringify([8, 8, 8, 8]),
  "All twos",
)
assertTest(
  JSON.stringify(productExceptSelf([1, 2, 0, 4])),
  JSON.stringify([0, 0, 8, 0]),
  "Zero with others",
)
assertTest(
  JSON.stringify(productExceptSelf([0, 0, 2, 3])),
  JSON.stringify([0, 0, 0, 0]),
  "Two zeros with others",
)
assertTest(
  JSON.stringify(productExceptSelf([5, 1, 2])),
  JSON.stringify([2, 10, 5]),
  "Simple case",
)
assertTest(
  JSON.stringify(productExceptSelf([10, 3, 5, 6, 2])),
  JSON.stringify([180, 600, 360, 300, 900]),
  "Five elements",
)
assertTest(
  JSON.stringify(productExceptSelf([1, -1, 1, -1])),
  JSON.stringify([1, -1, 1, -1]),
  "Alternating signs",
)
assertTest(
  JSON.stringify(productExceptSelf([7, 3, 1])),
  JSON.stringify([3, 7, 21]),
  "Different order",
)
assertTest(
  JSON.stringify(productExceptSelf([100, 1, 1])),
  JSON.stringify([1, 100, 100]),
  "Large number",
)
assertTest(
  JSON.stringify(productExceptSelf([1, 1, 100])),
  JSON.stringify([100, 100, 1]),
  "Large at end",
)
assertTest(
  JSON.stringify(productExceptSelf([-5, -2, 3, 4])),
  JSON.stringify([24, 60, -40, -30]),
  "Mixed signs",
)
assertTest(
  JSON.stringify(productExceptSelf([8, 2, 4, 1])),
  JSON.stringify([8, 32, 16, 64]),
  "Powers related",
)
assertTest(
  JSON.stringify(productExceptSelf([3, 6, 9])),
  JSON.stringify([54, 27, 18]),
  "Multiples of 3",
)
assertTest(
  JSON.stringify(productExceptSelf([2, 4, 8, 16])),
  JSON.stringify([512, 256, 128, 64]),
  "Powers of 2",
)
assertTest(
  JSON.stringify(productExceptSelf([1, 3, 9, 27])),
  JSON.stringify([243, 81, 27, 9]),
  "Powers of 3",
)
assertTest(
  JSON.stringify(productExceptSelf([42, 1, 1])),
  JSON.stringify([1, 42, 42]),
  "Answer to everything",
)
assertTest(
  JSON.stringify(productExceptSelf([5, 10, 15, 20])),
  JSON.stringify([3000, 1500, 1000, 750]),
  "Multiples of 5",
)
assertTest(
  JSON.stringify(productExceptSelf([12, 6, 3, 2])),
  JSON.stringify([36, 72, 144, 216]),
  "Decreasing factors",
)
assertTest(
  JSON.stringify(productExceptSelf([1, 5, 25])),
  JSON.stringify([125, 25, 5]),
  "Powers of 5",
)
assertTest(
  JSON.stringify(productExceptSelf([7, 14, 21, 28])),
  JSON.stringify([8232, 4116, 2744, 2058]),
  "Multiples of 7",
)


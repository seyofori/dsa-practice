import assertTest from "../assert-test"

/**
 * Maximum Subarray (#53)
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * This is a classic application of Kadane's Algorithm.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 *
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function maxSubArray(nums: number[]): number {
  // TODO: Implement Kadane's Algorithm
  // Hint: Keep track of the maximum sum ending at current position
  // and the overall maximum sum seen so far
  return 0
}

// Test cases
assertTest(
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
  6,
  "Example 1 - classic case",
)
assertTest(maxSubArray([1]), 1, "Example 2 - single element")
assertTest(maxSubArray([5, 4, -1, 7, 8]), 23, "Example 3 - mostly positive")
assertTest(maxSubArray([-1]), -1, "Single negative element")
assertTest(maxSubArray([-2, -1]), -1, "All negative - choose least negative")
assertTest(maxSubArray([1, 2, 3, 4, 5]), 15, "All positive")
assertTest(
  maxSubArray([-5, -2, -8, -1]),
  -1,
  "All negative - multiple elements",
)
assertTest(maxSubArray([0]), 0, "Single zero")
assertTest(maxSubArray([0, 0, 0]), 0, "All zeros")
assertTest(maxSubArray([1, -1, 1]), 1, "Alternating positive negative")
assertTest(
  maxSubArray([2, -1, 2, 3, 4, -5]),
  10,
  "Mixed with negative in middle",
)
assertTest(maxSubArray([-1, 0, -2]), 0, "Zero among negatives")
assertTest(maxSubArray([1, 2, -4, 5, 6]), 11, "Negative break in sequence")
assertTest(maxSubArray([3, -2, 7, -1, 4]), 11, "Multiple segments")
assertTest(maxSubArray([-3, 2, -3, 4, 2]), 6, "Start and end with negatives")
assertTest(maxSubArray([8, -3, 5, -3, 6, -1, 2]), 14, "Complex mixed sequence")
assertTest(maxSubArray([100]), 100, "Single large positive")
assertTest(maxSubArray([-100]), -100, "Single large negative")
assertTest(maxSubArray([1, -2, 3, -4, 5]), 5, "Final element is maximum")
assertTest(maxSubArray([5, -4, 3, -2, 1]), 5, "First element is maximum")
assertTest(maxSubArray([2, 1, -3, 4, -1, 2, 1]), 6, "Modified example 1")
assertTest(
  maxSubArray([-2, -3, 4, -1, -2, 1, 5]),
  7,
  "Negative start positive end",
)
assertTest(maxSubArray([6, -3, 4, -1, 2, -1]), 8, "Multiple possible subarrays")
assertTest(maxSubArray([10, -5, 3, -2, 8, -1]), 13, "Large positive start")
assertTest(
  maxSubArray([-1, -2, -3, 4, 5, 6]),
  15,
  "Negative start, positive end",
)
assertTest(maxSubArray([7, 8, 9, -20, 1, 2]), 24, "Large negative separator")
assertTest(maxSubArray([1, 2, 3, -10, 4, 5, 6]), 15, "Two segments separated")
assertTest(maxSubArray([0, -1, 2, 3]), 5, "Zero at start")
assertTest(maxSubArray([2, 3, -1, 0]), 5, "Zero at end")
assertTest(maxSubArray([-5, 1, 2, 3, -5]), 6, "Symmetric negatives")
assertTest(maxSubArray([42, -1, 42]), 83, "Answer to everything pattern")
assertTest(maxSubArray([99, -50, 25, -10, 15]), 74, "Large numbers mixed")
assertTest(maxSubArray([-10, 9, 20, -5, -16, 18]), 24, "Complex optimization")
assertTest(
  maxSubArray([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]),
  19,
  "Long complex array",
)


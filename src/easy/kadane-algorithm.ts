import assertTest from "../assert-test"

/**
 * Maximum Subarray (Kadane's Algorithm) (#53)
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * Example:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maxSubArray(nums: number[]): number {
  // TODO: Implement Kadane's Algorithm for maximum subarray sum
  return 0
}

// Test cases
assertTest(
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
  6,
  "Example 1 - classic case",
)
assertTest(maxSubArray([1]), 1, "Single positive element")
assertTest(maxSubArray([-1]), -1, "Single negative element")
assertTest(maxSubArray([5, 4, -1, 7, 8]), 23, "Mostly positive numbers")
assertTest(maxSubArray([-2, -1]), -1, "All negative - choose least negative")
assertTest(maxSubArray([1, 2, 3, 4, 5]), 15, "All positive numbers")
assertTest(
  maxSubArray([-5, -2, -8, -1]),
  -1,
  "All negative - multiple elements",
)
assertTest(maxSubArray([0]), 0, "Single zero")
assertTest(maxSubArray([0, 0, 0]), 0, "All zeros")
assertTest(maxSubArray([1, -1, 1]), 1, "Alternating pos/neg")
assertTest(maxSubArray([-1, 1, -1]), 1, "Alternating neg/pos")
assertTest(maxSubArray([1, 2, -5, 4, 5]), 9, "Reset in middle")
assertTest(maxSubArray([10, -5, 3, -2, 8]), 14, "Multiple segments")
assertTest(maxSubArray([2, 1, -3, 4, -1, 2, 1, -5, 4]), 6, "Modified example")
assertTest(maxSubArray([-1, -2, -3, -4]), -1, "Decreasing negative")
assertTest(maxSubArray([4, 3, 2, 1]), 10, "Decreasing positive")
assertTest(maxSubArray([1, 2, 3, 4]), 10, "Increasing positive")
assertTest(maxSubArray([-4, -3, -2, -1]), -1, "Increasing negative")
assertTest(maxSubArray([100]), 100, "Large single element")
assertTest(maxSubArray([-100]), -100, "Large negative single")
assertTest(maxSubArray([1, 1, 1, 1, 1]), 5, "All same positive")
assertTest(maxSubArray([-1, -1, -1, -1, -1]), -1, "All same negative")
assertTest(maxSubArray([0, 1, 0, 1, 0]), 2, "Zeros and ones")
assertTest(maxSubArray([10, -1, 10]), 19, "High-low-high pattern")
assertTest(maxSubArray([-10, 1, -10]), 1, "Low-high-low pattern")
assertTest(maxSubArray([5, -3, 5]), 7, "Keep negative in middle")
assertTest(maxSubArray([5, -10, 5]), 5, "Drop negative section")
assertTest(maxSubArray([1, -4, 3, 2]), 5, "Skip negative dip")
assertTest(maxSubArray([2, -1, 2, -1, 2]), 4, "Multiple small negatives")
assertTest(maxSubArray([-2, 1, 2, 1, -2]), 4, "Positive sequence in middle")
assertTest(maxSubArray([3, -2, 3, -2, 3]), 5, "Pattern with small negatives")
assertTest(maxSubArray([1, 2, -10, 3, 4]), 7, "Large negative separator")


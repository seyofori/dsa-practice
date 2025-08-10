import assertTest from "../assert-test"

/**
 * Subarray Sum Equals K (#560)
 *
 * Given an array of integers nums and an integer k, return the total number of continuous subarrays
 * whose sum equals to k.
 *
 * Example:
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 *
 * Input: nums = [1,2,3], k = 3
 * Output: 2
 *
 * Time Complexity: O(n) using prefix sum with hash map
 * Space Complexity: O(n) for the hash map
 */

function subarraySum(nums: number[], k: number): number {
  // TODO: Implement using prefix sum and hash map
  return 0
}

// Test cases
assertTest(subarraySum([1, 1, 1], 2), 2, "Subarray sum K - example 1")

assertTest(subarraySum([1, 2, 3], 3), 2, "Subarray sum K - example 2")

assertTest(subarraySum([1], 1), 1, "Subarray sum K - single element match")

assertTest(subarraySum([1], 0), 0, "Subarray sum K - single element no match")

assertTest(
  subarraySum([1, 2, 1, 2, 1], 3),
  4,
  "Subarray sum K - multiple matches",
)

assertTest(
  subarraySum([1, -1, 0], 0),
  3,
  "Subarray sum K - with negatives and zero",
)

assertTest(
  subarraySum([1, 2, 3, 4, 5], 9),
  2,
  "Subarray sum K - sequential numbers",
)

assertTest(subarraySum([0, 0, 0], 0), 6, "Subarray sum K - all zeros")

assertTest(
  subarraySum([-1, -1, 1], 0),
  1,
  "Subarray sum K - negatives canceling",
)

assertTest(
  subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7),
  4,
  "Subarray sum K - mixed array",
)

assertTest(
  subarraySum([1, 0, 1, 0, 1], 1),
  6,
  "Subarray sum K - zeros and ones",
)

assertTest(subarraySum([5, 5, 5, 5], 10), 3, "Subarray sum K - repeated values")

assertTest(
  subarraySum([1, 2, 3, -3, 1, 1, 1, 4, 2, -3], 3),
  8,
  "Subarray sum K - complex case",
)

assertTest(
  subarraySum([-1, 1, -1, 1], 0),
  4,
  "Subarray sum K - alternating signs",
)

assertTest(subarraySum([100], 200), 0, "Subarray sum K - impossible")

assertTest(subarraySum([1, 1, 1, 1, 1, 1], 3), 4, "Subarray sum K - all ones")

assertTest(subarraySum([2, 4, 6], 6), 2, "Subarray sum K - even numbers")

assertTest(subarraySum([10, -5, 5], 10), 2, "Subarray sum K - with negative")

assertTest(
  subarraySum([1, 2, -2, 1], 1),
  3,
  "Subarray sum K - canceling middle",
)

assertTest(
  subarraySum([0, 1, 0, 1, 0], 1),
  4,
  "Subarray sum K - zeros and ones pattern",
)

assertTest(
  subarraySum([7, 3, 1, 4, 2], 7),
  2,
  "Subarray sum K - target at start",
)

assertTest(
  subarraySum([1, 1, 2, 2, 3, 3], 4),
  3,
  "Subarray sum K - pairs pattern",
)

assertTest(subarraySum([-1, -2, -3], -3), 2, "Subarray sum K - all negative")

assertTest(subarraySum([5, 0, 5], 5), 3, "Subarray sum K - with zero in middle")

assertTest(
  subarraySum([1, 2, 1, 3, 2], 4),
  2,
  "Subarray sum K - random pattern",
)

assertTest(
  subarraySum([28, 54, 7, -70, 22, 65, -6], 100),
  1,
  "Subarray sum K - large numbers",
)

assertTest(
  subarraySum([1, -1, 1, -1, 1], 1),
  3,
  "Subarray sum K - alternating pattern",
)

assertTest(
  subarraySum([4, 2, 9, 7, 19], 11),
  2,
  "Subarray sum K - various combinations",
)

assertTest(
  subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 0),
  45,
  "Subarray sum K - many zeros",
)

assertTest(
  subarraySum([23, 2, 4, 6, 7], 6),
  1,
  "Subarray sum K - single match in middle",
)


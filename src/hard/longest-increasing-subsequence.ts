import assertTest from "../assert-test"

/**
 * Longest Increasing Subsequence (#300)
 *
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 * A subsequence is a sequence that can be derived from an array by deleting some or no elements
 * without changing the order of the remaining elements.
 *
 * Time Complexity: O(n log n) using binary search approach
 * Space Complexity: O(n)
 */
function lengthOfLIS(nums: number[]): number {
  // TODO: Implement the solution
  return 0
}

// Test cases
assertTest(
  lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]),
  4,
  "Classic example - [2,3,7,18] or [2,3,7,101]",
)
assertTest(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4, "Another classic - [0,1,2,3]")
assertTest(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]), 1, "All same elements")
assertTest(lengthOfLIS([1]), 1, "Single element")
assertTest(lengthOfLIS([1, 2, 3, 4, 5]), 5, "Already sorted increasing")
assertTest(lengthOfLIS([5, 4, 3, 2, 1]), 1, "Decreasing sequence")
assertTest(lengthOfLIS([1, 3, 2, 4]), 3, "Simple case - [1,2,4] or [1,3,4]")
assertTest(lengthOfLIS([10, 22, 9, 33, 21, 50, 41, 60]), 5, "Mixed sequence")
assertTest(lengthOfLIS([1, 2]), 2, "Two element increasing")
assertTest(lengthOfLIS([2, 1]), 1, "Two element decreasing")
assertTest(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]), 6, "Complex sequence")
assertTest(lengthOfLIS([0]), 1, "Single zero")
assertTest(lengthOfLIS([-1, 0, 1]), 3, "Negative to positive")
assertTest(
  lengthOfLIS([-10, -9, -2, -5, -3, -7, -101, -18]),
  1,
  "All negative decreasing",
)
assertTest(lengthOfLIS([-10, -9, -8, -7, -6]), 5, "All negative increasing")
assertTest(
  lengthOfLIS([4, 10, 4, 3, 8, 9]),
  3,
  "Duplicates and mixed - [4,8,9]",
)
assertTest(lengthOfLIS([2, 15, 3, 7, 8, 6, 18]), 5, "Another mixed sequence")
assertTest(
  lengthOfLIS([1, 3, 2, 4, 5, 7, 6, 8]),
  6,
  "Mostly increasing with obstacles",
)
assertTest(lengthOfLIS([100, 1, 2, 3, 4]), 4, "Large first element")
assertTest(lengthOfLIS([1, 2, 3, 4, 100]), 5, "Large last element")
assertTest(
  lengthOfLIS([5, 2, 8, 6, 3, 6, 9, 7]),
  4,
  "Multiple optimal sequences",
)
assertTest(lengthOfLIS([3, 1, 4, 1, 5, 9, 2, 6]), 4, "Pi sequence start")
assertTest(
  lengthOfLIS([10, 20, 30, 5, 6, 7, 8]),
  4,
  "Two separate increasing parts",
)
assertTest(lengthOfLIS([1, 100, 2, 3, 4, 5]), 5, "Early outlier")
assertTest(lengthOfLIS([50, 3, 10, 7, 40, 80]), 4, "Jump around sequence")
assertTest(
  lengthOfLIS([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]),
  6,
  "Complex pattern",
)
assertTest(
  lengthOfLIS([6, 3, 5, 10, 11, 2, 9, 14, 13, 7, 4, 8, 12]),
  6,
  "Randomly shuffled",
)
assertTest(
  lengthOfLIS([2, 5, 3, 7, 11, 8, 10, 13, 6]),
  6,
  "Another complex case",
)
assertTest(
  lengthOfLIS([1, 5, 3, 7, 2, 8, 4, 9, 6, 10]),
  6,
  "Interleaved pattern",
)
assertTest(
  lengthOfLIS([15, 27, 14, 38, 26, 55, 46, 65, 85]),
  6,
  "Larger numbers",
)
assertTest(
  lengthOfLIS([9, 2, 5, 3, 7, 101, 18, 1, 4, 6, 8]),
  5,
  "Mixed with very large number",
)
assertTest(lengthOfLIS([4, 2, 1, 4, 3, 4, 5, 8, 15]), 6, "Duplicates included")
assertTest(lengthOfLIS([1, 2, 3, 1, 2, 3, 1, 2, 3]), 3, "Repeating pattern")


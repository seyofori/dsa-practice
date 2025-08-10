import assertTest from "../assert-test"

/**
 * Longest Consecutive Sequence (#128)
 *
 * Given an unsorted array of integers nums, return the length of the longest consecutive
 * elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * Example:
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function longestConsecutive(nums: number[]): number {
  // TODO: Implement using HashSet to find consecutive sequences
  return 0
}

// Test cases
assertTest(
  longestConsecutive([100, 4, 200, 1, 3, 2]),
  4,
  "Example 1 - unordered sequence",
)
assertTest(
  longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]),
  9,
  "Example 2 - long sequence",
)
assertTest(longestConsecutive([]), 0, "Empty array")
assertTest(longestConsecutive([1]), 1, "Single element")
assertTest(longestConsecutive([1, 2, 3, 4, 5]), 5, "Already consecutive")
assertTest(longestConsecutive([5, 4, 3, 2, 1]), 5, "Reverse consecutive")
assertTest(longestConsecutive([1, 3, 5, 7, 9]), 1, "No consecutive elements")
assertTest(longestConsecutive([1, 1, 1, 1]), 1, "All duplicates")
assertTest(longestConsecutive([1, 2, 2, 3, 4]), 4, "With duplicates")
assertTest(longestConsecutive([0, 0]), 1, "Duplicate zeros")
assertTest(longestConsecutive([1, 2, 0, 1]), 3, "Sequence with zero")
assertTest(longestConsecutive([-1, 0, 1, 2]), 4, "Sequence with negatives")
assertTest(longestConsecutive([-2, -1, 0, 1, 2]), 5, "Symmetric around zero")
assertTest(
  longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]),
  7,
  "Complex sequence",
)
assertTest(longestConsecutive([1, 3, 2, 4]), 4, "Small consecutive")
assertTest(longestConsecutive([10, 5, 12, 3]), 1, "No consecutive pairs")
assertTest(longestConsecutive([1, 2, 3, 5, 6, 7]), 3, "Two separate sequences")
assertTest(longestConsecutive([1, 2, 4, 5, 6]), 3, "Gap in middle")
assertTest(longestConsecutive([100, 200, 300, 1, 2, 3]), 3, "Mixed ranges")
assertTest(
  longestConsecutive([1, 9, 3, 10, 4, 20, 2]),
  4,
  "Scattered consecutive",
)
assertTest(
  longestConsecutive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
  10,
  "Long consecutive",
)
assertTest(longestConsecutive([10, 11, 12, 1, 2, 3]), 3, "Two equal sequences")
assertTest(longestConsecutive([1, 0, -1]), 3, "Consecutive around zero")
assertTest(longestConsecutive([-3, -2, -1, 0, 1]), 5, "Negative to positive")
assertTest(longestConsecutive([2147483647, -2147483648]), 1, "Extreme values")
assertTest(
  longestConsecutive([1, 2, 3, 100, 101, 102, 103]),
  4,
  "Two sequences different lengths",
)
assertTest(
  longestConsecutive([5, 5, 5, 5, 6, 7]),
  3,
  "Duplicates with consecutive",
)
assertTest(longestConsecutive([1, 3, 5, 2, 4]), 5, "Out of order consecutive")
assertTest(longestConsecutive([10, 9, 8, 7, 6]), 5, "Reverse order consecutive")
assertTest(
  longestConsecutive([1000000, 999999, 1000001]),
  3,
  "Large consecutive numbers",
)
assertTest(longestConsecutive([0, -1, 1, -2, 2]), 5, "Alternating pattern")
assertTest(
  longestConsecutive([1, 2, 3, 5, 6, 7, 9, 10, 11]),
  3,
  "Multiple sequences of 3",
)
assertTest(
  longestConsecutive([50, 51, 52, 1, 2, 3, 4, 5, 6]),
  6,
  "Longer sequence wins",
)


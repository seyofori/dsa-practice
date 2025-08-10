import assertTest from "../assert-test"

/**
 * Max Consecutive Ones (#485)
 *
 * Given a binary array nums, return the maximum number of consecutive 1s in the array.
 *
 * Example:
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s.
 * The maximum number of consecutive 1s is 3.
 *
 * Time Complexity: O(n) where n is the length of nums
 * Space Complexity: O(1)
 */

function findMaxConsecutiveOnes(nums: number[]): number {
  // TODO: Implement max consecutive ones counting
  return 0
}

// Test cases
assertTest(
  findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]),
  3,
  "Example 1 - mixed array",
)
assertTest(
  findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]),
  2,
  "Example 2 - scattered ones",
)
assertTest(findMaxConsecutiveOnes([1]), 1, "Single one")
assertTest(findMaxConsecutiveOnes([0]), 0, "Single zero")
assertTest(findMaxConsecutiveOnes([]), 0, "Empty array")
assertTest(findMaxConsecutiveOnes([1, 1, 1, 1, 1]), 5, "All ones")
assertTest(findMaxConsecutiveOnes([0, 0, 0, 0, 0]), 0, "All zeros")
assertTest(findMaxConsecutiveOnes([1, 0]), 1, "One then zero")
assertTest(findMaxConsecutiveOnes([0, 1]), 1, "Zero then one")
assertTest(findMaxConsecutiveOnes([1, 1]), 2, "Two consecutive ones")
assertTest(findMaxConsecutiveOnes([0, 0]), 0, "Two consecutive zeros")
assertTest(
  findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1]),
  3,
  "Two groups of ones",
)
assertTest(
  findMaxConsecutiveOnes([1, 0, 1, 0, 1, 0, 1]),
  1,
  "Alternating pattern",
)
assertTest(
  findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1]),
  3,
  "Longer sequence first",
)
assertTest(
  findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1]),
  4,
  "Longer sequence last",
)
assertTest(
  findMaxConsecutiveOnes([0, 1, 1, 1, 0, 1, 1]),
  3,
  "Equal length sequences",
)
assertTest(
  findMaxConsecutiveOnes([1, 1, 1, 1, 0, 1, 1, 1, 1, 1]),
  5,
  "Longer sequence after break",
)
assertTest(
  findMaxConsecutiveOnes([0, 0, 1, 1, 1, 1, 1, 0, 0]),
  5,
  "Ones in middle",
)
assertTest(
  findMaxConsecutiveOnes([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
  10,
  "Ten consecutive ones",
)
assertTest(
  findMaxConsecutiveOnes([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]),
  1,
  "No consecutive ones",
)
assertTest(
  findMaxConsecutiveOnes([1, 0, 0, 0, 1, 1, 0, 1, 1, 1]),
  3,
  "Multiple groups",
)
assertTest(
  findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1]),
  3,
  "Multiple groups of three",
)
assertTest(findMaxConsecutiveOnes([0, 0, 0, 1, 1, 1, 1]), 4, "Ones at end")
assertTest(findMaxConsecutiveOnes([1, 1, 1, 1, 0, 0, 0]), 4, "Ones at start")
assertTest(
  findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1, 1, 1, 0, 1]),
  3,
  "Complex pattern",
)
assertTest(
  findMaxConsecutiveOnes([0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1]),
  4,
  "Another complex pattern",
)
assertTest(
  findMaxConsecutiveOnes([1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1]),
  4,
  "Multiple equal sequences",
)
assertTest(
  findMaxConsecutiveOnes([1, 0, 1, 1, 1, 1, 1, 1, 0, 1]),
  6,
  "Long sequence in middle",
)
assertTest(
  findMaxConsecutiveOnes([1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]),
  6,
  "Two equal long sequences",
)
assertTest(
  findMaxConsecutiveOnes([0, 0, 1, 0, 0, 1, 1, 0, 0]),
  2,
  "Short sequences",
)


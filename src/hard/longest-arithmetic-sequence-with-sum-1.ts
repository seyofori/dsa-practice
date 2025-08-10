import assertTest from "../assert-test"

/**
 * Given an unsorted array of integers, return the length of the longest sequence of numbers where the difference between consecutive numbers is exactly 1, regardless of order.

Unlike longestConsecutive, this isn’t about consecutive integers — it’s about consecutive steps of +1 even if out of order.
 * @param nums unsorted array of integers
 */
function longestArithmeticStreak(nums: number[]): number {
  // TODO: Implement longest arithmetic sequence with difference of 1
  return 0
}

assertTest(
  longestArithmeticStreak([10, 4, 5, 6, 3, 2, 1]),
  5,
  "Sequence: 2-3-4-5-6",
)

assertTest(
  longestArithmeticStreak([100, 101, 102, 1, 2]),
  3,
  "Sequence: 100-101-102",
)
assertTest(longestArithmeticStreak([5, 5, 5, 5]), 1, "All same")

assertTest(longestArithmeticStreak([]), 0, "Empty input")

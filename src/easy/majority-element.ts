import assertTest from "../assert-test"

/**
 * Majority Element (#169)
 *
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) - using Boyer-Moore Voting Algorithm
 */
function majorityElement(nums: number[]): number {
  // TODO: Implement the solution
  return 0
}

// Test cases
assertTest(majorityElement([3, 2, 3]), 3, "Basic case")
assertTest(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2, "Mixed elements")
assertTest(majorityElement([1]), 1, "Single element")
assertTest(majorityElement([1, 1]), 1, "Two same elements")
assertTest(majorityElement([1, 2, 1]), 1, "Three elements")
assertTest(majorityElement([6, 5, 5]), 5, "Majority at end")
assertTest(majorityElement([5, 5, 6]), 5, "Majority at start")
assertTest(majorityElement([1, 1, 1, 1, 2, 2, 2]), 1, "Clear majority")
assertTest(majorityElement([2, 2, 2, 3, 3]), 2, "Exactly majority")
assertTest(majorityElement([1, 2, 3, 1, 1]), 1, "Scattered majority")
assertTest(majorityElement([0, 0, 0, 1, 1]), 0, "Zero majority")
assertTest(majorityElement([-1, -1, -1, 1]), -1, "Negative majority")
assertTest(majorityElement([100, 100, 200]), 100, "Large numbers")
assertTest(majorityElement([7, 7, 7, 7, 8, 8, 8]), 7, "Four vs three")
assertTest(majorityElement([1, 1, 1, 2, 2, 2, 1]), 1, "Back and forth")
assertTest(majorityElement([5, 4, 5, 4, 5]), 5, "Alternating with majority")
assertTest(majorityElement([9, 9, 9, 8, 8]), 9, "Three vs two")
assertTest(
  majorityElement([10, 10, 10, 10, 10, 1, 2, 3]),
  10,
  "Overwhelming majority",
)
assertTest(majorityElement([1, 2, 1, 2, 1, 2, 1]), 1, "Minimal majority")
assertTest(majorityElement([42, 42, 42, 17, 17]), 42, "Answer to everything")
assertTest(majorityElement([1, 1, 2, 2, 3, 3, 1]), 1, "Mixed with majority")
assertTest(majorityElement([5, 5, 5, 5, 4, 4, 4]), 5, "Just over half")
assertTest(majorityElement([8, 8, 7, 7, 7]), 7, "Close but clear")
assertTest(majorityElement([1, 1, 1, 1, 1, 2, 2, 2, 2]), 1, "Five vs four")
assertTest(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]), 4, "Complex pattern")
assertTest(majorityElement([6, 6, 6, 7, 7]), 6, "Simple majority")
assertTest(majorityElement([2, 3, 2, 3, 2]), 2, "Interleaved majority")
assertTest(majorityElement([1, 1, 1, 1, 2, 3, 4]), 1, "Four out of seven")
assertTest(majorityElement([0, 1, 0, 1, 0]), 0, "Binary with zero majority")
assertTest(majorityElement([1, 0, 1, 0, 1]), 1, "Binary with one majority")
assertTest(
  majorityElement([99, 99, 99, 99, 99, 88, 88, 88, 88]),
  99,
  "Large majority",
)


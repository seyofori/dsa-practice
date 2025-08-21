import assertTest from "../assert-test"

/**
 * Subsets (#78)
 *
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * Time Complexity: O(2^n) where n is the length of nums
 * Space Complexity: O(2^n) for storing all subsets
 */
function subsets(nums: number[]): number[][] {
  // TODO: Implement the subsets function
  // You can use backtracking approach:
  // 1. Start with an empty subset
  // 2. For each number, either include it or exclude it
  // 3. Use recursion to generate all combinations
  return []
}

// Test cases
assertTest(
  JSON.stringify(subsets([1, 2, 3]).sort()),
  JSON.stringify([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]].sort()),
  "Example 1 - three elements",
)

assertTest(
  JSON.stringify(subsets([0]).sort()),
  JSON.stringify([[], [0]].sort()),
  "Example 2 - single element",
)

assertTest(
  JSON.stringify(subsets([]).sort()),
  JSON.stringify([[]].sort()),
  "Empty array",
)

assertTest(
  JSON.stringify(subsets([1]).sort()),
  JSON.stringify([[], [1]].sort()),
  "Single element",
)

assertTest(
  JSON.stringify(subsets([1, 2]).sort()),
  JSON.stringify([[], [1], [2], [1, 2]].sort()),
  "Two elements",
)

assertTest(
  JSON.stringify(subsets([2, 1]).sort()),
  JSON.stringify([[], [1], [2], [1, 2]].sort()),
  "Two elements different order",
)

assertTest(
  JSON.stringify(subsets([1, 2, 3, 4]).sort()),
  JSON.stringify(
    [
      [],
      [1],
      [2],
      [3],
      [4],
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
      [1, 2, 3],
      [1, 2, 4],
      [1, 3, 4],
      [2, 3, 4],
      [1, 2, 3, 4],
    ].sort(),
  ),
  "Four elements - complete power set",
)

assertTest(
  JSON.stringify(subsets([5]).sort()),
  JSON.stringify([[], [5]].sort()),
  "Single different element",
)

assertTest(
  JSON.stringify(subsets([3, 1]).sort()),
  JSON.stringify([[], [1], [3], [1, 3]].sort()),
  "Two elements reverse order",
)

assertTest(
  JSON.stringify(subsets([1, 3, 2]).sort()),
  JSON.stringify([[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]].sort()),
  "Three elements mixed order",
)

assertTest(
  JSON.stringify(subsets([4, 3, 2, 1]).sort()),
  JSON.stringify(
    [
      [],
      [1],
      [2],
      [3],
      [4],
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
      [1, 2, 3],
      [1, 2, 4],
      [1, 3, 4],
      [2, 3, 4],
      [1, 2, 3, 4],
    ].sort(),
  ),
  "Four elements reverse order",
)

assertTest(
  JSON.stringify(subsets([10]).sort()),
  JSON.stringify([[], [10]].sort()),
  "Single larger element",
)

assertTest(
  JSON.stringify(subsets([7, 8]).sort()),
  JSON.stringify([[], [7], [8], [7, 8]].sort()),
  "Two larger elements",
)

assertTest(
  JSON.stringify(subsets([9, 0, 3]).sort()),
  JSON.stringify([[], [0], [3], [9], [0, 3], [0, 9], [3, 9], [0, 3, 9]].sort()),
  "Three elements with zero",
)

assertTest(
  JSON.stringify(subsets([-1]).sort()),
  JSON.stringify([[], [-1]].sort()),
  "Single negative element",
)

assertTest(
  JSON.stringify(subsets([-1, 0]).sort()),
  JSON.stringify([[], [-1], [0], [-1, 0]].sort()),
  "Negative and zero",
)

assertTest(
  JSON.stringify(subsets([-2, -1, 0]).sort()),
  JSON.stringify(
    [[], [-2], [-1], [0], [-2, -1], [-2, 0], [-1, 0], [-2, -1, 0]].sort(),
  ),
  "Negative elements with zero",
)

assertTest(
  JSON.stringify(subsets([1, 4, 3]).sort()),
  JSON.stringify([[], [1], [3], [4], [1, 3], [1, 4], [3, 4], [1, 3, 4]].sort()),
  "Three elements different order",
)

assertTest(
  JSON.stringify(subsets([2, 3]).sort()),
  JSON.stringify([[], [2], [3], [2, 3]].sort()),
  "Two consecutive elements",
)

assertTest(
  JSON.stringify(subsets([5, 1, 3]).sort()),
  JSON.stringify([[], [1], [3], [5], [1, 3], [1, 5], [3, 5], [1, 3, 5]].sort()),
  "Three elements random order",
)


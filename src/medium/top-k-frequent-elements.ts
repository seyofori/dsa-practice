import assertTest from "../assert-test"

/**
 * Top K Frequent Elements (#347)
 *
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * Time Complexity: O(n log k) using heap, O(n) using bucket sort
 * Space Complexity: O(n)
 */
function topKFrequent(nums: number[], k: number): number[] {
  // TODO: Implement the solution using heap or bucket sort

  return []
}

// Helper function to sort arrays for consistent testing
function sortArray(arr: number[]): number[] {
  return arr.sort((a, b) => a - b)
}

// Test cases
assertTest(
  sortArray(topKFrequent([1, 1, 1, 2, 2, 3], 2)),
  [1, 2],
  "Basic case - k=2",
)
assertTest(sortArray(topKFrequent([1], 1)), [1], "Single element")
assertTest(sortArray(topKFrequent([1, 2], 2)), [1, 2], "Two elements - both")
assertTest(
  sortArray(topKFrequent([1, 2], 1)).length,
  1,
  "Two elements - one result",
)
assertTest(
  sortArray(topKFrequent([1, 1, 2, 2, 3], 2)),
  [1, 2],
  "Tie case - multiple same frequency",
)
assertTest(
  sortArray(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)),
  [-1, 2],
  "With negative numbers",
)
assertTest(topKFrequent([3, 0, 1, 0], 1), [0], "With zero - most frequent")
assertTest(
  sortArray(topKFrequent([1, 1, 1, 2, 2, 3, 3, 4], 3)),
  [1, 2, 3],
  "Multiple frequencies",
)
assertTest(
  sortArray(topKFrequent([5, 5, 5, 5, 6, 6, 7], 2)),
  [5, 6],
  "Clear frequency difference",
)
assertTest(topKFrequent([1, 2, 3, 4, 5], 1).length, 1, "All unique - k=1")
assertTest(
  sortArray(topKFrequent([1, 2, 3, 4, 5], 3)).length,
  3,
  "All unique - k=3",
)
assertTest(
  sortArray(topKFrequent([1, 2, 3, 4, 5], 5)),
  [1, 2, 3, 4, 5],
  "All unique - all elements",
)
assertTest(topKFrequent([7, 7, 7], 1), [7], "All same elements")
assertTest(
  sortArray(topKFrequent([1, 1, 2, 2, 3, 3], 3)),
  [1, 2, 3],
  "All same frequency",
)
assertTest(
  sortArray(topKFrequent([10, 10, 20, 20, 30], 2)),
  [10, 20],
  "Larger numbers",
)
assertTest(
  sortArray(topKFrequent([-1, -1, -2, -2, -3], 2)),
  [-1, -2],
  "All negative",
)
assertTest(
  topKFrequent([100, 100, 100, 200, 300], 1),
  [100],
  "Mix of frequencies",
)
assertTest(
  sortArray(topKFrequent([1, 1, 1, 1, 2, 2, 3], 2)),
  [1, 2],
  "Dominant frequency",
)
assertTest(
  sortArray(topKFrequent([6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -1], 3))
    .length,
  3,
  "Random array - k=3",
)
assertTest(
  topKFrequent([2, 3, 4, 5, 6, 7, 8, 9, 2], 1),
  [2],
  "One duplicate in sequence",
)
assertTest(
  sortArray(topKFrequent([8, 8, 7, 7, 7, 6, 6, 5], 3)),
  [7, 6, 8],
  "Descending with duplicates",
)
assertTest(sortArray(topKFrequent([0, 0, 0, 1, 1, 2], 2)), [0, 1], "With zeros")
assertTest(topKFrequent([50, 50, 50, 40, 40, 30], 1), [50], "Clear winner")
assertTest(
  sortArray(topKFrequent([11, 22, 33, 11, 22, 44], 2)),
  [11, 22],
  "Pairs of duplicates",
)
assertTest(
  sortArray(topKFrequent([1, 2, 1, 3, 2, 1, 4, 3, 2, 1], 3)),
  [1, 2, 3],
  "Complex frequency pattern",
)
assertTest(
  topKFrequent([99, 99, 88, 77, 66], 1),
  [99],
  "Mixed unique and duplicate",
)
assertTest(
  sortArray(topKFrequent([15, 25, 15, 35, 25, 15], 2)),
  [15, 25],
  "Clear frequency order",
)
assertTest(
  sortArray(topKFrequent([-5, -10, -5, -15, -10, -5], 2)),
  [-5, -10],
  "Negative with clear frequency",
)
assertTest(
  topKFrequent([1000, 2000, 1000, 3000, 1000], 1),
  [1000],
  "Large numbers - clear winner",
)
assertTest(
  sortArray(topKFrequent([42, 42, 24, 24, 13, 13, 7], 3)),
  [42, 24, 13],
  "Multiple pairs",
)
assertTest(
  topKFrequent([5, 5, 4, 4, 3, 3, 2, 2, 1, 1], 1).length,
  1,
  "All same frequency - return one",
)

import assertTest from "../assert-test"

/**
 * Intersection of Two Arrays II (#350)
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result should appear as many times as it shows in both arrays
 * and you may return the result in any order.
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(min(n, m))
 */
function intersect(nums1: number[], nums2: number[]): number[] {
  // TODO: Implement intersection with duplicates
  return []
}

// Test cases
assertTest(
  intersect([1, 2, 2, 1], [2, 2]),
  [2, 2],
  "Basic intersection with duplicates",
)
assertTest(
  intersect([4, 9, 5], [9, 4, 9, 8, 4]).sort(),
  [4, 9],
  "Multiple elements",
)
assertTest(intersect([], [1, 2]), [], "Empty first array")
assertTest(intersect([1, 2], []), [], "Empty second array")
assertTest(intersect([], []), [], "Both arrays empty")
assertTest(intersect([1], [1]), [1], "Single element match")
assertTest(intersect([1], [2]), [], "Single element no match")
assertTest(intersect([1, 2, 3], [4, 5, 6]), [], "No intersection")
assertTest(intersect([1, 2, 3], [1, 2, 3]), [1, 2, 3], "Complete intersection")
assertTest(intersect([1, 1, 1], [1, 1]), [1, 1], "Multiple duplicates")
assertTest(intersect([1, 2, 2, 1], [2]), [2], "Single match from duplicates")
assertTest(intersect([3, 1, 2], [1, 1]), [1], "Unordered arrays")
assertTest(
  intersect([1, 2, 2, 3], [2, 2, 3, 3]),
  [2, 2, 3],
  "Complex duplicates",
)
assertTest(
  intersect([4, 7, 9, 7, 6, 7], [7, 7, 6]),
  [7, 7, 6],
  "Multiple occurrences",
)
assertTest(intersect([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [], "Disjoint sets")
assertTest(
  intersect([1, 1, 2, 2], [2, 2, 3, 3]),
  [2, 2],
  "Partial overlap with duplicates",
)
assertTest(intersect([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), [], "Odd vs even")
assertTest(intersect([0, 0, 0], [0, 0]), [0, 0], "Multiple zeros")
assertTest(intersect([-1, -2, -3], [-2, -3, -4]), [-2, -3], "Negative numbers")
assertTest(intersect([100, 200], [200, 300]), [200], "Large numbers")
assertTest(
  intersect([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]),
  [3, 4, 5],
  "Consecutive overlap",
)
assertTest(
  intersect([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]),
  [1, 2, 3, 4, 5],
  "Reverse order",
)
assertTest(
  intersect([1, 1, 1, 2, 2], [1, 2, 2, 2]),
  [1, 2, 2],
  "Different frequencies",
)
assertTest(
  intersect([1, 2, 3, 1, 2], [2, 3, 4, 2]),
  [2, 3, 2],
  "Scattered duplicates",
)
assertTest(intersect([42], [42, 42, 42]), [42], "Single vs multiple")
assertTest(intersect([1, 1, 1, 1], [1]), [1], "Many to one")
assertTest(
  intersect([10, 10, 20, 20, 30], [10, 20, 30, 30]),
  [10, 20, 30],
  "Mixed frequencies",
)
assertTest(
  intersect([7, 7, 7], [7, 7, 7, 7]),
  [7, 7, 7],
  "Limit by smaller array",
)
assertTest(intersect([1, 2, 3, 2, 1], [1, 2]), [1, 2], "Simple overlap")
assertTest(
  intersect([5, 5, 6, 6, 7], [5, 6, 6, 7, 7]),
  [5, 6, 6, 7],
  "Complex frequency matching",
)
assertTest(
  intersect([1, 1, 2, 2, 3, 3], [3, 3, 4, 4, 5, 5]),
  [3, 3],
  "End overlap",
)
assertTest(
  intersect([8, 9, 10], [8, 8, 9]),
  [8, 9],
  "Frequency limited by first array",
)


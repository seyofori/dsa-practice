import assertTest from "../assert-test"

/**
 * Intersection of Two Arrays (#349)
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(min(n, m))
 */
function intersection(nums1: number[], nums2: number[]): number[] {
  // TODO: Implement intersection of two arrays
  return []
}

// Test cases
assertTest(intersection([1, 2, 2, 1], [2, 2]), [2], "Basic intersection")
assertTest(
  intersection([4, 9, 5], [9, 4, 9, 8, 4]),
  [9, 4],
  "Multiple duplicates",
)
assertTest(intersection([], [1, 2]), [], "Empty first array")
assertTest(intersection([1, 2], []), [], "Empty second array")
assertTest(intersection([], []), [], "Both arrays empty")
assertTest(intersection([1], [1]), [1], "Single element match")
assertTest(intersection([1], [2]), [], "Single element no match")
assertTest(intersection([1, 2, 3], [4, 5, 6]), [], "No intersection")
assertTest(
  intersection([1, 2, 3], [1, 2, 3]),
  [1, 2, 3],
  "Complete intersection",
)
assertTest(
  intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]),
  [3, 4, 5],
  "Partial intersection",
)
assertTest(intersection([1, 1, 1], [1]), [1], "Multiple duplicates in first")
assertTest(intersection([1], [1, 1, 1]), [1], "Multiple duplicates in second")
assertTest(intersection([1, 2, 2, 1], [2]), [2], "Duplicates with single match")
assertTest(intersection([3, 1, 2], [1, 1]), [1], "Unordered arrays")
assertTest(
  intersection([1, 2, 3, 2, 1], [3, 2]),
  [3, 2],
  "Multiple occurrences",
)
assertTest(
  intersection([4, 7, 9, 7, 6, 7], [5, 0, 0, 6, 1, 6, 2, 2, 4]).sort(),
  [4, 6],
  "Complex case",
)
assertTest(intersection([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [], "Disjoint sets")
assertTest(
  intersection([10, 20, 30], [30, 20, 10]).sort(),
  [10, 20, 30],
  "Reverse order",
)
assertTest(intersection([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), [], "Odd vs even")
assertTest(intersection([0, 0, 0], [0, 0]), [0], "Multiple zeros")
assertTest(
  intersection([-1, -2, -3], [-2, -3, -4]),
  [-2, -3],
  "Negative numbers",
)
assertTest(intersection([100, 200], [200, 300]), [200], "Large numbers")
assertTest(
  intersection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 6, 7]),
  [5, 6, 7],
  "Large first array",
)
assertTest(
  intersection([5, 6, 7], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  [5, 6, 7],
  "Large second array",
)
assertTest(
  intersection([1, 1, 2, 2, 3, 3], [1, 2, 3]),
  [1, 2, 3],
  "Duplicates in first only",
)
assertTest(
  intersection([1, 2, 3], [1, 1, 2, 2, 3, 3]),
  [1, 2, 3],
  "Duplicates in second only",
)
assertTest(
  intersection([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]),
  [1, 2, 3, 4, 5],
  "Sorted vs reverse sorted",
)
assertTest(intersection([1000], [1000]), [1000], "Single large number")
assertTest(
  intersection([1, 1000, 2000], [1000, 3000]),
  [1000],
  "Mixed large numbers",
)
assertTest(
  intersection([42, 17, 99, 3], [99, 42]).sort(),
  [42, 99],
  "Unordered intersection",
)
assertTest(
  intersection([1, 2, 3, 4], [2, 4, 6, 8]),
  [2, 4],
  "Even intersections",
)
assertTest(
  intersection([7, 14, 21, 28], [14, 28, 42]),
  [14, 28],
  "Multiples of 7",
)


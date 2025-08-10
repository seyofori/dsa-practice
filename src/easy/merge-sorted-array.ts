import assertTest from "../assert-test"

/**
 * Merge Sorted Array (#88)
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 *
 * Example:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // TODO: Implement in-place merge using three pointers (backwards)
}

// Helper function for testing
function testMerge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
  expected: number[],
  description: string,
): void {
  const nums1Copy = [...nums1]
  merge(nums1Copy, m, nums2, n)
  assertTest(nums1Copy, expected, description)
}

// Test cases
testMerge(
  [1, 2, 3, 0, 0, 0],
  3,
  [2, 5, 6],
  3,
  [1, 2, 2, 3, 5, 6],
  "Merge sorted array - example 1",
)

testMerge([1], 1, [], 0, [1], "Merge sorted array - second array empty")

testMerge([0], 0, [1], 1, [1], "Merge sorted array - first array empty")

testMerge(
  [1, 2, 0, 0],
  2,
  [3, 4],
  2,
  [1, 2, 3, 4],
  "Merge sorted array - no overlap",
)

testMerge(
  [4, 5, 6, 0, 0, 0],
  3,
  [1, 2, 3],
  3,
  [1, 2, 3, 4, 5, 6],
  "Merge sorted array - all nums2 smaller",
)

testMerge(
  [1, 2, 3, 0, 0, 0],
  3,
  [4, 5, 6],
  3,
  [1, 2, 3, 4, 5, 6],
  "Merge sorted array - all nums1 smaller",
)

testMerge(
  [1, 3, 5, 0, 0, 0],
  3,
  [2, 4, 6],
  3,
  [1, 2, 3, 4, 5, 6],
  "Merge sorted array - interleaved",
)

testMerge([2, 0], 1, [1], 1, [1, 2], "Merge sorted array - small arrays")

testMerge(
  [1, 0, 0, 0],
  1,
  [2, 3, 4],
  3,
  [1, 2, 3, 4],
  "Merge sorted array - mostly second array",
)

testMerge(
  [1, 2, 3, 4, 0],
  4,
  [5],
  1,
  [1, 2, 3, 4, 5],
  "Merge sorted array - mostly first array",
)

testMerge(
  [5, 6, 7, 0, 0, 0],
  3,
  [1, 2, 3],
  3,
  [1, 2, 3, 5, 6, 7],
  "Merge sorted array - reversed order",
)

testMerge(
  [1, 1, 1, 0, 0, 0],
  3,
  [2, 2, 2],
  3,
  [1, 1, 1, 2, 2, 2],
  "Merge sorted array - duplicates",
)

testMerge(
  [0, 0, 0, 0, 0],
  0,
  [1, 2, 3, 4, 5],
  5,
  [1, 2, 3, 4, 5],
  "Merge sorted array - completely empty first",
)

testMerge(
  [1, 2, 3, 4, 5],
  5,
  [],
  0,
  [1, 2, 3, 4, 5],
  "Merge sorted array - completely empty second",
)

testMerge(
  [1, 3, 0, 0],
  2,
  [2, 4],
  2,
  [1, 2, 3, 4],
  "Merge sorted array - perfect interleave",
)

testMerge(
  [10, 11, 12, 0, 0, 0],
  3,
  [1, 2, 3],
  3,
  [1, 2, 3, 10, 11, 12],
  "Merge sorted array - large gap",
)

testMerge(
  [0, 1, 2, 0, 0, 0],
  3,
  [3, 4, 5],
  3,
  [0, 1, 2, 3, 4, 5],
  "Merge sorted array - starting with zero",
)

testMerge(
  [-1, 0, 1, 0, 0, 0],
  3,
  [-2, -1, 0],
  3,
  [-2, -1, -1, 0, 0, 1],
  "Merge sorted array - negative numbers",
)

testMerge([100, 0], 1, [50], 1, [50, 100], "Merge sorted array - large numbers")

testMerge(
  [1, 2, 4, 5, 0, 0],
  4,
  [3, 6],
  2,
  [1, 2, 3, 4, 5, 6],
  "Merge sorted array - mixed positions",
)

testMerge(
  [7, 8, 9, 0, 0, 0],
  3,
  [1, 2, 3],
  3,
  [1, 2, 3, 7, 8, 9],
  "Merge sorted array - non-overlapping ranges",
)

testMerge(
  [2, 4, 6, 0, 0, 0],
  3,
  [1, 3, 5],
  3,
  [1, 2, 3, 4, 5, 6],
  "Merge sorted array - evens and odds",
)

testMerge(
  [1, 5, 9, 0, 0, 0],
  3,
  [2, 6, 8],
  3,
  [1, 2, 5, 6, 8, 9],
  "Merge sorted array - sparse pattern",
)

testMerge(
  [0, 0, 3, 0, 0, 0, 0],
  3,
  [1, 2, 5, 6],
  4,
  [0, 0, 1, 2, 3, 5, 6],
  "Merge sorted array - unequal lengths",
)

testMerge(
  [1, 2, 3, 4, 5, 6, 0],
  6,
  [7],
  1,
  [1, 2, 3, 4, 5, 6, 7],
  "Merge sorted array - append at end",
)

testMerge([2, 0], 1, [1], 1, [1, 2], "Merge sorted array - simple case")

testMerge(
  [4, 0, 0, 0],
  1,
  [1, 2, 3],
  3,
  [1, 2, 3, 4],
  "Merge sorted array - one element first",
)

testMerge(
  [10, 20, 30, 0, 0],
  3,
  [5, 25],
  2,
  [5, 10, 20, 25, 30],
  "Merge sorted array - mixed insertion",
)

testMerge(
  [1, 1, 2, 0, 0, 0],
  3,
  [2, 2, 3],
  3,
  [1, 1, 2, 2, 2, 3],
  "Merge sorted array - many duplicates",
)

testMerge(
  [-3, -1, 0, 0, 0],
  2,
  [-2, 0, 1],
  3,
  [-3, -2, -1, 0, 1],
  "Merge sorted array - negative and positive",
)


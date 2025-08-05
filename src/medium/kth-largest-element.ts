import assertTest from "../assert-test"

/**
 * Kth Largest Element in an Array (#215)
 *
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * You must solve it in O(n) time complexity.
 *
 * Time Complexity: O(n) average, O(n²) worst case (using quickselect)
 * Space Complexity: O(1)
 */
function findKthLargest(nums: number[], k: number): number {
  // TODO: Implement the solution using quickselect algorithm

  return 0
}

// Test cases
assertTest(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5, "Basic case - 2nd largest")
assertTest(
  findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4),
  4,
  "With duplicates - 4th largest",
)
assertTest(findKthLargest([1], 1), 1, "Single element")
assertTest(findKthLargest([1, 2], 1), 2, "Two elements - largest")
assertTest(findKthLargest([1, 2], 2), 1, "Two elements - smallest")
assertTest(
  findKthLargest([7, 10, 4, 3, 20, 15], 3),
  10,
  "Mixed numbers - 3rd largest",
)
assertTest(findKthLargest([2, 1], 1), 2, "Reverse sorted - largest")
assertTest(findKthLargest([2, 1], 2), 1, "Reverse sorted - smallest")
assertTest(findKthLargest([1, 2, 3, 4, 5], 3), 3, "Sorted array - middle")
assertTest(findKthLargest([5, 4, 3, 2, 1], 1), 5, "Reverse sorted - largest")
assertTest(findKthLargest([5, 4, 3, 2, 1], 5), 1, "Reverse sorted - smallest")
assertTest(findKthLargest([3, 3, 3, 3, 3], 2), 3, "All same elements")
assertTest(
  findKthLargest([1, 1, 1, 2, 2, 3], 1),
  3,
  "Multiple duplicates - largest",
)
assertTest(
  findKthLargest([1, 1, 1, 2, 2, 3], 3),
  2,
  "Multiple duplicates - 3rd largest",
)
assertTest(
  findKthLargest([1, 1, 1, 2, 2, 3], 6),
  1,
  "Multiple duplicates - smallest",
)
assertTest(findKthLargest([-1, 2, 0], 1), 2, "Negative numbers - largest")
assertTest(findKthLargest([-1, 2, 0], 2), 0, "Negative numbers - 2nd largest")
assertTest(findKthLargest([-1, 2, 0], 3), -1, "Negative numbers - smallest")
assertTest(
  findKthLargest([-5, -3, -1, -2, -4], 1),
  -1,
  "All negative - largest",
)
assertTest(
  findKthLargest([-5, -3, -1, -2, -4], 3),
  -3,
  "All negative - 3rd largest",
)
assertTest(
  findKthLargest([-5, -3, -1, -2, -4], 5),
  -5,
  "All negative - smallest",
)
assertTest(findKthLargest([0, 0, 0, 1, 1, 2], 1), 2, "With zeros - largest")
assertTest(findKthLargest([0, 0, 0, 1, 1, 2], 3), 1, "With zeros - 3rd largest")
assertTest(findKthLargest([0, 0, 0, 1, 1, 2], 6), 0, "With zeros - smallest")
assertTest(
  findKthLargest([100, 50, 25, 75], 2),
  75,
  "Large numbers - 2nd largest",
)
assertTest(
  findKthLargest([1000, 999, 998, 997], 1),
  1000,
  "Sequential large - largest",
)
assertTest(
  findKthLargest([1000, 999, 998, 997], 4),
  997,
  "Sequential large - smallest",
)
assertTest(
  findKthLargest([5, 2, 4, 1, 3, 6, 0], 4),
  3,
  "Random order - 4th largest",
)
assertTest(findKthLargest([9, 3, 2, 4, 8], 3), 4, "Unsorted - 3rd largest")
assertTest(
  findKthLargest([10, 10, 10, 9, 9, 8], 2),
  10,
  "Duplicates at top - 2nd largest",
)
assertTest(
  findKthLargest([10, 10, 10, 9, 9, 8], 4),
  9,
  "Duplicates at top - 4th largest",
)
assertTest(
  findKthLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5),
  6,
  "Long sorted - 5th largest",
)
assertTest(
  findKthLargest([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5),
  6,
  "Long reverse - 5th largest",
)

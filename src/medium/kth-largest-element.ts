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
}


// Test cases
assertTest(
  findKthLargest([3, 2, 1, 5, 6, 4], 2),
  5,
  "Example 1 - 2nd largest is 5",
)
assertTest(
  findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4),
  4,
  "Example 2 - 4th largest is 4",
)

// Single element
assertTest(findKthLargest([1], 1), 1, "Single element - 1st largest")

// Two elements
assertTest(findKthLargest([1, 2], 1), 2, "Two elements - 1st largest")
assertTest(findKthLargest([1, 2], 2), 1, "Two elements - 2nd largest")
assertTest(findKthLargest([2, 1], 1), 2, "Two elements reversed - 1st largest")

// All same elements
assertTest(findKthLargest([5, 5, 5, 5], 1), 5, "All same - 1st largest")
assertTest(findKthLargest([5, 5, 5, 5], 3), 5, "All same - 3rd largest")
assertTest(findKthLargest([5, 5, 5, 5], 4), 5, "All same - 4th largest")

// Sorted arrays
assertTest(
  findKthLargest([1, 2, 3, 4, 5], 1),
  5,
  "Sorted ascending - 1st largest",
)
assertTest(
  findKthLargest([1, 2, 3, 4, 5], 3),
  3,
  "Sorted ascending - 3rd largest",
)
assertTest(
  findKthLargest([1, 2, 3, 4, 5], 5),
  1,
  "Sorted ascending - 5th largest",
)

assertTest(
  findKthLargest([5, 4, 3, 2, 1], 1),
  5,
  "Sorted descending - 1st largest",
)
assertTest(
  findKthLargest([5, 4, 3, 2, 1], 3),
  3,
  "Sorted descending - 3rd largest",
)
assertTest(
  findKthLargest([5, 4, 3, 2, 1], 5),
  1,
  "Sorted descending - 5th largest",
)

// With duplicates
assertTest(
  findKthLargest([1, 1, 1, 2, 2, 3], 1),
  3,
  "With duplicates - 1st largest",
)
assertTest(
  findKthLargest([1, 1, 1, 2, 2, 3], 2),
  2,
  "With duplicates - 2nd largest",
)
assertTest(
  findKthLargest([1, 1, 1, 2, 2, 3], 3),
  2,
  "With duplicates - 3rd largest",
)
assertTest(
  findKthLargest([1, 1, 1, 2, 2, 3], 4),
  1,
  "With duplicates - 4th largest",
)

// Negative numbers
assertTest(findKthLargest([-1, -3, -2], 1), -1, "All negative - 1st largest")
assertTest(findKthLargest([-1, -3, -2], 2), -2, "All negative - 2nd largest")
assertTest(findKthLargest([-1, -3, -2], 3), -3, "All negative - 3rd largest")

// Mixed positive and negative
assertTest(findKthLargest([-1, 2, 0], 1), 2, "Mixed signs - 1st largest")
assertTest(findKthLargest([-1, 2, 0], 2), 0, "Mixed signs - 2nd largest")
assertTest(findKthLargest([-1, 2, 0], 3), -1, "Mixed signs - 3rd largest")

// Large numbers
assertTest(
  findKthLargest([1000, 999, 1001, 998], 1),
  1001,
  "Large numbers - 1st largest",
)
assertTest(
  findKthLargest([1000, 999, 1001, 998], 2),
  1000,
  "Large numbers - 2nd largest",
)

// Random order
assertTest(
  findKthLargest([7, 10, 4, 3, 20, 15], 1),
  20,
  "Random order - 1st largest",
)
assertTest(
  findKthLargest([7, 10, 4, 3, 20, 15], 2),
  15,
  "Random order - 2nd largest",
)
assertTest(
  findKthLargest([7, 10, 4, 3, 20, 15], 3),
  10,
  "Random order - 3rd largest",
)
assertTest(
  findKthLargest([7, 10, 4, 3, 20, 15], 6),
  3,
  "Random order - 6th largest",
)

// Edge cases with k
assertTest(
  findKthLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1),
  10,
  "k=1 in longer array",
)
assertTest(
  findKthLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10),
  1,
  "k=n in longer array",
)
assertTest(
  findKthLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5),
  6,
  "k in middle of longer array",
)

// Multiple duplicates
assertTest(
  findKthLargest([2, 1, 1, 1, 3, 3, 3, 3, 3], 1),
  3,
  "Multiple duplicates - 1st",
)
assertTest(
  findKthLargest([2, 1, 1, 1, 3, 3, 3, 3, 3], 5),
  3,
  "Multiple duplicates - 5th",
)
assertTest(
  findKthLargest([2, 1, 1, 1, 3, 3, 3, 3, 3], 6),
  2,
  "Multiple duplicates - 6th",
)

// Zero included
assertTest(findKthLargest([0, 1, 2, 3], 1), 3, "With zero - 1st largest")
assertTest(findKthLargest([0, 1, 2, 3], 4), 0, "With zero - 4th largest")
assertTest(findKthLargest([0, 0, 0], 1), 0, "All zeros - 1st largest")

// Complex patterns
assertTest(
  findKthLargest([3, 2, 1, 5, 6, 4], 1),
  6,
  "Original example modified - 1st largest",
)
assertTest(
  findKthLargest([3, 2, 1, 5, 6, 4], 3),
  4,
  "Original example modified - 3rd largest",
)
assertTest(
  findKthLargest([3, 2, 1, 5, 6, 4], 6),
  1,
  "Original example modified - 6th largest",
)

// Fibonacci-like sequence
assertTest(
  findKthLargest([1, 1, 2, 3, 5, 8], 1),
  8,
  "Fibonacci-like - 1st largest",
)
assertTest(
  findKthLargest([1, 1, 2, 3, 5, 8], 2),
  5,
  "Fibonacci-like - 2nd largest",
)
assertTest(
  findKthLargest([1, 1, 2, 3, 5, 8], 6),
  1,
  "Fibonacci-like - 6th largest",
)

// Powers of 2
assertTest(findKthLargest([1, 2, 4, 8, 16], 1), 16, "Powers of 2 - 1st largest")
assertTest(findKthLargest([1, 2, 4, 8, 16], 3), 4, "Powers of 2 - 3rd largest")

// Reverse powers of 2
assertTest(
  findKthLargest([16, 8, 4, 2, 1], 1),
  16,
  "Reverse powers of 2 - 1st largest",
)
assertTest(
  findKthLargest([16, 8, 4, 2, 1], 3),
  4,
  "Reverse powers of 2 - 3rd largest",
)

// Large array test
const largeArray = Array.from({ length: 100 }, (_, i) => i + 1)
assertTest(findKthLargest(largeArray, 1), 100, "Large array - 1st largest")
assertTest(findKthLargest(largeArray, 50), 51, "Large array - 50th largest")
assertTest(findKthLargest(largeArray, 100), 1, "Large array - 100th largest")

// Shuffled large array
const shuffledArray = [50, 25, 75, 12, 87, 6, 94, 31, 68, 43]
assertTest(findKthLargest(shuffledArray, 1), 94, "Shuffled array - 1st largest")
assertTest(findKthLargest(shuffledArray, 5), 43, "Shuffled array - 5th largest")
assertTest(
  findKthLargest(shuffledArray, 10),
  6,
  "Shuffled array - 10th largest",
)

// Array with extreme values
assertTest(
  findKthLargest([Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0], 1),
  Number.MAX_SAFE_INTEGER,
  "Extreme values - 1st largest",
)
assertTest(
  findKthLargest([Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0], 2),
  0,
  "Extreme values - 2nd largest",
)
assertTest(
  findKthLargest([Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0], 3),
  Number.MIN_SAFE_INTEGER,
  "Extreme values - 3rd largest",
)

// Test with many duplicates of the kth largest
assertTest(
  findKthLargest([4, 5, 5, 6, 6, 6], 3),
  6,
  "Kth largest with multiple occurrences",
)
assertTest(
  findKthLargest([4, 5, 5, 6, 6, 6], 4),
  5,
  "After multiple occurrences of previous",
)

// Stress test patterns
assertTest(findKthLargest([9, 3, 2, 4, 8], 3), 4, "Stress test 1")
assertTest(findKthLargest([1, 23, 12, 9, 30, 2, 50], 2), 30, "Stress test 2")
assertTest(
  findKthLargest([7, 14, 21, 28, 35], 3),
  21,
  "Multiples of 7 - 3rd largest",
)

console.log("All Kth Largest Element tests completed!")

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


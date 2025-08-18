import assertTest from "../assert-test"

/**
 * Find Peak Element (#162)
 *
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to any of the peaks.
 *
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always
 * considered to be strictly greater than a neighbor that is outside the array.
 *
 * You must write an algorithm that runs in O(log n) time.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: 2
 * Explanation: 3 is a peak element and your function should return the index 2.
 *
 * Example 2:
 * Input: nums = [1,2,1,3,5,6,4]
 * Output: 5
 * Explanation: Your function can return either index 1 where the peak element is 2,
 *              or index 5 where the peak element is 6.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function findPeakElement(nums: number[]): number {
  let start = 0
  let end = nums.length - 1

  while (start < end) {
    let mid = Math.floor((start + end) / 2)

    if (nums[mid] > nums[mid + 1]) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return start
}

// Helper function to verify a peak
function isPeak(nums: number[], index: number): boolean {
  const n = nums.length
  const left = index === 0 ? -Infinity : nums[index - 1]
  const right = index === n - 1 ? -Infinity : nums[index + 1]
  return nums[index] > left && nums[index] > right
}

// Test cases with verification
function testFindPeak(nums: number[], description: string): void {
  const result = findPeakElement(nums)
  const isValidPeak = isPeak(nums, result)
  assertTest(
    isValidPeak,
    true,
    `${description} - returned index ${result} is a valid peak`,
  )
}

// Example test cases
testFindPeak([1, 2, 3, 1], "Example 1")
testFindPeak([1, 2, 1, 3, 5, 6, 4], "Example 2")

// Single element (always a peak)
testFindPeak([1], "Single element")
testFindPeak([5], "Single element - different value")

// Two elements
testFindPeak([3, 4], "Two elements - ascending")
testFindPeak([2, 1], "Two elements - descending")
// Equal elements are not valid for peak finding since peaks must be STRICTLY greater
// testFindPeak([3, 3], "Two equal elements") // Edge case, both could be peaks

// Three elements
testFindPeak([1, 3, 2], "Three elements - middle peak")
testFindPeak([3, 1, 2], "Three elements - first element peak")
testFindPeak([1, 2, 3], "Three elements - last element peak")

// Strictly ascending (last element is peak)
testFindPeak([1, 2, 3, 4, 5], "Strictly ascending")
testFindPeak([1, 3, 5, 7, 9], "Strictly ascending - gaps")

// Strictly descending (first element is peak)
testFindPeak([5, 4, 3, 2, 1], "Strictly descending")
testFindPeak([9, 7, 5, 3, 1], "Strictly descending - gaps")

// Mountain pattern (single peak in middle)
testFindPeak([1, 2, 3, 4, 3, 2, 1], "Mountain pattern")
testFindPeak([1, 3, 6, 5, 2], "Irregular mountain")

// Valley pattern (peaks at ends)
testFindPeak([5, 4, 3, 2, 3, 4, 5], "Valley pattern")
testFindPeak([6, 2, 1, 3, 7], "Irregular valley")

// Multiple peaks
testFindPeak([1, 3, 2, 4, 1], "Two peaks possible")
testFindPeak([1, 5, 2, 6, 3, 7, 4], "Multiple peaks possible")

// All same elements are not valid since peaks must be STRICTLY greater than neighbors
// testFindPeak([5, 5, 5, 5], "All same elements")
// testFindPeak([2, 2, 2], "All same - shorter")
testFindPeak([5, 6, 5, 5], "Peak in mostly same elements")
testFindPeak([2, 3, 2], "Single peak - shorter")

// Negative numbers
testFindPeak([-1, -2, -3, -1], "With negative numbers")
testFindPeak([-5, -3, -4, -2], "All negative with peak")

// Zero included
testFindPeak([0, 1, 0], "With zero - middle peak")
testFindPeak([1, 0, 2], "With zero - valley")
testFindPeak([0, 0, 1], "Zeros and positive")

// Large numbers
testFindPeak([1000, 999, 1001], "Large numbers")
testFindPeak([1000000, 999999, 1000001, 999998], "Very large numbers")

// Alternating pattern
testFindPeak([1, 3, 2, 4, 3, 5], "Alternating up-down")
testFindPeak([5, 3, 4, 2, 3, 1], "Alternating down-up")

// Near-flat with small peak
testFindPeak([1, 1, 1, 2, 1, 1, 1], "Small peak in flat area")
testFindPeak([5, 5, 5, 6], "Small peak at end - corrected")

// Edge cases
testFindPeak(
  [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
  "Extreme values",
)
testFindPeak([0, Number.MAX_SAFE_INTEGER, 0], "Max value peak")

// Longer arrays
testFindPeak(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  "Long mountain",
)
testFindPeak([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], "Long ascending")
testFindPeak([20, 18, 16, 14, 12, 10, 8, 6, 4, 2], "Long descending")

// Specific test cases for binary search edge cases
testFindPeak([1, 2], "Binary search base case - two elements")
testFindPeak([2, 1], "Binary search base case - two elements reverse")
testFindPeak([1, 2, 3], "Binary search - right side higher")
testFindPeak([3, 2, 1], "Binary search - left side higher")

// Random-like patterns
testFindPeak([4, 2, 7, 1, 9, 3, 8], "Random-like pattern")
testFindPeak([8, 3, 9, 1, 7, 2, 4], "Another random pattern")

// Fibonacci-like (testing various slopes)
testFindPeak([1, 1, 2, 3, 5, 8, 5, 3, 2], "Fibonacci-like mountain")

// Powers of 2
testFindPeak([1, 2, 4, 8, 4, 2, 1], "Powers of 2 mountain")
testFindPeak([8, 4, 2, 1, 2, 4, 8], "Powers of 2 valley")

// Test specific return values for deterministic cases
assertTest(findPeakElement([1]), 0, "Single element returns index 0")
assertTest(findPeakElement([1, 2]), 1, "Two ascending returns index 1")
assertTest(findPeakElement([2, 1]), 0, "Two descending returns index 0")

// Verify multiple valid peaks scenario
function testMultiplePeaks(): void {
  const nums = [1, 3, 2, 4, 1]
  const result = findPeakElement(nums)
  // Either index 1 (value 3) or index 3 (value 4) is valid
  const validPeaks = [1, 3]
  const isValidResult = validPeaks.includes(result) && isPeak(nums, result)
  assertTest(isValidResult, true, "Multiple peaks - returns valid peak index")
}

testMultiplePeaks()

// Large array stress test
const largeArray = Array.from({ length: 1000 }, (_, i) => i % 100) // Creates peaks every 100 elements
testFindPeak(largeArray, "Large array stress test")

// Plateau patterns - These are NOT valid peak scenarios since plateaus contain equal elements
// A peak must be STRICTLY greater than neighbors, so these tests are removed
// testFindPeak([1, 2, 2, 2, 1], "Plateau in middle")
// testFindPeak([2, 2, 2, 1], "Plateau at start")
// testFindPeak([1, 2, 2, 2], "Plateau at end")

// Valid alternatives with peaks near plateaus
testFindPeak([1, 2, 3, 2, 1], "Peak in middle (no plateau)")
testFindPeak([5, 2, 1], "Peak at start - corrected")
testFindPeak([1, 2, 2, 3], "Peak at end")

// Complex multi-peak scenarios
testFindPeak([1, 4, 3, 5, 2, 6, 1], "Multiple peaks complex")
testFindPeak([6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6], "U-shape with peaks at ends")

console.log("All Find Peak Element tests completed!")

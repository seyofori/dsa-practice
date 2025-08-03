import assertTest from "../assert-test"

/**
 * Container With Most Water (#11)
 *
 * You are given an integer array height of length n. There are n vertical lines drawn
 * such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container that contains the most water.
 * Return the maximum amount of water a container can store.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function maxArea(height: number[]): number {
  // TODO: Implement the solution
  return 0
}

// Test cases
assertTest(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49, "Example 1")
assertTest(maxArea([1, 1]), 1, "Example 2")
assertTest(maxArea([1, 2]), 1, "Two different heights")
assertTest(maxArea([2, 1]), 1, "Reverse two heights")
assertTest(maxArea([1, 2, 1]), 2, "Three elements")
assertTest(maxArea([2, 1, 2]), 4, "Symmetric three")
assertTest(maxArea([1, 3, 2, 5, 25, 24, 5]), 24, "Peak in middle")
assertTest(maxArea([2, 3, 4, 5, 18, 17, 6]), 17, "Another peak")
assertTest(maxArea([1, 1, 1, 1, 1]), 4, "All same height")
assertTest(maxArea([5, 5, 5, 5, 5]), 20, "All same higher")
assertTest(maxArea([1, 2, 3, 4, 5]), 6, "Ascending")
assertTest(maxArea([5, 4, 3, 2, 1]), 6, "Descending")
assertTest(maxArea([1, 8, 6, 2, 5, 4, 8, 25, 7]), 49, "With higher peak")
assertTest(maxArea([2, 1, 2, 1, 2]), 8, "Alternating pattern")
assertTest(maxArea([3, 9, 3, 4, 7, 2, 12, 6]), 45, "Complex case")
assertTest(maxArea([0, 2]), 0, "Zero height")
assertTest(maxArea([2, 0, 2]), 4, "Zero in middle")
assertTest(maxArea([10, 1, 10]), 20, "High edges")
assertTest(maxArea([1, 10, 1]), 2, "High middle")
assertTest(
  maxArea([6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 8, 2, 3]),
  32,
  "Long array",
)
assertTest(maxArea([100, 1, 100]), 200, "Very high edges")
assertTest(maxArea([50, 25, 75, 25, 50]), 200, "Symmetric pattern")
assertTest(maxArea([1, 2, 4, 3]), 4, "Small peak")
assertTest(maxArea([4, 3, 2, 1, 4]), 16, "U-shape")
assertTest(maxArea([1, 4, 2, 3, 1]), 6, "Mixed heights")
assertTest(maxArea([7, 1, 2, 3, 9]), 28, "Wide span")
assertTest(maxArea([2, 6, 1, 4, 5, 2, 7]), 24, "Another complex")
assertTest(maxArea([15, 3, 12, 1, 18, 4, 9]), 60, "Large numbers")
assertTest(maxArea([8, 20, 1, 2, 3, 4, 15]), 60, "High start and end")
assertTest(maxArea([1, 3, 2, 5, 4]), 12, "Small array complex")
assertTest(maxArea([42, 1, 42]), 84, "Meaningful numbers")
assertTest(maxArea([13, 17, 11, 19, 7, 23, 5]), 78, "Random heights")
assertTest(maxArea([99, 1, 1, 1, 99]), 396, "Extreme edges")
assertTest(maxArea([21, 35, 14, 28, 7, 42]), 105, "Multiples of 7")
assertTest(maxArea([64, 32, 16, 8, 4, 2, 1]), 32, "Powers of 2")
assertTest(maxArea([1, 2, 4, 8, 16, 32, 64]), 32, "Increasing powers")


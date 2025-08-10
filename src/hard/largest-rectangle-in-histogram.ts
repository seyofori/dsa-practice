import assertTest from "../assert-test"

/**
 * Largest Rectangle in Histogram
 *
 * Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
 * return the area of the largest rectangle in the histogram.
 *
 * Example:
 * Input: heights = [2,1,5,6,2,3]
 * Output: 10
 * Explanation: The largest rectangle is shown in the red area, which has an area = 10 units.
 *
 * Time Complexity: O(n) where n is the length of the heights array
 * Space Complexity: O(n) for the stack
 */

function largestRectangleArea(heights: number[]): number {
  // TODO: Implement the solution
  // Use stack to keep track of indices in increasing order of heights

  const stack: number[] = []
  let maxArea = 0

  for (let i = 0; i <= heights.length; i++) {
    const currentHeight = i === heights.length ? 0 : heights[i]

    while (
      stack.length > 0 &&
      currentHeight < heights[stack[stack.length - 1]]
    ) {
      const height = heights[stack.pop()!]
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
      maxArea = Math.max(maxArea, height * width)
    }

    stack.push(i)
  }

  return maxArea
}

// Test cases
assertTest(
  largestRectangleArea([2, 1, 5, 6, 2, 3]),
  10,
  "Largest rectangle - example case",
)

assertTest(largestRectangleArea([2, 4]), 4, "Largest rectangle - two bars")

assertTest(largestRectangleArea([1]), 1, "Largest rectangle - single bar")

assertTest(largestRectangleArea([0]), 0, "Largest rectangle - zero height")

assertTest(
  largestRectangleArea([2, 2, 2, 2]),
  8,
  "Largest rectangle - all same height",
)

assertTest(
  largestRectangleArea([1, 2, 3, 4, 5]),
  9,
  "Largest rectangle - increasing heights",
)

assertTest(
  largestRectangleArea([5, 4, 3, 2, 1]),
  9,
  "Largest rectangle - decreasing heights",
)

assertTest(
  largestRectangleArea([6, 2, 5, 4, 5, 1, 6]),
  12,
  "Largest rectangle - complex case",
)

assertTest(largestRectangleArea([1, 1]), 2, "Largest rectangle - two ones")

assertTest(
  largestRectangleArea([0, 2, 0]),
  2,
  "Largest rectangle - zeros in between",
)

assertTest(
  largestRectangleArea([3, 6, 5, 7, 4, 8, 1, 0]),
  20,
  "Largest rectangle - with zero at end",
)

assertTest(
  largestRectangleArea([1, 2, 2]),
  4,
  "Largest rectangle - plateau pattern",
)

assertTest(
  largestRectangleArea([2, 1, 2]),
  3,
  "Largest rectangle - valley pattern",
)

assertTest(
  largestRectangleArea([4, 2, 0, 3, 2, 5]),
  6,
  "Largest rectangle - interrupted sequence",
)

assertTest(
  largestRectangleArea([1, 3, 2, 1, 2]),
  5,
  "Largest rectangle - mixed heights",
)

assertTest(largestRectangleArea([5]), 5, "Largest rectangle - single tall bar")

assertTest(
  largestRectangleArea([1, 2, 3, 2, 1]),
  6,
  "Largest rectangle - pyramid shape",
)

assertTest(
  largestRectangleArea([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]),
  19,
  "Largest rectangle - long decreasing",
)

assertTest(
  largestRectangleArea([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  25,
  "Largest rectangle - long increasing",
)

assertTest(
  largestRectangleArea([3, 1, 3, 2, 2]),
  6,
  "Largest rectangle - alternating pattern",
)

assertTest(
  largestRectangleArea([0, 1, 0, 1, 0]),
  1,
  "Largest rectangle - alternating with zeros",
)

assertTest(
  largestRectangleArea([2, 3, 1, 1, 4]),
  4,
  "Largest rectangle - various combinations",
)

assertTest(
  largestRectangleArea([1, 0, 1, 0, 1]),
  1,
  "Largest rectangle - separated by zeros",
)

assertTest(
  largestRectangleArea([100]),
  100,
  "Largest rectangle - large single value",
)

assertTest(
  largestRectangleArea([1, 1, 1, 1, 1]),
  5,
  "Largest rectangle - all ones",
)

assertTest(
  largestRectangleArea([2, 0, 2, 1, 1, 0]),
  3,
  "Largest rectangle - with gaps",
)

assertTest(
  largestRectangleArea([6, 7, 5, 2, 4, 5, 9, 3]),
  16,
  "Largest rectangle - complex histogram",
)

assertTest(
  largestRectangleArea([3, 5, 1, 7, 5, 1]),
  10,
  "Largest rectangle - peaks and valleys",
)

assertTest(
  largestRectangleArea([4, 4, 4, 3, 3, 3]),
  18,
  "Largest rectangle - two plateaus",
)

assertTest(
  largestRectangleArea([1, 3, 5, 3, 1]),
  9,
  "Largest rectangle - mountain shape",
)


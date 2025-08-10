import assertTest from "../assert-test"

/**
 * Trapping Rain Water
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it can trap after raining.
 *
 * Example:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water are trapped.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) using two pointers approach
 */

function trap(height: number[]): number {
  // TODO: Implement the solution
  // Use two pointers approach with left_max and right_max

  if (height.length < 3) return 0

  let left = 0,
    right = height.length - 1
  let leftMax = 0,
    rightMax = 0
  let water = 0

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left]
      } else {
        water += leftMax - height[left]
      }
      left++
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right]
      } else {
        water += rightMax - height[right]
      }
      right--
    }
  }

  return water
}

// Test cases
assertTest(
  trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]),
  6,
  "Trap rain water - example case",
)

assertTest(trap([4, 2, 0, 3, 2, 5]), 9, "Trap rain water - another example")

assertTest(trap([]), 0, "Trap rain water - empty array")

assertTest(trap([1]), 0, "Trap rain water - single element")

assertTest(trap([1, 2]), 0, "Trap rain water - two elements")

assertTest(trap([3, 0, 2, 0, 4]), 7, "Trap rain water - valley pattern")

assertTest(trap([0, 1, 0]), 0, "Trap rain water - small valley")

assertTest(trap([2, 0, 2]), 2, "Trap rain water - simple valley")

assertTest(trap([3, 2, 1, 0, 1, 2, 3]), 9, "Trap rain water - V shape")

assertTest(trap([5, 4, 3, 2, 1]), 0, "Trap rain water - descending")

assertTest(trap([1, 2, 3, 4, 5]), 0, "Trap rain water - ascending")

assertTest(trap([2, 1, 2]), 1, "Trap rain water - simple peak")

assertTest(trap([1, 0, 1]), 1, "Trap rain water - minimal case")

assertTest(trap([5, 0, 0, 0, 5]), 15, "Trap rain water - wide valley")

assertTest(trap([1, 2, 1, 2, 1]), 1, "Trap rain water - multiple peaks")

assertTest(trap([3, 0, 1, 0, 4]), 8, "Trap rain water - complex valley")

assertTest(trap([0, 0, 0, 0]), 0, "Trap rain water - all zeros")

assertTest(trap([5, 5, 5, 5]), 0, "Trap rain water - all same height")

assertTest(
  trap([1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]),
  6,
  "Trap rain water - similar to example",
)

assertTest(
  trap([
    6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1,
    3,
  ]),
  83,
  "Trap rain water - complex case",
)

assertTest(
  trap([10, 0, 0, 0, 0, 0, 0, 0, 0, 10]),
  80,
  "Trap rain water - wide container",
)

assertTest(trap([2, 1, 0, 1, 2]), 4, "Trap rain water - symmetric")

assertTest(trap([1, 2, 0, 3, 1, 0, 2, 4]), 8, "Trap rain water - mixed pattern")

assertTest(
  trap([0, 2, 0, 4, 0, 1, 0, 3, 0]),
  7,
  "Trap rain water - alternating pattern",
)

assertTest(
  trap([8, 6, 4, 2, 6, 4, 6, 8]),
  10,
  "Trap rain water - mountain pattern",
)

assertTest(trap([1, 0, 0, 0, 0, 1]), 4, "Trap rain water - simple container")

assertTest(
  trap([3, 1, 4, 1, 5, 9, 2, 6]),
  3,
  "Trap rain water - irregular pattern",
)

assertTest(trap([0, 1, 2, 3, 2, 1, 0]), 0, "Trap rain water - pyramid shape")

assertTest(trap([7, 0, 7]), 7, "Trap rain water - perfect container")

assertTest(trap([4, 2, 3]), 1, "Trap rain water - small peak valley")


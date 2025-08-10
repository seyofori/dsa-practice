import assertTest from "../assert-test"

/**
 * Jump Game
 *
 * You are given an integer array nums. You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 *
 * Example:
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Time Complexity: O(n) where n is the length of the array
 * Space Complexity: O(1)
 */

function canJump(nums: number[]): boolean {
  // TODO: Implement the solution
  // Use greedy approach: keep track of the farthest position we can reach

  if (nums.length <= 1) return true

  let maxReach = 0

  for (let i = 0; i < nums.length; i++) {
    // If current position is beyond what we can reach, return false
    if (i > maxReach) return false

    // Update the farthest position we can reach
    maxReach = Math.max(maxReach, i + nums[i])

    // If we can reach or exceed the last index, return true
    if (maxReach >= nums.length - 1) return true
  }

  return false
}

// Test cases
assertTest(canJump([2, 3, 1, 1, 4]), true, "Jump game - can reach end")

assertTest(
  canJump([3, 2, 1, 0, 4]),
  false,
  "Jump game - cannot reach end (blocked by 0)",
)

assertTest(canJump([1]), true, "Jump game - single element")

assertTest(canJump([0]), true, "Jump game - single zero element")

assertTest(canJump([2, 0, 0]), true, "Jump game - can jump over zeros")

assertTest(canJump([1, 0, 1, 0]), false, "Jump game - stuck at second zero")

assertTest(canJump([2, 5, 0, 0]), true, "Jump game - large jump can skip zeros")

assertTest(canJump([1, 1, 1, 1]), true, "Jump game - all ones")

assertTest(canJump([4, 3, 2, 1, 0]), true, "Jump game - decreasing sequence")

assertTest(canJump([1, 0]), false, "Jump game - two elements, cannot reach")

assertTest(canJump([2, 0]), true, "Jump game - can jump over single zero")

assertTest(
  canJump([0, 2, 3]),
  false,
  "Jump game - starts with zero (length > 1)",
)

assertTest(
  canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]),
  true,
  "Jump game - complex array, reachable",
)

assertTest(canJump([1, 2, 3]), true, "Jump game - increasing sequence")

assertTest(
  canJump([3, 0, 8, 2, 0, 0, 1]),
  true,
  "Jump game - can jump far enough",
)

assertTest(
  canJump([2, 1, 0, 0]),
  false,
  "Jump game - cannot pass multiple zeros",
)

assertTest(canJump([1, 1, 2, 2, 0, 1, 1]), true, "Jump game - mixed jumps")

assertTest(canJump([4, 0, 0, 0, 4]), true, "Jump game - big jump over zeros")

assertTest(
  canJump([1, 0, 0, 0, 0]),
  false,
  "Jump game - cannot reach through multiple zeros",
)

assertTest(
  canJump([10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]),
  true,
  "Jump game - one big jump",
)

assertTest(
  canJump([2, 3, 1, 1, 4, 2, 1]),
  true,
  "Jump game - longer reachable array",
)

assertTest(canJump([1, 1, 1, 0]), false, "Jump game - stuck at last zero")

assertTest(
  canJump([3, 2, 1, 0, 4, 1, 1]),
  false,
  "Jump game - zero blocks path",
)

assertTest(
  canJump([5, 4, 3, 2, 1, 1, 1, 1]),
  true,
  "Jump game - sufficient jumps",
)

assertTest(canJump([1, 2, 1, 0, 1]), false, "Jump game - zero in middle blocks")

assertTest(
  canJump([7, 0, 0, 0, 0, 0, 1]),
  true,
  "Jump game - exactly enough to jump",
)

assertTest(
  canJump([6, 0, 0, 0, 0, 0, 0]),
  false,
  "Jump game - one short of reaching end",
)

assertTest(
  canJump([
    8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6, 0,
    4, 8, 6, 0, 3, 2, 8, 7, 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1, 0, 5,
    9, 2, 0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8, 5, 6, 7,
    5, 1, 9, 9, 3, 5, 0, 7, 5,
  ]),
  true,
  "Jump game - very long array",
)

assertTest(canJump([1, 0, 1, 0, 1]), false, "Jump game - alternating pattern")

assertTest(canJump([100]), true, "Jump game - single large number")


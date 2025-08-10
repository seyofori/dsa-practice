import assertTest from "../assert-test"

/**
 * Sliding Window Maximum
 *
 * You are given an array of integers nums, there is a sliding window of size k which is moving
 * from the very left of the array to the very right. You can only see the k numbers in the window.
 * Each time the sliding window moves right by one position.
 *
 * Return the max sliding window.
 *
 * Example:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 *
 * Time Complexity: O(n) where n is the length of the array
 * Space Complexity: O(k) for the deque
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
  // TODO: Implement the solution
  // Use deque (double-ended queue) to store indices

  if (nums.length === 0 || k === 0) return []
  if (k === 1) return nums

  const result: number[] = []
  const deque: number[] = [] // Store indices

  for (let i = 0; i < nums.length; i++) {
    // Remove indices that are out of current window
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift()
    }

    // Remove indices whose corresponding values are smaller than current element
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }

    deque.push(i)

    // Add to result if window is complete
    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }

  return result
}

// Test cases
assertTest(
  maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3),
  [3, 3, 5, 5, 6, 7],
  "Sliding window max - example case",
)

assertTest(maxSlidingWindow([1], 1), [1], "Sliding window max - single element")

assertTest(
  maxSlidingWindow([1, -1], 1),
  [1, -1],
  "Sliding window max - window size 1",
)

assertTest(
  maxSlidingWindow([9, 11], 2),
  [11],
  "Sliding window max - two elements",
)

assertTest(
  maxSlidingWindow([4, -2], 2),
  [4],
  "Sliding window max - negative numbers",
)

assertTest(
  maxSlidingWindow([1, 3, 1, 2, 0, 5], 3),
  [3, 3, 2, 5],
  "Sliding window max - mixed values",
)

assertTest(
  maxSlidingWindow([1, 2, 3, 4, 5], 3),
  [3, 4, 5],
  "Sliding window max - increasing sequence",
)

assertTest(
  maxSlidingWindow([5, 4, 3, 2, 1], 3),
  [5, 4, 3],
  "Sliding window max - decreasing sequence",
)

assertTest(
  maxSlidingWindow([1, 1, 1, 1], 2),
  [1, 1, 1],
  "Sliding window max - all same values",
)

assertTest(
  maxSlidingWindow([7, 2, 4], 2),
  [7, 4],
  "Sliding window max - three elements",
)

assertTest(
  maxSlidingWindow([-1, -2, -3, -4], 2),
  [-1, -2, -3],
  "Sliding window max - all negative",
)

assertTest(
  maxSlidingWindow([1, 3, 2, 5, 8, 7], 4),
  [5, 8, 8],
  "Sliding window max - larger window",
)

assertTest(
  maxSlidingWindow([2, 1, 3, 4, 6, 3, 8, 9, 10, 12, 56], 4),
  [4, 6, 6, 8, 9, 10, 12, 56],
  "Sliding window max - long array",
)

assertTest(
  maxSlidingWindow([1, 2, 1, 0, 4, 2, 6], 3),
  [2, 2, 4, 4, 6],
  "Sliding window max - various patterns",
)

assertTest(
  maxSlidingWindow([9, 6, 3, 1, 4, 8, 2], 3),
  [9, 6, 4, 8, 8],
  "Sliding window max - peak at start",
)

assertTest(
  maxSlidingWindow([1, 5, 3, 2, 4, 6], 3),
  [5, 5, 4, 6],
  "Sliding window max - alternating",
)

assertTest(
  maxSlidingWindow([8, 7, 6, 9], 2),
  [8, 7, 9],
  "Sliding window max - valley pattern",
)

assertTest(
  maxSlidingWindow([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5),
  [10, 9, 8, 7, 6],
  "Sliding window max - long decreasing",
)

assertTest(
  maxSlidingWindow([3, 3, 3, 3, 3], 3),
  [3, 3, 3],
  "Sliding window max - all identical",
)

assertTest(
  maxSlidingWindow([0, -1, 2, -3, 4], 2),
  [0, 2, 2, 4],
  "Sliding window max - mixed positive/negative",
)

assertTest(
  maxSlidingWindow([100], 1),
  [100],
  "Sliding window max - large single value",
)

assertTest(
  maxSlidingWindow([1, 3, 5, 7, 9, 2, 4, 6, 8], 4),
  [7, 9, 9, 9, 9, 8],
  "Sliding window max - complex pattern",
)

assertTest(
  maxSlidingWindow([5, 2, 1, 4, 3, 6], 2),
  [5, 2, 4, 4, 6],
  "Sliding window max - small window",
)

assertTest(
  maxSlidingWindow([6, 5, 4, 3, 2, 1, 7, 8, 9], 3),
  [6, 5, 4, 3, 7, 8, 9],
  "Sliding window max - dip then rise",
)

assertTest(
  maxSlidingWindow([1, 4, 2, 3], 2),
  [4, 4, 3],
  "Sliding window max - four elements",
)

assertTest(
  maxSlidingWindow([-5, -2, -8, -1], 3),
  [-2, -1, -1],
  "Sliding window max - negative values",
)

assertTest(
  maxSlidingWindow([10, 5, 2, 7, 8, 7], 3),
  [10, 7, 8, 8],
  "Sliding window max - peak in middle",
)

assertTest(
  maxSlidingWindow([2, 4, 6, 8, 10], 5),
  [10],
  "Sliding window max - window equals array length",
)

assertTest(
  maxSlidingWindow([50, 40, 30, 20, 10], 2),
  [50, 40, 30, 20],
  "Sliding window max - consistently decreasing",
)

assertTest(
  maxSlidingWindow([1, 3, 2, 5, 4, 7, 6], 4),
  [5, 5, 7, 7],
  "Sliding window max - alternating high-low",
)


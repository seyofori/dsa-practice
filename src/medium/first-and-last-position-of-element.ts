import assertTest from "../assert-test"

/**
 * Find First and Last Position of Element in Sorted Array (#34)
 *
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending
 * position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Time Complexity: O(log n) using binary search
 * Space Complexity: O(1)
 */

function searchRange(nums: number[], target: number): number[] {
  function findFirst(nums: number[], target: number): number {
    let start = 0
    let end = nums.length - 1
    let result = -1

    while (start <= end) {
      let mid = Math.floor((start + end) / 2)
      if (nums[mid] === target) {
        result = mid
        end = mid - 1
      } else if (nums[mid] < target) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }

    return result
  }

  function findLast(nums: number[], target: number): number {
    let start = 0
    let end = nums.length - 1
    let result = -1

    while (start <= end) {
      let mid = Math.floor((start + end) / 2)
      if (nums[mid] === target) {
        result = mid
        start = mid + 1
      } else if (nums[mid] < target) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }

    return result
  }

  return [findFirst(nums, target), findLast(nums, target)]
}

// Test cases
assertTest(
  searchRange([5, 7, 7, 8, 8, 10], 8),
  [3, 4],
  "Search range - example 1",
)

assertTest(
  searchRange([5, 7, 7, 8, 8, 10], 6),
  [-1, -1],
  "Search range - target not found",
)

assertTest(searchRange([], 0), [-1, -1], "Search range - empty array")

assertTest(searchRange([1], 1), [0, 0], "Search range - single element found")

assertTest(
  searchRange([1], 2),
  [-1, -1],
  "Search range - single element not found",
)

assertTest(
  searchRange([1, 1, 1, 1, 1], 1),
  [0, 4],
  "Search range - all same elements",
)

assertTest(
  searchRange([1, 2, 3, 4, 5], 3),
  [2, 2],
  "Search range - single occurrence",
)

assertTest(searchRange([2, 2], 2), [0, 1], "Search range - two elements same")

assertTest(
  searchRange([1, 3], 2),
  [-1, -1],
  "Search range - target between elements",
)

assertTest(
  searchRange([1, 2, 2, 2, 3], 2),
  [1, 3],
  "Search range - multiple in middle",
)

assertTest(searchRange([2, 2, 2, 2, 2], 2), [0, 4], "Search range - all target")

assertTest(
  searchRange([1, 1, 2, 2, 3, 3], 2),
  [2, 3],
  "Search range - pairs pattern",
)

assertTest(
  searchRange([0, 1, 1, 1, 1, 1, 2], 1),
  [1, 5],
  "Search range - many consecutive",
)

assertTest(
  searchRange([5, 7, 7, 8, 8, 10], 5),
  [0, 0],
  "Search range - first element",
)

assertTest(
  searchRange([5, 7, 7, 8, 8, 10], 10),
  [5, 5],
  "Search range - last element",
)

assertTest(
  searchRange([1, 2, 3, 3, 3, 3, 4, 5], 3),
  [2, 5],
  "Search range - consecutive block",
)

assertTest(
  searchRange([1, 1, 1, 2, 2, 2], 1),
  [0, 2],
  "Search range - first half",
)

assertTest(
  searchRange([1, 1, 1, 2, 2, 2], 2),
  [3, 5],
  "Search range - second half",
)

assertTest(
  searchRange([0, 0, 1, 1, 1, 2, 2], 1),
  [2, 4],
  "Search range - middle block",
)

assertTest(searchRange([7, 7, 7, 7], 7), [0, 3], "Search range - all same four")

assertTest(
  searchRange([1, 2, 3, 4, 5, 6, 7], 4),
  [3, 3],
  "Search range - middle single",
)

assertTest(
  searchRange([10, 10, 10, 15, 15, 20], 15),
  [3, 4],
  "Search range - two in middle",
)

assertTest(
  searchRange([1, 3, 3, 3, 3, 3, 3, 5], 3),
  [1, 6],
  "Search range - long sequence",
)

assertTest(
  searchRange([2, 4, 4, 4, 6, 6, 6], 4),
  [1, 3],
  "Search range - first group",
)

assertTest(
  searchRange([2, 4, 4, 4, 6, 6, 6], 6),
  [4, 6],
  "Search range - second group",
)

assertTest(
  searchRange([100], 100),
  [0, 0],
  "Search range - single large number",
)

assertTest(
  searchRange([-5, -3, -3, -1, 0, 1], -3),
  [1, 2],
  "Search range - negative numbers",
)

assertTest(
  searchRange([0, 0, 0, 1, 1, 1], 0),
  [0, 2],
  "Search range - zeros and ones",
)

assertTest(
  searchRange([9, 9, 9, 9, 9, 9, 9, 9, 9], 9),
  [0, 8],
  "Search range - nine elements",
)

assertTest(
  searchRange([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 4),
  [6, 9],
  "Search range - end sequence",
)

assertTest(
  searchRange([50, 60, 60, 60, 70], 60),
  [1, 3],
  "Search range - large numbers",
)


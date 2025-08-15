import assertTest from "../assert-test"

/**
 * Search Insert Position (#35)
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

function searchInsert(nums: number[], target: number): number {
  let start = 0
  let end = nums.length - 1
  let mid = Math.floor((start + end) / 2)

  while (start <= end) {
    mid = Math.floor((start + end) / 2)
    if (nums[mid] >= target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return start
}

// Test cases
assertTest(searchInsert([1, 3, 5, 6], 5), 2, "Target found in middle")
assertTest(searchInsert([1, 3, 5, 6], 2), 1, "Target not found - insert middle")
assertTest(searchInsert([1, 3, 5, 6], 7), 4, "Target larger than all")
assertTest(searchInsert([1, 3, 5, 6], 0), 0, "Target smaller than all")
assertTest(searchInsert([1], 0), 0, "Single element - insert before")
assertTest(searchInsert([1], 1), 0, "Single element - found")
assertTest(searchInsert([1], 2), 1, "Single element - insert after")
assertTest(searchInsert([], 1), 0, "Empty array")
assertTest(searchInsert([1, 3], 2), 1, "Two elements - insert middle")
assertTest(searchInsert([1, 3], 1), 0, "Two elements - found first")
assertTest(searchInsert([1, 3], 3), 1, "Two elements - found second")
assertTest(searchInsert([1, 3], 0), 0, "Two elements - insert before")
assertTest(searchInsert([1, 3], 4), 2, "Two elements - insert after")
assertTest(searchInsert([1, 2, 3, 4, 5], 3), 2, "Five elements - found middle")
assertTest(searchInsert([1, 2, 3, 4, 5], 0), 0, "Five elements - insert start")
assertTest(searchInsert([1, 2, 3, 4, 5], 6), 5, "Five elements - insert end")
assertTest(searchInsert([2, 4, 6, 8, 10], 5), 2, "Even numbers - insert middle")
assertTest(searchInsert([1, 3, 5, 7, 9], 6), 3, "Odd numbers - insert middle")
assertTest(searchInsert([10, 20, 30, 40, 50], 25), 2, "Multiples of 10")
assertTest(searchInsert([1, 10, 100, 1000], 50), 2, "Powers pattern")
assertTest(
  searchInsert([-10, -5, 0, 5, 10], 0),
  2,
  "With negative numbers - found",
)
assertTest(
  searchInsert([-10, -5, 0, 5, 10], -3),
  2,
  "With negative numbers - insert",
)
assertTest(searchInsert([-10, -5, 0, 5, 10], -15), 0, "Insert before negatives")
assertTest(searchInsert([-10, -5, 0, 5, 10], 15), 5, "Insert after positives")
assertTest(searchInsert([1, 1, 1, 1, 1], 1), 0, "All same elements")
assertTest(searchInsert([2, 2, 2, 2, 2], 1), 0, "All same - insert before")
assertTest(searchInsert([2, 2, 2, 2, 2], 3), 5, "All same - insert after")
assertTest(
  searchInsert([1, 2, 2, 2, 3], 2),
  1,
  "Duplicates - find first occurrence",
)
assertTest(searchInsert([100], 50), 0, "Large single element")
assertTest(searchInsert([1, 1000000], 500000), 1, "Very large numbers")
assertTest(searchInsert([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5), 5, "Sequential 0-9")
assertTest(
  searchInsert([0, 2, 4, 6, 8, 10, 12, 14, 16, 18], 11),
  5,
  "Even sequence insert odd",
)



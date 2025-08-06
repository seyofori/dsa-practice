import assertTest from "../assert-test"

/**
 * Binary Search (#704)
 *
 * Given an array of integers nums which is sorted in ascending order, and an integer target,
 * write a function to search target in nums. If target exists, then return its index.
 * Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function search(nums: number[], target: number): number {
  // we start from the middle of the sorted array
  // if the middle is greater than the target value, we shrink the search
  // area to start from after the middle, because we know that everything up to
  // the middle is too small
  // if the middle is less than the target value, we shrink the search
  // area to start from before the middle, because we know that everything
  // from the middle onwards is too large
  // we do this until start <= end. this means we've shrunk the window to the min
  // possible size, and we've not nfound it. so we return -1
  // or if we find that middle = target, we can return that too
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (target === nums[mid]) return mid

    if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return -1
}

// Test cases
assertTest(search([-1, 0, 3, 5, 9, 12], 9), 4, "Basic search - target found")
assertTest(
  search([-1, 0, 3, 5, 9, 12], 2),
  -1,
  "Basic search - target not found",
)
assertTest(search([5], 5), 0, "Single element - found")
assertTest(search([5], 4), -1, "Single element - not found")
assertTest(search([], 1), -1, "Empty array")
assertTest(search([1, 2], 1), 0, "Two elements - first")
assertTest(search([1, 2], 2), 1, "Two elements - second")
assertTest(search([1, 2], 0), -1, "Two elements - not found")
assertTest(search([1, 3, 5, 7, 9], 1), 0, "Target at beginning")
assertTest(search([1, 3, 5, 7, 9], 9), 4, "Target at end")
assertTest(search([1, 3, 5, 7, 9], 5), 2, "Target in middle")
assertTest(search([1, 3, 5, 7, 9], 4), -1, "Target between elements")
assertTest(search([1, 3, 5, 7, 9], 0), -1, "Target less than all")
assertTest(search([1, 3, 5, 7, 9], 10), -1, "Target greater than all")
assertTest(search([-10, -5, 0, 5, 10], -5), 1, "Negative numbers")
assertTest(search([-10, -5, 0, 5, 10], 0), 2, "Zero in array")
assertTest(search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 7), 7, "Sequential array")
assertTest(search([2, 4, 6, 8, 10, 12, 14], 8), 3, "Even numbers")
assertTest(search([1, 3, 5, 7, 9, 11, 13], 9), 4, "Odd numbers")
assertTest(search([100, 200, 300, 400, 500], 300), 2, "Large numbers")
assertTest(search([1, 1, 1, 1, 1], 1), 2, "All same elements") // Could return any valid index
assertTest(search([-100, -50, -25, -10, -1], -25), 2, "All negative")
assertTest(
  search([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 35),
  -1,
  "Not found in longer array",
)
assertTest(search([1, 10, 100, 1000, 10000], 100), 2, "Powers of 10")
assertTest(search([2, 3, 5, 7, 11, 13, 17, 19], 13), 5, "Prime numbers")
assertTest(search([0], 0), 0, "Single zero")
assertTest(search([-1], -1), 0, "Single negative")
assertTest(
  search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 8),
  7,
  "Longer sequential",
)
assertTest(
  search([5, 10, 15, 20, 25, 30], 17),
  -1,
  "Multiples of 5 - not found",
)
assertTest(search([1, 4, 7, 10, 13, 16, 19], 13), 4, "Arithmetic sequence")
assertTest(
  search([-20, -15, -10, -5, 0, 5, 10], 5),
  5,
  "Negative to positive range",
)
assertTest(search([100, 200, 300], 150), -1, "Between large numbers")
assertTest(search([1, 1000000], 500000), -1, "Large gap between elements")

// SOLUTION
function _search(nums: number[], target: number): number {
  // TODO: Implement the solution
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    let center = Math.floor((start + end - 1) / 2)
    // console.log('center - ', center);
    let value = nums[center]
    // console.log('value - ', value);
    if (value === target) return center
    if (value > target) end = center - 1
    if (value < target) start = center + 1
    // console.log('new values - ', { start, end });
    // console.log('')
  }

  // go to the center, and confirm whether the number there is less than or greater than
  // if it's less than, we use that center as the start, and
  return -1

}
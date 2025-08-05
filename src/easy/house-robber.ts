import assertTest from "../assert-test"

/**
 * House Robber (#198)
 *
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you
 * from robbing each of them is that adjacent houses have security systems connected
 * and it will automatically contact the police if two adjacent houses were broken into
 * on the same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function rob(nums: number[]): number {
  // TODO: Implement the solution using dynamic programming

  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  let prev = nums[0]
  let prev2 = Math.max(nums[1], nums[0])

  for (let i = 2; i < nums.length; i++) {
    let curr = Math.max(prev, prev2 + nums[i])
    prev2 = prev
    prev = curr
  }

  return prev
}

// Test cases
assertTest(rob([1, 2, 3, 1]), 4, "Basic case - rob house 0 and 2")
assertTest(rob([2, 7, 9, 3, 1]), 12, "Basic case - rob house 0, 2, and 4")
assertTest(rob([2, 1, 1, 2]), 4, "Rob first and last")
assertTest(rob([5]), 5, "Single house")
assertTest(rob([1, 2]), 2, "Two houses - take larger")
assertTest(rob([2, 1]), 2, "Two houses - take first")
assertTest(rob([5, 1, 3, 9]), 14, "Rob first and last houses")
assertTest(rob([2, 3, 2]), 4, "Three houses - rob first and last")
assertTest(rob([1, 3, 1]), 3, "Three houses - rob middle")
assertTest(rob([5, 5, 10, 100, 10, 5]), 110, "Large value in middle")
assertTest(rob([100, 1, 1, 100]), 200, "Rob first and last - large values")
assertTest(rob([0, 0, 0]), 0, "All zeros")
assertTest(rob([1, 1, 1, 1]), 2, "All same values")
assertTest(rob([10, 5, 2, 7, 8]), 20, "Mixed values - optimal path")
assertTest(rob([9, 1, 1, 9]), 18, "High values at ends")
assertTest(rob([1, 9, 1]), 9, "High value in middle")
assertTest(rob([2, 4, 6, 8, 10]), 18, "Increasing sequence")
assertTest(rob([10, 8, 6, 4, 2]), 18, "Decreasing sequence")
assertTest(rob([1, 100, 1, 1, 100]), 200, "Two large values separated")
assertTest(rob([50, 1, 1, 50, 1, 1, 50]), 150, "Multiple large values")
assertTest(rob([1, 2, 4, 8, 16]), 21, "Powers of 2")
assertTest(rob([16, 8, 4, 2, 1]), 21, "Reverse powers of 2")
assertTest(rob([3, 7, 1, 8, 2]), 15, "Mixed pattern")
assertTest(rob([6, 2, 7, 1, 9]), 22, "Another mixed pattern")
assertTest(rob([4, 1, 2, 7, 5, 3, 1]), 14, "Longer array")
assertTest(rob([25, 12, 5, 30, 8, 15]), 70, "Larger numbers")
assertTest(rob([0, 1, 0, 3, 0, 4]), 8, "Zeros interspersed")
assertTest(rob([7, 3, 1, 8, 9, 2, 4]), 21, "Complex pattern")
assertTest(rob([1, 3, 5, 7, 9]), 15, "Odd numbers")
assertTest(rob([2, 4, 6, 8, 10]), 18, "Even numbers")
assertTest(rob([11, 13, 17, 19, 23]), 51, "Prime numbers")
assertTest(rob([100, 99, 98, 97, 96]), 294, "Large consecutive numbers")
assertTest(rob([1, 50, 1, 50, 1]), 100, "Alternating high-low")


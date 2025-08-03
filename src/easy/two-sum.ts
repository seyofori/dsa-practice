import assertTest from "../assert-test"

/**
 * Given an array of numbers (nums) and a target value (target),
 * find the indices of two distinct elements in the array that add up exactly to the target.
 * @param nums
 * @param target
 * @returns
 */
function twoSum(nums: number[], target: number): number[] { 
  let seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++){
    const otherNum = target - nums[i];
    if (seen.has(otherNum)) {
      return [seen.get(otherNum)!, i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

//

assertTest(twoSum([2, 7, 11, 15], 9), [0, 1], "Two Sum happy path")
assertTest(twoSum([3, 2, 4], 6), [1, 2], "Two Sum middle pair")
assertTest(twoSum([1, 1], 2), [0, 1], "Two Sum with duplicate numbers")
assertTest(twoSum([0, 0], 0), [0, 1], "Two Sum with zeros")
assertTest(
  twoSum([-1, -2, -3, -4], -7),
  [2, 3],
  "Two Sum with negative numbers",
)
assertTest(twoSum([5, 25, 75], 100), [1, 2], "Two Sum with large numbers")
assertTest(twoSum([1], 1), [], "Two Sum with single element")
assertTest(twoSum([], 5), [], "Two Sum with empty array")
assertTest(
  twoSum([1, 2, 3, 4, 5], 9),
  [3, 4],
  "Two Sum with sequential numbers",
)
assertTest(twoSum([10, 20, 30, 40], 50), [1, 2], "Two Sum with multiples of 10")
assertTest(twoSum([1.5, 2.5, 3.5], 4), [0, 1], "Two Sum with decimals")
assertTest(twoSum([-5, 5], 0), [0, 1], "Two Sum that equals zero")
assertTest(twoSum([1, 2, 3, 1], 2), [0, 3], "Two Sum with duplicate target")
assertTest(twoSum([0, 1, 2, 0], 0), [0, 3], "Two Sum with zero target")
assertTest(
  twoSum([999, 999], 1998),
  [0, 1],
  "Two Sum with large identical numbers",
)
assertTest(
  twoSum([-2, -1, 0, 1, 2], 0),
  [1, 3],
  "Two Sum with range around zero",
)
assertTest(twoSum([7, 6, 5, 4, 3, 2, 1], 3), [5, 6], "Two Sum in reverse order")
assertTest(
  twoSum([5, -4, 3, -2, 1], -6),
  [1, 3],
  "Two Sum mixed positives and negatives",
)
assertTest(
  twoSum([2, 4, 6, 8, 10], 14),
  [2, 3],
  "Two Sum with even numbers only",
)
assertTest(twoSum([1, 3, 5, 7, 9], 8), [1, 2], "Two Sum with odd numbers only")
assertTest(
  twoSum([1000000, 1000001], 2000001),
  [0, 1],
  "Two Sum with very large numbers",
)


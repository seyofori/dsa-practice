import assertTest from "../assert-test"

/**
 * Given an array of numbers (nums) and a target value (target),
 * find all pairs of indices where the elements add up exactly to the target.
 * Returns a nested array of all valid index pairs.
 * @param nums
 * @param target
 * @returns [number, number][]
 */
function twoSum(nums: number[], target: number): [number, number][] {
  const seen = new Map<number, number>()
  const result: [number, number][] = []

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (seen.has(diff)) {
      result.push([seen.get(diff)!, i])
    }

    seen.set(nums[i], i)
  }

  return result
}

// Helper function to sort tuple arrays for comparison
function sortTupleArray(arr: [number, number][]): [number, number][] {
  return [...arr].sort((a, b) => a[0] - b[0] || a[1] - b[1])
}

//

console.log(twoSum([2, 7, 11, 15], 9))
assertTest(twoSum([2, 7, 11, 15], 9), [[0, 1]], "Two Sum happy path")
assertTest(twoSum([3, 2, 4], 6), [[1, 2]], "Two Sum middle pair")
assertTest(twoSum([1, 1], 2), [[0, 1]], "Two Sum with duplicate numbers")
assertTest(twoSum([0, 0], 0), [[0, 1]], "Two Sum with zeros")
assertTest(
  twoSum([-1, -2, -3, -4], -7),
  [[2, 3]],
  "Two Sum with negative numbers",
)
assertTest(twoSum([5, 25, 75], 100), [[1, 2]], "Two Sum with large numbers")
assertTest(twoSum([1], 1), [], "Two Sum with single element")
assertTest(twoSum([], 5), [], "Two Sum with empty array")
assertTest(
  twoSum([1, 2, 3, 4, 5], 9),
  [[3, 4]],
  "Two Sum with sequential numbers",
)
assertTest(
  sortTupleArray(twoSum([10, 20, 30, 40], 50)),
  [
    [0, 3],
    [1, 2],
  ],
  "Two Sum with multiples of 10 - multiple solutions",
)
assertTest(twoSum([1.5, 2.5, 3.5], 4), [[0, 1]], "Two Sum with decimals")
assertTest(twoSum([-5, 5], 0), [[0, 1]], "Two Sum that equals zero")
assertTest(twoSum([1, 2, 3, 1], 2), [[0, 3]], "Two Sum with duplicate target")
assertTest(twoSum([0, 1, 2, 0], 0), [[0, 3]], "Two Sum with zero target")
assertTest(
  twoSum([999, 999], 1998),
  [[0, 1]],
  "Two Sum with large identical numbers",
)
assertTest(
  sortTupleArray(twoSum([-2, -1, 0, 1, 2], 0)),
  [
    [0, 4],
    [1, 3],
  ],
  "Two Sum with range around zero - multiple solutions",
)
assertTest(
  twoSum([7, 6, 5, 4, 3, 2, 1], 3),
  [[5, 6]],
  "Two Sum in reverse order",
)
assertTest(
  twoSum([5, -4, 3, -2, 1], -6),
  [[1, 3]],
  "Two Sum mixed positives and negatives",
)
assertTest(
  sortTupleArray(twoSum([2, 4, 6, 8, 10], 14)),
  [
    [1, 4],
    [2, 3],
  ],
  "Two Sum with even numbers only - multiple solutions",
)
assertTest(
  sortTupleArray(twoSum([1, 3, 5, 7, 9], 8)),
  [
    [0, 3],
    [1, 2],
  ],
  "Two Sum with odd numbers only - multiple solutions",
)
assertTest(
  twoSum([1000000, 1000001], 2000001),
  [[0, 1]],
  "Two Sum with very large numbers",
)

// Multiple solutions test cases
assertTest(
  sortTupleArray(twoSum([1, 2, 3, 4, 1, 2], 3)),
  [
    [0, 1],
    [1, 4],
    [4, 5],
  ],
  "Two Sum with multiple pairs (1+2=3 appears twice)",
)
assertTest(
  sortTupleArray(twoSum([0, 0, 0, 0], 0)),
  [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
  ],
  "Two Sum with all zeros - multiple combinations",
)
assertTest(
  sortTupleArray(twoSum([2, 5, 3, 2, 1], 4)),
  [
    [0, 3],
    [2, 4],
  ],
  "Two Sum multiple solutions: 2+2=4 and 3+1=4",
)
assertTest(
  sortTupleArray(twoSum([1, 1, 1, 1], 2)),
  [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
  ],
  "Two Sum all same numbers - all pairs sum to target",
)
assertTest(
  sortTupleArray(twoSum([5, 5, 10, 10], 15)),
  [
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
  ],
  "Two Sum: 5+10=15 with duplicates",
)
assertTest(
  sortTupleArray(twoSum([3, 7, 1, 9, 2, 8], 10)),
  [
    [0, 1],
    [2, 3],
    [4, 5],
  ],
  "Two Sum multiple solutions: 3+7=10 and 1+9=10 and 2+8=10",
)
assertTest(
  sortTupleArray(twoSum([6, 4, 2, 8], 10)),
  [
    [0, 1],
    [2, 3],
  ],
  "Two Sum multiple solutions: 6+4=10 and 2+8=10",
)
assertTest(
  sortTupleArray(twoSum([1, 2, 3, 4, 5, 6], 7)),
  [
    [0, 5],
    [1, 4],
    [2, 3],
  ],
  "Two Sum multiple solutions: 1+6=7, 2+5=7, 3+4=7",
)
assertTest(
  sortTupleArray(twoSum([-1, 1, -2, 2, 0], 0)),
  [
    [0, 1],
    [2, 3],
  ],
  "Two Sum multiple zero solutions: -1+1=0 and -2+2=0",
)
assertTest(
  sortTupleArray(twoSum([10, 5, 15, 20, 0], 15)),
  [
    [0, 1],
    [2, 4],
  ],
  "Two Sum multiple solutions: 10+5=15 and 15+0=15",
)

// Additional test cases with multiple sets
assertTest(
  sortTupleArray(twoSum([1, 1, 2, 2], 3)),
  [
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
  ],
  "Two Sum: 1+2=3 with duplicates of both numbers",
)
assertTest(
  sortTupleArray(twoSum([0, 1, 0, 1], 1)),
  [
    [0, 1],
    [1, 2],
    [2, 3],
  ],
  "Two Sum: 0+1=1 with multiple duplicates",
)
assertTest(
  sortTupleArray(twoSum([2, 3, 4, 1, 5, 0], 5)),
  [
    [0, 1],
    [2, 3],
    [4, 5],
  ],
  "Two Sum: multiple ways to make 5 (2+3, 4+1, 5+0)",
)
assertTest(
  sortTupleArray(twoSum([3, 3, 3, 3], 6)),
  [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
  ],
  "Two Sum: all identical numbers that sum to target",
)
assertTest(
  sortTupleArray(twoSum([1, 4, 2, 3, 5, 0], 5)),
  [
    [0, 1],
    [2, 3],
    [4, 5],
  ],
  "Two Sum: three different pairs that sum to 5",
)
assertTest(
  sortTupleArray(twoSum([-1, -1, 2, 2], 1)),
  [
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
  ],
  "Two Sum: negative and positive duplicates",
)
assertTest(
  sortTupleArray(twoSum([6, 2, 4, 8, 0, 10], 10)),
  [
    [0, 2],
    [1, 3],
    [4, 5],
  ],
  "Two Sum: three different pairs that sum to 10 (6+4, 2+8, 0+10)",
)
assertTest(
  sortTupleArray(twoSum([5, 5, 5, 5, 5], 10)),
  [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
  ],
  "Two Sum: all same numbers with multiple combinations",
)
assertTest(
  sortTupleArray(twoSum([1, 2, 1, 2, 1, 2], 3)),
  [
    [0, 1],
    [0, 3],
    [0, 5],
    [1, 2],
    [1, 4],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 5],
  ],
  "Two Sum: alternating pattern with multiple solutions",
)
assertTest(
  sortTupleArray(twoSum([7, 3, 1, 9, 6, 4], 10)),
  [
    [0, 1],
    [2, 3],
    [4, 5],
  ],
  "Two Sum: three pairs sum to 10 (7+3, 1+9, 6+4)",
)


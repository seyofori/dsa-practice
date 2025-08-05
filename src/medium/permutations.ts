import assertTest from "../assert-test"

/**
 * Permutations (#46)
 *
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 *
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 * Time Complexity: O(n! × n)
 * Space Complexity: O(n! × n) for output, O(n) for recursion depth
 */
function permute(nums: number[]): number[][] {
  // TODO: Implement using backtracking
  // Hint: For each position, try all remaining unused numbers
  // Use recursion and track used elements
  return []
}

// Helper function to test array of arrays equality (order doesn't matter)
function testPermute(
  input: number[],
  expectedCount: number,
  description: string,
): void {
  const result = permute(input)
  assertTest(result.length, expectedCount, `${description} - correct count`)

  // Check that each permutation has correct length
  const allCorrectLength = result.every((perm) => perm.length === input.length)
  assertTest(
    allCorrectLength,
    true,
    `${description} - all permutations have correct length`,
  )

  // Check that each permutation contains all original elements
  const allContainOriginal = result.every((perm) => {
    const sorted = [...perm].sort((a, b) => a - b)
    const originalSorted = [...input].sort((a, b) => a - b)
    return JSON.stringify(sorted) === JSON.stringify(originalSorted)
  })
  assertTest(
    allContainOriginal,
    true,
    `${description} - all permutations contain original elements`,
  )

  // Check no duplicates
  const uniquePerms = new Set(result.map((perm) => JSON.stringify(perm)))
  assertTest(
    uniquePerms.size,
    result.length,
    `${description} - no duplicate permutations`,
  )
}

// Test cases
testPermute([1], 1, "Example 3 - single element")
testPermute([0, 1], 2, "Example 2 - two elements")
testPermute([1, 2, 3], 6, "Example 1 - three elements")
testPermute([1, 2, 3, 4], 24, "Four elements")
testPermute([5, 4, 3, 2, 1], 120, "Five elements descending")
testPermute([], 1, "Empty array - one empty permutation")
testPermute([42], 1, "Single large number")
testPermute([-1, 0, 1], 6, "With negative numbers")
testPermute([10, 20], 2, "Two larger numbers")
testPermute([100, 200, 300], 6, "Three large numbers")

// Test specific permutations are included
function testContainsPermutation(
  input: number[],
  permutation: number[],
  description: string,
): void {
  const result = permute(input)
  const contains = result.some(
    (perm) => JSON.stringify(perm) === JSON.stringify(permutation),
  )
  assertTest(contains, true, description)
}

testContainsPermutation([1, 2, 3], [1, 2, 3], "Contains [1,2,3]")
testContainsPermutation([1, 2, 3], [3, 2, 1], "Contains [3,2,1]")
testContainsPermutation([1, 2, 3], [2, 1, 3], "Contains [2,1,3]")
testContainsPermutation([0, 1], [0, 1], "Contains [0,1]")
testContainsPermutation([0, 1], [1, 0], "Contains [1,0]")

// Test all permutations for small inputs
function testAllPermutations(
  input: number[],
  expected: number[][],
  description: string,
): void {
  const result = permute(input)
  const sortedResult = result.map((perm) => JSON.stringify(perm)).sort()
  const sortedExpected = expected.map((perm) => JSON.stringify(perm)).sort()
  assertTest(
    JSON.stringify(sortedResult),
    JSON.stringify(sortedExpected),
    description,
  )
}

testAllPermutations([1], [[1]], "All permutations of [1]")
testAllPermutations(
  [1, 2],
  [
    [1, 2],
    [2, 1],
  ],
  "All permutations of [1,2]",
)
testAllPermutations(
  [1, 2, 3],
  [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ],
  "All permutations of [1,2,3]",
)

// Test with different types of numbers
testPermute([7, 14, 21], 6, "Multiples of 7")
testPermute([-3, -2, -1], 6, "All negative numbers")
testPermute([0, 5, 10], 6, "With zero")
testPermute([2, 4, 6, 8], 24, "Even numbers")
testPermute([1, 3, 5, 7], 24, "Odd numbers")

// Test mathematical properties
assertTest(permute([1, 2]).length, 2, "2! = 2 permutations")
assertTest(permute([1, 2, 3]).length, 6, "3! = 6 permutations")
assertTest(permute([1, 2, 3, 4]).length, 24, "4! = 24 permutations")
assertTest(permute([1, 2, 3, 4, 5]).length, 120, "5! = 120 permutations")

// Test edge cases with specific values
testPermute([999], 1, "Large single number")
testPermute([-100, 100], 2, "Large positive and negative")
testPermute([0, 0], 2, "Two zeros (if input allows duplicates)")

// Test specific patterns
testContainsPermutation([5, 10, 15], [15, 5, 10], "Reverse order pattern")
testContainsPermutation([2, 4, 8], [8, 2, 4], "Powers of 2 mixed")
testContainsPermutation([3, 6, 9], [9, 6, 3], "Multiples of 3 reverse")

// Test larger arrays (just count)
testPermute([1, 2, 3, 4, 5, 6], 720, "6! = 720 permutations")

// Additional property tests
function testUniqueElements(input: number[], description: string): void {
  const result = permute(input)

  // Each permutation should have unique elements (given distinct input)
  const allHaveUniqueElements = result.every((perm) => {
    const uniqueElements = new Set(perm)
    return uniqueElements.size === perm.length
  })
  assertTest(
    allHaveUniqueElements,
    true,
    `${description} - each permutation has unique elements`,
  )
}

testUniqueElements([1, 2, 3], "Unique elements test for [1,2,3]")
testUniqueElements([10, 20, 30, 40], "Unique elements test for four elements")

// Test that permutations cover all possibilities
function testCompleteness(input: number[], description: string): void {
  const result = permute(input)
  const n = input.length
  const expectedCount = factorial(n)
  assertTest(
    result.length,
    expectedCount,
    `${description} - complete set of permutations`,
  )
}

function factorial(n: number): number {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

testCompleteness([1, 2], "Completeness test for 2 elements")
testCompleteness([1, 2, 3], "Completeness test for 3 elements")
testCompleteness([1, 2, 3, 4], "Completeness test for 4 elements")


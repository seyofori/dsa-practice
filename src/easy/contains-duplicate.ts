import assertTest from "../assert-test"

/**
 * Contains Duplicate (#217)
 *
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function containsDuplicate(nums: number[]): boolean {
  // TODO: Implement the solution
  let seen = new Set<number>()

  for (let num of nums) {
    if (seen.has(num)) return true

    seen.add(num)
  }
  return false
}

// Test cases
assertTest(containsDuplicate([1, 2, 3, 1]), true, "Basic duplicate case")
assertTest(containsDuplicate([1, 2, 3, 4]), false, "No duplicates")
assertTest(
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]),
  true,
  "Multiple duplicates",
)
assertTest(containsDuplicate([]), false, "Empty array")
assertTest(containsDuplicate([1]), false, "Single element")
assertTest(containsDuplicate([1, 1]), true, "Two identical elements")
assertTest(containsDuplicate([1, 2]), false, "Two different elements")
assertTest(containsDuplicate([0, 0]), true, "Duplicate zeros")
assertTest(containsDuplicate([-1, -1]), true, "Duplicate negative numbers")
assertTest(
  containsDuplicate([1, 2, 3, 4, 5]),
  false,
  "Sequential numbers - no duplicates",
)
assertTest(
  containsDuplicate([5, 4, 3, 2, 1]),
  false,
  "Reverse sequential - no duplicates",
)
assertTest(containsDuplicate([1, 3, 5, 7, 9, 1]), true, "Duplicate at end")
assertTest(containsDuplicate([2, 2, 3, 4, 5]), true, "Duplicate at start")
assertTest(containsDuplicate([1, 2, 2, 4, 5]), true, "Duplicate in middle")
assertTest(
  containsDuplicate([100, 200, 300, 100]),
  true,
  "Large numbers with duplicate",
)
assertTest(
  containsDuplicate([100, 200, 300, 400]),
  false,
  "Large numbers without duplicate",
)
assertTest(
  containsDuplicate([-1, 0, 1, 2]),
  false,
  "Mixed positive/negative - no duplicates",
)
assertTest(
  containsDuplicate([-1, 0, 1, -1]),
  true,
  "Mixed positive/negative - with duplicate",
)
assertTest(containsDuplicate([0, 1, 2, 3, 0]), true, "Zero duplicate")
assertTest(
  containsDuplicate([1000000, 999999, 1000000]),
  true,
  "Very large numbers",
)
assertTest(
  containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  false,
  "Longer array - no duplicates",
)
assertTest(
  containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 5]),
  true,
  "Longer array - with duplicate",
)
assertTest(
  containsDuplicate([-5, -4, -3, -2, -1]),
  false,
  "All negative - no duplicates",
)
assertTest(
  containsDuplicate([-5, -4, -3, -2, -5]),
  true,
  "All negative - with duplicate",
)
assertTest(containsDuplicate([0]), false, "Single zero")
assertTest(containsDuplicate([7, 7]), true, "Two sevens")
assertTest(
  containsDuplicate([1, 3, 5, 7, 9, 11, 13, 15]),
  false,
  "Odd numbers - no duplicates",
)
assertTest(
  containsDuplicate([2, 4, 6, 8, 10, 12, 8]),
  true,
  "Even numbers - with duplicate",
)
assertTest(
  containsDuplicate([10, 20, 30, 40, 50]),
  false,
  "Multiples of 10 - no duplicates",
)
assertTest(
  containsDuplicate([10, 20, 30, 20, 50]),
  true,
  "Multiples of 10 - with duplicate",
)
assertTest(
  containsDuplicate([1, 1000, 10000, 100000]),
  false,
  "Powers of 10 - no duplicates",
)
assertTest(
  containsDuplicate([1, 1000, 10000, 1]),
  true,
  "Powers of 10 - with duplicate",
)

/**
 * SOLUTION
 * 
 * function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>()

  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false
}

 */

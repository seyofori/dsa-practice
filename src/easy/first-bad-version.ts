import assertTest from "../assert-test"

/**
 * First Bad Version (#278)
 *
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check.
 * Since each version is developed based on the previous version, all the versions after a bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
 * which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which returns whether version is bad.
 * Implement a function to find the first bad version. You should minimize the number of calls to the API.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

// Mock API function - will be set by test cases
let mockBadVersion: number = 1

function isBadVersion(version: number): boolean {
  return version >= mockBadVersion
}

function firstBadVersion(n: number): number {
  // TODO: Implement the solution
  // we'll use binary search to find the answer

  let start = 1
  let end = n

  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (isBadVersion(mid)) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return end
}

// Test cases
function testFirstBadVersion(
  n: number,
  badVersion: number,
  description: string,
) {
  mockBadVersion = badVersion
  const result = firstBadVersion(n)
  assertTest(result, badVersion, description)
}

testFirstBadVersion(5, 4, "Example 1 - n=5, bad=4")
testFirstBadVersion(1, 1, "Example 2 - n=1, bad=1")
testFirstBadVersion(2, 1, "Two versions, first is bad")
testFirstBadVersion(2, 2, "Two versions, second is bad")
testFirstBadVersion(3, 1, "Three versions, first is bad")
testFirstBadVersion(3, 2, "Three versions, second is bad")
testFirstBadVersion(3, 3, "Three versions, third is bad")
testFirstBadVersion(4, 1, "Four versions, first is bad")
testFirstBadVersion(4, 2, "Four versions, second is bad")
testFirstBadVersion(4, 3, "Four versions, third is bad")
testFirstBadVersion(4, 4, "Four versions, fourth is bad")
testFirstBadVersion(10, 1, "Ten versions, first is bad")
testFirstBadVersion(10, 5, "Ten versions, middle is bad")
testFirstBadVersion(10, 10, "Ten versions, last is bad")
testFirstBadVersion(100, 1, "Hundred versions, first is bad")
testFirstBadVersion(100, 50, "Hundred versions, middle is bad")
testFirstBadVersion(100, 99, "Hundred versions, second last is bad")
testFirstBadVersion(100, 100, "Hundred versions, last is bad")
testFirstBadVersion(1000, 1, "Thousand versions, first is bad")
testFirstBadVersion(1000, 500, "Thousand versions, middle is bad")
testFirstBadVersion(1000, 750, "Thousand versions, 3/4 is bad")
testFirstBadVersion(1000, 250, "Thousand versions, 1/4 is bad")
testFirstBadVersion(1000, 999, "Thousand versions, second last is bad")
testFirstBadVersion(1000, 1000, "Thousand versions, last is bad")
testFirstBadVersion(2147483647, 1, "Max int, first is bad")
testFirstBadVersion(2147483647, 1073741824, "Max int, middle is bad")
testFirstBadVersion(2147483647, 2147483647, "Max int, last is bad")
testFirstBadVersion(42, 21, "Answer to everything, half bad")
testFirstBadVersion(42, 42, "Answer to everything, last bad")
testFirstBadVersion(42, 1, "Answer to everything, first bad")
testFirstBadVersion(16, 8, "Power of 2, half bad")
testFirstBadVersion(32, 16, "Larger power of 2, half bad")
testFirstBadVersion(64, 32, "Even larger power of 2, half bad")
testFirstBadVersion(128, 64, "Large power of 2, half bad")
testFirstBadVersion(256, 128, "Very large power of 2, half bad")
testFirstBadVersion(15, 8, "Odd number, just over half bad")
testFirstBadVersion(31, 16, "Larger odd, just over half bad")
testFirstBadVersion(63, 32, "Even larger odd, just over half bad")
testFirstBadVersion(127, 64, "Large odd, just over half bad")
testFirstBadVersion(255, 128, "Very large odd, just over half bad")


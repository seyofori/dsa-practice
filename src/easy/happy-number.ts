import assertTest from "../assert-test"

/**
 * Happy Number (#202)
 *
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 * - Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * - Those numbers for which this process ends in 1 are happy.
 *
 * Return true if n is a happy number, and false if not.
 *
 * Time Complexity: O(log n) on average (due to cycle detection)
 * Space Complexity: O(1) using Floyd's Cycle Detection Algorithm
 *
 * This problem can be solved using Floyd's Cycle Detection Algorithm because:
 * - If the number is happy, the sequence will eventually reach 1
 * - If the number is not happy, the sequence will enter a cycle
 * - We can treat this as a linked list where each number points to the next number in the sequence
 */

function isHappy(n: number): boolean {
  // TODO: Implement the solution using Floyd's algorithm

  return false
}

// Alternative implementation using HashSet (for comparison)
function isHappyWithSet(n: number): boolean {
  function getSumOfSquares(num: number): number {
    let sum = 0
    while (num > 0) {
      const digit = num % 10
      sum += digit * digit
      num = Math.floor(num / 10)
    }
    return sum
  }

  const seen = new Set<number>()

  while (n !== 1 && !seen.has(n)) {
    seen.add(n)
    n = getSumOfSquares(n)
  }

  return n === 1
}

// Helper function to trace the sequence (for debugging/understanding)
function traceHappySequence(n: number, maxSteps: number = 20): number[] {
  function getSumOfSquares(num: number): number {
    let sum = 0
    while (num > 0) {
      const digit = num % 10
      sum += digit * digit
      num = Math.floor(num / 10)
    }
    return sum
  }

  const sequence: number[] = [n]
  let current = n

  for (let i = 0; i < maxSteps && current !== 1; i++) {
    current = getSumOfSquares(current)
    sequence.push(current)

    // Stop if we detect a cycle (same number appears twice)
    if (sequence.indexOf(current) < sequence.length - 1) {
      break
    }
  }

  return sequence
}

// Test cases
assertTest(isHappy(1), true, "1 is happy (base case)")
assertTest(isHappy(7), true, "7 is happy")
assertTest(isHappy(10), true, "10 is happy")
assertTest(isHappy(13), true, "13 is happy")
assertTest(isHappy(19), true, "19 is happy (example)")
assertTest(isHappy(23), true, "23 is happy")
assertTest(isHappy(28), true, "28 is happy")
assertTest(isHappy(44), true, "44 is happy")
assertTest(isHappy(49), true, "49 is happy")
assertTest(isHappy(68), true, "68 is happy")
assertTest(isHappy(70), true, "70 is happy")
assertTest(isHappy(79), true, "79 is happy")
assertTest(isHappy(82), true, "82 is happy")
assertTest(isHappy(86), true, "86 is happy")
assertTest(isHappy(91), true, "91 is happy")
assertTest(isHappy(94), true, "94 is happy")
assertTest(isHappy(97), true, "97 is happy")
assertTest(isHappy(100), true, "100 is happy")

// Test unhappy numbers
assertTest(isHappy(2), false, "2 is not happy (example)")
assertTest(isHappy(3), false, "3 is not happy")
assertTest(isHappy(4), false, "4 is not happy")
assertTest(isHappy(5), false, "5 is not happy")
assertTest(isHappy(6), false, "6 is not happy")
assertTest(isHappy(8), false, "8 is not happy")
assertTest(isHappy(9), false, "9 is not happy")
assertTest(isHappy(11), false, "11 is not happy")
assertTest(isHappy(12), false, "12 is not happy")
assertTest(isHappy(14), false, "14 is not happy")
assertTest(isHappy(15), false, "15 is not happy")
assertTest(isHappy(16), false, "16 is not happy")
assertTest(isHappy(17), false, "17 is not happy")
assertTest(isHappy(18), false, "18 is not happy")
assertTest(isHappy(20), false, "20 is not happy")

// Test larger numbers
assertTest(isHappy(31), true, "31 is happy")
assertTest(isHappy(32), true, "32 is happy")
assertTest(isHappy(130), true, "130 is happy")
assertTest(isHappy(103), true, "103 is happy")
assertTest(isHappy(301), true, "301 is happy")
assertTest(isHappy(310), true, "310 is happy")

// Test edge cases
assertTest(isHappy(999), false, "999 is not happy")
assertTest(isHappy(1000), true, "1000 is happy")
assertTest(isHappy(1111), false, "1111 is not happy")

// Test very large numbers
assertTest(isHappy(99999), false, "99999 is not happy")
assertTest(isHappy(100000), true, "100000 is happy")

// Numbers that quickly reduce to smaller numbers
assertTest(isHappy(199), true, "199 is happy")
assertTest(isHappy(299), false, "299 is not happy")
assertTest(isHappy(399), false, "399 is not happy")
assertTest(isHappy(499), false, "499 is not happy")
assertTest(isHappy(599), false, "599 is not happy")
assertTest(isHappy(699), false, "699 is not happy")
assertTest(isHappy(799), false, "799 is not happy")
assertTest(isHappy(899), false, "899 is not happy")
assertTest(isHappy(999), false, "999 is not happy")

// Test both implementations give same results
function testBothImplementations() {
  const testNumbers = [
    1, 2, 7, 10, 13, 19, 23, 28, 44, 49, 68, 70, 82, 86, 91, 94, 97, 100,
  ]

  for (const num of testNumbers) {
    const result1 = isHappy(num)
    const result2 = isHappyWithSet(num)
    assertTest(result1, result2, `Both implementations agree for ${num}`)
  }
}

testBothImplementations()

// Demonstrate some sequences for understanding
function demonstrateSequences() {
  console.log("\n🔍 Happy Number Sequences (for understanding):")

  console.log("Happy number 19:", traceHappySequence(19))
  // 19 → 82 → 68 → 100 → 1

  console.log("Happy number 7:", traceHappySequence(7))
  // 7 → 49 → 97 → 130 → 10 → 1

  console.log("Unhappy number 2:", traceHappySequence(2))
  // 2 → 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 (cycle detected)

  console.log("Unhappy number 4:", traceHappySequence(4))
  // 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 (cycle back to start)
}

// Uncomment the line below to see sequence demonstrations
// demonstrateSequences()


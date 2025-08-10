import assertTest from "../assert-test"

/**
 * Remove Invalid Parentheses
 *
 * Given a string s that contains parentheses and letters, remove the minimum number of invalid
 * parentheses to make the input string valid.
 *
 * Return all the possible results. You may return the answer in any order.
 *
 * Example:
 * Input: s = "()())"
 * Output: ["()()", "(())"]
 *
 * Input: s = "((("
 * Output: [""]
 *
 * Time Complexity: O(2^n) in worst case where n is the length of string
 * Space Complexity: O(n) for recursion stack and result storage
 */

function removeInvalidParentheses(s: string): string[] {
  // TODO: Implement the solution using BFS or backtracking

  const result: string[] = []

  // Count the number of misplaced left and right parentheses
  let left = 0,
    right = 0
  for (const char of s) {
    if (char === "(") {
      left++
    } else if (char === ")") {
      if (left > 0) {
        left--
      } else {
        right++
      }
    }
  }

  const isValid = (str: string): boolean => {
    let count = 0
    for (const char of str) {
      if (char === "(") {
        count++
      } else if (char === ")") {
        count--
        if (count < 0) return false
      }
    }
    return count === 0
  }

  const backtrack = (
    index: number,
    leftRem: number,
    rightRem: number,
    leftCount: number,
    rightCount: number,
    expression: string,
  ) => {
    // Base case
    if (index === s.length) {
      if (leftRem === 0 && rightRem === 0 && isValid(expression)) {
        result.push(expression)
      }
      return
    }

    const char = s[index]

    // Option 1: Delete the current character
    if ((char === "(" && leftRem > 0) || (char === ")" && rightRem > 0)) {
      backtrack(
        index + 1,
        leftRem - (char === "(" ? 1 : 0),
        rightRem - (char === ")" ? 1 : 0),
        leftCount,
        rightCount,
        expression,
      )
    }

    // Option 2: Keep the current character
    backtrack(
      index + 1,
      leftRem,
      rightRem,
      leftCount + (char === "(" ? 1 : 0),
      rightCount + (char === ")" ? 1 : 0),
      expression + char,
    )
  }

  backtrack(0, left, right, 0, 0, "")

  // Remove duplicates using Set
  return Array.from(new Set(result))
}

// Test cases
assertTest(
  removeInvalidParentheses("()())").sort(),
  ["()()", "(())"].sort(),
  "Remove invalid - example 1",
)

assertTest(
  removeInvalidParentheses("(((").sort(),
  [""].sort(),
  "Remove invalid - all left",
)

assertTest(
  removeInvalidParentheses(")))").sort(),
  [""].sort(),
  "Remove invalid - all right",
)

assertTest(
  removeInvalidParentheses("()").sort(),
  ["()"].sort(),
  "Remove invalid - already valid",
)

assertTest(
  removeInvalidParentheses("").sort(),
  [""].sort(),
  "Remove invalid - empty string",
)

assertTest(
  removeInvalidParentheses("a").sort(),
  ["a"].sort(),
  "Remove invalid - single letter",
)

assertTest(
  removeInvalidParentheses("()a)").sort(),
  ["()a"].sort(),
  "Remove invalid - with letter",
)

assertTest(
  removeInvalidParentheses("(a))").sort(),
  ["(a)"].sort(),
  "Remove invalid - letter inside",
)

assertTest(
  removeInvalidParentheses("((a").sort(),
  ["a"].sort(),
  "Remove invalid - unmatched left",
)

assertTest(
  removeInvalidParentheses("a))").sort(),
  ["a"].sort(),
  "Remove invalid - unmatched right",
)

assertTest(
  removeInvalidParentheses("(()").sort(),
  ["()"].sort(),
  "Remove invalid - one extra left",
)

assertTest(
  removeInvalidParentheses("())").sort(),
  ["()"].sort(),
  "Remove invalid - one extra right",
)

assertTest(
  removeInvalidParentheses("((())").sort(),
  ["(())"].sort(),
  "Remove invalid - nested with extra",
)

assertTest(
  removeInvalidParentheses("()())()").sort(),
  ["()()()", "(())()"].sort(),
  "Remove invalid - multiple valid",
)

assertTest(
  removeInvalidParentheses("(v)())()").sort(),
  ["(v)()()", "(v())()"].sort(),
  "Remove invalid - with v",
)

assertTest(
  removeInvalidParentheses("(a)())").sort(),
  ["(a)()", "(a())"].sort(),
  "Remove invalid - with a",
)

assertTest(
  removeInvalidParentheses("(((a").sort(),
  ["a"].sort(),
  "Remove invalid - multiple left with letter",
)

assertTest(
  removeInvalidParentheses("a)))").sort(),
  ["a"].sort(),
  "Remove invalid - multiple right with letter",
)

assertTest(
  removeInvalidParentheses("()()").sort(),
  ["()()"].sort(),
  "Remove invalid - already valid pair",
)

assertTest(
  removeInvalidParentheses("(())").sort(),
  ["(())"].sort(),
  "Remove invalid - already valid nested",
)

assertTest(
  removeInvalidParentheses(")(").sort(),
  [""].sort(),
  "Remove invalid - wrong order",
)

assertTest(
  removeInvalidParentheses(")())").sort(),
  ["()"].sort(),
  "Remove invalid - starts with right",
)

assertTest(
  removeInvalidParentheses("(()").sort(),
  ["()"].sort(),
  "Remove invalid - ends with left",
)

assertTest(
  removeInvalidParentheses("(a))((c)").sort(),
  ["(a)(c)"].sort(),
  "Remove invalid - complex with letters",
)

assertTest(
  removeInvalidParentheses("((").sort(),
  [""].sort(),
  "Remove invalid - double left",
)

assertTest(
  removeInvalidParentheses("))").sort(),
  [""].sort(),
  "Remove invalid - double right",
)

assertTest(
  removeInvalidParentheses("(n)").sort(),
  ["(n)"].sort(),
  "Remove invalid - valid with n",
)

assertTest(
  removeInvalidParentheses("(a)())()").sort(),
  ["(a)()()", "(a())()"].sort(),
  "Remove invalid - mixed complexity",
)

assertTest(
  removeInvalidParentheses("()(").sort(),
  ["()"].sort(),
  "Remove invalid - valid then invalid",
)

assertTest(
  removeInvalidParentheses("(a)b)c").sort(),
  ["(a)bc"].sort(),
  "Remove invalid - multiple letters",
)


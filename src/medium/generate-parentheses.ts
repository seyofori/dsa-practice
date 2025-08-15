import assertTest from "../assert-test"

/**
 * Generate Parentheses (#22)
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 *
 * Time Complexity: O(4^n / √n) - Catalan number
 * Space Complexity: O(4^n / √n) for output, O(n) for recursion depth
 */
function generateParenthesis(n: number): string[] {
  // TODO: Implement using backtracking
  // Hint: Keep track of open and close parentheses count
  // Only add '(' if open < n, only add ')' if close < open
  return []
}

// Helper function to test array equality (order doesn't matter)
function testGenerateParenthesis(
  n: number,
  expected: string[],
  description: string,
): void {
  const result = generateParenthesis(n)
  const sortedResult = [...result].sort()
  const sortedExpected = [...expected].sort()
  assertTest(
    JSON.stringify(sortedResult),
    JSON.stringify(sortedExpected),
    description,
  )
}

// Test cases
testGenerateParenthesis(1, ["()"], "Example 2 - n=1")
testGenerateParenthesis(2, ["(())", "()()"], "n=2 - two combinations")
testGenerateParenthesis(
  3,
  ["((()))", "(()())", "(())()", "()(())", "()()()"],
  "Example 1 - n=3",
)
testGenerateParenthesis(0, [""], "Edge case - n=0")
testGenerateParenthesis(
  4,
  [
    "(((())))",
    "((()()))",
    "((())())",
    "((()))()",
    "(()(()))",
    "(()()())",
    "(()())()",
    "(())(())",
    "(())()()",
    "()((()))",
    "()(()())",
    "()(())()",
    "()()(())",
    "()()()()",
  ],
  "n=4 - Catalan number 14",
)

// Additional test cases for specific patterns
testGenerateParenthesis(
  5,
  [
    "((((()))))",
    "(((()())))",
    "(((())()))",
    "(((()))())",
    "(((())))()",
    "((()(())))",
    "((()()()))",
    "((()())())",
    "((()()))()",
    "((())(()))",
    "((())()())",
    "((())())()",
    "((()))(())",
    "((()))()()",
    "(()((())))",
    "(()(()()))",
    "(()(())())",
    "(()(()))()",
    "(()()(()))",
    "(()()()())",
    "(()()())()",
    "(()())(())",
    "(()())()()",
    "(())((()))",
    "(())(()())",
    "(())(())()",
    "(())()(())",
    "(())()()()",
    "()(((())))",
    "()((()()))",
    "()((())())",
    "()((()))()",
    "()(()(()))",
    "()(()()())",
    "()(()())()",
    "()(())(())",
    "()(())()()",
    "()()((()))",
    "()()(()())",
    "()()(())()",
    "()()()(())",
    "()()()()()",
  ],
  "n=5 - all valid combinations",
)

// Test smaller cases thoroughly
assertTest(generateParenthesis(0).length, 1, "n=0 returns one empty string")
assertTest(generateParenthesis(1).length, 1, "n=1 returns one combination")
assertTest(generateParenthesis(2).length, 2, "n=2 returns two combinations")
assertTest(
  generateParenthesis(3).length,
  5,
  "n=3 returns five combinations (Catalan 3)",
)
assertTest(
  generateParenthesis(4).length,
  14,
  "n=4 returns fourteen combinations (Catalan 4)",
)
assertTest(
  generateParenthesis(5).length,
  42,
  "n=5 returns 42 combinations (Catalan 5)",
)

// Test properties of generated strings
function testProperties(n: number, description: string): void {
  const result = generateParenthesis(n)

  // All strings should have length 2*n
  const allCorrectLength = result.every((s) => s.length === 2 * n)
  assertTest(
    allCorrectLength,
    true,
    `${description} - all strings have correct length`,
  )

  // All strings should have exactly n opening and n closing parentheses
  const allBalanced = result.every((s) => {
    const openCount = (s.match(/\(/g) || []).length
    const closeCount = (s.match(/\)/g) || []).length
    return openCount === n && closeCount === n
  })
  assertTest(allBalanced, true, `${description} - all strings are balanced`)

  // All strings should be valid (no closing before opening)
  const allValid = result.every((s) => {
    let balance = 0
    for (const char of s) {
      if (char === "(") balance++
      else balance--
      if (balance < 0) return false
    }
    return balance === 0
  })
  assertTest(allValid, true, `${description} - all strings are valid`)

  // No duplicates
  const uniqueStrings = new Set(result)
  assertTest(
    uniqueStrings.size,
    result.length,
    `${description} - no duplicate strings`,
  )
}

testProperties(1, "n=1 properties")
testProperties(2, "n=2 properties")
testProperties(3, "n=3 properties")
testProperties(4, "n=4 properties")

// Test specific valid combinations for n=6 (just count, too many to list all 132)
assertTest(
  generateParenthesis(6).length,
  132,
  "n=6 returns 132 combinations (Catalan 6)",
)

// Test that results contain expected patterns
function containsPattern(
  n: number,
  pattern: string,
  description: string,
): void {
  const result = generateParenthesis(n)
  assertTest(result.includes(pattern), true, description)
}

containsPattern(3, "((()))", "n=3 contains nested pattern")
containsPattern(3, "()()()", "n=3 contains sequential pattern")
containsPattern(4, "(((())))", "n=4 contains fully nested pattern")
containsPattern(4, "()()()()", "n=4 contains fully sequential pattern")


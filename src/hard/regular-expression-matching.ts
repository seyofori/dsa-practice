import assertTest from "../assert-test"

/**
 * Regular Expression Matching
 *
 * Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
 * - '.' Matches any single character.
 * - '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 *
 * Example:
 * Input: s = "aa", p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
 *
 * Time Complexity: O(m * n) where m and n are lengths of string and pattern
 * Space Complexity: O(m * n) for DP table
 */

function isMatch(s: string, p: string): boolean {
  // TODO: Implement the solution
  // Use dynamic programming

  const m = s.length
  const n = p.length

  // dp[i][j] represents if s[0..i-1] matches p[0..j-1]
  const dp: boolean[][] = Array(m + 1)
    .fill(false)
    .map(() => Array(n + 1).fill(false))

  // Empty string matches empty pattern
  dp[0][0] = true

  // Handle patterns like a*, a*b*, a*b*c*
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2]
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "*") {
        // Two choices: match zero or more of preceding character
        dp[i][j] = dp[i][j - 2] // Match zero

        if (p[j - 2] === "." || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j] // Match one or more
        }
      } else if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      }
    }
  }

  return dp[m][n]
}

// Test cases
assertTest(isMatch("aa", "a"), false, "Regex match - simple no match")

assertTest(isMatch("aa", "a*"), true, "Regex match - star match multiple")

assertTest(isMatch("ab", ".*"), true, "Regex match - dot star matches all")

assertTest(isMatch("aab", "c*a*b"), true, "Regex match - complex pattern")

assertTest(
  isMatch("mississippi", "mis*is*p*."),
  false,
  "Regex match - complex no match",
)

assertTest(isMatch("", ""), true, "Regex match - both empty")

assertTest(isMatch("", "a*"), true, "Regex match - empty string with star")

assertTest(
  isMatch("a", ""),
  false,
  "Regex match - non-empty string, empty pattern",
)

assertTest(isMatch("a", "a"), true, "Regex match - exact single character")

assertTest(isMatch("a", "."), true, "Regex match - dot matches single")

assertTest(isMatch("ab", "a."), true, "Regex match - dot in pattern")

assertTest(isMatch("ac", "a."), true, "Regex match - dot matches any")

assertTest(isMatch("abc", "a.*"), true, "Regex match - dot star suffix")

assertTest(isMatch("abc", ".*c"), true, "Regex match - dot star prefix")

assertTest(isMatch("abc", "a.*c"), true, "Regex match - dot star middle")

assertTest(isMatch("a", "a*"), true, "Regex match - star matches one")

assertTest(isMatch("", ".*"), true, "Regex match - dot star matches empty")

assertTest(
  isMatch("aaa", "a*a"),
  true,
  "Regex match - star with following char",
)

assertTest(
  isMatch("aaa", ".*a"),
  true,
  "Regex match - ending with specific char",
)

assertTest(isMatch("ab", ".*.."), true, "Regex match - dot star with dots")

assertTest(isMatch("a", "ab*"), true, "Regex match - star matches zero")

assertTest(
  isMatch("bbbba", ".*a*a"),
  true,
  "Regex match - complex star pattern",
)

assertTest(isMatch("a", "a*a"), true, "Regex match - star then same char")

assertTest(isMatch("aa", "a*a"), true, "Regex match - multiple chars with star")

assertTest(
  isMatch("abcd", "d*"),
  false,
  "Regex match - star doesn't match prefix",
)

assertTest(isMatch("aaa", "aaaa"), false, "Regex match - pattern too long")

assertTest(isMatch("aaaa", "aaa"), false, "Regex match - string too long")

assertTest(
  isMatch("mississippi", "mis*is*ip*."),
  true,
  "Regex match - complex valid",
)

assertTest(isMatch("ab", "a*b"), true, "Regex match - star zero then char")

assertTest(
  isMatch("aab", "a*ab"),
  true,
  "Regex match - star multiple then pattern",
)

assertTest(isMatch("baaabab", ".*a*ab"), true, "Regex match - very complex")

assertTest(isMatch("a", ".*..a*"), false, "Regex match - impossible pattern")


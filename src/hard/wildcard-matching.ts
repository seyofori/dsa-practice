import assertTest from "../assert-test"

/**
 * Wildcard Matching
 *
 * Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:
 * - '?' Matches any single character.
 * - '*' Matches any sequence of characters (including the empty sequence).
 *
 * The matching should cover the entire input string (not partial).
 *
 * Example:
 * Input: s = "aa", p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
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

  // Handle patterns like *, **, *a*, etc.
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 1]
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "*") {
        // '*' can match empty string or any character
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
      } else if (p[j - 1] === "?" || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      }
    }
  }

  return dp[m][n]
}

// Test cases
assertTest(isMatch("aa", "a"), false, "Wildcard match - simple no match")

assertTest(isMatch("aa", "*"), true, "Wildcard match - star matches all")

assertTest(
  isMatch("cb", "?a"),
  false,
  "Wildcard match - question mark no match",
)

assertTest(
  isMatch("adceb", "*a*b*"),
  true,
  "Wildcard match - complex star pattern",
)

assertTest(
  isMatch("acdcb", "a*c?b"),
  false,
  "Wildcard match - mixed pattern no match",
)

assertTest(isMatch("", ""), true, "Wildcard match - both empty")

assertTest(isMatch("", "*"), true, "Wildcard match - empty string with star")

assertTest(
  isMatch("a", ""),
  false,
  "Wildcard match - non-empty string, empty pattern",
)

assertTest(isMatch("a", "a"), true, "Wildcard match - exact single character")

assertTest(
  isMatch("a", "?"),
  true,
  "Wildcard match - question mark matches single",
)

assertTest(
  isMatch("ab", "a?"),
  true,
  "Wildcard match - question mark in pattern",
)

assertTest(
  isMatch("ac", "a?"),
  true,
  "Wildcard match - question mark matches any",
)

assertTest(isMatch("abc", "a*"), true, "Wildcard match - star suffix")

assertTest(isMatch("abc", "*c"), true, "Wildcard match - star prefix")

assertTest(isMatch("abc", "a*c"), true, "Wildcard match - star middle")

assertTest(isMatch("abc", "ab*"), true, "Wildcard match - star at end")

assertTest(
  isMatch("abc", "*"),
  true,
  "Wildcard match - single star matches all",
)

assertTest(
  isMatch("", "?"),
  false,
  "Wildcard match - question mark needs character",
)

assertTest(
  isMatch("a", "??"),
  false,
  "Wildcard match - too many question marks",
)

assertTest(
  isMatch("aa", "?"),
  false,
  "Wildcard match - one question mark, two chars",
)

assertTest(
  isMatch("mississippi", "m??*ss*?i*pi"),
  false,
  "Wildcard match - complex no match",
)

assertTest(
  isMatch("abefcdgiescdfimde", "ab*cd?i*de"),
  true,
  "Wildcard match - complex match",
)

assertTest(
  isMatch("abcabczzzde", "*abc???de*"),
  true,
  "Wildcard match - mixed wildcards",
)

assertTest(isMatch("abc", "a*c"), true, "Wildcard match - star in middle")

assertTest(isMatch("ac", "a*c"), true, "Wildcard match - star matches empty")

assertTest(isMatch("a", "a*"), true, "Wildcard match - star at end")

assertTest(isMatch("ab", "?*"), true, "Wildcard match - question then star")

assertTest(isMatch("abc", "???"), true, "Wildcard match - three question marks")

assertTest(
  isMatch("abcd", "???"),
  false,
  "Wildcard match - not enough question marks",
)

assertTest(isMatch("ho", "ho**"), true, "Wildcard match - multiple stars")

assertTest(
  isMatch("adceb", "*a*b*"),
  true,
  "Wildcard match - multiple star segments",
)

assertTest(
  isMatch("aab", "c*a*b"),
  false,
  "Wildcard match - wrong starting character",
)


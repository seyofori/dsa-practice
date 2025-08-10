import assertTest from "../assert-test"

/**
 * Palindrome Partitioning II
 *
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return the minimum cuts needed for a palindrome partitioning of s.
 *
 * Example:
 * Input: s = "aab"
 * Output: 1
 * Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
 *
 * Input: s = "aba"
 * Output: 0
 * Explanation: "aba" is already a palindrome.
 *
 * Time Complexity: O(n^2) where n is the length of string
 * Space Complexity: O(n^2) for the palindrome table and O(n) for the cuts array
 */

function minCut(s: string): number {
  // TODO: Implement the solution using dynamic programming

  if (!s || s.length <= 1) return 0

  const n = s.length

  // Build palindrome table
  const isPalindrome: boolean[][] = Array(n)
    .fill(false)
    .map(() => Array(n).fill(false))

  // Every single character is a palindrome
  for (let i = 0; i < n; i++) {
    isPalindrome[i][i] = true
  }

  // Check for palindromes of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      isPalindrome[i][i + 1] = true
    }
  }

  // Check for palindromes of length 3 or more
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1
      if (s[i] === s[j] && isPalindrome[i + 1][j - 1]) {
        isPalindrome[i][j] = true
      }
    }
  }

  // Calculate minimum cuts
  const cuts: number[] = new Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    if (isPalindrome[0][i]) {
      cuts[i] = 0
    } else {
      cuts[i] = i // Maximum possible cuts
      for (let j = 0; j < i; j++) {
        if (isPalindrome[j + 1][i]) {
          cuts[i] = Math.min(cuts[i], cuts[j] + 1)
        }
      }
    }
  }

  return cuts[n - 1]
}

// Helper function for testing
function isPalindromeString(str: string): boolean {
  const n = str.length
  for (let i = 0; i < n / 2; i++) {
    if (str[i] !== str[n - 1 - i]) {
      return false
    }
  }
  return true
}

// Test cases
assertTest(minCut("aab"), 1, "Palindrome cut - example 1")

assertTest(minCut("aba"), 0, "Palindrome cut - already palindrome")

assertTest(minCut("abcde"), 4, "Palindrome cut - all different chars")

assertTest(minCut("a"), 0, "Palindrome cut - single character")

assertTest(minCut("aa"), 0, "Palindrome cut - two same chars")

assertTest(minCut("ab"), 1, "Palindrome cut - two different chars")

assertTest(minCut("abccba"), 0, "Palindrome cut - full palindrome")

assertTest(minCut("abcba"), 0, "Palindrome cut - odd length palindrome")

assertTest(minCut("racecar"), 0, "Palindrome cut - classic palindrome")

assertTest(minCut("abcdef"), 5, "Palindrome cut - no palindromes")

assertTest(minCut("abcdefg"), 6, "Palindrome cut - seven chars no palindromes")

assertTest(minCut("aabaa"), 1, "Palindrome cut - multiple palindromes")

assertTest(minCut("abab"), 1, "Palindrome cut - alternating pattern")

assertTest(minCut("aaaa"), 0, "Palindrome cut - all same characters")

assertTest(minCut("ababa"), 0, "Palindrome cut - alternating palindrome")

assertTest(
  minCut("abcddcba"),
  0,
  "Palindrome cut - even length full palindrome",
)

assertTest(minCut("abcdeffedcba"), 0, "Palindrome cut - long palindrome")

assertTest(minCut("abcdefghijklm"), 12, "Palindrome cut - long no palindromes")

assertTest(minCut("cabababcbc"), 3, "Palindrome cut - complex case")

assertTest(
  minCut(
    "fifgbeajcacehiicccfecbfhhgfiiecdcjjffbghdidbhbdbfbfjccgbbdcjheccfbhafehieabbdfeigbiaggchaeghaijfbjhi",
  ),
  75,
  "Palindrome cut - very long string",
)

assertTest(minCut("abbac"), 1, "Palindrome cut - with double letters")

assertTest(minCut("abccb"), 1, "Palindrome cut - almost palindrome")

assertTest(minCut("abcba"), 0, "Palindrome cut - five char palindrome")

assertTest(minCut("madam"), 0, "Palindrome cut - word palindrome")

assertTest(minCut("level"), 0, "Palindrome cut - another word palindrome")

assertTest(minCut("noon"), 0, "Palindrome cut - four char palindrome")

assertTest(minCut("deed"), 0, "Palindrome cut - deed palindrome")

assertTest(minCut("refer"), 0, "Palindrome cut - refer palindrome")

assertTest(minCut("abcdefedcba"), 0, "Palindrome cut - eleven char palindrome")

assertTest(minCut("abcdedcba"), 0, "Palindrome cut - nine char palindrome")


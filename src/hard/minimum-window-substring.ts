import assertTest from "../assert-test"

/**
 * Minimum Window Substring
 *
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring
 * of s such that every character in t (including duplicates) is included in the window.
 * If there is no such window, return the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 *
 * Example:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 *
 * Time Complexity: O(|s| + |t|) where |s| and |t| are the lengths of strings s and t
 * Space Complexity: O(|s| + |t|) for the character frequency maps
 */

function minWindow(s: string, t: string): string {
  // TODO: Implement the solution
  // Use sliding window technique with two pointers

  if (s.length === 0 || t.length === 0) return ""

  // Frequency map for characters in t
  const dictT: Map<string, number> = new Map()
  for (const char of t) {
    dictT.set(char, (dictT.get(char) || 0) + 1)
  }

  const required = dictT.size
  let left = 0,
    right = 0
  let formed = 0

  // Frequency map for characters in current window
  const windowCounts: Map<string, number> = new Map()

  // Result: [window length, left, right]
  let ans = [-1, 0, 0]

  while (right < s.length) {
    // Add character from right to window
    const character = s[right]
    windowCounts.set(character, (windowCounts.get(character) || 0) + 1)

    // Check if frequency of current character matches desired count in t
    if (
      dictT.has(character) &&
      windowCounts.get(character) === dictT.get(character)
    ) {
      formed++
    }

    // Try to contract window until it ceases to be 'desirable'
    while (left <= right && formed === required) {
      const char = s[left]

      // Save the smallest window
      if (ans[0] === -1 || right - left + 1 < ans[0]) {
        ans = [right - left + 1, left, right]
      }

      // Remove from left
      windowCounts.set(char, windowCounts.get(char)! - 1)
      if (dictT.has(char) && windowCounts.get(char)! < dictT.get(char)!) {
        formed--
      }

      left++
    }

    right++
  }

  return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1)
}

// Test cases
assertTest(
  minWindow("ADOBECODEBANC", "ABC"),
  "BANC",
  "Min window - example case",
)

assertTest(minWindow("a", "a"), "a", "Min window - single character")

assertTest(minWindow("a", "aa"), "", "Min window - impossible case")

assertTest(minWindow("ab", "b"), "b", "Min window - single char in string")

assertTest(minWindow("abc", "abc"), "abc", "Min window - exact match")

assertTest(
  minWindow("abc", "cba"),
  "abc",
  "Min window - same chars different order",
)

assertTest(minWindow("", "a"), "", "Min window - empty source string")

assertTest(minWindow("a", ""), "", "Min window - empty target string")

assertTest(minWindow("bba", "ab"), "ba", "Min window - with duplicates")

assertTest(
  minWindow("ADOBECODEBANC", "AABC"),
  "ADOBECODEBA",
  "Min window - duplicate chars in target",
)

assertTest(
  minWindow("aa", "aa"),
  "aa",
  "Min window - duplicate source and target",
)

assertTest(minWindow("ab", "ab"), "ab", "Min window - two characters")

assertTest(minWindow("abcd", "d"), "d", "Min window - last character")

assertTest(minWindow("abcd", "a"), "a", "Min window - first character")

assertTest(minWindow("pwwkew", "wke"), "wke", "Min window - substring exists")

assertTest(
  minWindow("geeksforgeeks", "ork"),
  "ksfor",
  "Min window - middle substring",
)

assertTest(
  minWindow("this is a test string", "tist"),
  "t stri",
  "Min window - with spaces",
)

assertTest(
  minWindow("ADOBECODEBANC", "ABCC"),
  "CODEBANC",
  "Min window - extra C needed",
)

assertTest(
  minWindow("acbbaca", "aba"),
  "baca",
  "Min window - multiple possible windows",
)

assertTest(minWindow("abc", "b"), "b", "Min window - single char target")

assertTest(minWindow("bbc", "bb"), "bb", "Min window - consecutive duplicates")

assertTest(minWindow("abcdef", "fa"), "abcdef", "Min window - chars at ends")

assertTest(
  minWindow("cabwefgewcwaefgcf", "cae"),
  "cwae",
  "Min window - complex case",
)

assertTest(minWindow("aa", "a"), "a", "Min window - single from duplicates")

assertTest(
  minWindow("abab", "ab"),
  "ab",
  "Min window - pattern exists multiple times",
)

assertTest(minWindow("acb", "ab"), "acb", "Min window - non-adjacent chars")

assertTest(
  minWindow("aaflslflsldkalskaaa", "aaa"),
  "aaa",
  "Min window - multiple a's needed",
)

assertTest(
  minWindow("cnhczmccqouqadqtmjjzl", "mm"),
  "",
  "Min window - impossible with duplicates",
)

assertTest(minWindow("bdab", "ab"), "ab", "Min window - simple case")

assertTest(
  minWindow("ask not what your country", "ask"),
  "ask",
  "Min window - beginning of string",
)

assertTest(
  minWindow("GeeksforGeeks", "rGk"),
  "ksforG",
  "Min window - case sensitive",
)

assertTest(
  minWindow("zoompan", "oom"),
  "oom",
  "Min window - consecutive in middle",
)


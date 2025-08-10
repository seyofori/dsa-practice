import assertTest from "../assert-test"

/**
 * Longest Substring with At Most One Repeating Character
 *
 * Given a string s, return the length of the longest substring that contains at most one repeating character.
 * A repeating character is one that appears more than once in the substring.
 *
 * Example:
 * Input: s = "abccba"
 * Output: 4
 * Explanation: The longest substring is "abcc" or "ccba" with length 4.
 *
 * Time Complexity: O(n) using sliding window
 * Space Complexity: O(min(m,n)) where m is charset size
 */

function lengthOfLongestSubstringWithAtMostOneRepeating(s: string): number {
  // TODO: Implement sliding window with character frequency tracking
  return 0
}

// Test cases
assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abccba"),
  4,
  "At most one repeating - example",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("a"),
  1,
  "At most one repeating - single char",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating(""),
  0,
  "At most one repeating - empty string",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abc"),
  3,
  "At most one repeating - all unique",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("aab"),
  3,
  "At most one repeating - one repeat",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("aaaa"),
  2,
  "At most one repeating - all same",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abcabc"),
  4,
  "At most one repeating - pattern repeat",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abccdef"),
  5,
  "At most one repeating - one double",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("aabbcc"),
  4,
  "At most one repeating - pairs",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abcdefg"),
  7,
  "At most one repeating - all different",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("ababa"),
  4,
  "At most one repeating - alternating",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("xyxy"),
  4,
  "At most one repeating - two char repeat",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abcaaa"),
  4,
  "At most one repeating - ending with repeats",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("aaabcd"),
  5,
  "At most one repeating - starting with repeats",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abcdefghijk"),
  11,
  "At most one repeating - long unique",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("aabcdefg"),
  7,
  "At most one repeating - early repeat",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abcdefgg"),
  8,
  "At most one repeating - late repeat",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abccdefghh"),
  8,
  "At most one repeating - multiple repeats",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("aa"),
  2,
  "At most one repeating - two same",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("ab"),
  2,
  "At most one repeating - two different",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abcabcabc"),
  4,
  "At most one repeating - repeating pattern",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("aabbccdd"),
  4,
  "At most one repeating - all pairs",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abcdefghijklmnop"),
  16,
  "At most one repeating - alphabet",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("aaabbbccc"),
  4,
  "At most one repeating - groups of three",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abcxyzabc"),
  6,
  "At most one repeating - separated repeats",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("xyzabc"),
  6,
  "At most one repeating - no repeats",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("aabbc"),
  5,
  "At most one repeating - multiple early repeats",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abccba"),
  4,
  "At most one repeating - palindromic",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("abcddcba"),
  5,
  "At most one repeating - longer palindrome",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("qwertyuiop"),
  10,
  "At most one repeating - keyboard row",
)

assertTest(
  lengthOfLongestSubstringWithAtMostOneRepeating("programming"),
  8,
  "At most one repeating - real word",
)


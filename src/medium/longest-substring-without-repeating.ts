import assertTest from "../assert-test"

/**length of longest substring without repeating */

function lengthOfLongestSubstring(s: string): number {
  // TODO: Implement sliding window approach for longest substring without repeating characters
  return 0
}

assertTest(
  lengthOfLongestSubstring("abcabcbb"),
  3,
  "Longest unique substring basic",
)
assertTest(
  lengthOfLongestSubstring("bbbb"),
  1,
  "Longest unique substring all same",
)

assertTest(
  lengthOfLongestSubstring("abcabcbb"),
  3,
  "Longest unique substring basic",
)
assertTest(
  lengthOfLongestSubstring("bbbb"),
  1,
  "Longest unique substring all same",
)
assertTest(
  lengthOfLongestSubstring("pwwkew"),
  3,
  "Test with repeating patterns",
)
assertTest(lengthOfLongestSubstring(""), 0, "Empty string")
assertTest(lengthOfLongestSubstring(" "), 1, "Single space")
assertTest(lengthOfLongestSubstring("au"), 2, "Two different chars")
assertTest(lengthOfLongestSubstring("aab"), 2, "Three chars with one repeat")
assertTest(lengthOfLongestSubstring("dvdf"), 3, "Non-sequential repeating char")
assertTest(lengthOfLongestSubstring("anviyj"), 6, "All unique characters")
assertTest(lengthOfLongestSubstring("abba"), 2, "Palindrome string")
assertTest(lengthOfLongestSubstring("tmmzuxt"), 5, "Multiple repeating chars")
assertTest(lengthOfLongestSubstring("ohvbjdml"), 8, "Long unique string")
assertTest(lengthOfLongestSubstring("bbtablud"), 6, "Mixed pattern")
assertTest(lengthOfLongestSubstring("!@#$%"), 5, "Special characters")
assertTest(lengthOfLongestSubstring("12345"), 5, "Numeric string")
assertTest(lengthOfLongestSubstring("abcde12345"), 10, "Alphanumeric string")
assertTest(lengthOfLongestSubstring("   "), 1, "Multiple spaces")
assertTest(lengthOfLongestSubstring("a1b2c3"), 6, "Alternating alphanumeric")
assertTest(lengthOfLongestSubstring("$#@$#@"), 3, "Repeating special chars")
assertTest(lengthOfLongestSubstring("aA"), 2, "Case sensitive test")
assertTest(lengthOfLongestSubstring("abcABC"), 6, "Mixed case test")

assertTest(lengthOfLongestSubstring("😀😃😄"), 3, "Emoji test")


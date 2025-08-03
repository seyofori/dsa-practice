import assertTest from "../assert-test"

/**
 * Longest Substring Without Repeating Characters (#3)
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(min(m, n)) where m is the size of the character set
 */
function lengthOfLongestSubstring(s: string): number {
  // TODO: Implement the solution
  return 0
}

// Test cases
assertTest(lengthOfLongestSubstring("abcabcbb"), 3, "Example 1 - abc")
assertTest(lengthOfLongestSubstring("bbbbb"), 1, "Example 2 - all same")
assertTest(lengthOfLongestSubstring("pwwkew"), 3, "Example 3 - wke")
assertTest(lengthOfLongestSubstring(""), 0, "Empty string")
assertTest(lengthOfLongestSubstring(" "), 1, "Single space")
assertTest(lengthOfLongestSubstring("a"), 1, "Single character")
assertTest(lengthOfLongestSubstring("ab"), 2, "Two different")
assertTest(lengthOfLongestSubstring("aa"), 1, "Two same")
assertTest(lengthOfLongestSubstring("abc"), 3, "Three different")
assertTest(lengthOfLongestSubstring("aab"), 2, "Two same one different")
assertTest(lengthOfLongestSubstring("abcdef"), 6, "All different")
assertTest(lengthOfLongestSubstring("abcabc"), 3, "Repeating pattern")
assertTest(lengthOfLongestSubstring("abba"), 2, "Palindrome pattern")
assertTest(lengthOfLongestSubstring("tmmzuxt"), 5, "Complex case")
assertTest(lengthOfLongestSubstring("dvdf"), 3, "Another complex")
assertTest(lengthOfLongestSubstring("anviaj"), 5, "Random string")
assertTest(lengthOfLongestSubstring("ohvhjdml"), 6, "Another random")
assertTest(lengthOfLongestSubstring("cdd"), 2, "cd")
assertTest(lengthOfLongestSubstring("abcdefg"), 7, "Seven different")
assertTest(lengthOfLongestSubstring("aabaab!bb"), 3, "With exclamation")
assertTest(lengthOfLongestSubstring("au"), 2, "Two letters")
assertTest(lengthOfLongestSubstring("aab"), 2, "ab substring")
assertTest(lengthOfLongestSubstring("ckilbkd"), 5, "kilbd")
assertTest(lengthOfLongestSubstring("ohomm"), 3, "ohm")
assertTest(lengthOfLongestSubstring("abcabcabc"), 3, "Triple repeat")
assertTest(lengthOfLongestSubstring("pwwkew"), 3, "wke again")
assertTest(lengthOfLongestSubstring("bpfbhmipx"), 7, "Long complex")
assertTest(lengthOfLongestSubstring("tmmzuxt"), 5, "mzuxt")
assertTest(lengthOfLongestSubstring("jbpnbwwd"), 4, "jpnbw")
assertTest(lengthOfLongestSubstring("wobgrovw"), 6, "wbgrov")
assertTest(lengthOfLongestSubstring("nfinhnh"), 4, "finh")
assertTest(lengthOfLongestSubstring("cabwefgewcwaefgcf"), 4, "cabw or wefg")
assertTest(lengthOfLongestSubstring("klmnostuvwx"), 11, "Almost alphabet")
assertTest(lengthOfLongestSubstring("0123456789"), 10, "All digits")
assertTest(lengthOfLongestSubstring("!@#$%^&*()"), 10, "Special characters")
assertTest(lengthOfLongestSubstring("aA"), 2, "Case sensitive")
assertTest(lengthOfLongestSubstring("Aa"), 2, "Case sensitive reverse")
assertTest(lengthOfLongestSubstring("abcABC"), 6, "Mixed case")
assertTest(lengthOfLongestSubstring("AaBbCc"), 6, "Alternating case")
assertTest(
  lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz"),
  26,
  "Full alphabet",
)
assertTest(
  lengthOfLongestSubstring("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  26,
  "Full uppercase",
)
assertTest(lengthOfLongestSubstring("1234567890"), 10, "All digits different")
assertTest(lengthOfLongestSubstring("1122334455"), 2, "Digit pairs")


import assertTest from "../assert-test"

/**
 * First Unique Character in a String (#387)
 *
 * Given a string s, find the first non-repeating character in it and return its index.
 * If it does not exist, return -1.
 *
 * Example 1:
 * Input: s = "leetcode"
 * Output: 0
 *
 * Example 2:
 * Input: s = "loveleetcode"
 * Output: 2
 *
 * Example 3:
 * Input: s = "aabb"
 * Output: -1
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) - at most 26 lowercase English letters
 */
function firstUniqChar(s: string): number {
  // TODO: Implement first unique character using frequency map
  return -1
}

// Test cases
assertTest(firstUniqChar("leetcode"), 0, "Example 1 - 'l' is first unique")
assertTest(firstUniqChar("loveleetcode"), 2, "Example 2 - 'v' is first unique")
assertTest(firstUniqChar("aabb"), -1, "Example 3 - no unique characters")
assertTest(firstUniqChar("a"), 0, "Single character")
assertTest(firstUniqChar("ab"), 0, "Two different characters")
assertTest(firstUniqChar("aa"), -1, "Two same characters")
assertTest(firstUniqChar("abccba"), -1, "All characters repeat")
assertTest(firstUniqChar("abcabc"), -1, "Pattern repeats completely")
assertTest(firstUniqChar("abcdef"), 0, "All unique characters")
assertTest(firstUniqChar("racecar"), 3, "Palindrome with unique 'e'")
assertTest(firstUniqChar("aabcbc"), -1, "No unique characters")
assertTest(firstUniqChar("dddccdbba"), 8, "Unique character at end")
assertTest(firstUniqChar("abacabad"), 3, "Character 'c' in middle is unique")
assertTest(firstUniqChar("programming"), 0, "Real word example 1")
assertTest(firstUniqChar("algorithm"), 0, "Real word example 2")
assertTest(firstUniqChar("javascript"), 0, "Real word example 3")
assertTest(firstUniqChar("hello"), 0, "Common word - 'h' is first unique")
assertTest(firstUniqChar("world"), 0, "Another common word")
assertTest(firstUniqChar("aabbccddee"), -1, "All pairs")
assertTest(firstUniqChar("aabbccddeef"), 10, "Mostly pairs with one unique")
assertTest(firstUniqChar("xyzzyx"), -1, "Symmetric no unique")
assertTest(
  firstUniqChar("abcdefghijklmnopqrstuvwxyz"),
  0,
  "All alphabet letters",
)
assertTest(firstUniqChar("zyxwvutsrqponmlkjihgfedcba"), 0, "Reverse alphabet")
assertTest(
  firstUniqChar("abcdefghijklmnopqrstuvwxyza"),
  1,
  "Alphabet with repeated first",
)
assertTest(firstUniqChar("z"), 0, "Single last letter")
assertTest(firstUniqChar("zzz"), -1, "Repeated last letter")
assertTest(firstUniqChar("abcabcabc"), -1, "Triple pattern")
assertTest(firstUniqChar("abcabcabcd"), 9, "Triple pattern with unique")
assertTest(firstUniqChar("deadbeef"), 2, "Hex string - 'a' is first unique")
assertTest(firstUniqChar("cafe"), 0, "Another hex-like string")
assertTest(
  firstUniqChar("beefeater"),
  0,
  "Word with repeated letters - 'b' is unique",
)
assertTest(firstUniqChar("banana"), 0, "Classic example with 'b' first unique")
assertTest(firstUniqChar("mississippi"), 0, "Classic string with unique 'm'")
assertTest(
  firstUniqChar("bookkeeper"),
  0,
  "Word with many repeated letters - 'b' first",
)
assertTest(
  firstUniqChar("entrepreneur"),
  2,
  "Complex word - 't' is first unique",
)
assertTest(firstUniqChar("committee"), 0, "Word starting with unique 'c'")
assertTest(firstUniqChar("parallel"), 0, "Geometry term - 'p' is first unique")
assertTest(firstUniqChar("Tennessee"), 0, "State name - 'T' is first unique")
assertTest(firstUniqChar("success"), 1, "Word with 'u' as first unique")
assertTest(firstUniqChar("assess"), 0, "Word with pattern")
assertTest(firstUniqChar("abcdefg"), 0, "Simple sequence")
assertTest(firstUniqChar("gfedcba"), 0, "Reverse sequence")


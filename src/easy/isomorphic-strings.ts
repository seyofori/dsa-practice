import assertTest from "../assert-test"

/**
 * Isomorphic Strings (#205)
 *
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with the same character while
 * preserving the order of characters. No two characters may map to the same character,
 * but a character may map to itself.
 *
 * Example 1:
 * Input: s = "egg", t = "add"
 * Output: true
 *
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Example 3:
 * Input: s = "paper", t = "title"
 * Output: true
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) - limited by character set size
 */
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  let forwardMap = new Map<string, string>()
  let backwardMap = new Map<string, string>()

  for (let i = 0; i < s.length; i++) {
    if (forwardMap.has(s[i]) && forwardMap.get(s[i]) !== t[i]) {
      return false
    }

    if (backwardMap.has(t[i]) && backwardMap.get(t[i]) !== s[i]) {
      return false
    }

    forwardMap.set(s[i], t[i])
    backwardMap.set(t[i], s[i])
  }


  return true
}

// Test cases
assertTest(isIsomorphic("egg", "add"), true, "Example 1 - simple mapping")
assertTest(
  isIsomorphic("foo", "bar"),
  false,
  "Example 2 - 'o' maps to both 'a' and 'r'",
)
assertTest(isIsomorphic("paper", "title"), true, "Example 3 - complex mapping")
assertTest(isIsomorphic("a", "a"), true, "Single character - same")
assertTest(isIsomorphic("a", "b"), true, "Single character - different")
assertTest(isIsomorphic("ab", "aa"), false, "Different characters map to same")
assertTest(isIsomorphic("aa", "ab"), false, "Same character maps to different")
assertTest(isIsomorphic("ab", "ba"), true, "Swap mapping")
assertTest(isIsomorphic("ab", "cc"), false, "Both map to same character")
assertTest(isIsomorphic("abc", "def"), true, "Simple one-to-one mapping")
assertTest(isIsomorphic("abc", "bca"), true, "Rotation mapping")
assertTest(isIsomorphic("abcabc", "defdef"), true, "Repeated pattern")
assertTest(isIsomorphic("abcabc", "defghi"), false, "Pattern doesn't repeat")
assertTest(isIsomorphic("", ""), true, "Empty strings")
assertTest(isIsomorphic("abba", "cddc"), true, "Palindrome pattern")
assertTest(isIsomorphic("abba", "abcd"), false, "Palindrome vs sequence")
assertTest(isIsomorphic("aba", "bab"), true, "Alternating pattern")
assertTest(isIsomorphic("abc", "xyz"), true, "Alphabet mapping")
assertTest(isIsomorphic("aaa", "bbb"), true, "All same to all same")
assertTest(isIsomorphic("aab", "xxy"), true, "Two same, one different")
assertTest(isIsomorphic("aab", "xyz"), false, "Two same to all different")
assertTest(
  isIsomorphic("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"),
  true,
  "Reverse alphabet",
)
assertTest(
  isIsomorphic("programming", "engineering"),
  false,
  "Real words - not isomorphic",
)
assertTest(
  isIsomorphic("hello", "world"),
  false,
  "Common words - not isomorphic",
)
assertTest(isIsomorphic("listen", "silent"), true, "Anagrams - isomorphic")
assertTest(isIsomorphic("rat", "car"), true, "Different patterns")
assertTest(isIsomorphic("abcd", "efgh"), true, "Sequential mapping")
assertTest(isIsomorphic("aabbcc", "xxyyzz"), true, "Pairs mapping")
assertTest(isIsomorphic("aabbcc", "xyxyxy"), false, "Pairs to alternating")
assertTest(isIsomorphic("abc", "aaa"), false, "Different to same")
assertTest(isIsomorphic("aaa", "abc"), false, "Same to different")
assertTest(isIsomorphic("badc", "baba"), false, "Complex non-isomorphic")
assertTest(isIsomorphic("abab", "baba"), true, "Pattern isomorphic")
assertTest(isIsomorphic("title", "paper"), true, "Reverse of example 3")
assertTest(isIsomorphic("duck", "pool"), false, "Four letters - not isomorphic")
assertTest(
  isIsomorphic("book", "deer"),
  true,
  "Double letters different positions",
)
assertTest(isIsomorphic("noon", "sees"), true, "Symmetric patterns")
assertTest(isIsomorphic("radar", "level"), true, "Palindromes")
assertTest(isIsomorphic("abcde", "fghij"), true, "Five character sequence")
assertTest(isIsomorphic("abcde", "fghia"), true, "Cycle not complete")
assertTest(
  isIsomorphic("mississippi", "abcdefgheff"),
  false,
  "Complex string - not isomorphic",
)
assertTest(isIsomorphic("racecar", "abcdcba"), true, "Palindrome mapping")
assertTest(isIsomorphic("kayak", "level"), true, "Two palindromes")
assertTest(isIsomorphic("pattern", "diagram"), false, "Real word example")
assertTest(isIsomorphic("stress", "banana"), false, "Different repeat patterns")
assertTest(
  isIsomorphic("committee", "professor"),
  false,
  "Repeated char conflicts",
)
assertTest(isIsomorphic("deed", "noon"), true, "Four character palindromes")
assertTest(isIsomorphic("abccba", "xyzzyx"), true, "Mirror pattern")
assertTest(
  isIsomorphic("success", "letters"),
  false,
  "Different frequency patterns",
)


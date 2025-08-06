import assertTest from "../assert-test"

/**
 * Valid Anagram (#242)
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) - constant space for character frequency (26 letters)
 */
function isAnagram(s: string, t: string): boolean {
  // TODO: Implement the solution
  return false
}

// Test cases
assertTest(isAnagram("anagram", "nagaram"), true, "Basic anagram")
assertTest(isAnagram("rat", "car"), false, "Not an anagram")
assertTest(isAnagram("", ""), true, "Empty strings")
assertTest(isAnagram("a", "a"), true, "Single character match")
assertTest(isAnagram("a", "b"), false, "Single character no match")
assertTest(isAnagram("ab", "ba"), true, "Two character anagram")
assertTest(isAnagram("abc", "bca"), true, "Three character anagram")
assertTest(isAnagram("abc", "def"), false, "Completely different")
assertTest(isAnagram("listen", "silent"), true, "Classic anagram")
assertTest(isAnagram("evil", "vile"), true, "Four letter anagram")
assertTest(isAnagram("hello", "bello"), false, "One character different")
assertTest(isAnagram("aab", "aba"), true, "With duplicates")
assertTest(isAnagram("aaa", "aaa"), true, "All same characters")
assertTest(isAnagram("aaa", "aa"), false, "Different lengths")
assertTest(isAnagram("abc", "abcd"), false, "Different lengths longer")
assertTest(isAnagram("race", "care"), true, "Another classic")
assertTest(isAnagram("heart", "earth"), true, "Five letter anagram")
assertTest(isAnagram("stressed", "desserts"), true, "Longer anagram")
assertTest(isAnagram("cinema", "iceman"), true, "Six letter anagram")
assertTest(isAnagram("elbow", "below"), true, "Positional change")
assertTest(isAnagram("study", "dusty"), true, "Study dusty")
assertTest(isAnagram("night", "thing"), true, "Night thing")
assertTest(isAnagram("conversation", "voices rant on"), false, "With spaces")
assertTest(isAnagram("abcdefg", "gfedcba"), true, "Alphabet reverse")
assertTest(isAnagram("aabbcc", "abcabc"), true, "Multiple duplicates")
assertTest(isAnagram("aab", "baa"), true, "Simple rearrangement")
assertTest(isAnagram("abc", "cab"), true, "Cyclic shift")
assertTest(isAnagram("ab", "aa"), false, "Missing character")
assertTest(isAnagram("aa", "ab"), false, "Extra character")
assertTest(
  isAnagram("programs", "sp rom ag"),
  false,
  "Spaces make it different",
)
assertTest(isAnagram("qwertyuiop", "poiuytrewq"), true, "Keyboard row")
assertTest(isAnagram("binary", "brainy"), true, "Binary brainy")
assertTest(isAnagram("dormitory", "dirty room"), false, "With space")

import assertTest from "../assert-test"

/**
 * Valid Anagram (#242)
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - s and t consist of lowercase English letters.
 *
 * Time Complexity: O(n) where n is the length of the strings
 * Space Complexity: O(1) - constant space for character frequency (26 letters)
 */
function isAnagram(s: string, t: string): boolean {
return false
}

// Test cases - covering comprehensive edge cases
assertTest(isAnagram("anagram", "nagaram"), true, "Basic anagram example")
assertTest(isAnagram("rat", "car"), false, "Basic non-anagram example")
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
assertTest(isAnagram("aaa", "aa"), false, "Different lengths - shorter")
assertTest(isAnagram("abc", "abcd"), false, "Different lengths - longer")
assertTest(isAnagram("race", "care"), true, "Another classic anagram")
assertTest(isAnagram("heart", "earth"), true, "Five letter anagram")
assertTest(isAnagram("stressed", "desserts"), true, "Longer anagram")
assertTest(isAnagram("cinema", "iceman"), true, "Six letter anagram")
assertTest(isAnagram("elbow", "below"), true, "Positional change")
assertTest(isAnagram("study", "dusty"), true, "Study dusty anagram")
assertTest(isAnagram("night", "thing"), true, "Night thing anagram")
assertTest(
  isAnagram("conversation", "voices rant on"),
  false,
  "Different characters (space)",
)
assertTest(isAnagram("abcdefg", "gfedcba"), true, "Alphabet reverse")
assertTest(isAnagram("aabbcc", "abcabc"), true, "Multiple duplicates")
assertTest(isAnagram("aab", "baa"), true, "Simple rearrangement")
assertTest(isAnagram("abc", "cab"), true, "Cyclic shift")
assertTest(isAnagram("ab", "aa"), false, "Missing character")
assertTest(isAnagram("aa", "ab"), false, "Extra character")
assertTest(isAnagram("programs", "grampros"), true, "Complex rearrangement")
assertTest(isAnagram("qwertyuiop", "poiuytrewq"), true, "Keyboard row reverse")
assertTest(isAnagram("binary", "brainy"), true, "Binary brainy anagram")
assertTest(
  isAnagram("dormitory", "dirtyroom"),
  true,
  "Dormitory dirtyroom anagram",
)
assertTest(
  isAnagram("schoolmaster", "theclassroom"),
  true,
  "Schoolmaster theclassroom anagram",
)
assertTest(isAnagram("astronomer", "moonstarer"), true, "Long anagram")
assertTest(isAnagram("the eyes", "theyees"), false, "With space vs without")
assertTest(isAnagram("abcd", "dcba"), true, "Four letter reverse")
assertTest(isAnagram("abcde", "edcba"), true, "Five letter reverse")
assertTest(isAnagram("computer", "retupmoc"), true, "Computer reverse")
assertTest(
  isAnagram("programming", "gramprogmin"),
  true,
  "Programming rearranged",
)
assertTest(
  isAnagram("algorithm", "logarithm"),
  true,
  "Algorithm logarithm anagram",
)
assertTest(isAnagram("silent", "listen"), true, "Silent listen anagram")
assertTest(isAnagram("debit card", "bad credit"), true, "Contains spaces")
assertTest(
  isAnagram("conversation", "voices rant on"),
  false,
  "Spaces vs no spaces",
)
assertTest(
  isAnagram("eleven plus two", "twelve plus one"),
  true,
  "Mathematical anagram with spaces",
)
assertTest(
  isAnagram("slot machines", "cash lost in me"),
  false,
  "Complex phrase with spaces",
)
assertTest(isAnagram("a", ""), false, "One empty, one not")
assertTest(isAnagram("", "a"), false, "Empty vs single char")
assertTest(isAnagram("z", "z"), true, "Last letter of alphabet")
assertTest(isAnagram("aaaa", "aaaa"), true, "Four identical characters")
assertTest(isAnagram("abab", "baba"), true, "Alternating pattern")
assertTest(isAnagram("abcabc", "bcabca"), true, "Repeated pattern")
assertTest(isAnagram("xyz", "zyx"), true, "Three letter reverse")
assertTest(
  isAnagram("programming", "gramprognim"),
  true,
  "Programming with n instead of m",
)
assertTest(isAnagram("anagramm", "nagaram"), false, "Extra character at end")

/**
 * function isAnagram(s: string, t: string): boolean {
  // TODO: Implement the solution
  if (s.length !== t.length) return false

  const letters = new Map<string, number>()

  // count up
  for (let letter of s) {
    const currentCount = letters.get(letter) || 0
    letters.set(letter, currentCount + 1)
  }

  // countdown
  for (let letter of t) {
    if (!letters.has(letter)) return false

    const currentCount = letters.get(letter)!
    if (currentCount === 1) {
      letters.delete(letter)
    } else {
      letters.set(letter, currentCount - 1)
    }
  }

  return letters.size === 0
}

 */
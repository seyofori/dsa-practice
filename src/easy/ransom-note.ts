import assertTest from "../assert-test"

/**
 * Ransom Note (#383)
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed
 * by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Time Complexity: O(m + n) where m and n are the lengths of the strings
 * Space Complexity: O(k) where k is the number of unique characters in magazine
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  let freq = new Map<string, number>()

  for (let char of magazine) {
    let currCount = freq.get(char) ?? 0
    freq.set(char, currCount + 1)
  }

  for (let char of ransomNote) {
    let currCount = freq.get(char)
    if (currCount === undefined) return false
    if (currCount === 1) {
      freq.delete(char)
    } else {
      freq.set(char, currCount - 1)
    }
    
  }
  return true
}

// Test cases
assertTest(canConstruct("a", "b"), false, "Example 1 - Different letters")
assertTest(canConstruct("aa", "ab"), false, "Example 2 - Not enough 'a's")
assertTest(canConstruct("aa", "aab"), true, "Example 3 - Enough letters")
assertTest(canConstruct("", ""), true, "Both empty strings")
assertTest(canConstruct("", "abc"), true, "Empty ransom note")
assertTest(canConstruct("a", ""), false, "Empty magazine")
assertTest(canConstruct("a", "a"), true, "Single matching letter")
assertTest(canConstruct("a", "aa"), true, "Extra letters in magazine")
assertTest(canConstruct("ab", "ba"), true, "Same letters different order")
assertTest(canConstruct("abc", "cba"), true, "Reverse order")
assertTest(canConstruct("abc", "abc"), true, "Exact match")
assertTest(canConstruct("abc", "ab"), false, "Missing letter")
assertTest(canConstruct("hello", "olleh"), true, "Anagram case")
assertTest(
  canConstruct("hello", "hello world"),
  true,
  "Extra words in magazine",
)
assertTest(canConstruct("cat", "rat"), false, "One different letter")
assertTest(canConstruct("aab", "aabb"), true, "Multiple of same letters")
assertTest(canConstruct("aabb", "aab"), false, "Not enough duplicates")
assertTest(
  canConstruct("programming", "gramprogmin"),
  true,
  "Complex rearrangement",
)
assertTest(canConstruct("computer", "retupmoc"), true, "Reverse complex")
assertTest(canConstruct("aaa", "aa"), false, "Need more than available")
assertTest(
  canConstruct("aaaa", "aaaaaa"),
  true,
  "Multiple duplicates available",
)
assertTest(canConstruct("test", "testing"), true, "Substring scenario")
assertTest(
  canConstruct("testing", "test"),
  false,
  "Not enough letters for longer",
)
assertTest(
  canConstruct("book", "cookbook"),
  true,
  "Letters available in longer word",
)
assertTest(
  canConstruct("paper", "newspaper"),
  true,
  "Letters scattered in magazine",
)
assertTest(canConstruct("money", "honey"), false, "Missing 'm'")
assertTest(canConstruct("listen", "silent"), true, "Classic anagram")
assertTest(canConstruct("evil", "vile"), true, "Another anagram")
assertTest(canConstruct("earth", "heart"), true, "Heart earth anagram")
assertTest(canConstruct("abc", "def"), false, "Completely different")
assertTest(canConstruct("zzz", "z"), false, "Need multiple of rare letter")
assertTest(canConstruct("abcdef", "fedcba"), true, "Full alphabet reverse")
assertTest(canConstruct("quick", "quack"), false, "Similar but missing 'i'")
assertTest(canConstruct("brown", "rown"), false, "Missing first letter")
assertTest(canConstruct("jump", "jumped"), true, "Past tense contains present")
assertTest(canConstruct("code", "decode"), true, "Prefix in word")
assertTest(canConstruct("read", "dear"), true, "Rearranged")
assertTest(canConstruct("stop", "tops"), true, "Plural form")
assertTest(canConstruct("race", "care"), true, "Medical anagram")
assertTest(canConstruct("loop", "pool"), true, "Swimming anagram")
assertTest(canConstruct("star", "rats"), true, "Animals anagram")


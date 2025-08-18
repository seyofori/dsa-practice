import assertTest from "../assert-test"

/**
 * Longest Palindromic Substring (#5)
 *
 * Given a string s, return the longest palindromic substring in s.
 * A string is palindromic if it reads the same forward and backward.
 *
 * Time Complexity: O(n^2) with expand around centers approach
 * Space Complexity: O(1) with expand around centers approach
 */
function longestPalindrome(s: string): string {
  // TODO: Implement the solution
  return ""
}

// Test cases
assertTest(longestPalindrome("babad"), "bab", "Example 1 - bab or aba")
assertTest(
  longestPalindrome("cbbd"),
  "bb",
  "Example 2 - even length palindrome",
)
assertTest(longestPalindrome("a"), "a", "Single character")
assertTest(longestPalindrome("ac"), "a", "Two different characters")
assertTest(longestPalindrome("aa"), "aa", "Two same characters")
assertTest(longestPalindrome("aba"), "aba", "Three character palindrome")
assertTest(longestPalindrome("abc"), "a", "No palindrome longer than 1")
assertTest(longestPalindrome("abba"), "abba", "Four character even palindrome")
assertTest(longestPalindrome("racecar"), "racecar", "Classic palindrome")
assertTest(longestPalindrome("madam"), "madam", "Another classic")
assertTest(longestPalindrome("noon"), "noon", "Four letter palindrome")
assertTest(longestPalindrome("level"), "level", "Five letter palindrome")
assertTest(longestPalindrome("aabbaa"), "aabbaa", "Six letter palindrome")
assertTest(longestPalindrome("abcdef"), "a", "All different characters")
assertTest(
  longestPalindrome("abacabad"),
  "abacaba",
  "Long palindrome in string",
)
assertTest(
  longestPalindrome("forgeeksskeegfor"),
  "geeksskeeg",
  "Palindrome in middle",
)
assertTest(
  longestPalindrome("abcdeffedcba"),
  "abcdeffedcba",
  "Entire string is palindrome",
)

// Note: For cases where multiple palindromes of same length exist,
// any valid one is acceptable. These tests check for one possibility.
function testLongestPalindromeLength(
  input: string,
  expectedLength: number,
  description: string,
) {
  const result = longestPalindrome(input)
  assertTest(result.length, expectedLength, `${description} - length`)

  // Verify it's actually a palindrome
  const isPalindrome = result === result.split("").reverse().join("")
  assertTest(isPalindrome, true, `${description} - is palindrome`)

  // Verify it's actually a substring
  const isSubstring = input.includes(result)
  assertTest(isSubstring, true, `${description} - is substring`)
}

testLongestPalindromeLength(
  "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendure",
  7,
  "Gettysburg address snippet",
)
testLongestPalindromeLength(
  "abcdefghijklmnopqrstuvwxyz",
  1,
  "Alphabet - all different",
)
testLongestPalindromeLength("aabbccddeeffgg", 2, "All pairs")
testLongestPalindromeLength("abccba", 6, "Symmetric string")
testLongestPalindromeLength(
  "abcdefghijklmnoppqrstuvwxyz",
  2,
  "Alphabet with one pair",
)
testLongestPalindromeLength("tattarrattat", 12, "Long palindrome")
testLongestPalindromeLength("bananas", 5, "Bananas contains anana")
testLongestPalindromeLength("abacabad", 7, "Multiple overlapping palindromes")
testLongestPalindromeLength("abababa", 7, "Alternating pattern")
testLongestPalindromeLength("aaaaaa", 6, "All same characters")
testLongestPalindromeLength("abcddcba", 8, "Symmetric with center")
testLongestPalindromeLength("12321abcba", 5, "Multiple palindromes")
testLongestPalindromeLength("raceacar", 3, "Overlapping palindromes")
testLongestPalindromeLength("abcabcabcabc", 1, "Repeating pattern")
testLongestPalindromeLength(
  "xyzabcddcbaqwerty",
  8,
  "Palindrome in middle of string",
)
testLongestPalindromeLength("programming", 2, "Word with double letters")
testLongestPalindromeLength("abcdefedcba", 11, "Almost entire string")
testLongestPalindromeLength("aab", 2, "Simple case with pair")
testLongestPalindromeLength("aaab", 3, "Three consecutive same")
testLongestPalindromeLength("baaab", 5, "Surrounded by same")
testLongestPalindromeLength("cbaabc", 6, "Two pairs separated")
testLongestPalindromeLength("abacdc", 3, "Multiple 3-length palindromes")
testLongestPalindromeLength("abcdcba", 7, "Perfect symmetry")
testLongestPalindromeLength("abcddcbaefgfge", 8, "Multiple long palindromes")

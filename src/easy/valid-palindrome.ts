import assertTest from "../assert-test"

/**
 * Valid Palindrome (#125)
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function isAlphaNumeric(char: string): boolean {
  return /^[A-Za-z0-9]$/.test(char)
}
function isPalindrome(s: string): boolean {
  let start = 0
  let end = s.length - 1

  while (start < end) {
    while (start < end && !isAlphaNumeric(s[start])) {
      start++
    }
    while (start < end && !isAlphaNumeric(s[end])) {
      end--
    }

    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false

    start++
    end--
  }

  return true
}

// Test cases
assertTest(
  isPalindrome("A man, a plan, a canal: Panama"),
  true,
  "Classic palindrome",
)
assertTest(isPalindrome("race a car"), false, "Not a palindrome")
assertTest(isPalindrome(""), true, "Empty string")
assertTest(isPalindrome(" "), true, "Single space")
assertTest(isPalindrome("a"), true, "Single character")
assertTest(isPalindrome("Aa"), true, "Case insensitive")
assertTest(isPalindrome("ab"), false, "Two different characters")
assertTest(isPalindrome("aba"), true, "Simple palindrome")
assertTest(isPalindrome("abba"), true, "Even length palindrome")
assertTest(isPalindrome("abc"), false, "Not palindrome")
assertTest(isPalindrome("12321"), true, "Numeric palindrome")
assertTest(isPalindrome("12345"), false, "Not numeric palindrome")
assertTest(
  isPalindrome("Was it a car or a cat I saw?"),
  true,
  "With punctuation",
)
assertTest(isPalindrome("Madam"), true, "Case mixed")
assertTest(isPalindrome("No 'x' in Nixon"), true, "With apostrophe")
assertTest(isPalindrome("Mr. Owl ate my metal worm"), true, "Complex sentence")
assertTest(isPalindrome("Never odd or even"), true, "Multiple words")
assertTest(isPalindrome("Do geese see God?"), true, "With question mark")
assertTest(isPalindrome("A Santa at NASA"), true, "With spaces")
assertTest(isPalindrome("Was it a cat I saw?"), true, "Classic cat")
assertTest(isPalindrome("Palindrome"), false, "Word that's not palindrome")
assertTest(isPalindrome("racecar"), true, "Simple word palindrome")
assertTest(isPalindrome("A Toyota's a Toyota"), true, "Brand name")
assertTest(isPalindrome("Taco cat"), true, "Taco cat")
assertTest(isPalindrome(""), true, "Empty again")
assertTest(isPalindrome(".,"), true, "Only punctuation")
assertTest(isPalindrome("a."), true, "Letter with punctuation")
assertTest(isPalindrome(".a"), true, "Punctuation with letter")
assertTest(isPalindrome("0P"), false, "Number and letter")
assertTest(isPalindrome("Aa0"), false, "Mixed not palindrome")
assertTest(isPalindrome("1a2"), false, "Number letter number")
assertTest(isPalindrome("121"), true, "Simple number palindrome")
assertTest(isPalindrome("12a21"), true, "Number letter palindrome")

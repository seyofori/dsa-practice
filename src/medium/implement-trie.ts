import assertTest from "../assert-test"

/**
 * Implement Trie (Prefix Tree) (#208)
 *
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently
 * store and retrieve keys in a dataset of strings. There are various applications of this
 * data structure, such as autocomplete and spellchecker.
 *
 * Implement the Trie class:
 * - Trie() Initializes the trie object.
 * - void insert(word) Inserts the string word into the trie.
 * - boolean search(word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
 * - boolean startsWith(prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 */

class TrieNode {
  children: Map<string, TrieNode>
  isEndOfWord: boolean

  constructor() {
    this.children = new Map()
    this.isEndOfWord = false
  }
}

class Trie {
  private root: TrieNode

  constructor() {
    // TODO: Implement the constructor
    this.root = new TrieNode()
  }

  insert(word: string): void {
    // TODO: Implement insert method
  }

  search(word: string): boolean {
    // TODO: Implement search method
    return false
  }

  startsWith(prefix: string): boolean {
    // TODO: Implement startsWith method
    return false
  }
}

// Test cases
function testTrie() {
  const trie = new Trie()

  // Basic functionality
  trie.insert("apple")
  assertTest(trie.search("apple"), true, "Search inserted word")
  assertTest(trie.search("app"), false, "Search prefix only")
  assertTest(trie.startsWith("app"), true, "Check prefix exists")

  trie.insert("app")
  assertTest(trie.search("app"), true, "Search after inserting prefix")

  // More comprehensive tests
  const trie2 = new Trie()

  // Empty trie tests
  assertTest(trie2.search(""), false, "Search empty string in empty trie")
  assertTest(trie2.startsWith(""), true, "Empty prefix should return true")
  assertTest(trie2.search("notfound"), false, "Search in empty trie")

  // Single character words
  trie2.insert("a")
  assertTest(trie2.search("a"), true, "Single character word")
  assertTest(trie2.startsWith("a"), true, "Single character prefix")
  assertTest(trie2.search("ab"), false, "Search longer word with single char")

  // Multiple words
  trie2.insert("cat")
  trie2.insert("car")
  trie2.insert("card")
  trie2.insert("care")
  trie2.insert("careful")

  assertTest(trie2.search("cat"), true, "Search cat")
  assertTest(trie2.search("car"), true, "Search car")
  assertTest(trie2.search("card"), true, "Search card")
  assertTest(trie2.search("care"), true, "Search care")
  assertTest(trie2.search("careful"), true, "Search careful")

  assertTest(trie2.startsWith("ca"), true, "Prefix ca")
  assertTest(trie2.startsWith("car"), true, "Prefix car")
  assertTest(trie2.startsWith("care"), true, "Prefix care")
  assertTest(trie2.startsWith("careful"), true, "Prefix careful")
  assertTest(trie2.startsWith("carefulx"), false, "Non-existent prefix")

  assertTest(trie2.search("c"), false, "Search partial word c")
  assertTest(trie2.search("ca"), false, "Search partial word ca")
  assertTest(trie2.search("careless"), false, "Search non-existent extension")

  // Test with numbers and special characters
  const trie3 = new Trie()
  trie3.insert("123")
  trie3.insert("abc")
  trie3.insert("!@#")

  assertTest(trie3.search("123"), true, "Numeric string")
  assertTest(trie3.search("abc"), true, "Alphabetic string")
  assertTest(trie3.search("!@#"), true, "Special characters")
  assertTest(trie3.startsWith("12"), true, "Numeric prefix")
  assertTest(trie3.startsWith("ab"), true, "Alpha prefix")
  assertTest(trie3.startsWith("!@"), true, "Special char prefix")

  // Overlapping prefixes
  const trie4 = new Trie()
  trie4.insert("the")
  trie4.insert("these")
  trie4.insert("they")
  trie4.insert("there")
  trie4.insert("their")

  assertTest(trie4.search("the"), true, "Base word")
  assertTest(trie4.search("these"), true, "Extended word 1")
  assertTest(trie4.search("they"), true, "Extended word 2")
  assertTest(trie4.search("there"), true, "Extended word 3")
  assertTest(trie4.search("their"), true, "Extended word 4")

  assertTest(trie4.startsWith("the"), true, "Common prefix")
  assertTest(trie4.startsWith("thes"), true, "Specific prefix")
  assertTest(trie4.startsWith("ther"), true, "Another specific prefix")
  assertTest(trie4.startsWith("thex"), false, "Non-existent prefix")

  // Case sensitivity
  const trie5 = new Trie()
  trie5.insert("Hello")
  trie5.insert("hello")

  assertTest(trie5.search("Hello"), true, "Capital Hello")
  assertTest(trie5.search("hello"), true, "Lowercase hello")
  assertTest(trie5.search("HELLO"), false, "Uppercase HELLO")
  assertTest(trie5.startsWith("He"), true, "Capital prefix")
  assertTest(trie5.startsWith("he"), true, "Lowercase prefix")
  assertTest(trie5.startsWith("HE"), false, "Uppercase prefix")

  // Long words
  const trie6 = new Trie()
  trie6.insert("supercalifragilisticexpialidocious")
  trie6.insert("antidisestablishmentarianism")

  assertTest(
    trie6.search("supercalifragilisticexpialidocious"),
    true,
    "Very long word 1",
  )
  assertTest(
    trie6.search("antidisestablishmentarianism"),
    true,
    "Very long word 2",
  )
  assertTest(trie6.startsWith("supercali"), true, "Long word prefix")
  assertTest(trie6.startsWith("antidis"), true, "Another long word prefix")

  // Duplicate insertions
  const trie7 = new Trie()
  trie7.insert("duplicate")
  trie7.insert("duplicate")
  trie7.insert("duplicate")

  assertTest(
    trie7.search("duplicate"),
    true,
    "Search after multiple insertions",
  )
  assertTest(
    trie7.startsWith("dupli"),
    true,
    "Prefix after multiple insertions",
  )
}

testTrie()


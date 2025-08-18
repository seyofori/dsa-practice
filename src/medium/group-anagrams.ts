import assertTest from "../assert-test"

/**
 * Group Anagrams (#49)
 *
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Time Complexity: O(n * m log m) where n is number of strings and m is max length
 * Space Complexity: O(n * m)
 */
function groupAnagrams(strs: string[]): string[][] {
  // TODO: Implement the solution
  return []
}

// Helper function to sort each group for consistent testing
function sortGroups(groups: string[][]): string[][] {
  return groups
    .map((group) => group.sort())
    .sort((a, b) => a[0].localeCompare(b[0]))
}

// Test cases
assertTest(
  sortGroups(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])),
  [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]],
  "Classic example",
)
assertTest(sortGroups(groupAnagrams([""])), [[""]], "Empty string")
assertTest(sortGroups(groupAnagrams(["a"])), [["a"]], "Single character")
assertTest(
  sortGroups(groupAnagrams(["abc", "bca", "cab"])),
  [["abc", "bca", "cab"]],
  "All anagrams",
)
assertTest(
  sortGroups(groupAnagrams(["abc", "def", "ghi"])),
  [["abc"], ["def"], ["ghi"]],
  "No anagrams",
)
assertTest(
  sortGroups(groupAnagrams(["a", "aa", "aaa"])),
  [["a"], ["aa"], ["aaa"]],
  "Different lengths",
)
assertTest(
  sortGroups(groupAnagrams(["ab", "ba", "cd", "dc"])),
  [
    ["ab", "ba"],
    ["cd", "dc"],
  ],
  "Two anagram pairs",
)
assertTest(
  sortGroups(groupAnagrams(["listen", "silent", "hello", "world"])),
  [["hello"], ["listen", "silent"], ["world"]],
  "Words with anagram pair",
)
assertTest(
  sortGroups(groupAnagrams(["race", "care", "acre", "fair", "fire"])),
  [["acre", "care", "race"], ["fair"], ["fire"]],
  "Mixed groups",
)
assertTest(
  sortGroups(groupAnagrams(["abc", "def", "abc"])),
  [["abc", "abc"], ["def"]],
  "Duplicate strings",
)
assertTest(
  sortGroups(groupAnagrams(["", "", "a"])),
  [["", ""], ["a"]],
  "Multiple empty strings",
)
assertTest(
  sortGroups(groupAnagrams(["aab", "aba", "baa", "bbb"])),
  [["aab", "aba", "baa"], ["bbb"]],
  "Repeated characters",
)
assertTest(
  sortGroups(groupAnagrams(["cat", "tac", "act", "dog", "god", "odg"])),
  [
    ["act", "cat", "tac"],
    ["dog", "god", "odg"],
  ],
  "Two complete groups",
)
assertTest(
  sortGroups(groupAnagrams(["abcd", "dcba", "lkmn", "klmn"])),
  [
    ["abcd", "dcba"],
    ["klmn", "lkmn"],
  ],
  "Four letter anagrams",
)
assertTest(
  sortGroups(groupAnagrams(["a", "b", "c", "a", "b", "c"])),
  [
    ["a", "a"],
    ["b", "b"],
    ["c", "c"],
  ],
  "Repeated single chars",
)
assertTest(
  sortGroups(groupAnagrams(["spot", "tops", "pots", "stop"])),
  [["pots", "spot", "stop", "tops"]],
  "Four anagrams",
)
assertTest(
  sortGroups(groupAnagrams(["mary", "army", "ram", "arm"])),
  [
    ["arm", "ram"],
    ["army", "mary"],
  ],
  "Different length anagrams",
)
assertTest(
  sortGroups(groupAnagrams(["evil", "vile", "live", "veil"])),
  [["evil", "live", "veil", "vile"]],
  "Four letter group",
)
assertTest(
  sortGroups(groupAnagrams(["ice", "eci", "cie", "hot", "toh", "hto"])),
  [
    ["cie", "eci", "ice"],
    ["hot", "hto", "toh"],
  ],
  "Two three-letter groups",
)
assertTest(
  sortGroups(groupAnagrams(["stressed", "desserts"])),
  [["desserts", "stressed"]],
  "Eight letter anagrams",
)
assertTest(
  sortGroups(groupAnagrams(["heart", "earth", "hater", "thread"])),
  [["earth", "hater", "heart"], ["thread"]],
  "Mixed five and six letters",
)
assertTest(
  sortGroups(groupAnagrams(["elbow", "below", "bowl", "flow"])),
  [["below", "elbow"], ["bowl"], ["flow"]],
  "Partial anagrams",
)
assertTest(
  sortGroups(groupAnagrams(["study", "dusty", "night", "thing"])),
  [
    ["dusty", "study"],
    ["night", "thing"],
  ],
  "Two pairs",
)
assertTest(
  sortGroups(groupAnagrams(["silent", "listen", "enlist"])),
  [["enlist", "listen", "silent"]],
  "Six letter triple",
)
assertTest(
  sortGroups(groupAnagrams(["abc", "bac", "cab", "xyz", "zyx", "yxz"])),
  [
    ["abc", "bac", "cab"],
    ["xyz", "yxz", "zyx"],
  ],
  "Two complete triplets",
)
assertTest(
  sortGroups(groupAnagrams(["test", "sett", "ttes"])),
  [["sett", "test", "ttes"]],
  "Four letter group",
)
assertTest(
  sortGroups(groupAnagrams(["abcdef", "fabcde", "defabc", "cdefab"])),
  [["abcdef", "cdefab", "defabc", "fabcde"]],
  "Six letter rotations",
)
assertTest(
  sortGroups(groupAnagrams(["triangle", "integral", "alerting"])),
  [["alerting", "integral", "triangle"]],
  "Eight letter anagrams",
)
assertTest(
  sortGroups(groupAnagrams(["one", "eon", "neo", "two", "owt", "wot"])),
  [
    ["eon", "neo", "one"],
    ["owt", "two", "wot"],
  ],
  "Two three-letter groups",
)
assertTest(
  sortGroups(groupAnagrams(["anagram", "nagaram", "anagarm"])),
  [["anagarm", "anagram", "nagaram"]],
  "Anagram variations",
)


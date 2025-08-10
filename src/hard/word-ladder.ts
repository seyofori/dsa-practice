import assertTest from "../assert-test"

/**
 * Word Ladder
 *
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words
 * beginWord -> s1 -> s2 -> ... -> sk such that:
 * - Every adjacent pair of words differs by exactly one letter.
 * - Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
 * - sk == endWord
 *
 * Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest
 * transformation sequence from beginWord to endWord, or 0 if no such sequence exists.
 *
 * Example:
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
 * Output: 5
 * Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which is 5 words long.
 *
 * Time Complexity: O(M^2 * N) where M is length of each word and N is total number of words
 * Space Complexity: O(M^2 * N) for the adjacency list and visited set
 */

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  // TODO: Implement the solution
  // Use BFS to find shortest path

  const wordSet = new Set(wordList)
  if (!wordSet.has(endWord)) return 0

  const queue: [string, number][] = [[beginWord, 1]]
  const visited = new Set<string>()
  visited.add(beginWord)

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift()!

    if (currentWord === endWord) {
      return level
    }

    // Try changing each character
    for (let i = 0; i < currentWord.length; i++) {
      for (let c = 97; c <= 122; c++) {
        // 'a' to 'z'
        const char = String.fromCharCode(c)
        if (char === currentWord[i]) continue

        const newWord =
          currentWord.slice(0, i) + char + currentWord.slice(i + 1)

        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord)
          queue.push([newWord, level + 1])
        }
      }
    }
  }

  return 0
}

// Test cases
assertTest(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
  5,
  "Word ladder - example case",
)

assertTest(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]),
  0,
  "Word ladder - no path",
)

assertTest(
  ladderLength("a", "c", ["a", "b", "c"]),
  2,
  "Word ladder - simple case",
)

assertTest(
  ladderLength("hit", "hit", ["hot", "hit"]),
  1,
  "Word ladder - same word",
)

assertTest(
  ladderLength("hot", "dog", ["hot", "dog"]),
  0,
  "Word ladder - no intermediate",
)

assertTest(
  ladderLength("hot", "dog", ["hot", "hog", "dog"]),
  3,
  "Word ladder - direct path",
)

assertTest(ladderLength("abc", "def", []), 0, "Word ladder - empty word list")

assertTest(ladderLength("a", "b", ["b"]), 2, "Word ladder - single step")

assertTest(
  ladderLength("cat", "dog", ["bat", "bag", "dag", "dog"]),
  4,
  "Word ladder - multiple changes",
)

assertTest(
  ladderLength("red", "tax", [
    "ted",
    "tex",
    "red",
    "tax",
    "tad",
    "den",
    "rex",
    "pee",
  ]),
  4,
  "Word ladder - complex path",
)

assertTest(
  ladderLength("cet", "ism", [
    "kid",
    "tag",
    "pup",
    "ail",
    "tun",
    "woo",
    "erg",
    "luz",
    "brr",
    "gay",
    "sip",
    "kay",
    "per",
    "val",
    "mes",
    "ohs",
    "now",
    "boa",
    "cet",
    "pal",
    "bar",
    "die",
    "war",
    "hay",
    "eco",
    "pub",
    "lob",
    "rue",
    "fry",
    "lit",
    "rex",
    "jan",
    "cot",
    "bid",
    "ali",
    "pay",
    "col",
    "gum",
    "ger",
    "row",
    "won",
    "dan",
    "rum",
    "fad",
    "tut",
    "sag",
    "yip",
    "sui",
    "ark",
    "has",
    "zip",
    "fez",
    "own",
    "ump",
    "dis",
    "ads",
    "max",
    "jaw",
    "out",
    "btu",
    "ana",
    "gap",
    "cry",
    "led",
    "abe",
    "box",
    "ore",
    "pig",
    "fie",
    "toy",
    "fat",
    "cal",
    "lie",
    "noh",
    "sew",
    "ono",
    "tam",
    "flu",
    "mgm",
    "ply",
    "awe",
    "pry",
    "tit",
    "tie",
    "yet",
    "too",
    "tax",
    "jim",
    "san",
    "pan",
    "map",
    "ski",
    "ova",
    "wed",
    "non",
    "wac",
    "nut",
    "why",
    "bye",
    "lye",
    "oct",
    "old",
    "fin",
    "feb",
    "chi",
    "sap",
    "owl",
    "log",
    "tod",
    "dot",
    "bow",
    "fob",
    "for",
    "joe",
    "ivy",
    "fan",
    "age",
    "fax",
    "hip",
    "jib",
    "mel",
    "hus",
    "sob",
    "ifs",
    "tab",
    "ara",
    "dab",
    "jag",
    "jar",
    "arm",
    "lot",
    "tom",
    "sax",
    "tex",
    "yum",
    "pei",
    "wen",
    "wry",
    "ire",
    "irk",
    "far",
    "mew",
    "wit",
    "doe",
    "gas",
    "rte",
    "ian",
    "pot",
    "ask",
    "wag",
    "hag",
    "amy",
    "nag",
    "ron",
    "soy",
    "gin",
    "don",
    "tug",
    "fay",
    "vic",
    "boo",
    "nam",
    "ave",
    "buy",
    "sop",
    "but",
    "orb",
    "fen",
    "paw",
    "his",
    "sub",
    "bob",
    "yea",
    "oft",
    "inn",
    "rod",
    "yam",
    "pew",
    "web",
    "hod",
    "hun",
    "gyp",
    "wei",
    "wis",
    "rob",
    "gad",
    "pie",
    "mon",
    "dog",
    "bib",
    "rub",
    "ere",
    "dig",
    "era",
    "cat",
    "fox",
    "bee",
    "mod",
    "day",
    "apr",
    "vie",
    "nev",
    "jam",
    "pam",
    "new",
    "aye",
    "ani",
    "and",
    "ibm",
    "yap",
    "can",
    "lag",
    "eel",
    "ver",
    "dud",
    "yen",
    "hub",
    "fit",
    "met",
    "bed",
    "bud",
    "gab",
    "ben",
    "den",
    "dad",
    "pan",
    "jen",
    "dew",
    "bah",
    "ism",
  ]),
  11,
  "Word ladder - very long word list",
)

assertTest(
  ladderLength("teach", "place", [
    "peale",
    "wilts",
    "place",
    "fetch",
    "purer",
    "pooch",
    "peace",
    "poach",
    "berra",
    "teach",
    "rheum",
    "peach",
  ]),
  4,
  "Word ladder - multiple valid paths",
)

assertTest(
  ladderLength("qa", "sq", [
    "si",
    "go",
    "se",
    "cm",
    "so",
    "ph",
    "mt",
    "db",
    "mb",
    "sb",
    "kr",
    "ln",
    "tm",
    "le",
    "av",
    "sm",
    "ar",
    "ci",
    "ca",
    "br",
    "ti",
    "ba",
    "to",
    "ra",
    "fa",
    "yo",
    "ow",
    "sn",
    "ya",
    "cr",
    "po",
    "fe",
    "ho",
    "ma",
    "re",
    "or",
    "rn",
    "au",
    "ur",
    "rh",
    "sr",
    "tc",
    "lt",
    "lo",
    "as",
    "fr",
    "nb",
    "yb",
    "if",
    "pb",
    "ge",
    "th",
    "pm",
    "rb",
    "sh",
    "co",
    "ga",
    "li",
    "ha",
    "hz",
    "no",
    "bi",
    "di",
    "hi",
    "qa",
    "pi",
    "os",
    "uh",
    "wm",
    "an",
    "me",
    "mo",
    "na",
    "la",
    "st",
    "er",
    "sc",
    "ne",
    "mn",
    "mi",
    "am",
    "ex",
    "pt",
    "io",
    "be",
    "fm",
    "ta",
    "tb",
    "ni",
    "mr",
    "pa",
    "he",
    "lr",
    "sq",
    "ye",
  ]),
  5,
  "Word ladder - 2-letter words",
)

assertTest(
  ladderLength("lost", "cost", [
    "most",
    "mist",
    "miss",
    "lost",
    "fist",
    "fish",
  ]),
  0,
  "Word ladder - no connection to end",
)

assertTest(
  ladderLength("game", "thee", [
    "dose",
    "ends",
    "dine",
    "jars",
    "prow",
    "soap",
    "guns",
    "hops",
    "cray",
    "hove",
    "ella",
    "hour",
    "lens",
    "jive",
    "wry",
    "thee",
    "purl",
    "gone",
    "mint",
    "hand",
    "emerge",
  ]),
  0,
  "Word ladder - impossible transformation",
)

assertTest(
  ladderLength("talk", "tail", [
    "talk",
    "tons",
    "fall",
    "tail",
    "gale",
    "hall",
    "negs",
  ]),
  0,
  "Word ladder - no valid intermediate",
)

assertTest(
  ladderLength("ymain", "oecij", [
    "ymann",
    "yycrj",
    "oecij",
    "ymcnj",
    "yzcrj",
    "yycij",
    "xecij",
    "yecij",
    "ymain",
    "yzcnj",
    "ymcnn",
  ]),
  10,
  "Word ladder - 5-letter words",
)

assertTest(
  ladderLength("cold", "warm", [
    "cold",
    "hold",
    "cord",
    "card",
    "ward",
    "warm",
    "tard",
    "shod",
  ]),
  0,
  "Word ladder - missing connection",
)

assertTest(
  ladderLength("kiss", "tusk", [
    "miss",
    "dusk",
    "husk",
    "tusk",
    "diss",
    "disk",
    "musk",
    "dims",
    "kips",
  ]),
  0,
  "Word ladder - circular dependency",
)

assertTest(
  ladderLength("ab", "bc", ["ac", "bc"]),
  3,
  "Word ladder - minimal valid case",
)

assertTest(
  ladderLength("rock", "sick", [
    "rick",
    "sock",
    "rich",
    "sick",
    "rock",
    "dick",
  ]),
  4,
  "Word ladder - multiple one-letter changes",
)

assertTest(
  ladderLength("start", "final", [
    "start",
    "smart",
    "stack",
    "snack",
    "snake",
    "shake",
    "shale",
    "share",
    "shore",
    "shone",
    "phone",
    "phony",
    "peony",
    "penny",
    "penne",
    "dense",
    "tense",
    "sense",
    "fence",
    "hence",
    "hense",
    "hense",
    "final",
  ]),
  0,
  "Word ladder - invalid word list",
)

assertTest(
  ladderLength("spoon", "plate", [
    "spoon",
    "spool",
    "stool",
    "stall",
    "small",
    "shall",
    "shalt",
    "slant",
    "plant",
    "plank",
    "plonk",
    "plink",
    "plink",
    "plate",
  ]),
  0,
  "Word ladder - checking exact path",
)

assertTest(
  ladderLength("magic", "pearl", [
    "flail",
    "haail",
    "upend",
    "pearl",
    "moral",
    "unrig",
    "trail",
    "mural",
    "wheal",
    "malic",
    "natal",
    "metal",
    "pedal",
    "manic",
    "mailc",
    "penal",
    "nails",
    "mails",
    "pales",
    "magia",
    "magic",
    "plaic",
    "males",
    "malec",
    "malic",
    "mawic",
    "magit",
    "magis",
    "magic",
    "majic",
    "magoc",
    "magic",
    "magicv",
  ]),
  0,
  "Word ladder - complex no path",
)

assertTest(
  ladderLength("coder", "haver", [
    "coder",
    "ceder",
    "cever",
    "lever",
    "never",
    "haver",
  ]),
  5,
  "Word ladder - step by step transformation",
)

assertTest(
  ladderLength("teams", "fleet", [
    "teams",
    "terms",
    "germs",
    "genus",
    "venus",
    "fleas",
    "flees",
    "flee",
    "fleet",
  ]),
  0,
  "Word ladder - broken chain",
)

assertTest(
  ladderLength("order", "chaos", [
    "order",
    "other",
    "otter",
    "outer",
    "outes",
    "routes",
    "rouses",
    "houses",
    "horses",
    "choses",
    "chases",
    "chasis",
    "chassis",
    "chasis",
    "chaos",
  ]),
  0,
  "Word ladder - invalid transitions",
)

assertTest(
  ladderLength("boats", "coats", ["coats", "costs", "casts", "boats", "brats"]),
  4,
  "Word ladder - reverse path exists",
)

assertTest(
  ladderLength("computer", "commuter", [
    "computer",
    "computes",
    "commutes",
    "commuter",
  ]),
  0,
  "Word ladder - different lengths",
)

assertTest(
  ladderLength("nurse", "scary", [
    "nurse",
    "purse",
    "curse",
    "care",
    "scare",
    "scary",
    "carse",
  ]),
  0,
  "Word ladder - checking word validity",
)

assertTest(
  ladderLength("earth", "north", [
    "earth",
    "berth",
    "birth",
    "girth",
    "gurth",
    "ninth",
    "north",
  ]),
  0,
  "Word ladder - missing intermediate words",
)


import assertTest from "../assert-test"

/**
 * Word Search (#79)
 *
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells
 * are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 *
 * Example 1:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 *
 * Example 2:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * Output: true
 *
 * Example 3:
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
 * Output: false
 *
 * Time Complexity: O(N × 4^L) where N is number of cells, L is length of word
 * Space Complexity: O(L) for recursion depth
 */
function exist(board: string[][], word: string): boolean {
  // TODO: Implement using DFS backtracking
  // Hint: For each cell, try DFS in 4 directions, mark visited, then unmark
  return false
}

// Test cases
const board1 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
]
assertTest(exist(board1, "ABCCED"), true, "Example 1 - word exists with path")
assertTest(exist(board1, "SEE"), true, "Example 2 - simple word exists")
assertTest(
  exist(board1, "ABCB"),
  false,
  "Example 3 - word requires revisiting cell",
)

// Single cell tests
assertTest(exist([["A"]], "A"), true, "Single cell - word matches")
assertTest(exist([["A"]], "B"), false, "Single cell - word doesn't match")
assertTest(exist([["A"]], "AB"), false, "Single cell - word too long")

// Single row tests
assertTest(
  exist([["A", "B", "C"]], "ABC"),
  true,
  "Single row - sequential word",
)
assertTest(exist([["A", "B", "C"]], "CBA"), true, "Single row - reverse word")
assertTest(exist([["A", "B", "C"]], "AC"), false, "Single row - non-sequential")
assertTest(
  exist([["A", "B", "C"]], "ABCD"),
  false,
  "Single row - word too long",
)

// Single column tests
assertTest(
  exist([["A"], ["B"], ["C"]], "ABC"),
  true,
  "Single column - sequential word",
)
assertTest(
  exist([["A"], ["B"], ["C"]], "CBA"),
  true,
  "Single column - reverse word",
)
assertTest(
  exist([["A"], ["B"], ["C"]], "AC"),
  false,
  "Single column - non-sequential",
)

// 2x2 grid tests
const board2x2 = [
  ["A", "B"],
  ["C", "D"],
]
assertTest(exist(board2x2, "ABDC"), true, "2x2 - clockwise path")
assertTest(exist(board2x2, "ACDB"), true, "2x2 - different path")
assertTest(exist(board2x2, "AB"), true, "2x2 - horizontal path")
assertTest(exist(board2x2, "AC"), true, "2x2 - vertical path")
assertTest(exist(board2x2, "ABCD"), true, "2x2 - L-shaped path")
assertTest(exist(board2x2, "ABA"), false, "2x2 - requires revisiting")

// Duplicate letters
const boardDupes = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "A", "A"],
]
assertTest(exist(boardDupes, "AAA"), true, "All same letters - word exists")
assertTest(exist(boardDupes, "AAAA"), true, "All same letters - longer word")
assertTest(
  exist(boardDupes, "AAAAAAAAA"),
  true,
  "All same letters - full board",
)
assertTest(
  exist(boardDupes, "AAAAAAAAAA"),
  false,
  "All same letters - too long",
)

// No path exists
const boardNoPath = [
  ["A", "B"],
  ["D", "C"],
]
assertTest(exist(boardNoPath, "ABCD"), false, "No valid path for word")
assertTest(exist(boardNoPath, "DCBA"), false, "No valid reverse path")

// Complex grid
const boardComplex = [
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"],
]
assertTest(
  exist(boardComplex, "ABCESEEDASF"),
  true,
  "Complex path through grid",
)
assertTest(exist(boardComplex, "ABCESEEF"), false, "No valid complex path")

// Word longer than board
assertTest(exist([["A", "B"]], "ABCDEFG"), false, "Word longer than possible")

// Zigzag patterns
const boardZig = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
]
assertTest(exist(boardZig, "ABCFI"), true, "Right then down path")
assertTest(exist(boardZig, "ADGHI"), true, "Down then right path")
assertTest(exist(boardZig, "ABEHI"), true, "Diagonal-like path")
assertTest(exist(boardZig, "ABEFIHGD"), false, "Invalid zigzag")

// Backtracking required
const boardBacktrack = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
]
assertTest(exist(boardBacktrack, "ABCFED"), true, "Requires backtracking")
assertTest(
  exist(boardBacktrack, "ABCFEDGH"),
  false,
  "Backtrack but no continuation",
)

// Large letters/numbers
const boardLarge = [
  ["AA", "BB"],
  ["CC", "DD"],
]
assertTest(exist(boardLarge, "AABBDD"), true, "Multi-character cells")
assertTest(exist(boardLarge, "AABBCC"), false, "Multi-character no path")

// Empty word
assertTest(exist([["A"]], ""), true, "Empty word should return true")

// Corners and edges
const boardCorners = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
]
assertTest(exist(boardCorners, "ACIG"), true, "Corner to corner path")
assertTest(exist(boardCorners, "ABCFIHGD"), false, "Around perimeter invalid")

// Same start and end letter
const boardSame = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["A", "H", "I"],
]
assertTest(exist(boardSame, "ABA"), false, "Cannot revisit first cell")
assertTest(exist(boardSame, "ABCFIHEA"), false, "Cannot revisit any cell")

// Multiple possible paths
const boardMulti = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "A", "A"],
]
assertTest(exist(boardMulti, "AAA"), true, "Multiple valid paths exist")

// Real words
const boardWords = [
  ["C", "A", "T"],
  ["A", "R", "S"],
  ["T", "S", "E"],
]
assertTest(exist(boardWords, "CAR"), false, "Word CAR - no valid path")
assertTest(exist(boardWords, "CAT"), true, "Word CAT - valid path")
assertTest(exist(boardWords, "CARS"), true, "Word CARS - valid path")

// Long word test
const boardLong = [
  ["A", "B", "C", "D"],
  ["E", "F", "G", "H"],
  ["I", "J", "K", "L"],
  ["M", "N", "O", "P"],
]
assertTest(exist(boardLong, "ABCDHLKJIFEM"), true, "Long winding path")
assertTest(exist(boardLong, "ABCDHGFEIJKLM"), false, "Invalid long path")

// Spiral pattern
assertTest(
  exist(boardLong, "ABCDHLPONMIJKGFE"),
  false,
  "Spiral pattern invalid",
)
assertTest(exist(boardLong, "AFGJONIE"), true, "Valid complex path")

// Performance test setup (large grid)
const bigBoard = Array(5)
  .fill(null)
  .map((_, i) =>
    Array(5)
      .fill(null)
      .map((_, j) => String.fromCharCode(65 + i * 5 + j)),
  )
assertTest(exist(bigBoard, "ABCDEFGHIJ"), true, "Large board - valid path")
assertTest(exist(bigBoard, "ZYXWVU"), false, "Large board - invalid word")


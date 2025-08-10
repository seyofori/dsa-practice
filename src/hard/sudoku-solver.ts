import assertTest from "../assert-test"

/**
 * Sudoku Solver
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * A sudoku solution must satisfy all of the following rules:
 * 1. Each of the digits 1-9 must occur exactly once in each row.
 * 2. Each of the digits 1-9 must occur exactly once in each column.
 * 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 *
 * The '.' character indicates empty cells.
 *
 * Time Complexity: O(9^(n*n)) where n is the size of the board (9 for standard Sudoku)
 * Space Complexity: O(n*n) for the recursion stack
 */

function solveSudoku(board: string[][]): void {
  // TODO: Implement the solution
  // Use backtracking to try each number 1-9 in empty cells

  function isValid(
    board: string[][],
    row: number,
    col: number,
    num: string,
  ): boolean {
    // Check row
    for (let j = 0; j < 9; j++) {
      if (board[row][j] === num) return false
    }

    // Check column
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) return false
    }

    // Check 3x3 box
    const boxRow = Math.floor(row / 3) * 3
    const boxCol = Math.floor(col / 3) * 3
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num) return false
      }
    }

    return true
  }

  function solve(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === ".") {
          for (let num = 1; num <= 9; num++) {
            const numStr = num.toString()
            if (isValid(board, i, j, numStr)) {
              board[i][j] = numStr

              if (solve(board)) {
                return true
              }

              board[i][j] = "." // backtrack
            }
          }
          return false
        }
      }
    }
    return true
  }

  solve(board)
}

// Helper function to deep clone board for testing
function cloneBoard(board: string[][]): string[][] {
  return board.map((row) => [...row])
}

// Helper function to check if board is valid (used for testing)
function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>()

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j]
      if (value !== ".") {
        const rowKey = `row${i}-${value}`
        const colKey = `col${j}-${value}`
        const boxKey = `box${Math.floor(i / 3)}-${Math.floor(j / 3)}-${value}`

        if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
          return false
        }

        seen.add(rowKey)
        seen.add(colKey)
        seen.add(boxKey)
      }
    }
  }

  return true
}

// Helper function to check if board is completely filled
function isComplete(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") return false
    }
  }
  return true
}

// Test cases
const test1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]
const test1Clone = cloneBoard(test1)
solveSudoku(test1Clone)
assertTest(
  isValidSudoku(test1Clone) && isComplete(test1Clone),
  true,
  "Sudoku solver - classic puzzle",
)

const test2 = [
  [".", ".", "9", "7", "4", "8", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", ".", ".", ".", "2", "4", "."],
  [".", "6", "4", ".", "1", ".", "5", "9", "."],
  [".", "9", "8", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "8", ".", "3", ".", "2", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."],
]
const test2Clone = cloneBoard(test2)
solveSudoku(test2Clone)
assertTest(
  isValidSudoku(test2Clone) && isComplete(test2Clone),
  true,
  "Sudoku solver - medium difficulty",
)

const test3 = [
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
]
const test3Clone = cloneBoard(test3)
solveSudoku(test3Clone)
assertTest(
  isValidSudoku(test3Clone) && isComplete(test3Clone),
  true,
  "Sudoku solver - empty board",
)

const test4 = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["4", "5", "6", "7", "8", "9", "1", "2", "3"],
  ["7", "8", "9", "1", "2", "3", "4", "5", "6"],
  ["2", "3", "4", "5", "6", "7", "8", "9", "1"],
  ["5", "6", "7", "8", "9", "1", "2", "3", "4"],
  ["8", "9", "1", "2", "3", "4", "5", "6", "7"],
  ["3", "4", "5", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "8", "9", "1", "2", "3", "4", "5"],
  ["9", "1", "2", "3", "4", "5", "6", "7", "."],
]
const test4Clone = cloneBoard(test4)
solveSudoku(test4Clone)
assertTest(
  isValidSudoku(test4Clone) && isComplete(test4Clone),
  true,
  "Sudoku solver - one missing cell",
)

const test5 = [
  [".", ".", ".", ".", ".", ".", ".", "1", "."],
  ["4", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
]
const test5Clone = cloneBoard(test5)
solveSudoku(test5Clone)
assertTest(
  isValidSudoku(test5Clone) && isComplete(test5Clone),
  true,
  "Sudoku solver - minimal clues",
)

// Test with various difficulty levels
const test6 = [
  ["8", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "3", "6", ".", ".", ".", ".", "."],
  [".", "7", ".", ".", "9", ".", "2", ".", "."],
  [".", "5", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", ".", "4", "5", "7", ".", "."],
  [".", ".", ".", "1", ".", ".", ".", "3", "."],
  [".", ".", "1", ".", ".", ".", ".", "6", "8"],
  [".", ".", "8", "5", ".", ".", ".", ".", "1"],
  [".", "9", ".", ".", ".", ".", "4", ".", "."],
]
const test6Clone = cloneBoard(test6)
solveSudoku(test6Clone)
assertTest(
  isValidSudoku(test6Clone) && isComplete(test6Clone),
  true,
  "Sudoku solver - hard puzzle",
)

// Additional test cases with different patterns
const test7 = [
  ["1", ".", ".", ".", ".", "7", ".", "9", "."],
  [".", "3", ".", ".", "2", ".", ".", ".", "8"],
  [".", ".", "9", "6", ".", ".", ".", ".", "."],
  [".", ".", "5", "3", ".", ".", ".", ".", "."],
  [".", "1", ".", ".", ".", ".", ".", ".", "."],
  ["6", ".", ".", ".", ".", "4", ".", ".", "."],
  ["3", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "4", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", ".", ".", ".", ".", "."],
]
const test7Clone = cloneBoard(test7)
solveSudoku(test7Clone)
assertTest(
  isValidSudoku(test7Clone) && isComplete(test7Clone),
  true,
  "Sudoku solver - sparse puzzle",
)

const test8 = [
  [".", ".", ".", ".", ".", ".", "5", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
]
const test8Clone = cloneBoard(test8)
solveSudoku(test8Clone)
assertTest(
  isValidSudoku(test8Clone) && isComplete(test8Clone),
  true,
  "Sudoku solver - single clue",
)

// Test with specific constraint patterns
const test9 = [
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "3", ".", ".", ".", ".", "1"],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
]
const test9Clone = cloneBoard(test9)
solveSudoku(test9Clone)
assertTest(
  isValidSudoku(test9Clone) && isComplete(test9Clone),
  true,
  "Sudoku solver - corner constraints",
)

const test10 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]
const test10Clone = cloneBoard(test10)
solveSudoku(test10Clone)
assertTest(
  isValidSudoku(test10Clone) && isComplete(test10Clone),
  true,
  "Sudoku solver - standard example duplicate",
)

// More challenging puzzles
for (let i = 11; i <= 30; i++) {
  const testBoard = [
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ]

  // Add some random valid constraints to make it solvable
  if (i % 3 === 0) testBoard[0][0] = "1"
  if (i % 3 === 1) testBoard[1][1] = "2"
  if (i % 3 === 2) testBoard[2][2] = "3"

  const testClone = cloneBoard(testBoard)
  solveSudoku(testClone)
  assertTest(
    isValidSudoku(testClone) && isComplete(testClone),
    true,
    `Sudoku solver - generated test ${i}`,
  )
}


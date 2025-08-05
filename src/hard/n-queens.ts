import assertTest from "../assert-test"

/**
 * N-Queens (#51)
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * You may return the answer in any order.
 *
 * Each solution contains a distinct board configuration of the n-queens' placement,
 * where 'Q' and '.' indicate a queen and an empty space, respectively.
 *
 * Example 1:
 * Input: n = 4
 * Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 *
 * Example 2:
 * Input: n = 1
 * Output: [["Q"]]
 *
 * Time Complexity: O(N!)
 * Space Complexity: O(N²) for board representation
 */
function solveNQueens(n: number): string[][] {
  // TODO: Implement using backtracking
  // Hint: For each row, try placing queen in each column
  // Check if placement is safe (no conflicts with previous queens)
  return []
}

// Helper function to test solutions
function testNQueens(
  n: number,
  expectedCount: number,
  description: string,
): void {
  const solutions = solveNQueens(n)
  assertTest(
    solutions.length,
    expectedCount,
    `${description} - correct number of solutions`,
  )

  // Verify each solution is valid
  solutions.forEach((solution, index) => {
    // Check board size
    assertTest(
      solution.length,
      n,
      `${description} - solution ${index} has correct height`,
    )
    solution.forEach((row, rowIndex) => {
      assertTest(
        row.length,
        n,
        `${description} - solution ${index} row ${rowIndex} has correct width`,
      )
    })

    // Count queens
    const queenCount = solution.reduce(
      (count, row) => count + (row.match(/Q/g) || []).length,
      0,
    )
    assertTest(
      queenCount,
      n,
      `${description} - solution ${index} has exactly ${n} queens`,
    )

    // Check no conflicts
    const isValid = isValidSolution(solution)
    assertTest(
      isValid,
      true,
      `${description} - solution ${index} is valid (no conflicts)`,
    )
  })
}

function isValidSolution(board: string[]): boolean {
  const n = board.length
  const queens: [number, number][] = []

  // Find all queen positions
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "Q") {
        queens.push([i, j])
      }
    }
  }

  // Check all pairs of queens for conflicts
  for (let i = 0; i < queens.length; i++) {
    for (let j = i + 1; j < queens.length; j++) {
      const [r1, c1] = queens[i]
      const [r2, c2] = queens[j]

      // Same row or column
      if (r1 === r2 || c1 === c2) return false

      // Same diagonal
      if (Math.abs(r1 - r2) === Math.abs(c1 - c2)) return false
    }
  }

  return true
}

// Test cases
testNQueens(1, 1, "n=1 - trivial case")
testNQueens(2, 0, "n=2 - no solution exists")
testNQueens(3, 0, "n=3 - no solution exists")
testNQueens(4, 2, "n=4 - two solutions")
testNQueens(5, 10, "n=5 - ten solutions")
testNQueens(6, 4, "n=6 - four solutions")
testNQueens(7, 40, "n=7 - forty solutions")
testNQueens(8, 92, "n=8 - classic 8-queens with 92 solutions")

// Test specific solutions for small n
const solutions1 = solveNQueens(1)
assertTest(solutions1[0][0], "Q", "n=1 solution is just Q")

const solutions4 = solveNQueens(4)
// Both solutions should be present (in any order)
const solution1 = [".Q..", "...Q", "Q...", "..Q."]
const solution2 = ["..Q.", "Q...", "...Q", ".Q.."]

const hasSolution1 = solutions4.some(
  (sol) => JSON.stringify(sol) === JSON.stringify(solution1),
)
const hasSolution2 = solutions4.some(
  (sol) => JSON.stringify(sol) === JSON.stringify(solution2),
)
assertTest(hasSolution1, true, "n=4 contains first expected solution")
assertTest(hasSolution2, true, "n=4 contains second expected solution")

// Test properties of solutions
function testSolutionProperties(n: number, description: string): void {
  const solutions = solveNQueens(n)

  if (solutions.length > 0) {
    solutions.forEach((solution, index) => {
      // Each row should have exactly one queen
      solution.forEach((row, rowIndex) => {
        const queensInRow = (row.match(/Q/g) || []).length
        assertTest(
          queensInRow,
          1,
          `${description} - solution ${index} row ${rowIndex} has one queen`,
        )
      })

      // Each column should have exactly one queen
      for (let col = 0; col < n; col++) {
        let queensInCol = 0
        for (let row = 0; row < n; row++) {
          if (solution[row][col] === "Q") queensInCol++
        }
        assertTest(
          queensInCol,
          1,
          `${description} - solution ${index} column ${col} has one queen`,
        )
      }
    })
  }
}

testSolutionProperties(4, "n=4 properties")
testSolutionProperties(5, "n=5 properties")
testSolutionProperties(6, "n=6 properties")

// Test edge cases
testNQueens(0, 1, "n=0 - empty board (one empty solution)")

// Test uniqueness of solutions
function testUniqueness(n: number, description: string): void {
  const solutions = solveNQueens(n)
  const uniqueSolutions = new Set(solutions.map((sol) => JSON.stringify(sol)))
  assertTest(
    uniqueSolutions.size,
    solutions.length,
    `${description} - all solutions are unique`,
  )
}

testUniqueness(4, "n=4 uniqueness")
testUniqueness(5, "n=5 uniqueness")
testUniqueness(6, "n=6 uniqueness")

// Test format consistency
function testFormat(n: number, description: string): void {
  const solutions = solveNQueens(n)

  if (solutions.length > 0) {
    solutions.forEach((solution, solutionIndex) => {
      solution.forEach((row, rowIndex) => {
        // Check that each position is either 'Q' or '.'
        for (let col = 0; col < row.length; col++) {
          const char = row[col]
          const isValid = char === "Q" || char === "."
          assertTest(
            isValid,
            true,
            `${description} - solution ${solutionIndex} row ${rowIndex} col ${col} is valid character`,
          )
        }
      })
    })
  }
}

testFormat(4, "n=4 format")
testFormat(5, "n=5 format")

// Test mathematical properties
// The number of solutions for n-queens follows a known sequence
const knownCounts: { [key: number]: number } = {
  0: 1,
  1: 1,
  2: 0,
  3: 0,
  4: 2,
  5: 10,
  6: 4,
  7: 40,
  8: 92,
  9: 352,
  10: 724,
}

Object.entries(knownCounts).forEach(([n, count]) => {
  if (parseInt(n) <= 8) {
    // Only test up to 8 for performance
    testNQueens(parseInt(n), count, `n=${n} known count verification`)
  }
})

// Test that solutions are properly formatted strings
function testStringFormat(n: number, description: string): void {
  const solutions = solveNQueens(n)

  solutions.forEach((solution, index) => {
    solution.forEach((row, rowIndex) => {
      assertTest(
        typeof row,
        "string",
        `${description} - solution ${index} row ${rowIndex} is string`,
      )
    })
  })
}

testStringFormat(4, "n=4 string format")
testStringFormat(5, "n=5 string format")

// Performance consideration test (just verify it completes)
const solutions9 = solveNQueens(9)
assertTest(solutions9.length, 352, "n=9 completes with correct count")

// Test specific board patterns for n=4
const solutions4Again = solveNQueens(4)
if (solutions4Again.length >= 2) {
  const firstSolution = solutions4Again[0]
  const secondSolution = solutions4Again[1]

  // Verify they are different
  const areDifferent =
    JSON.stringify(firstSolution) !== JSON.stringify(secondSolution)
  assertTest(areDifferent, true, "n=4 two solutions are different")
}


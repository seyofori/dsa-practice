import assertTest from "../assert-test"

/**
 * Game of Life (#289)
 *
 * According to Wikipedia's article: "The Game of Life, also known simply as Life,
 * is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
 *
 * The board is made up of an m x n grid of cells, where each cell has an initial state:
 * live (represented by a 1) or dead (represented by a 0). Each cell interacts with its
 * eight neighbors (horizontal, vertical, diagonal) using the following four rules:
 *
 * 1. Any live cell with fewer than two live neighbors dies (under-population).
 * 2. Any live cell with two or three live neighbors lives on to the next generation.
 * 3. Any live cell with more than three live neighbors dies (over-population).
 * 4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction).
 *
 * The next state is created by applying the above rules simultaneously to every cell
 * in the current state, where births and deaths occur simultaneously.
 *
 * Example 1:
 * Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
 * Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
 *
 * Example 2:
 * Input: board = [[1,1],[1,0]]
 * Output: [[1,1],[1,1]]
 *
 * Time Complexity: O(m × n)
 * Space Complexity: O(1) if done in-place with state encoding
 */
function gameOfLife(board: number[][]): void {
  // TODO: Implement Game of Life rules
  // Hint: Count live neighbors for each cell, apply rules simultaneously
  // For in-place solution: use state encoding (e.g., 2 = dead->live, 3 = live->dead)
}

// Helper function to test Game of Life
function testGameOfLife(
  input: number[][],
  expected: number[][],
  description: string,
): void {
  const testBoard = input.map((row) => [...row]) // Deep copy for testing
  gameOfLife(testBoard)
  assertTest(JSON.stringify(testBoard), JSON.stringify(expected), description)
}

// Test cases
testGameOfLife(
  [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ],
  "Example 1 - classic pattern",
)

testGameOfLife(
  [
    [1, 1],
    [1, 0],
  ],
  [
    [1, 1],
    [1, 1],
  ],
  "Example 2 - 2x2 pattern",
)

// Edge cases
testGameOfLife([[0]], [[0]], "Single dead cell")
testGameOfLife([[1]], [[0]], "Single live cell dies")

testGameOfLife(
  [
    [0, 0],
    [0, 0],
  ],
  [
    [0, 0],
    [0, 0],
  ],
  "2x2 all dead",
)
testGameOfLife(
  [
    [1, 1],
    [1, 1],
  ],
  [
    [1, 1],
    [1, 1],
  ],
  "2x2 all live - stable",
)

// Under-population tests (rule 1)
testGameOfLife(
  [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  "Isolated cell dies (under-population)",
)

testGameOfLife(
  [
    [1, 1, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  "Two adjacent cells die (under-population)",
)

// Survival tests (rule 2)
testGameOfLife(
  [
    [1, 1, 0],
    [1, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ],
  "Cell with 2 neighbors survives",
)

testGameOfLife(
  [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ],
  "Cells with 3 neighbors survive",
)

// Over-population tests (rule 3)
testGameOfLife(
  [
    [1, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 1],
    [1, 0, 0],
    [0, 0, 0],
  ],
  "Center cell dies from over-population",
)

testGameOfLife(
  [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ],
  "Center cells die from over-population",
)

// Reproduction tests (rule 4)
testGameOfLife(
  [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  "Dead cell with 3 neighbors becomes alive",
)

testGameOfLife(
  [
    [0, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  "Center dead cell reproduces",
)

// Classic patterns
// Blinker (oscillator)
testGameOfLife(
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  "Blinker oscillator - horizontal to vertical",
)

testGameOfLife(
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  "Blinker oscillator - vertical to horizontal",
)

// Block (still life)
testGameOfLife(
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  "Block still life remains stable",
)

// Beehive (still life)
testGameOfLife(
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  "Beehive still life remains stable",
)

// Toad (oscillator)
testGameOfLife(
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  "Toad oscillator period 2 - phase 1",
)

// Edge effects
testGameOfLife(
  [
    [1, 1],
    [1, 1],
  ],
  [
    [1, 1],
    [1, 1],
  ],
  "Edge case - 2x2 stable block",
)

testGameOfLife([[1, 0, 1]], [[0, 0, 0]], "Single row - all cells die")

testGameOfLife(
  [[1], [0], [1]],
  [[0], [0], [0]],
  "Single column - all cells die",
)

// Empty board
testGameOfLife(
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  "Empty board stays empty",
)

// Mixed patterns
testGameOfLife(
  [
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 0, 1, 0],
  ],
  [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ],
  "Complex mixed pattern",
)

// Glider pattern (moves)
testGameOfLife(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ],
  "Glider pattern - one step",
)

// Larger patterns
testGameOfLife(
  [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  "Two separate blocks remain stable",
)

// Test specific neighbor counting
testGameOfLife(
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ],
  "Center cell with 8 neighbors (max over-population)",
)

// Diagonal neighbors
testGameOfLife(
  [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ],
  [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  "Diagonal neighbors create center cell",
)

// Stress test with larger board
testGameOfLife(
  [
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  "Glider in larger board",
)

// Symmetrical patterns
testGameOfLife(
  [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  "Cross pattern dies completely",
)

testGameOfLife(
  [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ],
  [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ],
  "X pattern becomes cross",
)

// Corner effects
testGameOfLife(
  [
    [1, 1, 0],
    [1, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ],
  "Corner cluster becomes block",
)

// Multiple cycles test
function testMultipleCycles(): void {
  // Test blinker through two cycles
  let board = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ]
  const original = board.map((row) => [...row])

  // First generation
  gameOfLife(board)
  const gen1 = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ]
  assertTest(
    JSON.stringify(board),
    JSON.stringify(gen1),
    "Blinker cycle - generation 1",
  )

  // Second generation (back to original)
  gameOfLife(board)
  assertTest(
    JSON.stringify(board),
    JSON.stringify(original),
    "Blinker cycle - generation 2 (back to original)",
  )
}

testMultipleCycles()


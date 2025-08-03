import assertTest from "../assert-test"

/**
 * Number of Islands (#200)
 *
 * Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water),
 * return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally
 * or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n) for the recursion stack in worst case
 */
function numIslands(grid: string[][]): number {
  // TODO: Implement the solution
  return 0
}

// Test cases
assertTest(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
  1,
  "Classic example - one island",
)

assertTest(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
  3,
  "Classic example - three islands",
)

assertTest(numIslands([]), 0, "Empty grid")
assertTest(numIslands([[]]), 0, "Empty row")
assertTest(numIslands([["0"]]), 0, "Single water cell")
assertTest(numIslands([["1"]]), 1, "Single land cell")
assertTest(
  numIslands([
    ["0", "0"],
    ["0", "0"],
  ]),
  0,
  "All water",
)
assertTest(
  numIslands([
    ["1", "1"],
    ["1", "1"],
  ]),
  1,
  "All land - one island",
)

assertTest(
  numIslands([
    ["1", "0", "1"],
    ["0", "0", "0"],
    ["1", "0", "1"],
  ]),
  4,
  "Four separate single-cell islands",
)

assertTest(
  numIslands([
    ["1", "0"],
    ["0", "1"],
  ]),
  2,
  "Diagonal islands - not connected",
)

assertTest(
  numIslands([
    ["1", "1"],
    ["1", "1"],
  ]),
  1,
  "2x2 complete island",
)

assertTest(
  numIslands([
    ["1", "0", "0"],
    ["1", "0", "0"],
    ["1", "0", "0"],
  ]),
  1,
  "Vertical line island",
)

assertTest(
  numIslands([
    ["1", "1", "1"],
    ["0", "0", "0"],
    ["0", "0", "0"],
  ]),
  1,
  "Horizontal line island",
)

assertTest(
  numIslands([
    ["1", "1", "0"],
    ["0", "1", "0"],
    ["0", "1", "1"],
  ]),
  1,
  "L-shaped island",
)

assertTest(
  numIslands([
    ["1", "0", "1", "0", "1"],
    ["0", "0", "0", "0", "0"],
    ["1", "0", "1", "0", "1"],
  ]),
  6,
  "Checkerboard pattern - separate islands",
)

assertTest(
  numIslands([
    ["0", "1", "0"],
    ["1", "1", "1"],
    ["0", "1", "0"],
  ]),
  1,
  "Plus-shaped island",
)

assertTest(
  numIslands([
    ["1", "1", "1"],
    ["1", "0", "1"],
    ["1", "1", "1"],
  ]),
  1,
  "Island with hole",
)

assertTest(
  numIslands([
    ["1", "0", "1", "1"],
    ["1", "0", "1", "0"],
    ["0", "0", "1", "0"],
    ["0", "0", "0", "1"],
  ]),
  2,
  "Two complex islands",
)

assertTest(
  numIslands([
    ["1", "1", "0", "0"],
    ["0", "1", "0", "0"],
    ["0", "0", "1", "1"],
    ["0", "0", "1", "0"],
  ]),
  2,
  "Two irregular islands",
)

assertTest(
  numIslands([
    ["0", "0", "0", "0"],
    ["0", "1", "1", "0"],
    ["0", "1", "1", "0"],
    ["0", "0", "0", "0"],
  ]),
  1,
  "Island in center",
)

assertTest(
  numIslands([
    ["1", "0", "0", "1"],
    ["0", "0", "0", "0"],
    ["0", "0", "0", "0"],
    ["1", "0", "0", "1"],
  ]),
  4,
  "Four corner islands",
)

assertTest(
  numIslands([
    ["1", "1", "1", "1"],
    ["0", "0", "0", "0"],
    ["1", "1", "1", "1"],
  ]),
  2,
  "Two horizontal strips",
)

assertTest(
  numIslands([
    ["1", "0", "1"],
    ["1", "0", "1"],
    ["1", "0", "1"],
    ["1", "0", "1"],
  ]),
  2,
  "Two vertical strips",
)

assertTest(numIslands([["1"]]), 1, "Single cell island")

assertTest(
  numIslands([
    ["0", "1", "0", "1", "0"],
    ["1", "0", "1", "0", "1"],
    ["0", "1", "0", "1", "0"],
    ["1", "0", "1", "0", "1"],
  ]),
  10,
  "Alternating pattern",
)

assertTest(
  numIslands([
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "0", "1"],
    ["1", "0", "1", "0", "1"],
    ["1", "0", "0", "0", "1"],
    ["1", "1", "1", "1", "1"],
  ]),
  2,
  "Border island with inner island",
)

assertTest(
  numIslands([
    ["1", "1", "0", "1", "1"],
    ["1", "1", "0", "1", "1"],
    ["0", "0", "0", "0", "0"],
    ["1", "1", "0", "1", "1"],
    ["1", "1", "0", "1", "1"],
  ]),
  4,
  "Four quadrant islands",
)

assertTest(
  numIslands([
    ["0", "0", "1", "0", "0"],
    ["0", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1"],
    ["0", "1", "1", "1", "0"],
    ["0", "0", "1", "0", "0"],
  ]),
  1,
  "Diamond-shaped island",
)

assertTest(
  numIslands([
    ["1", "0", "1", "0", "1"],
    ["0", "1", "0", "1", "0"],
    ["1", "0", "1", "0", "1"],
    ["0", "1", "0", "1", "0"],
    ["1", "0", "1", "0", "1"],
  ]),
  13,
  "Complex checkerboard",
)

assertTest(
  numIslands([
    ["1", "1", "1", "0", "0"],
    ["1", "1", "1", "0", "0"],
    ["1", "1", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
    ["0", "0", "0", "1", "1"],
  ]),
  2,
  "Two rectangular islands",
)

assertTest(
  numIslands([
    ["1", "0", "0", "0", "1"],
    ["0", "1", "0", "1", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "1", "0", "1", "0"],
    ["1", "0", "0", "0", "1"],
  ]),
  9,
  "Diagonal and corner pattern",
)


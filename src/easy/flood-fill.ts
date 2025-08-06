import assertTest from "../assert-test"

/**
 * Flood Fill (#733)
 *
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
 * You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
 *
 * To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel
 * of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on.
 * Replace the color of all of the aforementioned pixels with color.
 *
 * Return the modified image after performing the flood fill.
 *
 * Time Complexity: O(m * n) where m and n are the dimensions of the image
 * Space Complexity: O(m * n) for the recursion stack in worst case
 */
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  // TODO: Implement the solution
  return image
}

// Helper function for deep array comparison
function arraysEqual(a: number[][], b: number[][]): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

// Test cases
function testFloodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
  expected: number[][],
  description: string,
) {
  const input = image.map((row) => [...row]) // Deep copy
  const result = floodFill(input, sr, sc, color)
  assertTest(arraysEqual(result, expected), true, description)
}

testFloodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2,
  [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ],
  "Example 1",
)

testFloodFill(
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  0,
  0,
  0,
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  "Example 2 - Same color",
)

testFloodFill([[1]], 0, 0, 2, [[2]], "Single pixel")

testFloodFill(
  [
    [1, 2],
    [2, 1],
  ],
  0,
  0,
  3,
  [
    [3, 2],
    [2, 1],
  ],
  "2x2 isolated pixel",
)

testFloodFill(
  [
    [1, 1],
    [1, 1],
  ],
  0,
  0,
  2,
  [
    [2, 2],
    [2, 2],
  ],
  "2x2 all same",
)

testFloodFill(
  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  1,
  1,
  2,
  [
    [0, 2, 0],
    [2, 2, 2],
    [0, 2, 0],
  ],
  "Cross pattern",
)

testFloodFill(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  1,
  1,
  0,
  [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9],
  ],
  "All different - center only",
)

testFloodFill(
  [
    [0, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
  ],
  0,
  0,
  1,
  [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  "Large connected region",
)

testFloodFill(
  [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2,
  [
    [1, 2, 1],
    [2, 2, 2],
    [1, 2, 1],
  ],
  "Connected zeros",
)

testFloodFill(
  [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  1,
  1,
  2,
  [
    [1, 1, 1, 1],
    [1, 2, 2, 1],
    [1, 2, 2, 1],
    [1, 1, 1, 1],
  ],
  "Island with hole",
)

testFloodFill(
  [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ],
  1,
  1,
  2,
  [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ],
  "All same color as new color",
)

testFloodFill(
  [
    [1, 2, 1],
    [2, 1, 2],
    [1, 2, 1],
  ],
  0,
  0,
  3,
  [
    [3, 2, 1],
    [2, 1, 2],
    [1, 2, 1],
  ],
  "Checkerboard pattern",
)

testFloodFill(
  [
    [5, 5, 5, 5, 5],
    [5, 1, 1, 1, 5],
    [5, 1, 0, 1, 5],
    [5, 1, 1, 1, 5],
    [5, 5, 5, 5, 5],
  ],
  2,
  2,
  7,
  [
    [5, 5, 5, 5, 5],
    [5, 1, 1, 1, 5],
    [5, 1, 7, 1, 5],
    [5, 1, 1, 1, 5],
    [5, 5, 5, 5, 5],
  ],
  "Nested structure - center only",
)

testFloodFill(
  [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 1, 1],
  ],
  0,
  0,
  2,
  [
    [2, 2, 0, 0],
    [2, 0, 0, 1],
    [0, 0, 1, 1],
  ],
  "L-shaped region",
)

testFloodFill(
  [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
  ],
  0,
  0,
  2,
  [
    [2, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
  ],
  "Alternating pattern",
)

testFloodFill(
  [
    [3, 3, 3],
    [3, 2, 3],
    [3, 3, 3],
  ],
  1,
  1,
  4,
  [
    [3, 3, 3],
    [3, 4, 3],
    [3, 3, 3],
  ],
  "Single center cell",
)

testFloodFill(
  [
    [7, 7, 7, 7, 7],
    [7, 8, 8, 8, 7],
    [7, 8, 9, 8, 7],
    [7, 8, 8, 8, 7],
    [7, 7, 7, 7, 7],
  ],
  1,
  1,
  1,
  [
    [7, 7, 7, 7, 7],
    [7, 1, 1, 1, 7],
    [7, 1, 9, 1, 7],
    [7, 1, 1, 1, 7],
    [7, 7, 7, 7, 7],
  ],
  "Ring pattern",
)

testFloodFill(
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ],
  1,
  2,
  0,
  [
    [1, 2, 3, 4],
    [5, 6, 0, 8],
    [9, 10, 11, 12],
  ],
  "All unique values",
)

testFloodFill(
  [
    [42, 42],
    [42, 42],
  ],
  0,
  1,
  99,
  [
    [99, 99],
    [99, 99],
  ],
  "Meaningful numbers",
)

testFloodFill(
  [
    [100, 200, 100],
    [200, 100, 200],
    [100, 200, 100],
  ],
  1,
  1,
  150,
  [
    [100, 200, 100],
    [200, 150, 200],
    [100, 200, 100],
  ],
  "Large numbers isolated",
)

testFloodFill(
  [
    [0, 0, 1, 1],
    [0, 0, 1, 1],
    [2, 2, 3, 3],
    [2, 2, 3, 3],
  ],
  0,
  0,
  5,
  [
    [5, 5, 1, 1],
    [5, 5, 1, 1],
    [2, 2, 3, 3],
    [2, 2, 3, 3],
  ],
  "Quadrant pattern",
)

testFloodFill(
  [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  0,
  0,
  2,
  [
    [2, 2, 2, 2, 2],
    [2, 0, 2, 0, 2],
    [2, 2, 2, 2, 2],
    [2, 0, 2, 0, 2],
    [2, 2, 2, 2, 2],
  ],
  "Grid with holes",
)

testFloodFill(
  [
    [5, 4, 3],
    [4, 3, 2],
    [3, 2, 1],
  ],
  2,
  2,
  9,
  [
    [5, 4, 3],
    [4, 3, 2],
    [3, 2, 9],
  ],
  "Diagonal gradient",
)

testFloodFill(
  [
    [8, 8, 8, 8],
    [8, 7, 7, 8],
    [8, 7, 6, 8],
    [8, 8, 8, 8],
  ],
  2,
  2,
  1,
  [
    [8, 8, 8, 8],
    [8, 7, 7, 8],
    [8, 7, 1, 8],
    [8, 8, 8, 8],
  ],
  "Nested squares - innermost",
)

testFloodFill(
  [
    [2, 4, 6, 8],
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [1, 3, 5, 7],
  ],
  0,
  1,
  0,
  [
    [2, 0, 6, 8],
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [1, 3, 5, 7],
  ],
  "Even-odd pattern",
)

testFloodFill(
  [
    [255, 255, 255],
    [255, 0, 255],
    [255, 255, 255],
  ],
  0,
  0,
  128,
  [
    [128, 128, 128],
    [128, 0, 128],
    [128, 128, 128],
  ],
  "Max values with zero center",
)

testFloodFill(
  [
    [12, 21, 12],
    [21, 12, 21],
    [12, 21, 12],
  ],
  1,
  0,
  33,
  [
    [12, 21, 12],
    [33, 12, 21],
    [12, 21, 12],
  ],
  "Alternating 12 and 21",
)

testFloodFill(
  [
    [64, 32, 16],
    [32, 16, 8],
    [16, 8, 4],
  ],
  1,
  1,
  2,
  [
    [64, 32, 16],
    [32, 2, 8],
    [16, 8, 4],
  ],
  "Powers of 2 pattern",
)

testFloodFill(
  [
    [99, 88, 77],
    [88, 77, 66],
    [77, 66, 55],
  ],
  0,
  2,
  11,
  [
    [99, 88, 11],
    [88, 77, 66],
    [77, 66, 55],
  ],
  "Descending pattern",
)

// Edge cases that would catch the original bug (checking new color instead of old color)
testFloodFill(
  [
    [1, 1, 1],
    [1, 2, 1],
    [1, 1, 1],
  ],
  0,
  0,
  2,
  [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ],
  "Bug catcher: New color exists in grid - should still flood all 1s",
)

testFloodFill(
  [
    [2, 1, 2],
    [1, 1, 1],
    [2, 1, 2],
  ],
  1,
  1,
  2,
  [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ],
  "Bug catcher: New color already surrounds region - should flood all 1s",
)

testFloodFill(
  [
    [0, 0, 1],
    [0, 1, 1],
    [1, 1, 1],
  ],
  0,
  0,
  1,
  [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
  "Bug catcher: Flooding with color that exists elsewhere",
)

testFloodFill(
  [
    [3, 3, 2],
    [3, 2, 2],
    [2, 2, 2],
  ],
  0,
  0,
  2,
  [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ],
  "Bug catcher: Target color dominates grid - should still flood 3s",
)

testFloodFill(
  [
    [5, 5, 7],
    [5, 7, 7],
    [7, 7, 5],
  ],
  0,
  0,
  7,
  [
    [7, 7, 7],
    [7, 7, 7],
    [7, 7, 5],
  ],
  "Bug catcher: Complex pattern with target color present",
)

testFloodFill(
  [
    [4, 4, 4, 9],
    [4, 9, 4, 9],
    [4, 4, 4, 9],
    [9, 9, 9, 9],
  ],
  0,
  0,
  9,
  [
    [9, 9, 9, 9],
    [9, 9, 9, 9],
    [9, 9, 9, 9],
    [9, 9, 9, 9],
  ],
  "Bug catcher: Large connected region with target color present",
)

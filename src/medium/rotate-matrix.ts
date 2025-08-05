import assertTest from "../assert-test"

/**
 * Rotate Image (#48)
 *
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix and do the rotation.
 *
 * Example 1:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]]
 *
 * Example 2:
 * Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
function rotate(matrix: number[][]): void {
  // TODO: Implement in-place 90-degree clockwise rotation
  // Hint: Transpose the matrix, then reverse each row
  // Or: Rotate in concentric rings layer by layer
}

// Helper function to test matrix rotation
function testRotate(
  input: number[][],
  expected: number[][],
  description: string,
): void {
  const testMatrix = input.map((row) => [...row]) // Deep copy for testing
  rotate(testMatrix)
  assertTest(JSON.stringify(testMatrix), JSON.stringify(expected), description)
}

// Test cases
testRotate(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ],
  "Example 1 - 3x3 matrix",
)

testRotate(
  [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ],
  [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ],
  "Example 2 - 4x4 matrix",
)

// Edge cases
testRotate([[1]], [[1]], "1x1 matrix")
testRotate(
  [
    [1, 2],
    [3, 4],
  ],
  [
    [3, 1],
    [4, 2],
  ],
  "2x2 matrix",
)

// Systematic 3x3 tests
testRotate(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ],
  "3x3 sequential numbers",
)

testRotate(
  [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
  ],
  [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
  ],
  "3x3 reverse order",
)

testRotate(
  [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ],
  [
    [3, 2, 1],
    [3, 2, 1],
    [3, 2, 1],
  ],
  "3x3 with repeated rows",
)

testRotate(
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ],
  "3x3 with repeated columns",
)

// Zero and negative numbers
testRotate(
  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ],
  [
    [6, 3, 0],
    [7, 4, 1],
    [8, 5, 2],
  ],
  "3x3 with zero",
)

testRotate(
  [
    [-1, -2, -3],
    [-4, -5, -6],
    [-7, -8, -9],
  ],
  [
    [-7, -4, -1],
    [-8, -5, -2],
    [-9, -6, -3],
  ],
  "3x3 with negative numbers",
)

testRotate(
  [
    [-1, 2, -3],
    [4, -5, 6],
    [-7, 8, -9],
  ],
  [
    [-7, 4, -1],
    [8, -5, 2],
    [-9, 6, -3],
  ],
  "3x3 mixed positive/negative",
)

// Larger matrices
testRotate(
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ],
  [
    [21, 16, 11, 6, 1],
    [22, 17, 12, 7, 2],
    [23, 18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [25, 20, 15, 10, 5],
  ],
  "5x5 matrix",
)

// Special patterns
testRotate(
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  ],
  "3x3 identity-like matrix",
)

testRotate(
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
  "3x3 all zeros",
)

testRotate(
  [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
  "3x3 all ones",
)

// Corner and edge emphasis
testRotate(
  [
    [1, 0, 2],
    [0, 0, 0],
    [3, 0, 4],
  ],
  [
    [3, 0, 1],
    [0, 0, 0],
    [4, 0, 2],
  ],
  "3x3 corners only",
)

testRotate(
  [
    [0, 1, 0],
    [2, 0, 3],
    [0, 4, 0],
  ],
  [
    [0, 2, 0],
    [4, 0, 1],
    [0, 3, 0],
  ],
  "3x3 edges only",
)

// Large numbers
testRotate(
  [
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900],
  ],
  [
    [700, 400, 100],
    [800, 500, 200],
    [900, 600, 300],
  ],
  "3x3 large numbers",
)

// Multiple rotations (4 rotations should return to original)
function testMultipleRotations(
  original: number[][],
  description: string,
): void {
  const matrix = original.map((row) => [...row])

  // Rotate 4 times
  for (let i = 0; i < 4; i++) {
    rotate(matrix)
  }

  assertTest(
    JSON.stringify(matrix),
    JSON.stringify(original),
    `${description} - 4 rotations return to original`,
  )
}

testMultipleRotations(
  [
    [1, 2],
    [3, 4],
  ],
  "2x2 multiple rotations",
)
testMultipleRotations(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  "3x3 multiple rotations",
)
testMultipleRotations(
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ],
  "4x4 multiple rotations",
)

// Step by step rotation verification
function testStepByStep(): void {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const original = matrix.map((row) => [...row])

  // First rotation
  rotate(matrix)
  const after1 = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]
  assertTest(
    JSON.stringify(matrix),
    JSON.stringify(after1),
    "Step 1: 90 degrees",
  )

  // Second rotation
  rotate(matrix)
  const after2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
  ]
  assertTest(
    JSON.stringify(matrix),
    JSON.stringify(after2),
    "Step 2: 180 degrees",
  )

  // Third rotation
  rotate(matrix)
  const after3 = [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
  ]
  assertTest(
    JSON.stringify(matrix),
    JSON.stringify(after3),
    "Step 3: 270 degrees",
  )

  // Fourth rotation (back to original)
  rotate(matrix)
  assertTest(
    JSON.stringify(matrix),
    JSON.stringify(original),
    "Step 4: 360 degrees (original)",
  )
}

testStepByStep()

// Symmetric matrices
testRotate(
  [
    [1, 2, 1],
    [2, 3, 2],
    [1, 2, 1],
  ],
  [
    [1, 2, 1],
    [2, 3, 2],
    [1, 2, 1],
  ],
  "3x3 symmetric matrix",
)

testRotate(
  [
    [5, 4, 5],
    [4, 3, 4],
    [5, 4, 5],
  ],
  [
    [5, 4, 5],
    [4, 3, 4],
    [5, 4, 5],
  ],
  "3x3 another symmetric matrix",
)

// Anti-symmetric patterns
testRotate(
  [
    [1, 2, 3],
    [6, 5, 4],
    [7, 8, 9],
  ],
  [
    [7, 6, 1],
    [8, 5, 2],
    [9, 4, 3],
  ],
  "3x3 anti-symmetric",
)

// Powers of 2
testRotate(
  [
    [1, 2, 4],
    [8, 16, 32],
    [64, 128, 256],
  ],
  [
    [64, 8, 1],
    [128, 16, 2],
    [256, 32, 4],
  ],
  "3x3 powers of 2",
)

// Fibonacci-like
testRotate(
  [
    [1, 1, 2],
    [3, 5, 8],
    [13, 21, 34],
  ],
  [
    [13, 3, 1],
    [21, 5, 1],
    [34, 8, 2],
  ],
  "3x3 Fibonacci-like",
)

// Random patterns
testRotate(
  [
    [42, 17, 88],
    [93, 56, 21],
    [74, 39, 65],
  ],
  [
    [74, 93, 42],
    [39, 56, 17],
    [65, 21, 88],
  ],
  "3x3 random numbers",
)

// Test with 6x6 matrix
testRotate(
  [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
  ],
  [
    [31, 25, 19, 13, 7, 1],
    [32, 26, 20, 14, 8, 2],
    [33, 27, 21, 15, 9, 3],
    [34, 28, 22, 16, 10, 4],
    [35, 29, 23, 17, 11, 5],
    [36, 30, 24, 18, 12, 6],
  ],
  "6x6 matrix",
)

// Verify in-place modification
function testInPlace(): void {
  const original = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const matrix = original // Same reference

  rotate(matrix)

  // The original reference should be modified
  const expected = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]
  assertTest(
    JSON.stringify(original),
    JSON.stringify(expected),
    "In-place modification - original reference changed",
  )
}

testInPlace()


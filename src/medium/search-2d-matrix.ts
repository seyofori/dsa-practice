import assertTest from "../assert-test"

/**
 * Search a 2D Matrix (#74)
 *
 * You are given an m x n integer matrix with the following two properties:
 * - Each row is sorted in non-decreasing order.
 * - The first integer of each row is greater than the last integer of the previous row.
 *
 * Given an integer target, return true if target is in matrix or false otherwise.
 * You must write a solution in O(log(m * n)) time complexity.
 *
 * Example 1:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 *
 * Example 2:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * Output: false
 *
 * Time Complexity: O(log(m * n))
 * Space Complexity: O(1)
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  // TODO: Implement binary search treating matrix as flattened sorted array
  // Hint: Convert 2D indices to 1D and vice versa
  // mid = left + (right - left) / 2
  // row = mid / cols, col = mid % cols
  return false
}

// Test cases
const matrix1 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
]
assertTest(searchMatrix(matrix1, 3), true, "Example 1 - target 3 exists")
assertTest(
  searchMatrix(matrix1, 13),
  false,
  "Example 2 - target 13 doesn't exist",
)

// Single element matrix
assertTest(searchMatrix([[1]], 1), true, "Single element - target exists")
assertTest(
  searchMatrix([[1]], 2),
  false,
  "Single element - target doesn't exist",
)

// Single row matrix
assertTest(
  searchMatrix([[1, 3, 5, 7, 9]], 5),
  true,
  "Single row - target in middle",
)
assertTest(
  searchMatrix([[1, 3, 5, 7, 9]], 1),
  true,
  "Single row - target at start",
)
assertTest(
  searchMatrix([[1, 3, 5, 7, 9]], 9),
  true,
  "Single row - target at end",
)
assertTest(
  searchMatrix([[1, 3, 5, 7, 9]], 4),
  false,
  "Single row - target doesn't exist",
)
assertTest(
  searchMatrix([[1, 3, 5, 7, 9]], 0),
  false,
  "Single row - target too small",
)
assertTest(
  searchMatrix([[1, 3, 5, 7, 9]], 10),
  false,
  "Single row - target too large",
)

// Single column matrix
assertTest(
  searchMatrix([[1], [3], [5], [7]], 3),
  true,
  "Single column - target exists",
)
assertTest(
  searchMatrix([[1], [3], [5], [7]], 4),
  false,
  "Single column - target doesn't exist",
)
assertTest(
  searchMatrix([[1], [3], [5], [7]], 0),
  false,
  "Single column - target too small",
)
assertTest(
  searchMatrix([[1], [3], [5], [7]], 8),
  false,
  "Single column - target too large",
)

// Test all positions in small matrix
const matrix2x2 = [
  [1, 3],
  [4, 6],
]
assertTest(searchMatrix(matrix2x2, 1), true, "2x2 - top-left")
assertTest(searchMatrix(matrix2x2, 3), true, "2x2 - top-right")
assertTest(searchMatrix(matrix2x2, 4), true, "2x2 - bottom-left")
assertTest(searchMatrix(matrix2x2, 6), true, "2x2 - bottom-right")
assertTest(searchMatrix(matrix2x2, 2), false, "2x2 - between first row")
assertTest(searchMatrix(matrix2x2, 5), false, "2x2 - between second row")

// Test boundaries
assertTest(searchMatrix(matrix1, 1), true, "Matrix1 - first element")
assertTest(searchMatrix(matrix1, 60), true, "Matrix1 - last element")
assertTest(searchMatrix(matrix1, 0), false, "Matrix1 - before first element")
assertTest(searchMatrix(matrix1, 61), false, "Matrix1 - after last element")

// Test each row
assertTest(searchMatrix(matrix1, 1), true, "Matrix1 - first row, first element")
assertTest(searchMatrix(matrix1, 7), true, "Matrix1 - first row, last element")
assertTest(
  searchMatrix(matrix1, 10),
  true,
  "Matrix1 - second row, first element",
)
assertTest(
  searchMatrix(matrix1, 20),
  true,
  "Matrix1 - second row, last element",
)
assertTest(
  searchMatrix(matrix1, 23),
  true,
  "Matrix1 - third row, first element",
)
assertTest(searchMatrix(matrix1, 60), true, "Matrix1 - third row, last element")

// Test between elements in same row
assertTest(searchMatrix(matrix1, 2), false, "Matrix1 - between 1 and 3")
assertTest(searchMatrix(matrix1, 4), false, "Matrix1 - between 3 and 5")
assertTest(searchMatrix(matrix1, 6), false, "Matrix1 - between 5 and 7")
assertTest(searchMatrix(matrix1, 12), false, "Matrix1 - between 11 and 16")

// Test between rows
assertTest(
  searchMatrix(matrix1, 8),
  false,
  "Matrix1 - between first and second row",
)
assertTest(
  searchMatrix(matrix1, 21),
  false,
  "Matrix1 - between second and third row",
)

// Negative numbers
const matrixNeg = [
  [-5, -3, -1],
  [2, 4, 6],
]
assertTest(
  searchMatrix(matrixNeg, -3),
  true,
  "Negative numbers - target exists",
)
assertTest(
  searchMatrix(matrixNeg, -4),
  false,
  "Negative numbers - target doesn't exist",
)
assertTest(
  searchMatrix(matrixNeg, 0),
  false,
  "Negative numbers - between negative and positive",
)

// All negative numbers
const matrixAllNeg = [
  [-10, -8, -6],
  [-4, -2, -1],
]
assertTest(searchMatrix(matrixAllNeg, -8), true, "All negative - target exists")
assertTest(
  searchMatrix(matrixAllNeg, -5),
  false,
  "All negative - target doesn't exist",
)

// Large numbers
const matrixLarge = [
  [1000, 2000, 3000],
  [4000, 5000, 6000],
]
assertTest(
  searchMatrix(matrixLarge, 5000),
  true,
  "Large numbers - target exists",
)
assertTest(
  searchMatrix(matrixLarge, 4500),
  false,
  "Large numbers - target doesn't exist",
)

// Different matrix sizes
const matrix3x4 = [
  [1, 4, 7, 11],
  [14, 18, 22, 25],
  [28, 32, 36, 40],
]
assertTest(searchMatrix(matrix3x4, 22), true, "3x4 matrix - target exists")
assertTest(
  searchMatrix(matrix3x4, 15),
  false,
  "3x4 matrix - target doesn't exist",
)

const matrix4x3 = [
  [1, 3, 5],
  [7, 9, 11],
  [13, 15, 17],
  [19, 21, 23],
]
assertTest(searchMatrix(matrix4x3, 15), true, "4x3 matrix - target exists")
assertTest(
  searchMatrix(matrix4x3, 16),
  false,
  "4x3 matrix - target doesn't exist",
)

// Sequential numbers
const matrixSeq = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
assertTest(searchMatrix(matrixSeq, 6), true, "Sequential - target exists")
assertTest(searchMatrix(matrixSeq, 12), true, "Sequential - last element")
assertTest(
  searchMatrix(matrixSeq, 13),
  false,
  "Sequential - after last element",
)

// Even spacing
const matrixEven = [
  [2, 4, 6, 8],
  [10, 12, 14, 16],
  [18, 20, 22, 24],
]
assertTest(searchMatrix(matrixEven, 14), true, "Even spacing - target exists")
assertTest(
  searchMatrix(matrixEven, 15),
  false,
  "Even spacing - odd number (doesn't exist)",
)

// Powers of 2
const matrixPow2 = [
  [1, 2, 4, 8],
  [16, 32, 64, 128],
]
assertTest(searchMatrix(matrixPow2, 64), true, "Powers of 2 - target exists")
assertTest(
  searchMatrix(matrixPow2, 48),
  false,
  "Powers of 2 - target doesn't exist",
)

// Fibonacci-like
const matrixFib = [
  [1, 1, 2, 3],
  [5, 8, 13, 21],
]
assertTest(searchMatrix(matrixFib, 13), true, "Fibonacci-like - target exists")
assertTest(
  searchMatrix(matrixFib, 12),
  false,
  "Fibonacci-like - target doesn't exist",
)

// Large matrix test
const matrixLarge5x5 = [
  [1, 5, 9, 13, 17],
  [21, 25, 29, 33, 37],
  [41, 45, 49, 53, 57],
  [61, 65, 69, 73, 77],
  [81, 85, 89, 93, 97],
]
assertTest(
  searchMatrix(matrixLarge5x5, 49),
  true,
  "5x5 matrix - center element",
)
assertTest(
  searchMatrix(matrixLarge5x5, 50),
  false,
  "5x5 matrix - doesn't exist",
)
assertTest(searchMatrix(matrixLarge5x5, 1), true, "5x5 matrix - first element")
assertTest(searchMatrix(matrixLarge5x5, 97), true, "5x5 matrix - last element")

// Edge cases with duplicates (if allowed by problem constraints)
// Note: Problem states strictly increasing, but testing edge of constraints
const matrixDupes = [
  [1, 3, 5],
  [7, 7, 9],
] // Assuming this violates constraints
// Since problem guarantees strictly increasing, we don't test this case

// Zero in matrix
const matrixZero = [
  [0, 2, 4],
  [6, 8, 10],
]
assertTest(searchMatrix(matrixZero, 0), true, "With zero - target is zero")
assertTest(
  searchMatrix(matrixZero, 1),
  false,
  "With zero - target between elements",
)

// Single large matrix row
const singleRowLarge = [[1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]]
assertTest(
  searchMatrix(singleRowLarge, 50),
  true,
  "Large single row - middle element",
)
assertTest(
  searchMatrix(singleRowLarge, 55),
  false,
  "Large single row - doesn't exist",
)

// Single large matrix column
const singleColLarge = [[1], [10], [20], [30], [40], [50]]
assertTest(
  searchMatrix(singleColLarge, 30),
  true,
  "Large single column - middle element",
)
assertTest(
  searchMatrix(singleColLarge, 35),
  false,
  "Large single column - doesn't exist",
)

// Matrix with gaps
const matrixGaps = [
  [1, 10, 100],
  [200, 300, 400],
]
assertTest(
  searchMatrix(matrixGaps, 300),
  true,
  "Matrix with gaps - target exists",
)
assertTest(
  searchMatrix(matrixGaps, 150),
  false,
  "Matrix with gaps - target in gap",
)

console.log("All Search 2D Matrix tests completed!")


import assertTest from "./src/assert-test"

function arraysEqual(a: number[][], b: number[][]): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  if (image[sr][sc] === color) return image

  const oldColor = image[sr][sc]

  function flood(row: number, column: number) {
    if (
      row < 0 ||
      column < 0 ||
      row > image.length - 1 ||
      column > image[row].length - 1 ||
      image[row][column] !== oldColor
    )
      return

    image[row][column] = color

    flood(row, column - 1)
    flood(row, column + 1)
    flood(row - 1, column)
    flood(row + 1, column)
  }
  flood(sr, sc)
  return image
}

// Test the problematic cases
console.log("=== Testing problematic cases ===")

// Alternating pattern test
const input1 = [
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0],
]
const expected1 = [
  [2, 1, 2, 1],
  [1, 0, 1, 0],
  [2, 1, 2, 1],
  [1, 0, 1, 0],
]
const result1 = floodFill(
  input1.map((row) => [...row]),
  0,
  0,
  2,
)
console.log("Alternating pattern:")
console.log("Expected:", JSON.stringify(expected1))
console.log("Got:     ", JSON.stringify(result1))
console.log("Equal?   ", arraysEqual(result1, expected1))

// Even-odd pattern test
const input2 = [
  [2, 4, 6, 8],
  [1, 3, 5, 7],
  [2, 4, 6, 8],
  [1, 3, 5, 7],
]
const expected2 = [
  [2, 0, 6, 8],
  [1, 3, 5, 7],
  [2, 0, 6, 8],
  [1, 3, 5, 7],
]
const result2 = floodFill(
  input2.map((row) => [...row]),
  0,
  1,
  0,
)
console.log("\nEven-odd pattern:")
console.log("Expected:", JSON.stringify(expected2))
console.log("Got:     ", JSON.stringify(result2))
console.log("Equal?   ", arraysEqual(result2, expected2))

// Alternating 12 and 21 test
const input3 = [
  [12, 21, 12],
  [21, 12, 21],
  [12, 21, 12],
]
const expected3 = [
  [12, 33, 12],
  [33, 12, 21],
  [12, 21, 12],
]
const result3 = floodFill(
  input3.map((row) => [...row]),
  1,
  0,
  33,
)
console.log("\nAlternating 12 and 21:")
console.log("Expected:", JSON.stringify(expected3))
console.log("Got:     ", JSON.stringify(result3))
console.log("Equal?   ", arraysEqual(result3, expected3))

// Debug test
function floodFillDebug(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  if (image[sr][sc] === color) return image

  const oldColor = image[sr][sc]
  console.log(`Starting color: ${oldColor}, target color: ${color}`)

  function flood(row: number, column: number) {
    if (
      row < 0 ||
      column < 0 ||
      row > image.length - 1 ||
      column > image[row].length - 1 ||
      image[row][column] !== oldColor
    )
      return

    console.log(`Flooding (${row}, ${column}) with value ${image[row][column]}`)
    image[row][column] = color

    flood(row, column - 1)
    flood(row, column + 1)
    flood(row - 1, column)
    flood(row + 1, column)
  }
  flood(sr, sc)
  return image
}

console.log("=== DEBUG: Even-odd pattern ===")
const result1 = floodFillDebug(
  [
    [2, 4, 6, 8],
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [1, 3, 5, 7],
  ],
  0,
  1,
  0,
)
console.log("Result:", JSON.stringify(result1))

console.log("\n=== DEBUG: Alternating pattern ===")
const result2 = floodFillDebug(
  [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
  ],
  0,
  0,
  2,
)
console.log("Result:", JSON.stringify(result2))

console.log("\n=== DEBUG: Alternating 12 and 21 ===")
const result3 = floodFillDebug(
  [
    [12, 21, 12],
    [21, 12, 21],
    [12, 21, 12],
  ],
  1,
  0,
  33,
)
console.log("Result:", JSON.stringify(result3))

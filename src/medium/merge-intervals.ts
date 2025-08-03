import assertTest from "../assert-test"

/**
 * Merge Intervals (#56)
 *
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals, and return an array of the non-overlapping
 * intervals that cover all the intervals in the input.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) not counting the output array
 */
function merge(intervals: number[][]): number[][] {
  // TODO: Implement the solution
  return []
}

// Test cases
assertTest(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
  [
    [1, 6],
    [8, 10],
    [15, 18],
  ],
  "Classic example",
)
assertTest(
  merge([
    [1, 4],
    [4, 5],
  ]),
  [[1, 5]],
  "Adjacent intervals",
)
assertTest(
  merge([
    [1, 4],
    [2, 3],
  ]),
  [[1, 4]],
  "Completely overlapping",
)
assertTest(merge([[1, 3]]), [[1, 3]], "Single interval")
assertTest(
  merge([
    [1, 4],
    [5, 6],
  ]),
  [
    [1, 4],
    [5, 6],
  ],
  "Non-overlapping intervals",
)
assertTest(
  merge([
    [1, 4],
    [0, 4],
  ]),
  [[0, 4]],
  "One interval contains another",
)
assertTest(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ]),
  [[1, 10]],
  "One large interval covers all",
)
assertTest(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [9, 12],
    [15, 18],
  ]),
  [
    [1, 6],
    [8, 12],
    [15, 18],
  ],
  "Multiple merges",
)
assertTest(
  merge([
    [0, 0],
    [1, 1],
    [2, 2],
  ]),
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  "Point intervals",
)
assertTest(
  merge([
    [0, 1],
    [1, 2],
    [2, 3],
  ]),
  [[0, 3]],
  "Chain of adjacent intervals",
)
assertTest(
  merge([
    [1, 4],
    [0, 0],
  ]),
  [
    [0, 0],
    [1, 4],
  ],
  "Non-overlapping with sorting needed",
)
assertTest(
  merge([
    [2, 3],
    [5, 5],
    [2, 2],
    [3, 4],
    [3, 4],
  ]),
  [
    [2, 4],
    [5, 5],
  ],
  "Duplicates and overlaps",
)
assertTest(
  merge([
    [1, 10],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
  ]),
  [[1, 10]],
  "One interval engulfs many",
)
assertTest(
  merge([
    [5, 5],
    [1, 3],
    [3, 5],
    [4, 6],
    [1, 1],
  ]),
  [[1, 6]],
  "Mixed point and range intervals",
)
assertTest(
  merge([
    [-1, 0],
    [0, 1],
    [1, 2],
  ]),
  [[-1, 2]],
  "Negative and positive with adjacency",
)
assertTest(
  merge([
    [-2, -1],
    [-1, 0],
    [0, 1],
    [1, 2],
  ]),
  [[-2, 2]],
  "Long chain with negatives",
)
assertTest(
  merge([
    [10, 12],
    [1, 3],
    [2, 6],
    [8, 10],
  ]),
  [
    [1, 6],
    [8, 12],
  ],
  "Unsorted input",
)
assertTest(
  merge([
    [1, 5],
    [2, 4],
    [3, 6],
    [4, 7],
  ]),
  [[1, 7]],
  "Multiple overlapping sequences",
)
assertTest(
  merge([
    [0, 4],
    [1, 2],
    [3, 5],
  ]),
  [[0, 5]],
  "Nested and overlapping",
)
assertTest(
  merge([
    [-3, -1],
    [-2, 0],
    [1, 3],
    [2, 4],
  ]),
  [
    [-3, 0],
    [1, 4],
  ],
  "Negative and positive ranges",
)
assertTest(
  merge([
    [100, 200],
    [150, 250],
    [300, 400],
  ]),
  [
    [100, 250],
    [300, 400],
  ],
  "Large numbers",
)
assertTest(
  merge([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ]),
  [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ],
  "All separate",
)
assertTest(
  merge([
    [1, 100],
    [2, 3],
    [4, 5],
    [6, 7],
    [50, 60],
    [70, 80],
  ]),
  [[1, 100]],
  "Large range contains all",
)
assertTest(
  merge([
    [0, 0],
    [0, 1],
    [1, 1],
  ]),
  [[0, 1]],
  "Point and range overlap",
)
assertTest(
  merge([
    [-10, -5],
    [-4, -1],
    [0, 3],
    [2, 5],
    [4, 8],
  ]),
  [
    [-10, -1],
    [0, 8],
  ],
  "Mixed negative and positive",
)
assertTest(
  merge([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ]),
  [[1, 5]],
  "Sequential touching intervals",
)
assertTest(
  merge([
    [5, 7],
    [1, 3],
    [8, 12],
    [2, 6],
    [10, 15],
  ]),
  [
    [1, 7],
    [8, 15],
  ],
  "Complex unsorted merge",
)
assertTest(
  merge([
    [1, 1],
    [2, 2],
    [3, 3],
    [1, 3],
  ]),
  [[1, 3]],
  "Points merged by range",
)
assertTest(
  merge([
    [0, 2],
    [1, 4],
    [3, 5],
    [6, 8],
    [7, 9],
  ]),
  [
    [0, 5],
    [6, 9],
  ],
  "Two separate merged groups",
)
assertTest(
  merge([
    [-1000, 1000],
    [-500, 500],
    [0, 0],
  ]),
  [[-1000, 1000]],
  "Large range with contained intervals",
)


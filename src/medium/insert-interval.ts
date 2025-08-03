import assertTest from "../assert-test"

/**
 * Insert Interval (#57)
 *
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi]
 * represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
 * You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti
 * and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) for the result array
 */
function insert(intervals: number[][], newInterval: number[]): number[][] {
  // TODO: Implement the solution
  return []
}

// Helper function for array comparison
function arraysEqual(a: number[][], b: number[][]): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

// Test cases
function testInsert(
  intervals: number[][],
  newInterval: number[],
  expected: number[][],
  description: string,
) {
  const result = insert(intervals, newInterval)
  assertTest(arraysEqual(result, expected), true, description)
}

testInsert(
  [
    [1, 3],
    [6, 9],
  ],
  [2, 5],
  [
    [1, 5],
    [6, 9],
  ],
  "Example 1 - Merge with first",
)
testInsert(
  [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  [4, 8],
  [
    [1, 2],
    [3, 10],
    [12, 16],
  ],
  "Example 2 - Merge multiple",
)
testInsert([], [5, 7], [[5, 7]], "Empty intervals")
testInsert([[1, 5]], [2, 3], [[1, 5]], "New interval inside existing")
testInsert(
  [[1, 5]],
  [6, 8],
  [
    [1, 5],
    [6, 8],
  ],
  "New interval after existing",
)
testInsert(
  [[3, 5]],
  [1, 2],
  [
    [1, 2],
    [3, 5],
  ],
  "New interval before existing",
)
testInsert([[1, 3]], [2, 6], [[1, 6]], "New interval overlaps end")
testInsert([[3, 6]], [1, 4], [[1, 6]], "New interval overlaps start")
testInsert(
  [
    [1, 2],
    [4, 5],
  ],
  [3, 3],
  [
    [1, 2],
    [3, 3],
    [4, 5],
  ],
  "Insert between intervals",
)
testInsert(
  [
    [1, 2],
    [3, 4],
  ],
  [2, 3],
  [[1, 4]],
  "Bridge two intervals",
)
testInsert(
  [
    [1, 3],
    [6, 9],
  ],
  [4, 5],
  [
    [1, 3],
    [4, 5],
    [6, 9],
  ],
  "Insert in middle gap",
)
testInsert(
  [
    [1, 4],
    [5, 8],
  ],
  [0, 9],
  [[0, 9]],
  "New interval covers all",
)
testInsert(
  [
    [2, 3],
    [5, 6],
  ],
  [1, 7],
  [[1, 7]],
  "New interval spans all",
)
testInsert([[1, 5]], [0, 6], [[0, 6]], "New interval extends both ends")
testInsert(
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  [0, 0],
  [
    [0, 0],
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  "Insert at beginning",
)
testInsert(
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  [7, 8],
  [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ],
  "Insert at end",
)
testInsert(
  [[1, 2]],
  [3, 4],
  [
    [1, 2],
    [3, 4],
  ],
  "No overlap, insert after",
)
testInsert(
  [[3, 4]],
  [1, 2],
  [
    [1, 2],
    [3, 4],
  ],
  "No overlap, insert before",
)
testInsert(
  [
    [1, 5],
    [6, 8],
  ],
  [5, 6],
  [[1, 8]],
  "Bridge adjacent intervals",
)
testInsert(
  [
    [1, 2],
    [4, 5],
    [7, 8],
  ],
  [3, 6],
  [
    [1, 2],
    [3, 8],
  ],
  "Merge with one, overlap next",
)
testInsert(
  [
    [1, 3],
    [4, 6],
    [8, 10],
  ],
  [2, 9],
  [[1, 10]],
  "Merge multiple consecutive",
)
testInsert(
  [
    [0, 2],
    [3, 3],
    [6, 11],
  ],
  [1, 5],
  [
    [0, 5],
    [6, 11],
  ],
  "Complex merge scenario",
)
testInsert(
  [
    [1, 5],
    [9, 12],
  ],
  [6, 8],
  [
    [1, 5],
    [6, 8],
    [9, 12],
  ],
  "Insert in gap",
)
testInsert(
  [
    [2, 4],
    [7, 10],
  ],
  [1, 3],
  [
    [1, 4],
    [7, 10],
  ],
  "Extend first interval",
)
testInsert(
  [
    [1, 4],
    [6, 10],
  ],
  [8, 12],
  [
    [1, 4],
    [6, 12],
  ],
  "Extend last interval",
)
testInsert(
  [
    [0, 5],
    [9, 12],
  ],
  [7, 16],
  [
    [0, 5],
    [7, 16],
  ],
  "Merge with second",
)
testInsert(
  [
    [1, 2],
    [6, 7],
    [8, 10],
    [15, 18],
  ],
  [2, 6],
  [
    [1, 7],
    [8, 10],
    [15, 18],
  ],
  "Connect first two",
)
testInsert(
  [
    [3, 5],
    [12, 15],
  ],
  [6, 6],
  [
    [3, 5],
    [6, 6],
    [12, 15],
  ],
  "Single point interval",
)
testInsert(
  [
    [1, 3],
    [6, 9],
  ],
  [4, 4],
  [
    [1, 3],
    [4, 4],
    [6, 9],
  ],
  "Another single point",
)
testInsert(
  [
    [1, 1],
    [3, 3],
    [5, 5],
  ],
  [2, 4],
  [
    [1, 1],
    [2, 5],
  ],
  "Merge single points",
)
testInsert([[10, 20]], [5, 15], [[5, 20]], "Overlap start of single interval")
testInsert([[5, 15]], [10, 20], [[5, 20]], "Overlap end of single interval")
testInsert(
  [
    [1, 10],
    [20, 30],
  ],
  [5, 25],
  [[1, 30]],
  "Bridge large gap",
)
testInsert(
  [
    [1, 4],
    [5, 8],
    [9, 12],
  ],
  [4, 9],
  [[1, 12]],
  "Connect all three",
)
testInsert([[100, 200]], [50, 150], [[50, 200]], "Large numbers overlap")
testInsert([[42, 84]], [21, 63], [[21, 84]], "Meaningful numbers")
testInsert(
  [
    [0, 10],
    [14, 20],
  ],
  [11, 13],
  [
    [0, 10],
    [11, 13],
    [14, 20],
  ],
  "Perfect fit in gap",
)
testInsert(
  [
    [1, 3],
    [8, 12],
  ],
  [4, 7],
  [
    [1, 3],
    [4, 7],
    [8, 12],
  ],
  "No merge needed",
)


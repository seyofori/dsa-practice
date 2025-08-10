import assertTest from "../assert-test"

/**
 * Unique Paths
 *
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
 * The robot can only move either down or right at any point in time.
 *
 * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 *
 * Example:
 * Input: m = 3, n = 7
 * Output: 28
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n) for DP table, can be optimized to O(min(m, n))
 */

function uniquePaths(m: number, n: number): number {
  // TODO: Implement the solution
  // Use dynamic programming: dp[i][j] = dp[i-1][j] + dp[i][j-1]
  // Can also use mathematical combination: C(m+n-2, m-1)

  // DP approach
  const dp: number[][] = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))

  // Initialize first row and first column to 1
  for (let i = 0; i < m; i++) dp[i][0] = 1
  for (let j = 0; j < n; j++) dp[0][j] = 1

  // Fill the DP table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}

// Alternative space-optimized solution
function uniquePathsOptimized(m: number, n: number): number {
  // Use only one row to save space
  const dp: number[] = Array(n).fill(1)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1]
    }
  }

  return dp[n - 1]
}

// Test cases
assertTest(uniquePaths(3, 7), 28, "Unique paths - 3x7 grid")

assertTest(uniquePaths(3, 2), 3, "Unique paths - 3x2 grid")

assertTest(uniquePaths(1, 1), 1, "Unique paths - 1x1 grid")

assertTest(uniquePaths(1, 10), 1, "Unique paths - 1x10 grid")

assertTest(uniquePaths(10, 1), 1, "Unique paths - 10x1 grid")

assertTest(uniquePaths(2, 2), 2, "Unique paths - 2x2 grid")

assertTest(uniquePaths(4, 4), 20, "Unique paths - 4x4 grid")

assertTest(uniquePaths(2, 3), 3, "Unique paths - 2x3 grid")

assertTest(uniquePaths(5, 5), 70, "Unique paths - 5x5 grid")

assertTest(uniquePaths(3, 3), 6, "Unique paths - 3x3 grid")

assertTest(uniquePaths(7, 3), 28, "Unique paths - 7x3 grid (same as 3x7)")

assertTest(uniquePaths(6, 6), 252, "Unique paths - 6x6 grid")

assertTest(uniquePaths(1, 2), 1, "Unique paths - 1x2 grid")

assertTest(uniquePaths(2, 1), 1, "Unique paths - 2x1 grid")

assertTest(uniquePaths(8, 2), 8, "Unique paths - 8x2 grid")

assertTest(uniquePaths(2, 8), 8, "Unique paths - 2x8 grid")

assertTest(uniquePaths(4, 3), 10, "Unique paths - 4x3 grid")

assertTest(uniquePaths(3, 4), 10, "Unique paths - 3x4 grid")

assertTest(uniquePaths(10, 10), 48620, "Unique paths - 10x10 grid")

assertTest(uniquePaths(5, 3), 15, "Unique paths - 5x3 grid")

// Test optimized version
assertTest(uniquePathsOptimized(3, 7), 28, "Unique paths optimized - 3x7 grid")

assertTest(uniquePathsOptimized(3, 2), 3, "Unique paths optimized - 3x2 grid")

assertTest(uniquePathsOptimized(1, 1), 1, "Unique paths optimized - 1x1 grid")

assertTest(uniquePathsOptimized(2, 2), 2, "Unique paths optimized - 2x2 grid")

assertTest(uniquePathsOptimized(4, 4), 20, "Unique paths optimized - 4x4 grid")

assertTest(uniquePathsOptimized(5, 5), 70, "Unique paths optimized - 5x5 grid")

assertTest(uniquePathsOptimized(3, 3), 6, "Unique paths optimized - 3x3 grid")

assertTest(uniquePathsOptimized(6, 6), 252, "Unique paths optimized - 6x6 grid")

assertTest(
  uniquePathsOptimized(10, 10),
  48620,
  "Unique paths optimized - 10x10 grid",
)

assertTest(uniquePathsOptimized(7, 4), 84, "Unique paths optimized - 7x4 grid")


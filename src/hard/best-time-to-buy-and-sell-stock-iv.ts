import assertTest from "../assert-test"

/**
 * Best Time to Buy and Sell Stock IV
 *
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.
 * Find the maximum profit you can achieve. You may complete at most k transactions.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 *
 * Example:
 * Input: k = 2, prices = [2,4,1]
 * Output: 2
 * Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
 *
 * Time Complexity: O(n * k) where n is the length of prices array
 * Space Complexity: O(k) for the DP arrays
 */

function maxProfit(k: number, prices: number[]): number {
  // TODO: Implement the solution
  // Use dynamic programming with state tracking

  if (!prices || prices.length <= 1 || k === 0) return 0

  const n = prices.length

  // If k is large enough, we can make as many transactions as we want
  if (k >= n / 2) {
    let profit = 0
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1]
      }
    }
    return profit
  }

  // buy[i] = max profit after at most i+1 buy transactions
  // sell[i] = max profit after at most i+1 sell transactions
  const buy = new Array(k).fill(-prices[0])
  const sell = new Array(k).fill(0)

  for (let i = 1; i < n; i++) {
    for (let j = k - 1; j >= 0; j--) {
      sell[j] = Math.max(sell[j], buy[j] + prices[i])
      buy[j] = Math.max(buy[j], (j > 0 ? sell[j - 1] : 0) - prices[i])
    }
  }

  return sell[k - 1]
}

// Test cases
assertTest(maxProfit(2, [2, 4, 1]), 2, "Stock IV - example case")

assertTest(
  maxProfit(2, [3, 2, 6, 5, 0, 3]),
  7,
  "Stock IV - multiple opportunities",
)

assertTest(
  maxProfit(0, [1, 2, 3, 4, 5]),
  0,
  "Stock IV - no transactions allowed",
)

assertTest(maxProfit(1, [1, 2, 3, 4, 5]), 4, "Stock IV - single transaction")

assertTest(maxProfit(2, [1, 2, 3, 4, 5]), 4, "Stock IV - monotonic increasing")

assertTest(maxProfit(2, [5, 4, 3, 2, 1]), 0, "Stock IV - monotonic decreasing")

assertTest(
  maxProfit(1, [7, 1, 5, 3, 6, 4]),
  5,
  "Stock IV - one transaction optimal",
)

assertTest(
  maxProfit(2, [7, 1, 5, 3, 6, 4]),
  7,
  "Stock IV - two transactions optimal",
)

assertTest(
  maxProfit(3, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]),
  13,
  "Stock IV - complex case",
)

assertTest(maxProfit(1, [1]), 0, "Stock IV - single price")

assertTest(maxProfit(1, []), 0, "Stock IV - empty prices")

assertTest(maxProfit(5, [1, 2, 3, 4, 5]), 4, "Stock IV - k larger than needed")

assertTest(
  maxProfit(2, [1, 3, 2, 8, 4, 9]),
  8,
  "Stock IV - two transactions needed",
)

assertTest(
  maxProfit(4, [1, 2, 3, 4, 5, 6, 7, 8]),
  7,
  "Stock IV - continuous growth",
)

assertTest(
  maxProfit(2, [8, 7, 6, 5, 4, 3, 2, 1]),
  0,
  "Stock IV - continuous decline",
)

assertTest(maxProfit(3, [2, 1, 2, 0, 1]), 2, "Stock IV - multiple small gains")

assertTest(maxProfit(1, [2, 1, 4, 9]), 8, "Stock IV - single best transaction")

assertTest(
  maxProfit(10, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]),
  16,
  "Stock IV - many transactions allowed",
)

assertTest(
  maxProfit(2, [6, 1, 3, 2, 4, 7]),
  7,
  "Stock IV - optimal two transactions",
)

assertTest(maxProfit(3, [1, 2, 3, 0, 2]), 3, "Stock IV - reset and continue")

assertTest(maxProfit(2, [2, 4, 1, 0, 1, 3]), 5, "Stock IV - multiple valleys")

assertTest(
  maxProfit(1, [5, 2, 3, 1, 4]),
  3,
  "Stock IV - best single transaction",
)

assertTest(
  maxProfit(4, [3, 3, 5, 0, 0, 3, 1, 4]),
  6,
  "Stock IV - plateau and recovery",
)

assertTest(
  maxProfit(2, [1, 4, 2, 5, 3, 6]),
  8,
  "Stock IV - alternating pattern",
)

assertTest(
  maxProfit(3, [10, 1, 3, 8, 2, 7]),
  12,
  "Stock IV - multiple opportunities",
)

assertTest(
  maxProfit(1, [100, 90, 80, 70, 60, 50]),
  0,
  "Stock IV - only losses available",
)

assertTest(maxProfit(2, [1, 2, 1, 2, 1, 2]), 2, "Stock IV - repeating pattern")

assertTest(maxProfit(5, [2, 7, 1, 4, 11]), 13, "Stock IV - k exceeds optimal")

assertTest(
  maxProfit(2, [1, 9, 6, 9, 1, 7, 1, 1, 5, 9, 9, 9]),
  18,
  "Stock IV - complex profitable case",
)

assertTest(
  maxProfit(
    3,
    [
      48, 12, 60, 93, 97, 33, 57, 65, 7, 1, 6, 100, 91, 94, 56, 10, 61, 28, 85,
      51,
    ],
  ),
  314,
  "Stock IV - large complex case",
)


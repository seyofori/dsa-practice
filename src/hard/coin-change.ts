import assertTest from "../assert-test"

/**
 * Coin Change (#322)
 *
 * You are given an integer array coins representing coins of different denominations
 * and an integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * Time Complexity: O(amount * coins.length)
 * Space Complexity: O(amount)
 */
function coinChange(coins: number[], amount: number): number {
  // TODO: Implement the solution
  return -1
}

// Test cases
assertTest(coinChange([1, 3, 4], 6), 2, "Basic case - 3+3=6")
assertTest(coinChange([2], 3), -1, "Impossible case")
assertTest(coinChange([1], 0), 0, "Amount is zero")
assertTest(coinChange([1], 1), 1, "Single coin exact match")
assertTest(coinChange([1], 2), 2, "Multiple of same coin")
assertTest(coinChange([1, 2, 5], 11), 3, "Classic example - 5+5+1=11")
assertTest(
  coinChange([2, 5, 10, 1], 27),
  4,
  "Greedy doesn't work - 10+10+5+1+1=27",
)
assertTest(coinChange([1, 3, 4], 0), 0, "Zero amount")
assertTest(coinChange([5], 3), -1, "Cannot make amount")
assertTest(coinChange([1, 2, 5], 1), 1, "Amount equals smallest coin")
assertTest(coinChange([1, 2, 5], 2), 1, "Amount equals middle coin")
assertTest(coinChange([1, 2, 5], 5), 1, "Amount equals largest coin")
assertTest(coinChange([2, 3, 5], 1), -1, "Amount smaller than any coin")
assertTest(coinChange([9, 6, 5, 1], 11), 2, "Choose 6+5 instead of 9+1+1")
assertTest(coinChange([1, 4, 5], 8), 2, "Choose 4+4 instead of 5+1+1+1")
assertTest(coinChange([1, 5, 10, 25], 30), 2, "US coins - 25+5=30")
assertTest(coinChange([1, 5, 10, 25], 67), 6, "US coins - 25+25+10+5+1+1=67")
assertTest(coinChange([3, 7, 405, 436], 8839), 25, "Large amount optimization")
assertTest(coinChange([1, 2], 3), 2, "Simple case - 2+1=3")
assertTest(coinChange([1, 3, 5], 7), 3, "Choose 5+1+1 instead of 3+3+1")
assertTest(coinChange([2, 4, 6], 1), -1, "All even coins, odd amount")
assertTest(coinChange([2, 4, 6], 8), 2, "All even coins - 4+4=8")
assertTest(coinChange([7, 11], 18), 2, "Prime coins - 7+11=18")
assertTest(coinChange([6, 7, 20], 42), 6, "Non-standard denominations - 7*6=42")
assertTest(coinChange([1, 7, 10], 14), 2, "Choose 7+7 instead of 10+1+1+1+1")
assertTest(
  coinChange([15, 10, 1], 20),
  2,
  "Choose 10+10 instead of 15+1+1+1+1+1",
)
assertTest(
  coinChange([1, 15, 25], 30),
  2,
  "Choose 15+15 instead of 25+1+1+1+1+1",
)
assertTest(coinChange([3, 4, 5], 7), 2, "Choose 3+4 or 4+3 = 7")
assertTest(coinChange([5, 9, 11], 20), 2, "Choose 9+11=20")
assertTest(coinChange([1, 6, 10], 12), 2, "Choose 6+6 instead of 10+1+1")
assertTest(coinChange([4, 6, 8], 11), -1, "All even, odd target")
assertTest(coinChange([1, 10, 15, 20], 30), 2, "Choose 15+15 instead of 20+10")
assertTest(
  coinChange([2, 5, 10, 20, 50], 73),
  8,
  "Various denominations - 50 + 5*3 + 2*4 = 50+15+8 = 73",
)
assertTest(
  coinChange([1, 8, 15], 22),
  8,
  "22 = 15 + 7*1 or 8*2 + 6*1, both give 8 coins",
)
assertTest(coinChange([12, 15, 18], 27), 2, "15+12=27")


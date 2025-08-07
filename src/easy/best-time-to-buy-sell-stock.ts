import assertTest from "../assert-test"

/**
 * Best Time to Buy and Sell Stock (#121)
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing
 * a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function maxProfit(price: number[]): number {
  let lowestPriceSoFar = Infinity
  let maxProfitSoFar = 0

  for (let num of price) {
    lowestPriceSoFar = Math.min(lowestPriceSoFar, num)
    maxProfitSoFar = Math.max(maxProfitSoFar, num - lowestPriceSoFar)
  }

  return maxProfitSoFar
}

// Test cases
assertTest(maxProfit([7, 1, 5, 3, 6, 4]), 5, "Basic case - buy at 1, sell at 6")
assertTest(maxProfit([7, 6, 4, 3, 1]), 0, "Decreasing prices - no profit")
assertTest(maxProfit([1, 2]), 1, "Two element array - profit")
assertTest(maxProfit([2, 1]), 0, "Two element array - no profit")
assertTest(maxProfit([1]), 0, "Single element - no profit")
assertTest(maxProfit([]), 0, "Empty array")
assertTest(
  maxProfit([1, 2, 3, 4, 5]),
  4,
  "Increasing prices - buy first, sell last",
)
assertTest(maxProfit([5, 4, 3, 2, 1]), 0, "Strictly decreasing - no profit")
assertTest(maxProfit([2, 4, 1]), 2, "Peak in middle")
assertTest(maxProfit([3, 2, 6, 5, 0, 3]), 4, "Multiple peaks and valleys")
assertTest(maxProfit([1, 2, 1, 2]), 1, "Multiple opportunities - take best")
assertTest(maxProfit([100, 50, 200]), 150, "Large profit opportunity")
assertTest(maxProfit([1, 1, 1, 1]), 0, "All same prices")
assertTest(maxProfit([0, 6, -3, 7]), 10, "With negative prices")
assertTest(maxProfit([10, 22, 5, 75, 65, 80]), 75, "Complex case")
assertTest(maxProfit([2, 1, 2, 0, 1]), 1, "Multiple small profits")
assertTest(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]), 4, "Zeros in array")
assertTest(maxProfit([1, 4, 2]), 3, "Early peak")
assertTest(maxProfit([2, 1, 4]), 3, "Late peak")
assertTest(maxProfit([6, 1, 3, 2, 4, 7]), 6, "Best opportunity at end")
assertTest(maxProfit([1000, 1, 1000]), 999, "Large numbers")
assertTest(maxProfit([50, 100, 25, 75]), 50, "Two separate opportunities")
assertTest(maxProfit([10, 1, 5, 6, 7, 1]), 6, "Best in middle")
assertTest(maxProfit([4, 7, 2, 1]), 3, "Early profit better than late")
assertTest(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]), 8, "Complex long array")
assertTest(maxProfit([5, 2, 3, 2, 6, 6, 2, 9, 1, 5]), 7, "Multiple peaks")
assertTest(maxProfit([8, 6, 4, 3, 3, 2, 3, 5, 8, 3]), 6, "Late recovery")
assertTest(maxProfit([1, 9, 6, 9, 1, 7, 1, 1, 5, 9]), 8, "Multiple high points")
assertTest(maxProfit([2, 1, 2, 1, 0, 1, 2]), 2, "Gradual increases")
assertTest(maxProfit([10, 9, 8, 2, 1, 3, 10]), 9, "Deep valley with recovery")
assertTest(maxProfit([1, 2, 3, 0, 2]), 2, "Reset opportunity")
assertTest(maxProfit([3, 1, 4, 1, 5]), 4, "Pi sequence")

// SOLUTION
// function _maxProfit(prices: number[]): number {
//   let minPrice = Infinity
//   let maxProfit = 0

//   for (let i = 0; i < prices.length; i++) {

//     minPrice = Math.min(prices[i], minPrice)

//     if (prices[i] - minPrice > maxProfit) {
//       sellDay = i
//     }
//     maxProfit = Math.max(prices[i] - minPrice, maxProfit)
//   }
//   // TODO: Implement the solution
//   return maxProfit

// }

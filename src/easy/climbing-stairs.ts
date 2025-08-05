import assertTest from "../assert-test"

/**
 * Climbing Stairs (#70)
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) with optimized approach
 */
function climbStairs(n: number): number {
  // TODO: Implement the solution
  // key to this is recognizing that, to get to the final step, 
  // you could've either taken 1 step, or two steps
  // so number of steps that you could've taken to the final step n = (n-1) + (n-2)
  // that's the fibbonacci sequence
  // so now we can take advantage of what we know about fibbonacci to solve this
  
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
}

// Test cases
assertTest(climbStairs(2), 2, "Example 1 - 2 steps")
assertTest(climbStairs(3), 3, "Example 2 - 3 steps")
assertTest(climbStairs(1), 1, "Single step")
assertTest(climbStairs(4), 5, "Four steps")
assertTest(climbStairs(5), 8, "Five steps")
assertTest(climbStairs(6), 13, "Six steps")
assertTest(climbStairs(7), 21, "Seven steps")
assertTest(climbStairs(8), 34, "Eight steps")
assertTest(climbStairs(9), 55, "Nine steps")
assertTest(climbStairs(10), 89, "Ten steps")
assertTest(climbStairs(11), 144, "Eleven steps")
assertTest(climbStairs(12), 233, "Twelve steps")
assertTest(climbStairs(13), 377, "Thirteen steps")
assertTest(climbStairs(14), 610, "Fourteen steps")
assertTest(climbStairs(15), 987, "Fifteen steps")
assertTest(climbStairs(16), 1597, "Sixteen steps")
assertTest(climbStairs(17), 2584, "Seventeen steps")
assertTest(climbStairs(18), 4181, "Eighteen steps")
assertTest(climbStairs(19), 6765, "Nineteen steps")
assertTest(climbStairs(20), 10946, "Twenty steps")
assertTest(climbStairs(21), 17711, "Twenty-one steps")
assertTest(climbStairs(22), 28657, "Twenty-two steps")
assertTest(climbStairs(23), 46368, "Twenty-three steps")
assertTest(climbStairs(24), 75025, "Twenty-four steps")
assertTest(climbStairs(25), 121393, "Twenty-five steps")
assertTest(climbStairs(26), 196418, "Twenty-six steps")
assertTest(climbStairs(27), 317811, "Twenty-seven steps")
assertTest(climbStairs(28), 514229, "Twenty-eight steps")
assertTest(climbStairs(29), 832040, "Twenty-nine steps")
assertTest(climbStairs(30), 1346269, "Thirty steps")
assertTest(climbStairs(35), 14930352, "Thirty-five steps")
assertTest(climbStairs(40), 165580141, "Forty steps")
assertTest(climbStairs(42), 433494437, "Forty-two steps - Answer to everything")
assertTest(climbStairs(45), 1836311903, "Forty-five steps - Large number")


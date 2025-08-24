import assertTest from "../assert-test"

/**
 * Min Stack (#155)
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * Implement the MinStack class:
 * - MinStack() initializes the stack object.
 * - void push(int val) pushes the element val onto the stack.
 * - void pop() removes the element on the top of the stack.
 * - int top() gets the top element of the stack.
 * - int getMin() retrieves the minimum element in the stack.
 *
 * You must implement a solution with O(1) time complexity for each function.
 *
 * Example 1:
 * Input: ["MinStack","push","push","push","getMin","pop","top","getMin"]
 *        [[],[-2],[0],[-3],[],[],[],[]]
 * Output: [null,null,null,null,-3,null,0,-2]
 *
 * Time Complexity: O(1) for all operations
 * Space Complexity: O(n) where n is the number of elements
 */
class MinStack {
  constructor() {}

  push(val: number): void {}

  pop(): void {}

  top(): number {
    return 0
  }

  getMin(): number {
    return 0
  }
}

// Test cases
function testMinStack(): void {
  // Example 1 test
  const minStack1 = new MinStack()
  minStack1.push(-2)
  minStack1.push(0)
  minStack1.push(-3)
  assertTest(
    minStack1.getMin(),
    -3,
    "Example 1 - getMin after pushing -2, 0, -3",
  )
  minStack1.pop()
  assertTest(minStack1.top(), 0, "Example 1 - top after pop")
  assertTest(minStack1.getMin(), -2, "Example 1 - getMin after pop")
}

function testBasicOperations(): void {
  const stack = new MinStack()

  // Test single element
  stack.push(5)
  assertTest(stack.top(), 5, "Single element - top")
  assertTest(stack.getMin(), 5, "Single element - min")

  stack.pop()

  // Test two elements
  stack.push(10)
  stack.push(3)
  assertTest(stack.top(), 3, "Two elements - top")
  assertTest(stack.getMin(), 3, "Two elements - min")

  stack.pop()
  assertTest(stack.top(), 10, "After pop - top")
  assertTest(stack.getMin(), 10, "After pop - min")
}

function testMinimumTracking(): void {
  const stack = new MinStack()

  // Decreasing sequence
  stack.push(5)
  assertTest(stack.getMin(), 5, "Decreasing - min after 5")

  stack.push(3)
  assertTest(stack.getMin(), 3, "Decreasing - min after 3")

  stack.push(1)
  assertTest(stack.getMin(), 1, "Decreasing - min after 1")

  // Pop and check mins
  stack.pop()
  assertTest(stack.getMin(), 3, "Decreasing - min after popping 1")

  stack.pop()
  assertTest(stack.getMin(), 5, "Decreasing - min after popping 3")
}

function testIncreasingSequence(): void {
  const stack = new MinStack()

  // Increasing sequence
  stack.push(1)
  assertTest(stack.getMin(), 1, "Increasing - min after 1")

  stack.push(3)
  assertTest(stack.getMin(), 1, "Increasing - min after 3")

  stack.push(5)
  assertTest(stack.getMin(), 1, "Increasing - min after 5")

  // Pop and check mins
  stack.pop()
  assertTest(stack.getMin(), 1, "Increasing - min after popping 5")

  stack.pop()
  assertTest(stack.getMin(), 1, "Increasing - min after popping 3")

  stack.pop()
}

function testDuplicateMinimums(): void {
  const stack = new MinStack()

  stack.push(2)
  stack.push(1)
  stack.push(1)
  stack.push(3)

  assertTest(stack.getMin(), 1, "Duplicates - min with duplicate 1s")
  assertTest(stack.top(), 3, "Duplicates - top is 3")

  stack.pop() // Remove 3
  assertTest(stack.getMin(), 1, "Duplicates - min still 1 after popping 3")

  stack.pop() // Remove one 1
  assertTest(stack.getMin(), 1, "Duplicates - min still 1 after popping one 1")

  stack.pop() // Remove second 1
  assertTest(stack.getMin(), 2, "Duplicates - min now 2 after popping both 1s")
}

function testNegativeNumbers(): void {
  const stack = new MinStack()

  stack.push(-1)
  stack.push(-5)
  stack.push(-2)

  assertTest(stack.getMin(), -5, "Negatives - min is -5")
  assertTest(stack.top(), -2, "Negatives - top is -2")

  stack.pop()
  assertTest(stack.getMin(), -5, "Negatives - min still -5")

  stack.pop()
  assertTest(stack.getMin(), -1, "Negatives - min now -1")
}

function testZeroAndMixed(): void {
  const stack = new MinStack()

  stack.push(0)
  stack.push(-1)
  stack.push(2)
  stack.push(0)

  assertTest(stack.getMin(), -1, "Mixed - min is -1")

  stack.pop() // Remove 0
  assertTest(stack.getMin(), -1, "Mixed - min still -1")

  stack.pop() // Remove 2
  assertTest(stack.getMin(), -1, "Mixed - min still -1")

  stack.pop() // Remove -1
  assertTest(stack.getMin(), 0, "Mixed - min now 0")
}

function testLargeNumbers(): void {
  const stack = new MinStack()

  stack.push(1000000)
  stack.push(999999)
  stack.push(1000001)

  assertTest(stack.getMin(), 999999, "Large numbers - min tracking")
  assertTest(stack.top(), 1000001, "Large numbers - top")
}

function testAlternatingPattern(): void {
  const stack = new MinStack()

  // Pattern: large, small, large, small
  stack.push(10)
  assertTest(stack.getMin(), 10, "Alternating - min after 10")

  stack.push(1)
  assertTest(stack.getMin(), 1, "Alternating - min after 1")

  stack.push(20)
  assertTest(stack.getMin(), 1, "Alternating - min after 20")

  stack.push(2)
  assertTest(stack.getMin(), 1, "Alternating - min after 2")

  // Pop alternating
  stack.pop() // Remove 2
  assertTest(stack.getMin(), 1, "Alternating - min after popping 2")

  stack.pop() // Remove 20
  assertTest(stack.getMin(), 1, "Alternating - min after popping 20")

  stack.pop() // Remove 1
  assertTest(stack.getMin(), 10, "Alternating - min after popping 1")
}

function testSequentialOperations(): void {
  const stack = new MinStack()

  // Complex sequence
  const operations = [
    { op: "push", val: 5 },
    { op: "push", val: 2 },
    { op: "push", val: 7 },
    { op: "push", val: 1 },
    { op: "push", val: 8 },
  ]

  operations.forEach((operation) => {
    if (operation.op === "push") {
      stack.push(operation.val!)
    }
  })

  assertTest(stack.getMin(), 1, "Sequential - min is 1")
  assertTest(stack.top(), 8, "Sequential - top is 8")

  stack.pop() // Remove 8
  assertTest(stack.getMin(), 1, "Sequential - min still 1")

  stack.pop() // Remove 1
  assertTest(stack.getMin(), 2, "Sequential - min now 2")

  stack.pop() // Remove 7
  assertTest(stack.getMin(), 2, "Sequential - min still 2")
}

function testMinStackRobustness(): void {
  const stack = new MinStack()

  // Push many elements with different min patterns
  const values = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

  values.forEach((val) => stack.push(val))

  assertTest(stack.getMin(), 1, "Robustness - min in complex sequence")

  // Pop half and check
  for (let i = 0; i < 5; i++) {
    stack.pop()
  }

  assertTest(stack.getMin(), 1, "Robustness - min after popping half")
  assertTest(stack.top(), 9, "Robustness - top after popping half")
}

function testEdgeCaseValues(): void {
  const stack = new MinStack()

  // Test with extreme values
  stack.push(Number.MAX_SAFE_INTEGER)
  stack.push(Number.MIN_SAFE_INTEGER)
  stack.push(0)

  assertTest(
    stack.getMin(),
    Number.MIN_SAFE_INTEGER,
    "Edge cases - extreme minimum",
  )

  stack.pop() // Remove 0
  assertTest(
    stack.getMin(),
    Number.MIN_SAFE_INTEGER,
    "Edge cases - min unchanged",
  )

  stack.pop() // Remove MIN_SAFE_INTEGER
  assertTest(
    stack.getMin(),
    Number.MAX_SAFE_INTEGER,
    "Edge cases - min now max value",
  )
}

function testRepeatedMins(): void {
  const stack = new MinStack()

  // Multiple occurrences of minimum
  stack.push(3)
  stack.push(1)
  stack.push(2)
  stack.push(1)
  stack.push(4)
  stack.push(1)

  assertTest(stack.getMin(), 1, "Repeated mins - min is 1")

  stack.pop() // Remove top 1
  assertTest(stack.getMin(), 1, "Repeated mins - min still 1")

  stack.pop() // Remove 4
  assertTest(stack.getMin(), 1, "Repeated mins - min still 1")

  stack.pop() // Remove middle 1
  assertTest(stack.getMin(), 1, "Repeated mins - min still 1")

  stack.pop() // Remove 2
  assertTest(stack.getMin(), 1, "Repeated mins - min still 1")

  stack.pop() // Remove bottom 1
  assertTest(stack.getMin(), 3, "Repeated mins - min now 3")
}

// Run all tests
testMinStack()
testBasicOperations()
testMinimumTracking()
testIncreasingSequence()
testDuplicateMinimums()
testNegativeNumbers()
testZeroAndMixed()
testLargeNumbers()
testAlternatingPattern()
testSequentialOperations()
testMinStackRobustness()
testEdgeCaseValues()
testRepeatedMins()

console.log("All MinStack tests completed!")


import assertTest from "../assert-test"

/**
 * Find Cycle Length in Linked List
 *
 * Given the head of a linked list, return the length of the cycle if it exists.
 * If there is no cycle, return 0.
 *
 * This problem extends Floyd's Cycle Detection Algorithm to find the actual
 * length of the cycle once it's detected.
 *
 * Time Complexity: O(n) where n is the number of nodes
 * Space Complexity: O(1) using Floyd's Cycle Detection Algorithm
 *
 * Algorithm:
 * 1. Use Floyd's algorithm to detect if cycle exists
 * 2. If cycle found, keep one pointer at meeting point
 * 3. Move the other pointer around the cycle counting steps
 * 4. When it returns to meeting point, we have the cycle length
 */

// Definition for singly-linked list
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function findCycleLength(head: ListNode | null): number {
  // TODO: Implement the solution
  if (!head || !head.next) return 0

  let slow = head
  let fast = head

  // Phase 1: Detect cycle using Floyd's algorithm
  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next!.next!

    if (slow === fast) {
      // Cycle detected, now find the length
      break
    }
  }

  // No cycle exists
  if (!fast || !fast.next) return 0

  // Phase 2: Find cycle length
  let current = slow.next
  let length = 1

  while (current !== slow) {
    current = current!.next
    length++
  }

  return length
}

// Alternative implementation that finds cycle start first
function findCycleLengthAlternative(head: ListNode | null): number {
  if (!head || !head.next) return 0

  // First detect if cycle exists and find start
  const cycleStart = detectCycleStart(head)
  if (!cycleStart) return 0

  // Count nodes in the cycle
  let current = cycleStart.next
  let length = 1

  while (current !== cycleStart) {
    current = current!.next
    length++
  }

  return length
}

// Helper function to detect cycle start (from previous problem)
function detectCycleStart(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null

  let slow = head
  let fast = head

  // Phase 1: Detect cycle
  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next!.next!

    if (slow === fast) break
  }

  if (!fast || !fast.next) return null

  // Phase 2: Find cycle start
  slow = head
  while (slow !== fast) {
    slow = slow.next!
    fast = fast.next!
  }

  return slow
}

// Helper function to create linked list with cycle
function createLinkedListWithCycle(
  values: number[],
  pos: number,
): ListNode | null {
  if (values.length === 0) return null

  const nodes: ListNode[] = []
  for (const val of values) {
    nodes.push(new ListNode(val))
  }

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }

  if (pos >= 0 && pos < nodes.length) {
    nodes[nodes.length - 1].next = nodes[pos]
  }

  return nodes[0]
}

// Helper function to create linked list without cycle
function createLinkedList(values: number[]): ListNode | null {
  if (values.length === 0) return null

  const head = new ListNode(values[0])
  let current = head

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i])
    current = current.next
  }

  return head
}

// Test cases
function testCycleLength(
  values: number[],
  pos: number,
  expectedLength: number,
  description: string,
) {
  const head = createLinkedListWithCycle(values, pos)
  const result = findCycleLength(head)
  assertTest(result, expectedLength, description)
}

function testNoCycle(values: number[], description: string) {
  const head = createLinkedList(values)
  const result = findCycleLength(head)
  assertTest(result, 0, description)
}

// Basic examples
testCycleLength([3, 2, 0, -4], 1, 3, "Example 1 - Cycle length 3")
testCycleLength([1, 2], 0, 2, "Example 2 - Cycle length 2")
testNoCycle([1], "Single node no cycle")

// Edge cases
testNoCycle([], "Empty list")
testCycleLength([1], 0, 1, "Single node self cycle")
testNoCycle([1, 2], "Two nodes no cycle")

// Various cycle lengths
testCycleLength([1, 2, 3], 0, 3, "Cycle length 3 - all nodes")
testCycleLength([1, 2, 3], 1, 2, "Cycle length 2 - last two nodes")
testCycleLength([1, 2, 3], 2, 1, "Cycle length 1 - self loop")
testNoCycle([1, 2, 3], "Three nodes no cycle")

// Longer lists with different cycle lengths
testCycleLength([1, 2, 3, 4, 5], 2, 3, "5 nodes, cycle length 3")
testCycleLength([1, 2, 3, 4, 5], 0, 5, "5 nodes, cycle length 5")
testCycleLength([1, 2, 3, 4, 5], 4, 1, "5 nodes, cycle length 1")
testNoCycle([1, 2, 3, 4, 5], "5 nodes no cycle")

// Different patterns
testCycleLength([5, 4, 3, 2, 1], 0, 5, "Reverse order, full cycle")
testCycleLength([5, 4, 3, 2, 1], 3, 2, "Reverse order, partial cycle")
testNoCycle([5, 4, 3, 2, 1], "Reverse order no cycle")

// Duplicate values
testCycleLength([0, 0, 0], 1, 2, "Duplicate values, cycle length 2")
testCycleLength([1, 1, 1, 1], 0, 4, "All same values, full cycle")
testNoCycle([0, 0, 0], "Duplicate values no cycle")

// Negative values
testCycleLength([-1, -2, -3], 1, 2, "Negative values, cycle length 2")
testCycleLength([-1, -2, -3], 0, 3, "Negative values, full cycle")
testNoCycle([-1, -2, -3], "Negative values no cycle")

// Large values
testCycleLength([100, 200, 300], 0, 3, "Large values, full cycle")
testCycleLength([100, 200, 300], 2, 1, "Large values, self loop")
testNoCycle([100, 200, 300], "Large values no cycle")

// Pattern sequences
testCycleLength([7, 14, 21, 28], 1, 3, "Multiples, cycle length 3")
testCycleLength([2, 4, 6, 8, 10], 3, 2, "Even numbers, cycle length 2")
testCycleLength([1, 3, 5, 7, 9], 2, 3, "Odd numbers, cycle length 3")

// Longer cycles
testCycleLength([10, 20, 30, 40, 50, 60], 0, 6, "6 nodes, full cycle")
testCycleLength([10, 20, 30, 40, 50, 60], 3, 3, "6 nodes, cycle length 3")
testCycleLength([10, 20, 30, 40, 50, 60], 5, 1, "6 nodes, self loop")
testNoCycle([10, 20, 30, 40, 50, 60], "6 nodes no cycle")

// Edge cases with meaningful values
testCycleLength([42], 0, 1, "Meaningful single with cycle")
testNoCycle([42], "Meaningful single no cycle")
testCycleLength([99, 88, 77, 66, 55], 4, 1, "Descending with self loop")
testCycleLength([99, 88, 77, 66, 55], 0, 5, "Descending with full cycle")

// Complex scenarios
testCycleLength([1, 2, 3, 4, 5, 6, 7], 2, 5, "7 nodes, cycle length 5")
testCycleLength([1, 2, 3, 4, 5, 6, 7], 4, 3, "7 nodes, cycle length 3")
testCycleLength(
  [8, 7, 6, 5, 4, 3, 2, 1],
  1,
  7,
  "8 nodes descending, cycle length 7",
)

// Very large cycles
testCycleLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 10, "10 nodes, full cycle")
testCycleLength(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  5,
  5,
  "10 nodes, cycle length 5",
)
testCycleLength(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  7,
  3,
  "10 nodes, cycle length 3",
)

// Test alternative implementation
function testAlternativeImplementation() {
  const head1 = createLinkedListWithCycle([3, 2, 0, -4], 1)
  const result1 = findCycleLengthAlternative(head1)
  assertTest(result1, 3, "Alternative implementation - Example 1")

  const head2 = createLinkedList([1, 2, 3])
  const result2 = findCycleLengthAlternative(head2)
  assertTest(result2, 0, "Alternative implementation - No cycle")
}

testAlternativeImplementation()


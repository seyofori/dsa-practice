import assertTest from "../assert-test"

/**
 * Remove Cycle from Linked List
 *
 * Given the head of a linked list that may contain a cycle, remove the cycle
 * if it exists and return the head of the modified list.
 *
 * The cycle should be removed by setting the 'next' pointer of the last node
 * in the cycle to null.
 *
 * Time Complexity: O(n) where n is the number of nodes
 * Space Complexity: O(1) using Floyd's Cycle Detection Algorithm
 *
 * Algorithm:
 * 1. Use Floyd's algorithm to detect if cycle exists
 * 2. If cycle found, find the start of the cycle
 * 3. Find the node just before the cycle start
 * 4. Set its next pointer to null to break the cycle
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

function removeCycle(head: ListNode | null): ListNode | null {
  // TODO: Implement the solution
  if (!head || !head.next) return head

  // Phase 1: Detect cycle using Floyd's algorithm
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next!.next!

    if (slow === fast) {
      // Cycle detected
      break
    }
  }

  // No cycle exists
  if (!fast || !fast.next) return head

  // Phase 2: Find cycle start
  slow = head
  while (slow !== fast) {
    slow = slow.next!
    fast = fast.next!
  }

  // Phase 3: Find the node just before cycle start and break the cycle
  while (fast.next !== slow) {
    fast = fast.next!
  }

  // Break the cycle
  fast.next = null

  return head
}

// Alternative implementation that's more explicit about finding the tail
function removeCycleAlternative(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  const cycleStart = detectCycleStart(head)
  if (!cycleStart) return head // No cycle

  // Find the node that points to cycle start (the tail of the cycle)
  let current = cycleStart
  while (current.next !== cycleStart) {
    current = current.next!
  }

  // Break the cycle
  current.next = null
  return head
}

// Helper function to detect cycle start
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

// Helper function to check if list has cycle (for testing)
function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false

  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next!.next!

    if (slow === fast) return true
  }

  return false
}

// Helper function to convert linked list to array (for testing)
function linkedListToArray(
  head: ListNode | null,
  maxLength: number = 100,
): number[] {
  const result: number[] = []
  let current = head
  let count = 0

  while (current && count < maxLength) {
    result.push(current.val)
    current = current.next
    count++
  }

  return result
}

// Test cases
function testRemoveCycle(
  values: number[],
  pos: number,
  expectedArray: number[],
  description: string,
) {
  const head = createLinkedListWithCycle(values, pos)
  const result = removeCycle(head)

  // Check that cycle is removed
  assertTest(hasCycle(result), false, `${description} - Cycle removed`)

  // Check that the list structure is correct
  const actualArray = linkedListToArray(result)
  assertTest(actualArray, expectedArray, `${description} - Correct structure`)
}

function testNoCycleRemoval(values: number[], description: string) {
  const head = createLinkedList(values)
  const result = removeCycle(head)

  // Check that no cycle exists (should remain the same)
  assertTest(hasCycle(result), false, `${description} - No cycle`)

  // Check that structure is preserved
  const actualArray = linkedListToArray(result)
  assertTest(actualArray, values, `${description} - Structure preserved`)
}

// Basic examples
testRemoveCycle(
  [3, 2, 0, -4],
  1,
  [3, 2, 0, -4],
  "Example 1 - Remove cycle at position 1",
)
testRemoveCycle([1, 2], 0, [1, 2], "Example 2 - Remove cycle at position 0")
testNoCycleRemoval([1], "Single node no cycle")

// Edge cases
testNoCycleRemoval([], "Empty list")
testRemoveCycle([1], 0, [1], "Single node self cycle")
testNoCycleRemoval([1, 2], "Two nodes no cycle")

// Various cycle positions
testRemoveCycle([1, 2, 3], 0, [1, 2, 3], "Remove cycle back to head")
testRemoveCycle([1, 2, 3], 1, [1, 2, 3], "Remove cycle to middle")
testRemoveCycle([1, 2, 3], 2, [1, 2, 3], "Remove self loop")
testNoCycleRemoval([1, 2, 3], "Three nodes no cycle")

// Longer lists
testRemoveCycle(
  [1, 2, 3, 4, 5],
  2,
  [1, 2, 3, 4, 5],
  "5 nodes, remove cycle to middle",
)
testRemoveCycle(
  [1, 2, 3, 4, 5],
  0,
  [1, 2, 3, 4, 5],
  "5 nodes, remove cycle to head",
)
testRemoveCycle(
  [1, 2, 3, 4, 5],
  4,
  [1, 2, 3, 4, 5],
  "5 nodes, remove self loop",
)
testNoCycleRemoval([1, 2, 3, 4, 5], "5 nodes no cycle")

// Different patterns
testRemoveCycle(
  [5, 4, 3, 2, 1],
  0,
  [5, 4, 3, 2, 1],
  "Reverse order, remove full cycle",
)
testRemoveCycle(
  [5, 4, 3, 2, 1],
  3,
  [5, 4, 3, 2, 1],
  "Reverse order, remove partial cycle",
)
testNoCycleRemoval([5, 4, 3, 2, 1], "Reverse order no cycle")

// Duplicate values
testRemoveCycle([0, 0, 0], 1, [0, 0, 0], "Duplicate values, remove cycle")
testRemoveCycle(
  [1, 1, 1, 1],
  0,
  [1, 1, 1, 1],
  "All same values, remove full cycle",
)
testNoCycleRemoval([0, 0, 0], "Duplicate values no cycle")

// Negative values
testRemoveCycle([-1, -2, -3], 1, [-1, -2, -3], "Negative values, remove cycle")
testRemoveCycle(
  [-1, -2, -3],
  0,
  [-1, -2, -3],
  "Negative values, remove full cycle",
)
testNoCycleRemoval([-1, -2, -3], "Negative values no cycle")

// Large values
testRemoveCycle(
  [100, 200, 300],
  0,
  [100, 200, 300],
  "Large values, remove full cycle",
)
testRemoveCycle(
  [100, 200, 300],
  2,
  [100, 200, 300],
  "Large values, remove self loop",
)
testNoCycleRemoval([100, 200, 300], "Large values no cycle")

// Pattern sequences
testRemoveCycle([7, 14, 21, 28], 1, [7, 14, 21, 28], "Multiples, remove cycle")
testRemoveCycle(
  [2, 4, 6, 8, 10],
  3,
  [2, 4, 6, 8, 10],
  "Even numbers, remove cycle",
)
testRemoveCycle(
  [1, 3, 5, 7, 9],
  2,
  [1, 3, 5, 7, 9],
  "Odd numbers, remove cycle",
)

// Longer cycles
testRemoveCycle(
  [10, 20, 30, 40, 50, 60],
  0,
  [10, 20, 30, 40, 50, 60],
  "6 nodes, remove full cycle",
)
testRemoveCycle(
  [10, 20, 30, 40, 50, 60],
  3,
  [10, 20, 30, 40, 50, 60],
  "6 nodes, remove partial cycle",
)
testRemoveCycle(
  [10, 20, 30, 40, 50, 60],
  5,
  [10, 20, 30, 40, 50, 60],
  "6 nodes, remove self loop",
)
testNoCycleRemoval([10, 20, 30, 40, 50, 60], "6 nodes no cycle")

// Edge cases with meaningful values
testRemoveCycle([42], 0, [42], "Meaningful single with cycle")
testNoCycleRemoval([42], "Meaningful single no cycle")
testRemoveCycle(
  [99, 88, 77, 66, 55],
  4,
  [99, 88, 77, 66, 55],
  "Descending with self loop",
)
testRemoveCycle(
  [99, 88, 77, 66, 55],
  0,
  [99, 88, 77, 66, 55],
  "Descending with full cycle",
)

// Complex scenarios
testRemoveCycle(
  [1, 2, 3, 4, 5, 6, 7],
  2,
  [1, 2, 3, 4, 5, 6, 7],
  "7 nodes, remove cycle",
)
testRemoveCycle(
  [1, 2, 3, 4, 5, 6, 7],
  4,
  [1, 2, 3, 4, 5, 6, 7],
  "7 nodes, remove different cycle",
)
testRemoveCycle(
  [8, 7, 6, 5, 4, 3, 2, 1],
  1,
  [8, 7, 6, 5, 4, 3, 2, 1],
  "8 nodes descending, remove cycle",
)

// Test alternative implementation
function testAlternativeImplementation() {
  const head1 = createLinkedListWithCycle([3, 2, 0, -4], 1)
  const result1 = removeCycleAlternative(head1)
  assertTest(
    hasCycle(result1),
    false,
    "Alternative implementation - Cycle removed",
  )

  const actualArray1 = linkedListToArray(result1)
  assertTest(
    actualArray1,
    [3, 2, 0, -4],
    "Alternative implementation - Correct structure",
  )

  const head2 = createLinkedList([1, 2, 3])
  const result2 = removeCycleAlternative(head2)
  assertTest(
    hasCycle(result2),
    false,
    "Alternative implementation - No cycle preserved",
  )
}

testAlternativeImplementation()


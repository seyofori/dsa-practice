import assertTest from "../assert-test"

/**
 * Linked List Cycle II (#142)
 *
 * Given the head of a linked list, return the node where the cycle begins.
 * If there is no cycle, return null.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again
 * by continuously following the next pointer. Internally, pos is used to denote the index of the node
 * that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle.
 * Note that pos is not passed as a parameter.
 *
 * Do not modify the linked list.
 *
 * Time Complexity: O(n) where n is the number of nodes
 * Space Complexity: O(1) using Floyd's Cycle Detection Algorithm

 * Mathematical proof:
 * Let L = distance from head to cycle start
 * Let C = cycle length
 * Let k = distance from cycle start to meeting point
 *
 * When pointers meet: slow traveled L+k, fast traveled L+k+nC
 * Since fast is twice as fast: 2(L+k) = L+k+nC
 * Simplifying: L = nC-k
 *
 * So if we move slow from head and fast from meeting point,
 * both will reach cycle start at the same time!
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

function detectCycle(head: ListNode | null): ListNode | null {
  // TODO: Implement the solution
  if (!head || !head.next) return null

  let slow = head
  let fast = head

  // Phase 1: Detect cycle using Floyd's algorithm
  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next!.next!

    if (slow === fast) {
      // Cycle detected, now find the start
      break
    }
  }

  // No cycle exists
  if (!fast || !fast.next) return null

  // Phase 2: Find cycle start
  slow = head // Reset slow to beginning

  while (slow !== fast) {
    slow = slow.next!
    fast = fast.next! // Now move fast 1 step at a time
  }

  return slow // This is the start of the cycle
}

// Helper function to create linked list with cycle
function createLinkedListWithCycle(
  values: number[],
  pos: number,
): { head: ListNode | null; cycleStart: ListNode | null } {
  if (values.length === 0) return { head: null, cycleStart: null }

  const nodes: ListNode[] = []
  for (const val of values) {
    nodes.push(new ListNode(val))
  }

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }

  let cycleStart = null
  if (pos >= 0 && pos < nodes.length) {
    nodes[nodes.length - 1].next = nodes[pos]
    cycleStart = nodes[pos]
  }

  return { head: nodes[0], cycleStart }
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
function testDetectCycle(values: number[], pos: number, description: string) {
  const { head, cycleStart } = createLinkedListWithCycle(values, pos)
  const result = detectCycle(head)
  assertTest(result, cycleStart, description)
}

function testNoCycle(values: number[], description: string) {
  const head = createLinkedList(values)
  const result = detectCycle(head)
  assertTest(result, null, description)
}

// Basic examples
testDetectCycle([3, 2, 0, -4], 1, "Example 1 - Cycle starts at position 1")
testDetectCycle([1, 2], 0, "Example 2 - Cycle starts at position 0")
testNoCycle([1], "Example 3 - Single node no cycle")

// Edge cases
testNoCycle([], "Empty list")
testDetectCycle([1], 0, "Single node self cycle")
testNoCycle([1, 2], "Two nodes no cycle")

// Various cycle positions
testDetectCycle([1, 2, 3], 0, "Cycle back to head")
testDetectCycle([1, 2, 3], 1, "Cycle to middle")
testDetectCycle([1, 2, 3], 2, "Cycle to last")
testNoCycle([1, 2, 3], "Three nodes no cycle")

// Longer lists
testDetectCycle([1, 2, 3, 4, 5], 2, "Longer list cycle to middle")
testDetectCycle([1, 2, 3, 4, 5], 0, "Longer list cycle to head")
testNoCycle([1, 2, 3, 4, 5], "Longer list no cycle")

// Different value patterns
testDetectCycle([5, 4, 3, 2, 1], 0, "Reverse order with cycle")
testNoCycle([5, 4, 3, 2, 1], "Reverse order no cycle")
testDetectCycle([0, 0, 0], 1, "Duplicate values with cycle")
testNoCycle([0, 0, 0], "Duplicate values no cycle")

// Special patterns
testDetectCycle([1, 1, 1, 1], 0, "All same values with cycle")
testNoCycle([1, 1, 1, 1], "All same values no cycle")
testDetectCycle([-1, -2, -3], 1, "Negative values with cycle")
testNoCycle([-1, -2, -3], "Negative values no cycle")

// Larger values
testDetectCycle([100, 200, 300], 0, "Large values with cycle")
testNoCycle([100, 200, 300], "Large values no cycle")
testDetectCycle([7, 14, 21, 28], 1, "Multiples with cycle")
testNoCycle([7, 14, 21, 28], "Multiples no cycle")

// Number patterns
testDetectCycle([2, 4, 6, 8, 10], 3, "Even numbers cycle")
testNoCycle([2, 4, 6, 8, 10], "Even numbers no cycle")
testDetectCycle([1, 3, 5, 7, 9], 2, "Odd numbers cycle")
testNoCycle([1, 3, 5, 7, 9], "Odd numbers no cycle")

// Longer cycles
testDetectCycle([10, 20, 30, 40, 50, 60], 0, "Longer cycle to head")
testDetectCycle([10, 20, 30, 40, 50, 60], 3, "Longer cycle to middle")
testNoCycle([10, 20, 30, 40, 50, 60], "Longer no cycle")

// Edge cases with meaningful values
testDetectCycle([42], 0, "Meaningful single with cycle")
testNoCycle([42], "Meaningful single no cycle")
testDetectCycle([99, 88, 77, 66, 55], 4, "Descending with cycle")
testNoCycle([99, 88, 77, 66, 55], "Descending no cycle")

// Complex scenarios
testDetectCycle([1, 2, 3, 4, 5, 6, 7], 2, "Mid-size cycle to position 2")
testDetectCycle([1, 2, 3, 4, 5, 6, 7], 4, "Mid-size cycle to position 4")
testDetectCycle([8, 7, 6, 5, 4, 3, 2, 1], 1, "Large descending with cycle")
testNoCycle([8, 7, 6, 5, 4, 3, 2, 1], "Large descending no cycle")


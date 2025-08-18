import assertTest from "../assert-test"

/**
 * Linked List Cycle (#141)
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again
 * by continuously following the next pointer. Internally, pos is used to denote the index of the node
 * that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Time Complexity: O(n) where n is the number of nodes
 * Space Complexity: O(1) using Floyd's Cycle Detection Algorithm
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

function hasCycle(head: ListNode | null): boolean {
  let fast = head
  let slow = head

  while (fast !== null && fast.next !== null) {
    slow = slow!.next
    fast = fast.next.next

    if (fast === slow) {
      return true
    }
  }

  return false
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
function testHasCycle(
  values: number[],
  pos: number,
  expected: boolean,
  description: string,
) {
  const head = createLinkedListWithCycle(values, pos)
  const result = hasCycle(head)
  assertTest(result, expected, description)
}

function testNoCycle(values: number[], expected: boolean, description: string) {
  const head = createLinkedList(values)
  const result = hasCycle(head)
  assertTest(result, expected, description)
}

testHasCycle([3, 2, 0, -4], 1, true, "Example 1 - Cycle at position 1")
testHasCycle([1, 2], 0, true, "Example 2 - Cycle at position 0")
testNoCycle([1], false, "Example 3 - Single node no cycle")
testNoCycle([], false, "Empty list")
testHasCycle([1], 0, true, "Single node self cycle")
testNoCycle([1, 2], false, "Two nodes no cycle")
testHasCycle([1, 2, 3], 0, true, "Cycle back to head")
testHasCycle([1, 2, 3], 1, true, "Cycle to middle")
testHasCycle([1, 2, 3], 2, true, "Cycle to last")
testNoCycle([1, 2, 3], false, "Three nodes no cycle")
testHasCycle([1, 2, 3, 4, 5], 2, true, "Longer list with cycle")
testNoCycle([1, 2, 3, 4, 5], false, "Longer list no cycle")
testHasCycle([5, 4, 3, 2, 1], 0, true, "Reverse order with cycle")
testNoCycle([5, 4, 3, 2, 1], false, "Reverse order no cycle")
testHasCycle([0, 0, 0], 1, true, "Duplicate values with cycle")
testNoCycle([0, 0, 0], false, "Duplicate values no cycle")
testHasCycle([1, 1, 1, 1], 0, true, "All same values with cycle")
testNoCycle([1, 1, 1, 1], false, "All same values no cycle")
testHasCycle([-1, -2, -3], 1, true, "Negative values with cycle")
testNoCycle([-1, -2, -3], false, "Negative values no cycle")
testHasCycle([100, 200, 300], 0, true, "Large values with cycle")
testNoCycle([100, 200, 300], false, "Large values no cycle")
testHasCycle([7, 14, 21, 28], 1, true, "Multiples with cycle")
testNoCycle([7, 14, 21, 28], false, "Multiples no cycle")
testHasCycle([2, 4, 6, 8, 10], 3, true, "Even numbers cycle")
testNoCycle([2, 4, 6, 8, 10], false, "Even numbers no cycle")
testHasCycle([1, 3, 5, 7, 9], 2, true, "Odd numbers cycle")
testNoCycle([1, 3, 5, 7, 9], false, "Odd numbers no cycle")
testHasCycle([10, 20, 30, 40, 50, 60], 0, true, "Longer cycle to head")
testHasCycle([10, 20, 30, 40, 50, 60], 3, true, "Longer cycle to middle")
testNoCycle([10, 20, 30, 40, 50, 60], false, "Longer no cycle")
testHasCycle([42], 0, true, "Meaningful single with cycle")
testNoCycle([42], false, "Meaningful single no cycle")
testHasCycle([99, 88, 77, 66, 55], 4, true, "Descending with cycle")
testNoCycle([99, 88, 77, 66, 55], false, "Descending no cycle")


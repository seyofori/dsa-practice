import assertTest from "../assert-test"

/**
 * Merge Two Sorted Lists (#21)
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * Time Complexity: O(m + n) where m and n are the lengths of the lists
 * Space Complexity: O(1) iterative, O(m + n) recursive
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  // TODO: Implement the solution
  return null
}

// Helper function to create linked list from array
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

// Helper function to convert linked list to array for testing
function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = []
  let current = head

  while (current) {
    result.push(current.val)
    current = current.next
  }

  return result
}

// Test cases
function testMergeTwoLists(
  list1: number[],
  list2: number[],
  expected: number[],
  description: string,
) {
  const l1 = createLinkedList(list1)
  const l2 = createLinkedList(list2)
  const merged = mergeTwoLists(l1, l2)
  const result = linkedListToArray(merged)
  assertTest(JSON.stringify(result), JSON.stringify(expected), description)
}

testMergeTwoLists([1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4], "Example 1")
testMergeTwoLists([], [], [], "Example 2 - Both empty")
testMergeTwoLists([], [0], [0], "Example 3 - One empty")
testMergeTwoLists([1], [], [1], "First list only")
testMergeTwoLists([], [2], [2], "Second list only")
testMergeTwoLists([1], [2], [1, 2], "Single elements")
testMergeTwoLists([2], [1], [1, 2], "Single elements reverse")
testMergeTwoLists([1, 3, 5], [2, 4, 6], [1, 2, 3, 4, 5, 6], "Alternating merge")
testMergeTwoLists([1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6], "Sequential lists")
testMergeTwoLists(
  [4, 5, 6],
  [1, 2, 3],
  [1, 2, 3, 4, 5, 6],
  "Reverse sequential",
)
testMergeTwoLists([1, 1, 1], [2, 2, 2], [1, 1, 1, 2, 2, 2], "Duplicate values")
testMergeTwoLists([1, 2, 3], [1, 2, 3], [1, 1, 2, 2, 3, 3], "Identical lists")
testMergeTwoLists([0], [0], [0, 0], "Both zero")
testMergeTwoLists(
  [-1, 0, 1],
  [-2, 0, 2],
  [-2, -1, 0, 0, 1, 2],
  "With negatives",
)
testMergeTwoLists([100], [50], [50, 100], "Large numbers")
testMergeTwoLists(
  [1, 5, 9],
  [2, 3, 4, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "Different lengths",
)
testMergeTwoLists(
  [2, 3, 4, 6, 7, 8],
  [1, 5, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "Reverse different lengths",
)
testMergeTwoLists(
  [1, 3, 5, 7, 9, 11],
  [2, 4, 6, 8, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "Odds and evens",
)
testMergeTwoLists(
  [2, 4, 6, 8, 10],
  [1, 3, 5, 7, 9, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "Evens and odds",
)
testMergeTwoLists(
  [5, 10, 15],
  [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  "Sparse vs dense",
)
testMergeTwoLists(
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0, 1, 1, 1],
  "All zeros vs all ones",
)
testMergeTwoLists(
  [-5, -3, -1],
  [-4, -2, 0],
  [-5, -4, -3, -2, -1, 0],
  "All negatives",
)
testMergeTwoLists(
  [10, 20, 30],
  [15, 25, 35],
  [10, 15, 20, 25, 30, 35],
  "Multiples",
)
testMergeTwoLists(
  [1, 4, 7],
  [2, 3, 5, 6, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "Mixed pattern",
)
testMergeTwoLists([42], [41, 43], [41, 42, 43], "Meaningful numbers")
testMergeTwoLists(
  [1, 100],
  [2, 3, 4, 50, 99],
  [1, 2, 3, 4, 50, 99, 100],
  "Wide range",
)
testMergeTwoLists(
  [7, 14, 21],
  [3, 6, 9, 12, 15, 18],
  [3, 6, 7, 9, 12, 14, 15, 18, 21],
  "Multiples of 3 and 7",
)
testMergeTwoLists(
  [2, 8, 32],
  [1, 4, 16, 64],
  [1, 2, 4, 8, 16, 32, 64],
  "Powers of 2",
)
testMergeTwoLists(
  [1, 1, 2, 3, 5],
  [0, 1, 1, 2, 3, 5, 8],
  [0, 1, 1, 1, 1, 2, 2, 3, 3, 5, 5, 8],
  "Fibonacci-like",
)
testMergeTwoLists(
  [11, 13, 17],
  [2, 3, 5, 7, 19, 23],
  [2, 3, 5, 7, 11, 13, 17, 19, 23],
  "Prime numbers",
)
testMergeTwoLists(
  [6, 12, 18],
  [9, 15, 21],
  [6, 9, 12, 15, 18, 21],
  "Multiples of 3 and 6",
)
testMergeTwoLists(
  [25, 50, 75],
  [10, 20, 30, 40, 60, 70, 80, 90],
  [10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90],
  "Multiples of 25 and 10",
)


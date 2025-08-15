import assertTest from "../assert-test"

/**
 * Add Two Numbers (#2)
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Time Complexity: O(max(m, n)) where m and n are the lengths of the lists
 * Space Complexity: O(max(m, n)) for the result list
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  // we're doing arithmetic, while moving in lockstep along the lists
  // we get the digit by working with the current sum always, and including the
  let dummyNode = new ListNode(0)
  let tail = dummyNode
  let carry = 0

  while (l1 !== null || l2 !== null || carry !== 0) {
    let val1 = l1?.val ?? 0
    let val2 = l2?.val ?? 0
    let sum = val1 + val2 + carry

    let digit = sum % 10
    carry = Math.floor(sum / 10)

    tail.next = new ListNode(digit)
    tail = tail.next

    l1 = l1?.next ?? null
    l2 = l2?.next ?? null
  }
  return dummyNode.next
}

// Helper function to create linked list from array
function createLinkedList(digits: number[]): ListNode | null {
  if (digits.length === 0) return null

  const head = new ListNode(digits[0])
  let current = head

  for (let i = 1; i < digits.length; i++) {
    current.next = new ListNode(digits[i])
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
function testAddTwoNumbers(
  l1: number[],
  l2: number[],
  expected: number[],
  description: string,
) {
  const list1 = createLinkedList(l1)
  const list2 = createLinkedList(l2)
  const result = addTwoNumbers(list1, list2)
  const resultArray = linkedListToArray(result)
  assertTest(JSON.stringify(resultArray), JSON.stringify(expected), description)
}

testAddTwoNumbers([2, 4, 3], [5, 6, 4], [7, 0, 8], "Example 1: 342 + 465 = 807")
testAddTwoNumbers([0], [0], [0], "Example 2: 0 + 0 = 0")
testAddTwoNumbers(
  [9, 9, 9, 9, 9, 9, 9],
  [9, 9, 9, 9],
  [8, 9, 9, 9, 0, 0, 0, 1],
  "Example 3: Carry propagation",
)
testAddTwoNumbers([1], [2], [3], "Single digits")
testAddTwoNumbers([5], [5], [0, 1], "Single digits with carry")
testAddTwoNumbers([1, 2], [3, 4], [4, 6], "Two digits each")
testAddTwoNumbers([9, 9], [1], [0, 0, 1], "Carry from two digits")
testAddTwoNumbers([1], [9, 9], [0, 0, 1], "Different lengths with carry")
testAddTwoNumbers(
  [2, 4, 3],
  [5, 6],
  [7, 0, 4],
  "Different lengths no final carry",
)
testAddTwoNumbers([1, 8], [0], [1, 8], "Adding zero")
testAddTwoNumbers([0], [1, 8], [1, 8], "Zero plus number")
testAddTwoNumbers([9], [9], [8, 1], "Single digit max carry")
testAddTwoNumbers(
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
  ],
  [5, 6, 4],
  [
    6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1,
  ],
  "Very long number",
)
testAddTwoNumbers(
  [7, 2, 4, 3],
  [5, 6, 4],
  [2, 9, 8, 3],
  "Four plus three digits",
)
testAddTwoNumbers([1, 1, 1], [2, 2, 2], [3, 3, 3], "No carries needed")
testAddTwoNumbers([5, 5, 5], [5, 5, 5], [0, 1, 1, 1], "All carries")
testAddTwoNumbers([9, 8, 7], [1, 2, 3], [0, 1, 1, 1], "Mixed carries")
testAddTwoNumbers(
  [1, 2, 3, 4],
  [9, 8, 7, 6],
  [0, 1, 1, 1, 1],
  "Four digit addition",
)
testAddTwoNumbers([6, 4, 6], [8, 4, 2], [4, 9, 8], "No final carry")
testAddTwoNumbers([3, 7], [9, 2], [2, 0, 1], "Two digit with carry")
testAddTwoNumbers([8, 1, 6], [7, 3, 1], [5, 5, 7], "Three digit no final carry")
testAddTwoNumbers([4, 2], [1, 3, 7], [5, 5, 7], "Unequal lengths")
testAddTwoNumbers([9, 1, 6], [1, 1, 1], [0, 3, 7], "Carry in middle")
testAddTwoNumbers([2, 3, 4], [1], [3, 3, 4], "Add to longer number")
testAddTwoNumbers([1], [2, 3, 4], [3, 3, 4], "Add shorter to longer")
testAddTwoNumbers([0, 0, 1], [0, 0, 2], [0, 0, 3], "Leading zeros equivalent")
testAddTwoNumbers([9, 9, 1], [1], [0, 0, 2], "Partial carry propagation")
testAddTwoNumbers(
  [5, 4, 3, 2, 1],
  [5, 4, 3, 2, 1],
  [0, 9, 6, 4, 2],
  "Identical numbers",
)
testAddTwoNumbers(
  [1, 1, 1, 1, 1],
  [9, 9, 9, 9, 9],
  [0, 1, 1, 1, 1, 1],
  "All carries needed",
)
testAddTwoNumbers(
  [7, 5, 9, 4, 6],
  [8, 4],
  [5, 0, 0, 5, 6],
  "Five plus two digits",
)
testAddTwoNumbers(
  [9, 7, 8],
  [6, 8, 5],
  [5, 6, 4, 1],
  "Three digits with final carry",
)
testAddTwoNumbers([4, 4, 4], [6, 6, 6], [0, 1, 1, 1], "Symmetric addition")
testAddTwoNumbers(
  [8, 2, 7, 3],
  [1, 7, 2],
  [9, 9, 9, 3],
  "Four plus three with carries",
)
testAddTwoNumbers(
  [1, 5, 9, 1, 2],
  [2, 5, 1, 9],
  [3, 0, 1, 1, 3],
  "Five plus four digits",
)


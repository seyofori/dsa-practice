import assertTest from "../assert-test"

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

/**
 * Given the head of a singly linked list, reverse the list and return the reversed list.
 *
 * Example:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Example:
 * Input: head = [1,2]
 * Output: [2,1]
 *
 * Example:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 * - The number of nodes in the list is the range [0, 5000].
 * - -5000 <= Node.val <= 5000
 *
 * @param head - The head of the singly linked list
 * @returns The head of the reversed linked list
 */
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let current = head
  let next = head?.next ?? null

  while (current !== null) {
    next = current.next
    current.next = prev
    prev = current
    current = next!
  }

  return prev
}

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null

  const head = new ListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return head
}

// Helper function to convert linked list to array for testing
function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = []
  let current = head

  while (current !== null) {
    result.push(current.val)
    current = current.next
  }

  return result
}

// Test cases - 30 comprehensive test cases covering all edge cases
assertTest(
  linkedListToArray(reverseList(createLinkedList([]))),
  [],
  "1. Reverse empty linked list",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([1]))),
  [1],
  "2. Reverse single node linked list",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([1, 2]))),
  [2, 1],
  "3. Reverse linked list with 2 nodes",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([1, 2, 3]))),
  [3, 2, 1],
  "4. Reverse linked list with 3 nodes",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([1, 2, 3, 4]))),
  [4, 3, 2, 1],
  "5. Reverse linked list with 4 nodes",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([1, 2, 3, 4, 5]))),
  [5, 4, 3, 2, 1],
  "6. Reverse linked list with 5 nodes",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([0]))),
  [0],
  "7. Reverse single node with zero",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([-1]))),
  [-1],
  "8. Reverse single node with negative value",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([5000]))),
  [5000],
  "9. Reverse single node with maximum constraint value",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([-5000]))),
  [-5000],
  "10. Reverse single node with minimum constraint value",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([-1, -2, -3]))),
  [-3, -2, -1],
  "11. Reverse linked list with all negative values",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([1, -1, 2, -2]))),
  [-2, 2, -1, 1],
  "12. Reverse linked list with mixed positive and negative",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([0, 0, 0]))),
  [0, 0, 0],
  "13. Reverse linked list with all zeros",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([5, 5, 5, 5]))),
  [5, 5, 5, 5],
  "14. Reverse linked list with identical positive values",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([-3, -3, -3]))),
  [-3, -3, -3],
  "15. Reverse linked list with identical negative values",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([1, 1, 2, 2, 3, 3]))),
  [3, 3, 2, 2, 1, 1],
  "16. Reverse linked list with paired duplicates",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([10, 20, 30, 40, 50]))),
  [50, 40, 30, 20, 10],
  "17. Reverse linked list with multiples of 10",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([100, 200, 300]))),
  [300, 200, 100],
  "18. Reverse linked list with larger values",
)

assertTest(
  linkedListToArray(
    reverseList(createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])),
  ),
  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  "19. Reverse longer linked list (10 nodes)",
)

assertTest(
  linkedListToArray(
    reverseList(createLinkedList([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])),
  ),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "20. Reverse already descending linked list",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([1, 3, 2, 5, 4]))),
  [4, 5, 2, 3, 1],
  "21. Reverse linked list with unsorted values",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([0, 1, 0, 1, 0]))),
  [0, 1, 0, 1, 0],
  "22. Reverse linked list with alternating zeros and ones",
)

assertTest(
  linkedListToArray(
    reverseList(createLinkedList([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])),
  ),
  [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5],
  "23. Reverse linked list with symmetric range around zero",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([42]))),
  [42],
  "24. Reverse single arbitrary value",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([1000, -1000]))),
  [-1000, 1000],
  "25. Reverse with extreme opposite values",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([1, 10, 100, 1000]))),
  [1000, 100, 10, 1],
  "26. Reverse with powers of 10",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([2, 4, 6, 8, 10, 12]))),
  [12, 10, 8, 6, 4, 2],
  "27. Reverse linked list with even numbers only",
)

assertTest(
  linkedListToArray(reverseList(createLinkedList([1, 3, 5, 7, 9, 11]))),
  [11, 9, 7, 5, 3, 1],
  "28. Reverse linked list with odd numbers only",
)

assertTest(
  linkedListToArray(
    reverseList(createLinkedList([5000, 4999, 4998, -4998, -4999, -5000])),
  ),
  [-5000, -4999, -4998, 4998, 4999, 5000],
  "29. Reverse with values near constraint boundaries",
)

assertTest(
  linkedListToArray(
    reverseList(
      createLinkedList([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]),
    ),
  ),
  [98, 91, 84, 77, 70, 63, 56, 49, 42, 35, 28, 21, 14, 7],
  "30. Reverse longer linked list with multiples of 7 (14 nodes)",
)


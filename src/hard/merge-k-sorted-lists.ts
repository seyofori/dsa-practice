import assertTest from "../assert-test"

/**
 * Merge k Sorted Lists
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * Example:
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 *
 * Time Complexity: O(N log k) where N is total number of nodes and k is number of lists
 * Space Complexity: O(1) for iterative approach, O(log k) for recursive divide and conquer
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // TODO: Implement the solution
  // Use divide and conquer approach

  if (!lists || lists.length === 0) return null

  // Helper function to merge two sorted lists
  function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null,
  ): ListNode | null {
    const dummy = new ListNode(0)
    let current = dummy

    while (l1 && l2) {
      if (l1.val <= l2.val) {
        current.next = l1
        l1 = l1.next
      } else {
        current.next = l2
        l2 = l2.next
      }
      current = current.next
    }

    current.next = l1 || l2
    return dummy.next
  }

  // Divide and conquer
  while (lists.length > 1) {
    const mergedLists: Array<ListNode | null> = []

    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i]
      const l2 = i + 1 < lists.length ? lists[i + 1] : null
      mergedLists.push(mergeTwoLists(l1, l2))
    }

    lists = mergedLists
  }

  return lists[0]
}

// Helper function to create linked list from array
function createList(arr: number[]): ListNode | null {
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
function listToArray(head: ListNode | null): number[] {
  const result: number[] = []
  let current = head
  while (current) {
    result.push(current.val)
    current = current.next
  }
  return result
}

// Test cases
const test1 = [createList([1, 4, 5]), createList([1, 3, 4]), createList([2, 6])]
assertTest(
  listToArray(mergeKLists(test1)),
  [1, 1, 2, 3, 4, 4, 5, 6],
  "Merge k lists - example case",
)

assertTest(listToArray(mergeKLists([])), [], "Merge k lists - empty array")

assertTest(
  listToArray(mergeKLists([null])),
  [],
  "Merge k lists - single null list",
)

const test4 = [createList([1]), createList([2]), createList([3])]
assertTest(
  listToArray(mergeKLists(test4)),
  [1, 2, 3],
  "Merge k lists - single elements",
)

const test5 = [createList([1, 2, 3])]
assertTest(
  listToArray(mergeKLists(test5)),
  [1, 2, 3],
  "Merge k lists - single list",
)

const test6 = [createList([]), createList([1]), createList([])]
assertTest(
  listToArray(mergeKLists(test6)),
  [1],
  "Merge k lists - empty lists mixed",
)

const test7 = [createList([1, 2, 4]), createList([1, 3, 4])]
assertTest(
  listToArray(mergeKLists(test7)),
  [1, 1, 2, 3, 4, 4],
  "Merge k lists - two lists",
)

const test8 = [createList([0]), createList([]), createList([1])]
assertTest(listToArray(mergeKLists(test8)), [0, 1], "Merge k lists - with zero")

const test9 = [createList([-1, 0, 1]), createList([-2, 2]), createList([-3, 3])]
assertTest(
  listToArray(mergeKLists(test9)),
  [-3, -2, -1, 0, 1, 2, 3],
  "Merge k lists - negative numbers",
)

const test10 = [
  createList([1, 4, 7]),
  createList([2, 5, 8]),
  createList([3, 6, 9]),
]
assertTest(
  listToArray(mergeKLists(test10)),
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "Merge k lists - interleaved",
)

const test11 = [createList([1]), createList([]), createList([2])]
assertTest(
  listToArray(mergeKLists(test11)),
  [1, 2],
  "Merge k lists - with empty list",
)

const test12 = [createList([5]), createList([1, 2, 4])]
assertTest(
  listToArray(mergeKLists(test12)),
  [1, 2, 4, 5],
  "Merge k lists - single vs multiple",
)

const test13 = [
  createList([1, 1, 1]),
  createList([2, 2, 2]),
  createList([3, 3, 3]),
]
assertTest(
  listToArray(mergeKLists(test13)),
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  "Merge k lists - duplicate values",
)

const test14 = [
  createList([10]),
  createList([1, 9]),
  createList([2, 8]),
  createList([3, 7]),
  createList([4, 6]),
  createList([5]),
]
assertTest(
  listToArray(mergeKLists(test14)),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "Merge k lists - many lists",
)

const test15 = [
  createList([1, 4, 5]),
  createList([1, 3, 4]),
  createList([2, 6]),
  createList([0, 7]),
]
assertTest(
  listToArray(mergeKLists(test15)),
  [0, 1, 1, 2, 3, 4, 4, 5, 6, 7],
  "Merge k lists - four lists",
)

const test16 = [
  createList([100]),
  createList([50, 150]),
  createList([25, 75, 125, 175]),
]
assertTest(
  listToArray(mergeKLists(test16)),
  [25, 50, 75, 100, 125, 150, 175],
  "Merge k lists - large numbers",
)

const test17 = [
  createList([-10, -5, 0]),
  createList([-8, -3, 2]),
  createList([-6, -1, 4]),
]
assertTest(
  listToArray(mergeKLists(test17)),
  [-10, -8, -6, -5, -3, -1, 0, 2, 4],
  "Merge k lists - mixed positive/negative",
)

const test18 = [createList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])]
assertTest(
  listToArray(mergeKLists(test18)),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "Merge k lists - single long list",
)

const test19 = [
  createList([1]),
  createList([1]),
  createList([1]),
  createList([1]),
]
assertTest(
  listToArray(mergeKLists(test19)),
  [1, 1, 1, 1],
  "Merge k lists - all same values",
)

const test20 = [
  createList([10, 20, 30]),
  createList([5, 15, 25]),
  createList([1, 11, 21, 31]),
]
assertTest(
  listToArray(mergeKLists(test20)),
  [1, 5, 10, 11, 15, 20, 21, 25, 30, 31],
  "Merge k lists - different lengths",
)

const test21 = [null, null, null]
assertTest(
  listToArray(mergeKLists(test21)),
  [],
  "Merge k lists - all null lists",
)

const test22 = [
  createList([2, 4, 6, 8]),
  createList([1, 3, 5, 7]),
  createList([9, 10, 11, 12]),
]
assertTest(
  listToArray(mergeKLists(test22)),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  "Merge k lists - even/odd pattern",
)

const test23 = [
  createList([0, 2, 4]),
  createList([1, 3, 5]),
  createList([6, 7, 8]),
]
assertTest(
  listToArray(mergeKLists(test23)),
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  "Merge k lists - sequential merge",
)

const test24 = [
  createList([1000]),
  createList([1]),
  createList([500]),
  createList([250]),
  createList([750]),
]
assertTest(
  listToArray(mergeKLists(test24)),
  [1, 250, 500, 750, 1000],
  "Merge k lists - scattered values",
)

const test25 = [
  createList([3, 6, 9]),
  createList([2, 4, 8]),
  createList([1, 5, 7]),
  createList([10]),
]
assertTest(
  listToArray(mergeKLists(test25)),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "Merge k lists - four different patterns",
)

const test26 = [createList([]), createList([]), createList([])]
assertTest(
  listToArray(mergeKLists(test26)),
  [],
  "Merge k lists - all empty lists",
)

const test27 = [createList([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])]
assertTest(
  listToArray(mergeKLists(test27)),
  [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
  "Merge k lists - single list with multiples of 5",
)

const test28 = [
  createList([-5, -3, -1]),
  createList([0]),
  createList([2, 4, 6]),
]
assertTest(
  listToArray(mergeKLists(test28)),
  [-5, -3, -1, 0, 2, 4, 6],
  "Merge k lists - negative to positive",
)

const test29 = [createList([1, 1]), createList([1, 1]), createList([1, 1])]
assertTest(
  listToArray(mergeKLists(test29)),
  [1, 1, 1, 1, 1, 1],
  "Merge k lists - all duplicates",
)

const test30 = [
  createList([999]),
  createList([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]),
]
assertTest(
  listToArray(mergeKLists(test30)),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 999],
  "Merge k lists - one single large, one long list",
)


import assertTest from "../assert-test"

/**
 * Same Tree (#100)
 *
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * Time Complexity: O(min(m, n)) where m and n are the number of nodes in each tree
 * Space Complexity: O(min(m, n)) for the recursion stack
 */

// Definition for a binary tree node
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // TODO: Implement the solution
  return false
}

// Helper function to create tree from array
function arrayToTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null

  const root = new TreeNode(arr[0])
  const queue: TreeNode[] = [root]
  let i = 1

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift()!

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i] as number)
      queue.push(node.left)
    }
    i++

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i] as number)
      queue.push(node.right)
    }
    i++
  }

  return root
}

// Test cases
function testSameTree(
  p: (number | null)[],
  q: (number | null)[],
  expected: boolean,
  description: string,
) {
  const tree1 = arrayToTree(p)
  const tree2 = arrayToTree(q)
  const result = isSameTree(tree1, tree2)
  assertTest(result, expected, description)
}

testSameTree([1, 2, 3], [1, 2, 3], true, "Example 1 - Same trees")
testSameTree([1, 2], [1, null, 2], false, "Example 2 - Different structure")
testSameTree([1, 2, 1], [1, 1, 2], false, "Example 3 - Different values")
testSameTree([], [], true, "Both empty trees")
testSameTree([1], [1], true, "Single node same")
testSameTree([1], [2], false, "Single node different")
testSameTree([1], [], false, "One empty one not")
testSameTree([], [1], false, "Empty vs single node")
testSameTree([1, 2], [1, 2], true, "Left child only same")
testSameTree([1, null, 2], [1, null, 2], true, "Right child only same")
testSameTree([1, 2], [1, null, 2], false, "Left vs right child")
testSameTree([1, 2, 3], [1, 3, 2], false, "Swapped children")
testSameTree(
  [5, 3, 8, 2, 4, 7, 9],
  [5, 3, 8, 2, 4, 7, 9],
  true,
  "Complex same tree",
)
testSameTree(
  [5, 3, 8, 2, 4, 7, 9],
  [5, 3, 8, 2, 4, 7, 10],
  false,
  "One value different",
)
testSameTree([1, 2, 3, 4], [1, 2, 3, 4], true, "Unbalanced same")
testSameTree([1, 2, 3, 4], [1, 2, 3, null, 4], false, "Different positions")
testSameTree([0], [0], true, "Zero values")
testSameTree([-1, -2, -3], [-1, -2, -3], true, "Negative values same")
testSameTree([-1, -2, -3], [-1, -3, -2], false, "Negative values different")
testSameTree([100, 50, 150], [100, 50, 150], true, "Large values same")
testSameTree([1, 1, 1], [1, 1, 1], true, "All same values")
testSameTree([1, 1, 1], [1, 1, 2], false, "One different in duplicates")
testSameTree(
  [3, 1, 4, null, 2],
  [3, 1, 4, null, 2],
  true,
  "With null nodes same",
)
testSameTree(
  [3, 1, 4, null, 2],
  [3, 1, 4, 2, null],
  false,
  "Null in different positions",
)
testSameTree(
  [50, 25, 75, 12, 37],
  [50, 25, 75, 12, 37],
  true,
  "Five nodes same",
)
testSameTree(
  [7, 3, 11, 1, 5, 9, 13],
  [7, 3, 11, 1, 5, 9, 13],
  true,
  "Perfect tree same",
)
testSameTree([42], [42], true, "Single meaningful number")
testSameTree(
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  true,
  "Seven nodes same",
)
testSameTree(
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 8],
  false,
  "Last node different",
)
testSameTree([10, 5, 15, 3, 7], [10, 5, 15, 3, 7], true, "BST structure same")
testSameTree(
  [20, 10, 30, null, null, 25, 35],
  [20, 10, 30, null, null, 25, 35],
  true,
  "With nulls same",
)
testSameTree(
  [1, null, 2, null, 3],
  [1, null, 2, null, 3],
  true,
  "Right skewed same",
)
testSameTree([1, 2, null, 3], [1, 2, null, 3], true, "Left skewed same")
testSameTree([8, 4, 12, 2, 6], [8, 4, 12, 2, 6], true, "Another BST same")


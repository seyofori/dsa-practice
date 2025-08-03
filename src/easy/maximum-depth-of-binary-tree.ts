import assertTest from "../assert-test"

/**
 * Maximum Depth of Binary Tree (#104)
 *
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 *
 * Time Complexity: O(n) where n is the number of nodes
 * Space Complexity: O(h) where h is the height of the tree (recursion stack)
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

function maxDepth(root: TreeNode | null): number {
  // TODO: Implement the solution
  return 0
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
function testMaxDepth(
  input: (number | null)[],
  expected: number,
  description: string,
) {
  const tree = arrayToTree(input)
  const result = maxDepth(tree)
  assertTest(result, expected, description)
}

testMaxDepth([3, 9, 20, null, null, 15, 7], 3, "Example 1")
testMaxDepth([1, null, 2], 2, "Example 2")
testMaxDepth([], 0, "Empty tree")
testMaxDepth([1], 1, "Single node")
testMaxDepth([1, 2], 2, "Left child only")
testMaxDepth([1, null, 2], 2, "Right child only")
testMaxDepth([1, 2, 3], 2, "Two children")
testMaxDepth([1, 2, 3, 4], 3, "Three levels left")
testMaxDepth([1, null, 2, null, 3], 3, "Right skewed")
testMaxDepth([1, 2, null, 3], 3, "Left skewed")
testMaxDepth([5, 3, 8, 2, 4, 7, 9], 3, "Balanced tree")
testMaxDepth([1, 2, 3, 4, 5, 6, 7], 3, "Perfect binary tree")
testMaxDepth([1, 2, 3, 4, 5, 6, 7, 8], 4, "Four levels")
testMaxDepth([0], 1, "Single zero")
testMaxDepth([-1, -2, -3], 2, "Negative values")
testMaxDepth([100, 50, 150], 2, "Large values")
testMaxDepth([1, 2, 3, 4, 5], 3, "Partial tree")
testMaxDepth([6, 3, 9, 1, 5, 7, 11], 3, "Another balanced")
testMaxDepth([1, 2, null, 3, null, null, null, 4], 4, "Deep left path")
testMaxDepth([1, null, 2, null, 3, null, 4], 4, "Deep right path")
testMaxDepth([20, 10, 30, 5, 15, 25, 35], 3, "Larger tree")
testMaxDepth([1, 1, 1], 2, "All same values")
testMaxDepth([3, 1, 4, null, 2], 3, "Missing left child")
testMaxDepth([3, 1, 4, 2, null], 3, "Missing right child")
testMaxDepth([50, 25, 75, 12, 37, 62, 87], 3, "Multi-level")
testMaxDepth([42], 1, "Single meaningful number")
testMaxDepth([7, 3, 11, 1, 5, 9, 13], 3, "Symmetric structure")
testMaxDepth(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  4,
  "Complete tree",
)
testMaxDepth([16, 8, 24, 4, 12, 20, 28], 3, "Powers and multiples")
testMaxDepth([55, 33, 77, 22, 44, 66, 88], 3, "Double digits")
testMaxDepth([123, 456, 789], 2, "Three digit numbers")
testMaxDepth([9, 5, 13, 2, 7, 11, 15], 3, "Odd numbers")
testMaxDepth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, "Sequential numbers")
testMaxDepth([10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8], 4, "Four level BST")


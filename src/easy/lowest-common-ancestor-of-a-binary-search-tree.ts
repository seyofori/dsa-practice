import assertTest from "../assert-test"

/**
 * Lowest Common Ancestor of a Binary Search Tree (#235)
 *
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes p and q
 * as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)."
 *
 * Time Complexity: O(h) where h is the height of the tree
 * Space Complexity: O(1) iterative, O(h) recursive
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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  // TODO: Implement the solution
  return null
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

// Helper function to find node by value
function findNode(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null
  if (root.val === val) return root

  const left = findNode(root.left, val)
  if (left) return left

  return findNode(root.right, val)
}

// Test cases
function testLCA(
  treeArr: (number | null)[],
  pVal: number,
  qVal: number,
  expectedVal: number,
  description: string,
) {
  const root = arrayToTree(treeArr)
  const p = findNode(root, pVal)
  const q = findNode(root, qVal)
  const result = lowestCommonAncestor(root, p, q)
  assertTest(result?.val, expectedVal, description)
}

testLCA(
  [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
  2,
  8,
  6,
  "Example 1 - Root is LCA",
)
testLCA(
  [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
  2,
  4,
  2,
  "Example 2 - One node is ancestor",
)
testLCA([2, 1], 2, 1, 2, "Example 3 - Simple case")
testLCA([1], 1, 1, 1, "Single node")
testLCA([2, 1, 3], 1, 3, 2, "Root between children")
testLCA([2, 1, 3], 1, 2, 2, "Parent and child")
testLCA([2, 1, 3], 2, 3, 2, "Parent and child right")
testLCA([5, 3, 7, 2, 4, 6, 8], 2, 4, 3, "Both in left subtree")
testLCA([5, 3, 7, 2, 4, 6, 8], 6, 8, 7, "Both in right subtree")
testLCA([5, 3, 7, 2, 4, 6, 8], 2, 8, 5, "Across subtrees")
testLCA([10, 5, 15, 3, 7, 12, 18], 3, 7, 5, "Left subtree LCA")
testLCA([10, 5, 15, 3, 7, 12, 18], 12, 18, 15, "Right subtree LCA")
testLCA([10, 5, 15, 3, 7, 12, 18], 3, 18, 10, "Far apart nodes")
testLCA([20, 10, 30, 5, 15, 25, 35], 5, 15, 10, "Left descendants")
testLCA([20, 10, 30, 5, 15, 25, 35], 25, 35, 30, "Right descendants")
testLCA([20, 10, 30, 5, 15, 25, 35], 5, 35, 20, "Extreme nodes")
testLCA([8, 4, 12, 2, 6, 10, 14], 2, 6, 4, "Grandchildren")
testLCA([8, 4, 12, 2, 6, 10, 14], 10, 14, 12, "Right grandchildren")
testLCA([8, 4, 12, 2, 6, 10, 14], 2, 14, 8, "Diagonal nodes")
testLCA([50, 25, 75, 12, 37, 62, 87], 12, 37, 25, "Complex left")
testLCA([50, 25, 75, 12, 37, 62, 87], 62, 87, 75, "Complex right")
testLCA([50, 25, 75, 12, 37, 62, 87], 12, 87, 50, "Complex far")
testLCA([100, 50, 150, 25, 75, 125, 175], 25, 75, 50, "Large values")
testLCA([7, 3, 11, 1, 5, 9, 13], 1, 5, 3, "Perfect BST left")
testLCA([7, 3, 11, 1, 5, 9, 13], 9, 13, 11, "Perfect BST right")
testLCA([7, 3, 11, 1, 5, 9, 13], 1, 13, 7, "Perfect BST extremes")
testLCA([42, 21, 63, 10, 31, 52, 73], 10, 31, 21, "Meaningful numbers")
testLCA([16, 8, 24, 4, 12, 20, 28], 4, 12, 8, "Powers pattern")
testLCA([9, 4, 14, 2, 6, 11, 17], 2, 6, 4, "Mixed pattern")
testLCA([60, 30, 90, 15, 45, 75, 105], 15, 45, 30, "Multiples of 15")
testLCA([40, 20, 80, 10, 30, 60, 100], 10, 30, 20, "Multiples of 10")
testLCA([64, 32, 96, 16, 48, 80, 112], 16, 48, 32, "Powers of 2")
testLCA([35, 17, 53, 8, 26, 44, 71], 8, 26, 17, "Prime-like numbers")


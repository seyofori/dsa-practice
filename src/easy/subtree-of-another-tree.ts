import assertTest from "../assert-test"

/**
 * Subtree of Another Tree (#572)
 *
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree
 * of root with the same structure and node values of subRoot and false otherwise.
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
 * The tree tree could also be considered as a subtree of itself.
 *
 * Time Complexity: O(m * n) where m and n are the number of nodes in each tree
 * Space Complexity: O(max(m, n)) for the recursion stack
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
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
function testSubtree(
  root: (number | null)[],
  subRoot: (number | null)[],
  expected: boolean,
  description: string,
) {
  const mainTree = arrayToTree(root)
  const subTree = arrayToTree(subRoot)
  const result = isSubtree(mainTree, subTree)
  assertTest(result, expected, description)
}

testSubtree([3, 4, 5, 1, 2], [4, 1, 2], true, "Example 1 - Valid subtree")
testSubtree(
  [3, 4, 5, 1, 2, null, null, null, null, 0],
  [4, 1, 2],
  false,
  "Example 2 - Not valid subtree",
)
testSubtree([1, 2, 3], [1, 2, 3], true, "Entire tree is subtree")
testSubtree([1], [1], true, "Single node same")
testSubtree([1], [2], false, "Single node different")
testSubtree([1, 2], [2], true, "Single node subtree")
testSubtree([1, 2], [3], false, "Single node not found")
testSubtree([], [1], false, "Empty root with subtree")
testSubtree([1], [], true, "Empty subtree")
testSubtree([], [], true, "Both empty")
testSubtree([1, 2, 3], [2], true, "Left child as subtree")
testSubtree([1, 2, 3], [3], true, "Right child as subtree")
testSubtree([1, 2, 3], [4], false, "Not found")
testSubtree([5, 3, 8, 2, 4, 7, 9], [3, 2, 4], true, "Left subtree found")
testSubtree([5, 3, 8, 2, 4, 7, 9], [8, 7, 9], true, "Right subtree found")
testSubtree([5, 3, 8, 2, 4, 7, 9], [3, 4, 2], false, "Wrong structure")
testSubtree([1, 2, 3, 4, 5], [2, 4, 5], true, "Partial left subtree")
testSubtree([1, 2, 3, 4, 5], [2, 4], false, "Incomplete subtree")
testSubtree([10, 5, 15, 3, 7, 12, 18], [5, 3, 7], true, "BST subtree")
testSubtree([10, 5, 15, 3, 7, 12, 18], [15, 12, 18], true, "Right BST subtree")
testSubtree([0, 1, 2], [1], true, "With zero values")
testSubtree([-1, -2, -3], [-2], true, "Negative values")
testSubtree([100, 50, 150, 25, 75], [50, 25, 75], true, "Large values")
testSubtree([1, 1, 1], [1], true, "Duplicate values found")
testSubtree([1, 1, 1], [1, 1], false, "Partial duplicate not match")
testSubtree([2, 1, 3, null, 4], [1, null, 4], true, "With null nodes")
testSubtree([2, 1, 3, null, 4], [1, 4], false, "Different null structure")
testSubtree([7, 3, 11, 1, 5, 9, 13], [11, 9, 13], true, "Perfect subtree")
testSubtree([20, 10, 30, 5, 15, 25, 35], [10, 5, 15], true, "Balanced subtree")
testSubtree([42, 21, 63], [21], true, "Simple case")
testSubtree([8, 4, 12, 2, 6, 10, 14], [4, 2, 6], true, "Deep left subtree")
testSubtree([8, 4, 12, 2, 6, 10, 14], [12, 10, 14], true, "Deep right subtree")
testSubtree([1, null, 2, null, 3], [2, null, 3], true, "Right skewed subtree")
testSubtree([1, 2, null, 3], [2, 3], false, "Left skewed mismatch")


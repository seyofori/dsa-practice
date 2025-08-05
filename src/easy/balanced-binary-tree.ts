import assertTest from "../assert-test"

/**
 * Balanced Binary Tree (#110)
 *
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as:
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
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

function isBalanced(root: TreeNode | null): boolean {
  return false;
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
function testBalanced(
  input: (number | null)[],
  expected: boolean,
  description: string,
) {
  const tree = arrayToTree(input)
  const result = isBalanced(tree)
  assertTest(result, expected, description)
}

testBalanced([3, 9, 20, null, null, 15, 7], true, "Example 1 - Balanced tree")
testBalanced(
  [1, 2, 2, 3, 3, null, null, 4, 4],
  false,
  "Example 2 - Unbalanced tree",
)
testBalanced([], true, "Empty tree")
testBalanced([1], true, "Single node")
testBalanced([1, 2], true, "Left child only")
testBalanced([1, null, 2], true, "Right child only")
testBalanced([1, 2, 3], true, "Two children")
testBalanced([1, 2, 3, 4], true, "Three levels balanced")
testBalanced([1, 2, 3, 4, 5, 6, 7], true, "Perfect binary tree")
testBalanced([1, 2, null, 3], false, "Height difference of 2")
testBalanced(
  [1, 2, null, 3, null, null, null, 4],
  false,
  "Height difference > 1",
)
testBalanced([1, null, 2, null, 3], false, "Right skewed unbalanced")
testBalanced(
  [
    1,
    2,
    null,
    3,
    null,
    null,
    null,
    4,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    5,
  ],
  false,
  "Deep left unbalanced",
)
testBalanced([5, 3, 8, 2, 4, 7, 9], true, "Balanced BST")
testBalanced([10, 5, 15, 3, 7, 12, 18], true, "Another balanced BST")
testBalanced([1, 2, 3, 4, 5], true, "Partial tree balanced")
testBalanced([0], true, "Single zero")
testBalanced([-1, -2, -3], true, "Negative values balanced")
testBalanced([100, 50, 150], true, "Large values balanced")
testBalanced([1, 1, 1], true, "All same values")
testBalanced([2, 1, 3, null, null, null, 4], true, "Missing nodes but balanced")
testBalanced([1, 2, 3, 4, null, null, 5], true, "Mixed missing nodes")
testBalanced([6, 3, 9, 1, 5, 7, 11], true, "Perfect tree balanced")
testBalanced([20, 10, 30, 5, 15, 25, 35], true, "Larger balanced tree")
testBalanced([42], true, "Single meaningful number")
testBalanced([7, 3, 11, 1, 5], true, "Incomplete but balanced")
testBalanced([8, 4, 12, 2, 6, 10, 14], true, "Complete balanced")
testBalanced([50, 25, 75, 12, 37, 62, 87], true, "Multi-level balanced")
testBalanced(
  [1, 2, 2, 3, null, null, 3, 4, null, null, 4],
  false,
  "Symmetric but unbalanced",
)
testBalanced([16, 8, 24, 4, 12], true, "Powers pattern balanced")
testBalanced([9, 5, 13, 2, 7, 11, 15], true, "Odd numbers balanced")
testBalanced([64, 32, 96, 16, 48, 80, 112], true, "Powers of 2 balanced")
testBalanced([35, 17, 53, 8, 26], true, "Prime-like balanced")
testBalanced(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  true,
  "Complete tree balanced",
)
testBalanced([1, 2, 3, 4, 5, 6, null, 8], true, "Almost complete balanced")

//

// function isBalanced(root: TreeNode | null): boolean {
//   // TODO: Implement the solution
//   // a tree is balanced if it's right and left sub-trees are balanced
//   if (root === null) return true

//   function height(node: TreeNode | null): number {
//     if (node === null) return 0

//     const left = height(node.left)
//     if (left === -1) return -1

//     const right = height(node.right)
//     if (right === -1) return -1

//     if (Math.abs(left - right) > 1) return -1

//     return Math.max(left, right) + 1
//     // height of a tree = height of its tallest subtree + 1
//     // for the sake of efficiency, we want to add in a simple way to determine if a
//     // subtree is unbalanced

//     // we'll use -1 as that signal

//     // so first, if the node itself is empty, that means this tree has a height of 0

//     // then we check the height of its subtrees.
//     // if the height of left is -1, means its unbalanced, therefore the whole tree is
//     // unbalanced. no need to check further
//     // same for right

//     // however, if it's a balanced valid number, then we return its height + root node
//     // ie height(subtree) + 1

//     // if node is empty, return height of 0
//     // if the tree is unbalanced, return -1
//     // if the tree is balanced, return the height
//   }

//   return height(root) !== -1

//   // if height of left is -1, or height of right is -1, return false
//   // else return left - right > 1
//   // return false

// }
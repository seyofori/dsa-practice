import assertTest from "../assert-test"

/**
 * Invert Binary Tree (#226)
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 * Inverting means swapping the left and right children of all nodes.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is the height of the tree
 */

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

function invertTree(root: TreeNode | null): TreeNode | null {
  // TODO: Implement the solution
  return null
}

// Helper functions for testing
function createTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null

  const root = new TreeNode(arr[0])
  const queue = [root]
  let i = 1

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift()!

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]!)
      queue.push(node.left)
    }
    i++

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]!)
      queue.push(node.right)
    }
    i++
  }

  return root
}

function treeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return []

  const result: (number | null)[] = []
  const queue: (TreeNode | null)[] = [root]

  while (queue.length > 0) {
    const node = queue.shift()

    if (node) {
      result.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      result.push(null)
    }
  }

  // Remove trailing nulls
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop()
  }

  return result
}

// Test cases
assertTest(treeToArray(invertTree(null)), [], "Empty tree")
assertTest(treeToArray(invertTree(createTree([1]))), [1], "Single node")
assertTest(
  treeToArray(invertTree(createTree([1, 2, 3]))),
  [1, 3, 2],
  "Simple tree",
)
assertTest(
  treeToArray(invertTree(createTree([4, 2, 7, 1, 3, 6, 9]))),
  [4, 7, 2, 9, 6, 3, 1],
  "Classic example",
)
assertTest(
  treeToArray(invertTree(createTree([1, 2, null]))),
  [1, null, 2],
  "Left only child",
)
assertTest(
  treeToArray(invertTree(createTree([1, null, 2]))),
  [1, 2],
  "Right only child",
)
assertTest(
  treeToArray(invertTree(createTree([1, 2, 3, 4, 5]))),
  [1, 3, 2, null, null, 5, 4],
  "Partial tree",
)
assertTest(
  treeToArray(invertTree(createTree([1, 2, 3, 4, 5, 6, 7]))),
  [1, 3, 2, 7, 6, 5, 4],
  "Perfect tree",
)
assertTest(
  treeToArray(invertTree(createTree([2, 1, 3]))),
  [2, 3, 1],
  "BST root",
)
assertTest(
  treeToArray(invertTree(createTree([5, 3, 8, 2, 4, 7, 9]))),
  [5, 8, 3, 9, 7, 4, 2],
  "BST example",
)
assertTest(
  treeToArray(invertTree(createTree([10, 5, 15, null, 6, 12, 21]))),
  [10, 15, 5, 21, 12, 6],
  "Sparse tree",
)
assertTest(
  treeToArray(invertTree(createTree([0, -1, 1]))),
  [0, 1, -1],
  "Negative values",
)
assertTest(
  treeToArray(invertTree(createTree([100, 50, 200]))),
  [100, 200, 50],
  "Large values",
)
assertTest(
  treeToArray(invertTree(createTree([1, 2, 2, 3, 3, 3, 3]))),
  [1, 2, 2, 3, 3, 3, 3],
  "Symmetric tree",
)
assertTest(
  treeToArray(invertTree(createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]))),
  [6, 8, 2, 9, 7, 4, 0, null, null, 5, 3],
  "Complex tree",
)
assertTest(
  treeToArray(invertTree(createTree([1, null, 2, null, 3]))),
  [1, 2, null, 3],
  "Right skewed",
)
assertTest(
  treeToArray(invertTree(createTree([3, 2, null, 1]))),
  [3, null, 2, null, 1],
  "Left skewed",
)
assertTest(
  treeToArray(invertTree(createTree([1, 2, 3, null, 4, null, 5]))),
  [1, 3, 2, 5, null, 4],
  "Zigzag pattern",
)
assertTest(
  treeToArray(invertTree(createTree([50, 25, 75, 10, 30, 60, 80]))),
  [50, 75, 25, 80, 60, 30, 10],
  "Balanced BST",
)
assertTest(
  treeToArray(invertTree(createTree([7, 3, 11, 1, 5, 9, 13]))),
  [7, 11, 3, 13, 9, 5, 1],
  "Another BST",
)
assertTest(
  treeToArray(invertTree(createTree([42, 21, 84]))),
  [42, 84, 21],
  "Multiples pattern",
)
assertTest(
  treeToArray(invertTree(createTree([1, 2, 3, 4, null, null, 7, 8]))),
  [1, 3, 2, 7, null, null, 4, null, 8],
  "Uneven tree",
)
assertTest(
  treeToArray(invertTree(createTree([9, 6, 12, 3, 7, 10, 15]))),
  [9, 12, 6, 15, 10, 7, 3],
  "Descending root",
)
assertTest(
  treeToArray(invertTree(createTree([20, 10, 30, 5, 15, 25, 35]))),
  [20, 30, 10, 35, 25, 15, 5],
  "Multiples of 5",
)
assertTest(
  treeToArray(
    invertTree(createTree([8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15])),
  ),
  [8, 12, 4, 15, 13, 11, 9, 7, 5, 3, 1, 14, 10, 6, 2],
  "Large perfect tree",
)
assertTest(
  treeToArray(invertTree(createTree([16, 8, 24, 4, 12, 20, 28]))),
  [16, 24, 8, 28, 20, 12, 4],
  "Powers of 4",
)
assertTest(
  treeToArray(invertTree(createTree([100]))),
  [100],
  "Single large value",
)
assertTest(
  treeToArray(invertTree(createTree([-5, -10, -1, -15, -8, -3, 0]))),
  [-5, -1, -10, 0, -3, -8, -15],
  "Negative tree",
)
assertTest(
  treeToArray(invertTree(createTree([77, 33, 99, 11, 55, 88, 111]))),
  [77, 99, 33, 111, 88, 55, 11],
  "Random numbers",
)
assertTest(
  treeToArray(
    invertTree(
      createTree([
        64, 32, 96, 16, 48, 80, 112, 8, 24, 40, 56, 72, 88, 104, 120,
      ]),
    ),
  ),
  [64, 96, 32, 120, 104, 88, 72, 56, 40, 24, 8, 112, 80, 48, 16],
  "Powers of 8 pattern",
)


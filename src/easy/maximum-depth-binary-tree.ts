import assertTest from "../assert-test"

/**
 * Maximum Depth of Binary Tree (#104)
 *
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
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

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

// Helper function to create test trees
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

// Test cases
assertTest(maxDepth(null), 0, "Empty tree")
assertTest(maxDepth(createTree([1])), 1, "Single node")
assertTest(
  maxDepth(createTree([3, 9, 20, null, null, 15, 7])),
  3,
  "Basic tree depth 3",
)
assertTest(maxDepth(createTree([1, null, 2])), 2, "Right skewed tree")
assertTest(maxDepth(createTree([1, 2, null])), 2, "Left skewed tree")
assertTest(maxDepth(createTree([1, 2, 3])), 2, "Complete binary tree depth 2")
assertTest(
  maxDepth(createTree([1, 2, 3, 4, 5])),
  3,
  "Complete binary tree depth 3",
)
assertTest(
  maxDepth(createTree([1, 2, 3, 4, 5, 6, 7])),
  3,
  "Perfect binary tree",
)
assertTest(maxDepth(createTree([1, 2, null, 3, null, 4])), 4, "Left deep tree")
assertTest(
  maxDepth(createTree([1, null, 2, null, 3, null, 4])),
  4,
  "Right deep tree",
)
assertTest(
  maxDepth(createTree([5, 4, 8, 11, null, 13, 4, 7, 2])),
  4,
  "Unbalanced tree",
)
assertTest(maxDepth(createTree([1, 2, 2, 3, 3, 3, 3])), 3, "Symmetric tree")
assertTest(
  maxDepth(createTree([1, 2, 2, 3, null, null, 3, 4, null, null, 4])),
  4,
  "Complex symmetric",
)
assertTest(maxDepth(createTree([0, -1, 1])), 2, "Tree with negative values")
assertTest(
  maxDepth(createTree([100, 50, 150, 25, 75, 125, 175])),
  3,
  "Large values tree",
)
assertTest(maxDepth(createTree([1, 2, 3, 4, null, null, 5])), 3, "Partial tree")
assertTest(maxDepth(createTree([1, 2, 3, null, 4, null, 5])), 3, "Zigzag tree")
assertTest(
  maxDepth(createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])),
  4,
  "BST structure",
)
assertTest(maxDepth(createTree([1, 2, 2, 3, 4, 4, 3])), 3, "Another symmetric")
assertTest(
  maxDepth(createTree([1, 2, 3, 4, 5, 6, 7, 8])),
  4,
  "Left heavy complete",
)
assertTest(maxDepth(createTree([10, 5, 15, null, 6, 12, 21])), 3, "Sparse tree")
assertTest(maxDepth(createTree([3, 1, 4, null, 2])), 3, "Small unbalanced")
assertTest(
  maxDepth(createTree([2, 1, 3, null, null, null, 4, null, 5])),
  4,
  "Right branch deep",
)
assertTest(
  maxDepth(createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])),
  4,
  "Perfect tree depth 4",
)
assertTest(
  maxDepth(createTree([50, 30, 70, 20, 40, 60, 80, 10])),
  4,
  "BST example",
)
assertTest(
  maxDepth(createTree([0, null, 1, null, 2, null, 3, null, 4, null, 5])),
  6,
  "Linked list structure",
)
assertTest(
  maxDepth(createTree([7, 3, 11, 1, 5, 9, 13, null, 2, 4, 6, 8, 10, 12, 14])),
  4,
  "Complete BST",
)
assertTest(
  maxDepth(createTree([1, 2, 3, 4, null, 6, 7, 8, 9, null, null, 12, 13])),
  4,
  "Complex structure",
)
assertTest(
  maxDepth(createTree([100, 50, 200, 25, 75, 150, 300])),
  3,
  "Wide range values",
)
assertTest(maxDepth(createTree([42])), 1, "Answer to everything")
assertTest(maxDepth(createTree([-10, -20, -5])), 2, "All negative tree")

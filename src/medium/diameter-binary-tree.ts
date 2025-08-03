import assertTest from "../assert-test"

/**
 * Diameter of Binary Tree (#543)
 *
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  // TODO: Implement the solution
  return 0
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
assertTest(diameterOfBinaryTree(null), 0, "Empty tree")
assertTest(diameterOfBinaryTree(createTree([1])), 0, "Single node")
assertTest(
  diameterOfBinaryTree(createTree([1, 2, 3, 4, 5])),
  3,
  "Classic example",
)
assertTest(diameterOfBinaryTree(createTree([1, 2])), 1, "Two nodes")
assertTest(
  diameterOfBinaryTree(createTree([1, 2, 3])),
  2,
  "Three nodes - diameter through root",
)
assertTest(diameterOfBinaryTree(createTree([1, null, 2])), 1, "Right skewed")
assertTest(diameterOfBinaryTree(createTree([1, 2, null])), 1, "Left skewed")
assertTest(
  diameterOfBinaryTree(createTree([1, 2, 3, 4, 5, 6, 7])),
  4,
  "Perfect binary tree",
)
assertTest(
  diameterOfBinaryTree(createTree([1, 2, null, 3, null, null, null, 4])),
  3,
  "Left chain",
)
assertTest(
  diameterOfBinaryTree(createTree([1, null, 2, null, 3, null, 4])),
  3,
  "Right chain",
)
assertTest(
  diameterOfBinaryTree(createTree([4, 2, 6, 1, 3, 5, 7])),
  4,
  "Balanced BST",
)
assertTest(
  diameterOfBinaryTree(createTree([1, 2, 3, null, 4, null, 5])),
  3,
  "Partial tree",
)
assertTest(
  diameterOfBinaryTree(createTree([5, 4, 8, 11, null, 13, 4, 7, 2])),
  4,
  "Unbalanced tree",
)
assertTest(
  diameterOfBinaryTree(createTree([1, 2, 3, 4, null, null, 5, 6])),
  4,
  "Diameter not through root",
)
assertTest(
  diameterOfBinaryTree(createTree([1, 2, 2, 3, 3, 3, 3])),
  4,
  "Symmetric tree",
)
assertTest(
  diameterOfBinaryTree(createTree([10, 5, 15, null, 6, 12, 21])),
  4,
  "Sparse tree",
)
assertTest(
  diameterOfBinaryTree(createTree([3, 1, 4, null, 2])),
  2,
  "Small unbalanced",
)
assertTest(
  diameterOfBinaryTree(createTree([1, 2, 3, 4, 5, 6, 7, 8, 9])),
  5,
  "Left heavy tree",
)
assertTest(diameterOfBinaryTree(createTree([0, -1, 1])), 2, "Negative values")
assertTest(diameterOfBinaryTree(createTree([100, 50, 200])), 2, "Large values")
assertTest(
  diameterOfBinaryTree(
    createTree([1, 2, 3, 4, null, null, 5, 6, null, null, 7]),
  ),
  5,
  "Complex tree",
)
assertTest(
  diameterOfBinaryTree(createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])),
  5,
  "BST with deep leaves",
)
assertTest(
  diameterOfBinaryTree(createTree([2, 1, 3, null, null, null, 4, null, 5])),
  3,
  "Right branch",
)
assertTest(
  diameterOfBinaryTree(
    createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  ),
  6,
  "Perfect tree depth 4",
)
assertTest(
  diameterOfBinaryTree(
    createTree([50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45]),
  ),
  6,
  "Wider BST",
)
assertTest(
  diameterOfBinaryTree(createTree([1, 2, null, 3, null, 4, null, 5])),
  4,
  "Deep left chain",
)
assertTest(
  diameterOfBinaryTree(
    createTree([7, 3, 11, 1, 5, 9, 13, null, 2, 4, 6, 8, 10, 12, 14]),
  ),
  6,
  "Complete BST",
)
assertTest(
  diameterOfBinaryTree(createTree([42, 21, 84, 10, 30, 50, 100])),
  4,
  "Balanced example",
)
assertTest(
  diameterOfBinaryTree(
    createTree([9, 6, 12, 3, 7, 10, 15, 1, 4, null, 8, null, 11, 13, 18]),
  ),
  6,
  "Complex structure",
)
assertTest(
  diameterOfBinaryTree(createTree([16, 8, 24, 4, 12, 20, 28, 2, 6, 10, 14])),
  6,
  "Deep balanced",
)
assertTest(
  diameterOfBinaryTree(
    createTree([64, 32, 96, 16, 48, 80, 112, 8, 24, 40, 56, 72, 88, 104, 120]),
  ),
  8,
  "Large perfect tree",
)


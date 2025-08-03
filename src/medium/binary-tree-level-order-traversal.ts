import assertTest from "../assert-test"

/**
 * Binary Tree Level Order Traversal (#102)
 *
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 *
 * Time Complexity: O(n)
 * Space Complexity: O(w) where w is the maximum width of the tree
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

function levelOrder(root: TreeNode | null): number[][] {
  // TODO: Implement the solution
  return []
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
assertTest(levelOrder(null), [], "Empty tree")
assertTest(levelOrder(createTree([1])), [[1]], "Single node")
assertTest(
  levelOrder(createTree([3, 9, 20, null, null, 15, 7])),
  [[3], [9, 20], [15, 7]],
  "Classic example",
)
assertTest(
  levelOrder(createTree([1, 2, 3])),
  [[1], [2, 3]],
  "Simple three nodes",
)
assertTest(levelOrder(createTree([1, null, 2])), [[1], [2]], "Right skewed")
assertTest(levelOrder(createTree([1, 2, null])), [[1], [2]], "Left skewed")
assertTest(
  levelOrder(createTree([1, 2, 3, 4, 5])),
  [[1], [2, 3], [4, 5]],
  "Partial tree",
)
assertTest(
  levelOrder(createTree([1, 2, 3, 4, 5, 6, 7])),
  [[1], [2, 3], [4, 5, 6, 7]],
  "Perfect binary tree",
)
assertTest(
  levelOrder(createTree([5, 4, 8, 11, null, 13, 4, 7, 2])),
  [[5], [4, 8], [11, 13, 4], [7, 2]],
  "Unbalanced tree",
)
assertTest(
  levelOrder(createTree([2, 1, 3, null, null, null, 4])),
  [[2], [1, 3], [4]],
  "Right child only at level 2",
)
assertTest(
  levelOrder(createTree([4, 2, 6, 1, 3, 5, 7])),
  [[4], [2, 6], [1, 3, 5, 7]],
  "Balanced BST",
)
assertTest(
  levelOrder(createTree([10, 5, 15, null, 6, 12, 21])),
  [[10], [5, 15], [6, 12, 21]],
  "Sparse tree",
)
assertTest(
  levelOrder(createTree([0, -1, 1])),
  [[0], [-1, 1]],
  "Negative values",
)
assertTest(
  levelOrder(createTree([100, 50, 200])),
  [[100], [50, 200]],
  "Large values",
)
assertTest(
  levelOrder(createTree([1, 2, 2, 3, 3, 3, 3])),
  [[1], [2, 2], [3, 3, 3, 3]],
  "Symmetric tree",
)
assertTest(
  levelOrder(createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])),
  [[6], [2, 8], [0, 4, 7, 9], [3, 5]],
  "Complex BST",
)
assertTest(
  levelOrder(createTree([1, 2, null, 3, null, 4])),
  [[1], [2], [3], [4]],
  "Left chain",
)
assertTest(
  levelOrder(createTree([1, null, 2, null, 3, null, 4])),
  [[1], [2], [3], [4]],
  "Right chain",
)
assertTest(
  levelOrder(createTree([50, 30, 70, 20, 40, 60, 80])),
  [[50], [30, 70], [20, 40, 60, 80]],
  "Perfect BST",
)
assertTest(
  levelOrder(createTree([1, 2, 3, 4, null, 6, 7, 8, 9])),
  [[1], [2, 3], [4, 6, 7], [8, 9]],
  "Irregular tree",
)
assertTest(
  levelOrder(createTree([7, 3, 11, 1, 5, 9, 13])),
  [[7], [3, 11], [1, 5, 9, 13]],
  "BST example",
)
assertTest(levelOrder(createTree([42])), [[42]], "Single large value")
assertTest(
  levelOrder(createTree([1, 2, 3, null, 4, null, 5, null, 6])),
  [[1], [2, 3], [4, 5], [6]],
  "Zigzag pattern",
)
assertTest(
  levelOrder(
    createTree([25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]),
  ),
  [[25], [15, 50], [10, 22, 35, 70], [4, 12, 18, 24, 31, 44, 66, 90]],
  "Large perfect tree",
)
assertTest(
  levelOrder(createTree([16, 8, 24, 4, 12, 20, 28])),
  [[16], [8, 24], [4, 12, 20, 28]],
  "Powers pattern",
)
assertTest(
  levelOrder(createTree([9, 6, 12, 3, 7, 10, 15, 1, 4, null, 8])),
  [[9], [6, 12], [3, 7, 10, 15], [1, 4, 8]],
  "Uneven levels",
)
assertTest(
  levelOrder(createTree([64, 32, 96, 16, 48, 80, 112, 8, 24, 40, 56])),
  [[64], [32, 96], [16, 48, 80, 112], [8, 24, 40, 56]],
  "Powers of 2",
)
assertTest(
  levelOrder(createTree([100, 50, 150, 25, 75, 125, 175, 12, 37, 62, 87])),
  [[100], [50, 150], [25, 75, 125, 175], [12, 37, 62, 87]],
  "Multiples pattern",
)
assertTest(
  levelOrder(
    createTree([36, 18, 54, 9, 27, 45, 63, 4, 13, 22, 31, 40, 49, 58, 67]),
  ),
  [[36], [18, 54], [9, 27, 45, 63], [4, 13, 22, 31, 40, 49, 58, 67]],
  "Multiples of 9",
)
assertTest(
  levelOrder(createTree([81, 27, 243, 9, 81, 162, 324])),
  [[81], [27, 243], [9, 81, 162, 324]],
  "Powers of 3",
)
assertTest(
  levelOrder(createTree([77, 33, 121, 11, 55, 99, 143])),
  [[77], [33, 121], [11, 55, 99, 143]],
  "Random pattern",
)


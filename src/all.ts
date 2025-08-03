// Utility assert
function assertTest(actual: any, expected: any, message: string) {
  const pass = JSON.stringify(actual) === JSON.stringify(expected)
  if (!pass) {
    console.error(
      `❌ ${message} | Expected: ${JSON.stringify(
        expected
      )}, Got: ${JSON.stringify(actual)}`
    )
  } else {
    console.log(`✅ ${message}`)
  }
}








/** 9. Kth Largest Element */
function findKthLargest(nums: number[], k: number): number {
  return 0
}
assertTest(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5, "Kth largest element")

/** 10. Search in Rotated Sorted Array */
function search(nums: number[], target: number): number {
  return -1
}
assertTest(search([4, 5, 6, 7, 0, 1, 2], 0), 4, "Search in rotated array")

/** 11. Merge Intervals */
function merge(intervals: number[][]): number[][] {
  return []
}
assertTest(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
  [
    [1, 6],
    [8, 10],
    [15, 18],
  ],
  "Merge overlapping intervals"
)

/** 12. Group Anagrams */
function groupAnagrams(strs: string[]): string[][] {
  return []
}
assertTest(
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]).length,
  3,
  "Group anagrams"
)

/** 13. Top K Frequent Elements */
function topKFrequent(nums: number[], k: number): number[] {
  return []
}
assertTest(
  topKFrequent([1, 1, 1, 2, 2, 3], 2).sort(),
  [1, 2],
  "Top K frequent elements"
)

/** 14. Longest Consecutive Sequence */
function longestConsecutive(nums: number[]): number {
  return 0
}
assertTest(longestConsecutive([100, 4, 200, 1, 3, 2]), 4, "Longest consecutive")

/** 15. Binary Tree Level Order Traversal */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0
    this.left = left ?? null
    this.right = right ?? null
  }
}
function levelOrder(root: TreeNode | null): number[][] {
  return []
}
assertTest(
  levelOrder(new TreeNode(1, null, new TreeNode(2))),
  [[1], [2]],
  "Level order basic"
)

/** 16. Lowest Common Ancestor of BST */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  return null
}

/** 17. Clone Graph */
class Node_ {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val ?? 0
    this.neighbors = neighbors ?? []
  }
}
function cloneGraph(node: Node | null): Node | null {
  return null
}

/** 18. Climbing Stairs */
function climbStairs(n: number): number {
  return 0
}
assertTest(climbStairs(2), 2, "Climb stairs basic")
assertTest(climbStairs(3), 3, "Climb stairs 3 steps")

/** 19. House Robber */
function rob(nums: number[]): number {
  return 0
}
assertTest(rob([1, 2, 3, 1]), 4, "House Robber case")

/** 20. Edit Distance */
function minDistance(word1: string, word2: string): number {
  return 0
}
assertTest(minDistance("horse", "ros"), 3, "Edit distance basic")


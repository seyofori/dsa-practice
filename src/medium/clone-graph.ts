import assertTest from "../assert-test"

/**
 * Clone Graph (#133)
 *
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 *
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 *
 * Time Complexity: O(V + E) where V is vertices and E is edges
 * Space Complexity: O(V) for the hash map and recursion stack
 */

class Node {
  val: number
  neighbors: Node[]

  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}

function cloneGraph(node: Node | null): Node | null {
  // TODO: Implement the solution
  return null
}

// Helper function to create graph from adjacency list
function createGraph(adjList: number[][]): Node | null {
  if (adjList.length === 0) return null

  const nodes: Node[] = []
  for (let i = 0; i < adjList.length; i++) {
    nodes.push(new Node(i + 1))
  }

  for (let i = 0; i < adjList.length; i++) {
    for (const neighbor of adjList[i]) {
      nodes[i].neighbors.push(nodes[neighbor - 1])
    }
  }

  return nodes[0]
}

// Helper function to convert graph to adjacency list for testing
function graphToAdjList(node: Node | null): number[][] {
  if (!node) return []

  const visited = new Set<Node>()
  const nodeMap = new Map<Node, number>()
  const result: number[][] = []

  // First pass: assign numbers to nodes
  function assignNumbers(current: Node): void {
    if (visited.has(current)) return
    visited.add(current)
    nodeMap.set(current, current.val)

    for (const neighbor of current.neighbors) {
      assignNumbers(neighbor)
    }
  }

  assignNumbers(node)

  // Second pass: build adjacency list
  visited.clear()
  function buildAdjList(current: Node): void {
    if (visited.has(current)) return
    visited.add(current)

    const currentNum = nodeMap.get(current)!
    if (!result[currentNum - 1]) {
      result[currentNum - 1] = []
    }

    for (const neighbor of current.neighbors) {
      const neighborNum = nodeMap.get(neighbor)!
      result[currentNum - 1].push(neighborNum)
      buildAdjList(neighbor)
    }
  }

  buildAdjList(node)

  // Sort each adjacency list for consistent testing
  for (let i = 0; i < result.length; i++) {
    if (result[i]) {
      result[i].sort((a, b) => a - b)
    }
  }

  return result
}

// Test cases
assertTest(graphToAdjList(cloneGraph(null)), [], "Empty graph")
assertTest(
  graphToAdjList(cloneGraph(createGraph([[]]))),
  [[]],
  "Single node with no neighbors",
)
assertTest(
  graphToAdjList(cloneGraph(createGraph([[2], [1]]))),
  [[2], [1]],
  "Two nodes connected",
)
assertTest(
  graphToAdjList(
    cloneGraph(
      createGraph([
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
      ]),
    ),
  ),
  [
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ],
  "Classic 4-node example",
)
assertTest(
  graphToAdjList(
    cloneGraph(
      createGraph([
        [2, 3],
        [1, 3],
        [1, 2],
      ]),
    ),
  ),
  [
    [2, 3],
    [1, 3],
    [1, 2],
  ],
  "Triangle graph",
)
assertTest(
  graphToAdjList(cloneGraph(createGraph([[2], [1], []]))),
  [[2], [1], []],
  "Three nodes, two connected",
)
assertTest(
  graphToAdjList(cloneGraph(createGraph([[2, 3], [1], [1]]))),
  [[2, 3], [1], [1]],
  "Star graph with 3 nodes",
)
assertTest(
  graphToAdjList(cloneGraph(createGraph([[2, 3, 4], [1], [1], [1]]))),
  [[2, 3, 4], [1], [1], [1]],
  "Star graph with 4 nodes",
)
assertTest(
  graphToAdjList(cloneGraph(createGraph([[2], [3], [4], []]))),
  [[2], [3], [4], []],
  "Linear chain",
)
assertTest(
  graphToAdjList(cloneGraph(createGraph([[2], [3], [4], [1]]))),
  [[2], [3], [4], [1]],
  "Cycle of 4",
)
assertTest(
  graphToAdjList(cloneGraph(createGraph([[2], [3], [1]]))),
  [[2], [3], [1]],
  "Cycle of 3",
)
assertTest(
  graphToAdjList(
    cloneGraph(
      createGraph([
        [2, 3],
        [1, 4],
        [1, 4],
        [2, 3],
      ]),
    ),
  ),
  [
    [2, 3],
    [1, 4],
    [1, 4],
    [2, 3],
  ],
  "Complete bipartite graph K2,2",
)
assertTest(
  graphToAdjList(
    cloneGraph(
      createGraph([
        [2, 3, 4],
        [1, 3, 4],
        [1, 2, 4],
        [1, 2, 3],
      ]),
    ),
  ),
  [
    [2, 3, 4],
    [1, 3, 4],
    [1, 2, 4],
    [1, 2, 3],
  ],
  "Complete graph K4",
)
assertTest(
  graphToAdjList(
    cloneGraph(
      createGraph([
        [2, 5],
        [1, 3],
        [2, 4],
        [3, 5],
        [1, 4],
      ]),
    ),
  ),
  [
    [2, 5],
    [1, 3],
    [2, 4],
    [3, 5],
    [1, 4],
  ],
  "Pentagon cycle",
)
assertTest(
  graphToAdjList(
    cloneGraph(
      createGraph([
        [2, 6],
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 6],
        [1, 5],
      ]),
    ),
  ),
  [
    [2, 6],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
    [1, 5],
  ],
  "Hexagon cycle",
)
assertTest(
  graphToAdjList(
    cloneGraph(createGraph([[2, 3], [1, 4, 5], [1, 5], [2], [2, 3]])),
  ),
  [[2, 3], [1, 4, 5], [1, 5], [2], [2, 3]],
  "Complex connected graph",
)
assertTest(
  graphToAdjList(cloneGraph(createGraph([[3], [3], [1, 2], [5], [4]]))),
  [[3], [3], [1, 2], [5], [4]],
  "Two separate components",
)
assertTest(
  graphToAdjList(
    cloneGraph(createGraph([[2, 3, 5], [1, 4], [1, 4], [2, 3], [1]])),
  ),
  [[2, 3, 5], [1, 4], [1, 4], [2, 3], [1]],
  "Mixed connectivity",
)
assertTest(
  graphToAdjList(
    cloneGraph(createGraph([[2, 4], [1, 3], [2, 4], [1, 3, 5], [4]])),
  ),
  [[2, 4], [1, 3], [2, 4], [1, 3, 5], [4]],
  "Graph with pendant node",
)
assertTest(
  graphToAdjList(cloneGraph(createGraph([[2, 3, 4, 5], [1], [1], [1], [1]]))),
  [[2, 3, 4, 5], [1], [1], [1], [1]],
  "Star graph with 5 nodes",
)
assertTest(
  graphToAdjList(cloneGraph(createGraph([[2], [3], [4], [5], [6], [1]]))),
  [[2], [3], [4], [5], [6], [1]],
  "Large cycle",
)
assertTest(
  graphToAdjList(
    cloneGraph(
      createGraph([
        [2, 7],
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 6],
        [5, 7],
        [1, 6],
      ]),
    ),
  ),
  [
    [2, 7],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
    [5, 7],
    [1, 6],
  ],
  "Heptagon cycle",
)
assertTest(
  graphToAdjList(
    cloneGraph(
      createGraph([
        [3, 4],
        [3, 4],
        [1, 2, 5],
        [1, 2, 5],
        [3, 4],
      ]),
    ),
  ),
  [
    [3, 4],
    [3, 4],
    [1, 2, 5],
    [1, 2, 5],
    [3, 4],
  ],
  "Dumbbell graph",
)
assertTest(
  graphToAdjList(
    cloneGraph(
      createGraph([
        [2, 3, 6],
        [1, 4],
        [1, 5],
        [2, 6],
        [3, 6],
        [1, 4, 5],
      ]),
    ),
  ),
  [
    [2, 3, 6],
    [1, 4],
    [1, 5],
    [2, 6],
    [3, 6],
    [1, 4, 5],
  ],
  "Complex 6-node graph",
)
assertTest(
  graphToAdjList(
    cloneGraph(
      createGraph([
        [2, 8],
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 6],
        [5, 7],
        [6, 8],
        [1, 7],
      ]),
    ),
  ),
  [
    [2, 8],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
    [5, 7],
    [6, 8],
    [1, 7],
  ],
  "Octagon cycle",
)
assertTest(
  graphToAdjList(
    cloneGraph(createGraph([[2, 3, 4, 5, 6], [1, 3], [1, 2], [1], [1], [1]])),
  ),
  [[2, 3, 4, 5, 6], [1, 3], [1, 2], [1], [1], [1]],
  "Star with triangle",
)
assertTest(
  graphToAdjList(
    cloneGraph(createGraph([[2], [3], [4], [5], [6], [7], [8], [1]])),
  ),
  [[2], [3], [4], [5], [6], [7], [8], [1]],
  "Large 8-cycle",
)
assertTest(
  graphToAdjList(
    cloneGraph(createGraph([[2, 3], [1, 4, 5], [1, 6, 7], [2], [2], [3], [3]])),
  ),
  [[2, 3], [1, 4, 5], [1, 6, 7], [2], [2], [3], [3]],
  "Tree-like structure",
)
assertTest(
  graphToAdjList(
    cloneGraph(createGraph([[2, 3, 4, 5, 6, 7], [1], [1], [1], [1], [1], [1]])),
  ),
  [[2, 3, 4, 5, 6, 7], [1], [1], [1], [1], [1], [1]],
  "Large star graph",
)
assertTest(
  graphToAdjList(
    cloneGraph(
      createGraph([
        [2, 9],
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 6],
        [5, 7],
        [6, 8],
        [7, 9],
        [1, 8],
      ]),
    ),
  ),
  [
    [2, 9],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
    [5, 7],
    [6, 8],
    [7, 9],
    [1, 8],
  ],
  "Nonagon cycle",
)


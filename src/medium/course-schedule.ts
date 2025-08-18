import assertTest from "../assert-test"

/**
 * Course Schedule (#207)
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must
 * take course bi first if you want to take course ai.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 *
 * Time Complexity: O(V + E) where V is courses and E is prerequisites
 * Space Complexity: O(V + E)
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // I think you can only finish if there's no cycles, ie you don't have
  // both a is a prerequisite of b and b is a prerequisite of a

  // it's a graph, and we're checkign to confirm that there's no cycles
  // so first, we build the graph
  let graph: number[][] = Array.from({ length: numCourses }).fill(
    [],
  ) as number[][]
  let state = Array(numCourses).fill(0) // 0 = not visited, 1 = processing / cycle, 2 = already processed
  for (let val of prerequisites) {
    graph[val[1]].push(val[0])
  }

  // so now we hae the graph. we check for cycles
  function dfs(course: number) {
    if (state[course] === 1) return false
    if (state[course] === 2) return true

    state[course] = 1

    for (let neighbor of graph[course]) {
      
    }
  }
  return true
}

// Test cases
assertTest(canFinish(2, [[1, 0]]), true, "Simple dependency - can finish")
assertTest(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
  false,
  "Circular dependency - cannot finish",
)
assertTest(canFinish(1, []), true, "Single course, no prerequisites")
assertTest(canFinish(0, []), true, "No courses")
assertTest(
  canFinish(3, [
    [1, 0],
    [2, 1],
  ]),
  true,
  "Linear chain of 3 courses",
)
assertTest(
  canFinish(4, [
    [1, 0],
    [2, 1],
    [3, 2],
  ]),
  true,
  "Linear chain of 4 courses",
)
assertTest(
  canFinish(3, [
    [1, 0],
    [2, 0],
  ]),
  true,
  "Two courses depend on one",
)
assertTest(
  canFinish(3, [
    [0, 1],
    [0, 2],
  ]),
  true,
  "One course depends on two",
)
assertTest(
  canFinish(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
  true,
  "Diamond dependency",
)
assertTest(
  canFinish(3, [
    [1, 0],
    [2, 1],
    [0, 2],
  ]),
  false,
  "Cycle of 3 courses",
)
assertTest(
  canFinish(4, [
    [1, 0],
    [2, 1],
    [3, 2],
    [0, 3],
  ]),
  false,
  "Cycle of 4 courses",
)
assertTest(
  canFinish(5, [
    [1, 0],
    [2, 1],
    [3, 2],
    [4, 3],
  ]),
  true,
  "Long linear chain",
)
assertTest(
  canFinish(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [1, 3],
  ]),
  false,
  "Cycle involving subset",
)
assertTest(
  canFinish(6, [
    [1, 0],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 4],
  ]),
  true,
  "Very long linear chain",
)
assertTest(
  canFinish(5, [
    [1, 0],
    [2, 0],
    [3, 1],
    [4, 1],
    [3, 4],
  ]),
  false,
  "Complex cycle",
)
assertTest(
  canFinish(4, [
    [0, 1],
    [1, 2],
    [2, 3],
  ]),
  true,
  "Reverse linear chain",
)
assertTest(
  canFinish(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ]),
  false,
  "Simple 3-cycle",
)
assertTest(
  canFinish(5, [
    [1, 0],
    [2, 1],
    [3, 2],
    [4, 2],
  ]),
  true,
  "Tree-like dependency",
)
assertTest(
  canFinish(4, [
    [1, 0],
    [3, 1],
    [3, 2],
  ]),
  true,
  "Partial dependencies",
)
assertTest(
  canFinish(6, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
    [4, 3],
    [5, 4],
  ]),
  true,
  "Complex valid schedule",
)
assertTest(
  canFinish(4, [
    [2, 0],
    [1, 0],
    [3, 1],
    [3, 2],
    [1, 3],
  ]),
  false,
  "Cycle in complex graph",
)
assertTest(
  canFinish(7, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
    [4, 3],
    [5, 3],
    [6, 4],
    [6, 5],
  ]),
  true,
  "Binary tree-like dependencies",
)
assertTest(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ]),
  true,
  "Multiple paths to same node",
)
assertTest(
  canFinish(8, [
    [1, 0],
    [2, 6],
    [1, 7],
    [6, 4],
    [7, 0],
    [0, 5],
  ]),
  true,
  "Disconnected components",
)
assertTest(
  canFinish(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ]),
  false,
  "Self-loop creates cycle",
)
assertTest(
  canFinish(6, [
    [5, 2],
    [5, 0],
    [4, 0],
    [4, 1],
    [2, 3],
    [3, 1],
  ]),
  true,
  "Complex acyclic graph",
)
assertTest(
  canFinish(4, [
    [0, 1],
    [2, 1],
    [1, 3],
    [3, 2],
  ]),
  false,
  "Cycle in middle",
)
assertTest(
  canFinish(10, [
    [1, 0],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 4],
    [6, 5],
    [7, 6],
    [8, 7],
    [9, 8],
  ]),
  true,
  "Very long chain",
)
assertTest(
  canFinish(5, [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]),
  true,
  "Star pattern - all depend on one",
)
assertTest(
  canFinish(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ]),
  true,
  "Star pattern - one depends on all",
)
assertTest(
  canFinish(6, [
    [1, 0],
    [2, 1],
    [3, 2],
    [4, 1],
    [5, 4],
    [2, 5],
  ]),
  false,
  "Cycle in complex structure",
)


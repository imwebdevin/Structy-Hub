const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = {};
  edges.forEach(edge => {
    for (let i = 0; i < edge.length; i++) {
      if (i === 0) {
        if (!graph[edge[i]]) graph[edge[i]] = [edge[edge.length - 1]]
        else graph[edge[i]].push(edge[edge.length - 1])
      }
      if (i === 1) {
        if (!graph[edge[i]]) graph[edge[i]] = [edge[0]];
        else graph[edge[i]].push(edge[0])
      } 
    }
  })
  console.log(graph)
  let stack = [nodeA];
  let alreadyVisited = new Set(nodeA)
  while (stack.length > 0) {
    const curr = stack.pop();
    alreadyVisited.add(curr)
    if (curr === nodeB) return true
    for (const neighbor of graph[curr]) {
      if (!alreadyVisited.has(neighbor)) {
        stack.push(neighbor)
      }
    }
  }
  return false
};
​
module.exports = {
  undirectedPath,
};
​
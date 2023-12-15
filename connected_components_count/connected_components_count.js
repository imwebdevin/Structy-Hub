const connectedComponentsCount = (graph) => {
  // todo
  let count = 0;
  const visited = new Set();
  const stack = [];
  
  for (const key in graph) {
    if (!visited.has(key)) {
      stack.push(key);
      count++
      while (stack.length > 0) {
        const curr = stack.pop();
        if (!visited.has(curr))
          visited.add(curr);
          for (const neighbor of graph[curr]) {
            const neighborAsString = neighbor.toString()
            if (!visited.has(neighborAsString) {
              visited.add(neighborAsString)
              stack.push(neighborAsString)
            }
          } 
      }
    }
  }
  return count;
};
​
module.exports = {
  connectedComponentsCount,
};
​
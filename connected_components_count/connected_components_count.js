const connectedComponentsCount = (graph) => {
  // todo
  let count = 0;
  const visited = new Set();
  const stack = [];
  
  for (const key in graph) {
    // keys.push(graph[key])
    console.log(key, "key")
    if (!visited.has(key)) {
      console.log(`haven't visited ${key} yet!. adding ${key} to visited`)
      console.log(visited)
      stack.push(key);
      count++
      while (stack.length > 0) {
        const curr = stack.pop();
        if (!visited.has(curr))
          visited.add(curr);
          for (const neighbor of graph[curr]) {
            if (!visited.has(neighbor.toString())) {
              visited.add(neighbor.toString)
              stack.push(neighbor.toString())
            }
          }
        
      }
    }
    // for (const neighbor of graph[key]) {
    //   console.log(neighbor)
    //   if (!visited.has(neighbor.toString())) {
    //     // console.log(neighbor, key)
    //     visited.add(neighbor.toString())
    //   }
    // }
  }
  return count;
};
​
module.exports = {
  connectedComponentsCount,
};
​
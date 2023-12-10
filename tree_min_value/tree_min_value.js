// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeMinValue = (root) => {
  // todo
  let min = Infinity;
  const stack = [root];
  
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.val < min) min = curr.val;
    if (curr.right) stack.push(curr.right)
    if (curr.left) stack.push(curr.left)
  }
  return min;
};
​
module.exports = {
  treeMinValue,
};
​
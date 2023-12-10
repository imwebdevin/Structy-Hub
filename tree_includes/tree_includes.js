// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeIncludes = (root, target) => {
  // todo
  if (root === null) return false;
  
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.val === target) return true
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left)
  }
  return false;
};
​
module.exports = {
  treeIncludes,
};
​
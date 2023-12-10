// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const depthFirstValues = (root) => {
  // todo
  if (root === null) return [];
  const vals = [];
  const stack = [];
  stack.push(root);
  while (stack.length > 0) {
    const curr = stack.pop();
    vals.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return vals;
};
​
module.exports = {
  depthFirstValues,
};
​
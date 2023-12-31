// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const maxPathSum = (root) => {
  // todo
  if (root === null) return -Infinity
  if (!root.left && !root.right) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right)); 
​
};
​
module.exports = {
  maxPathSum,
};
​
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const leafList = (root) => {
  // todo
  if (root === null) return [];
  if (!root.left && !root.right) return [root.val];
  return [...leafList(root.left), ...leafList(root.right)]
};
​
module.exports = {
  leafList,
};
​
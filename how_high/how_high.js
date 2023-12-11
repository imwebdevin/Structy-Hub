// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const howHigh = (node) => {
  // todo
  if (node === null) return -1;
  let leftHeight = howHigh(node.left);
  let rightHeight = howHigh(node.right);
  if (node.left || node.right) return 1 + Math.max(leftHeight, rightHeight);
  return 0
};
​
module.exports = {
  howHigh,
};
​
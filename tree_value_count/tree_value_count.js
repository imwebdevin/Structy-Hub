// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeValueCount = (root, target) => {
  // todo
  if (root === null) return 0;
  
  const leftCount = treeValueCount(root.left, target);
  const rightCount = treeValueCount(root.right, target);
  if (root.val === target) return 1 + leftCount + rightCount;
  else return 0 + leftCount + rightCount;
};
​
module.exports = {
  treeValueCount,
};
​
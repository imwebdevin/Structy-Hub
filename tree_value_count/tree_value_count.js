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
  // if ((!root.left && !root.right) && root.value === target) return 1;
  const leftCount = treeValueCount(root.left, target);
  const rightCount = treeValueCount(root.right, target);
  if (root.val === target) return 1 + leftCount + rightCount;
  else return 0 + leftCount + rightCount;
  // if (!root.left && !root.right) return 0;
  
 
  // if (root.value === target) return 1 + leftCount + rightCount;
  // if (root.value !== target) return 0 + leftCount + rightCount; 
};
​
module.exports = {
  treeValueCount,
};
​
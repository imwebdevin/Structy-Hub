// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeSum = (root) => {
  // todo
  let sum = 0;
  if (root === null) return sum
  
  const stack = [ root ];
  
  while (stack.length > 0) {
    const curr = stack.pop();
    sum += curr.val;
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return sum;
};
​
module.exports = {
  treeSum,
};
​
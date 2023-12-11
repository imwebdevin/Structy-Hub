// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const bottomRightValue = (root) => {
  // todo
  let bottomRight;
  let queue = [ root ];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.left) queue.push(curr.left)
    if (curr.right) queue.push(curr.right);
    bottomRight = curr;
  }
  return bottomRight.val;
};
​
module.exports = {
  bottomRightValue,
};
​
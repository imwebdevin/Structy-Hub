// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const breadthFirstValues = (root) => {
  // todo
  if (root === null) return []; 
  const vals = [];
  const queue = [ root ];
  
  while (queue.length > 0) {
    const curr = queue.shift();
    vals.push(curr.val);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return vals;
};
​
module.exports = {
  breadthFirstValues,
};
​
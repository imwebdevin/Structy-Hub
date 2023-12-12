// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const levelAverages = (root) => {
  // todo
  if (root === null) return [];
  const queue = [ root ];
  const averages = [];
  while (queue.length > 0) {
    const queueLength = queue.length;
    let sum = 0;
    for (i = 0; i < queueLength; i++) {
      const curr = queue.shift();
      sum += curr.val;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    const average = sum/queueLength;
    averages.push(average);
  }
  return averages;
};
​
module.exports = {
  levelAverages,
};
​
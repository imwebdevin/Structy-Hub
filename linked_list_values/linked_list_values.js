// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const linkedListValues = (head) => {
  // todo
  let curr = head;
  const vals = [];
  while (curr !== null) {
    vals.push(curr.val)
    curr = curr.next;
  }
  return vals;
};
​
module.exports = {
  linkedListValues,
};
​
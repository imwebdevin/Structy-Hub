// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const getNodeValue = (head, index) => {
  // todo
  let curr = head;
  let i = 0;
  while (curr !== null) {
    if (i === index) return curr.val;
    i++;
    curr = curr.next;
  }
  return null;
};
​
module.exports = {
  getNodeValue,
};
​
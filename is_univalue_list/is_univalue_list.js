// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const isUnivalueList = (head) => {
  // todo
  const target = head.val;
  let curr = head;
  
  while (curr !== null) {
    if (curr.val !== target) return false
    curr = curr.next;
  }
  return true;
};
​
module.exports = {
  isUnivalueList,
};
​
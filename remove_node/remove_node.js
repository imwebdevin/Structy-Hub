// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const removeNode = (head, targetVal) => {
  // todo
  let curr = head;
  let prior = null;
  
  while (curr !== null) {
    if (curr.val === targetVal) {
        if (curr === head) {
          head = curr.next;
          prior = curr
        }
        prior.next = curr.next;
        curr.next = null;
    }
    prior = curr;
    curr = curr.next;
  }
  return head;
};
​
module.exports = {
  removeNode,
};
​
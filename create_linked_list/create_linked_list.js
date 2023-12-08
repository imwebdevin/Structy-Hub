class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
const createLinkedList = (values) => {
  // todo
  if (values.length === 0) return null;
  
  const head = new Node(values[0]);
  if (values.length === 1) return head;
  
  let curr = head;
  let remainder = values.slice(1);
  for (const val of remainder) {
    curr.next = new Node(val);
    curr = curr.next;
  }
  return head;
};
​
module.exports = {
  createLinkedList,
};
​
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
const insertNode = (head, value, index) => {
  // todo
  const newNode = new Node(value);
  let currIdx = 0;
  let currNode = head;
  let prev = null;
  
   if (index === 0) {
        newNode.next = head;
        head = newNode;
        return head;
      }
  
  while (currNode !== null) {
    if (currIdx === index) {
      prev.next = newNode;
      newNode.next = currNode;
    } 
    prev = currNode;
    currNode = currNode.next;
    currIdx++;
  }
  if (currIdx === index) {
    prev.next = newNode;
  }
  return head;
};
​
module.exports = {
  insertNode,
};
​
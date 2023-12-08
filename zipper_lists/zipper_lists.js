// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const zipperLists = (head1, head2) => {
  const head = head1;
  let tail = head;
  let curr1 = head1.next;
  let curr2 = head2;
  let counter = 0;
  
  while (curr1 !== null && curr2 !== null) {
    if (counter % 2 === 0) {
      tail.next = curr2;
      curr2 = curr2.next;
    }
    else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    tail = tail.next;
    counter++;
  }
  if (curr1 !== null) tail.next = curr1;
  if (curr2 !== null) tail.next = curr2;
  return head
};
​
module.exports = {
  zipperLists,
};
​
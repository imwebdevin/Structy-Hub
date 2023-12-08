class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
const mergeLists = (head1, head2) => {
  // todo
  let head;
  let pot1;
  let pot2;
  let tail;
  if (head1.val < head2.val) {
    head = head1;
    pot1 = head1.next;
    pot2 = head2; 
  }
  else {
    head = head2;
    pot1 = head1;
    pot2= head2.next;
  }
  tail = head;
  
  while (pot1 !== null && pot2 !== null) {
    if (pot1.val < pot2.val) {
      tail.next = pot1;
      pot1 = pot1.next;
    }
    else {
      tail.next = pot2;
      pot2 = pot2.next;
    }
    tail = tail.next;
  }
  if (pot1 !== null) tail.next = pot1;
  if (pot2 !== null) tail.next = pot2;
  return head;
};
​
module.exports = {
  mergeLists,
};
​
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
const addLists = (head1, head2) => {
  // todo
  let curr1 = head1;
  let curr2 = head2;
  let dummyHead = new Node(null);
  let tail = dummyHead;
  let remainder = 0;
  let newNode;
  
  while (curr1 !== null || curr2 !== null) {
    let val1;
    let val2;
   
    if (curr1 === null) {
      val1 = 0;
      val2 = curr2.val;
    }
    else if (curr2 === null) {
      val2 = 0;
      val1 = curr1.val;
    }
    else {
      val1 = curr1.val;
      val2 = curr2.val;
    }
    const newVal = val1 + val2 + remainder;
  
    if (newVal > 9) {
      const val = newVal % 10;
      newNode = new Node(val);
      remainder = 1;
      
    }  else  {
      newNode = new Node(newVal);
      remainder = 0;
  }
    tail.next = newNode;
    tail = tail.next;
    if (curr1) curr1 = curr1.next;
    if (curr2) curr2 = curr2.next;
  }
  // tail.next = newNode;
  
  if (remainder === 1) {
    tail.next = new Node(remainder);
  }
  console.log(dummyHead);
  return dummyHead.next;
};
​
​
module.exports = {
  addLists,
};
​
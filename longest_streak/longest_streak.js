// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const longestStreak = (head) => {
  // todo
  if (head === null) return 0
  let val = head.val
  let streak = 1;
  let curr = head.next;
  let maxStreak = 1;
  
  while (curr !== null) {
    if (val === curr.val) streak++;
    else {
      val = curr.val;
      streak = 1;
    }
    if (streak > maxStreak) maxStreak = streak;
    curr = curr.next;
  }
  return maxStreak;
};
​
module.exports = {
  longestStreak,
};
​
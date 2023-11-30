const maxValue = (nums) => {
  // todo
  let max = -Infinity;
  for (const num of nums) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};
​
module.exports = {
  maxValue,
};
​
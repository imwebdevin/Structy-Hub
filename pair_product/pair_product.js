
const pairProduct = (numbers, targetProduct) => {
  // todo
  let previous = {};
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const complement = Math.floor(targetProduct / number);
    console.log(number, complement)
    if (complement in previous) return [previous[complement], i]
    else previous[number] = i;
  }
};
​
module.exports = {
  pairProduct,
};
​
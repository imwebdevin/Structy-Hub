const uncompress = (s) => {
  // todo
  function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}
  let uncompressed = '';
  // pointer for start of number
  let i = 0;
  // pointer for exclusive end position of number
  let j = 0;
  while (j < s.length) {
    if (!isLetter(s[j])) {
      j++;
    } else {
      const numberLength = j - i;
      let number = '';
      // use this for loop to determine what the actual number is from numberLength
      for (let k = 0; k < numberLength; k++) {
        number += s[i + k];
      }
      // add character to uncompressed string Number(number) times
      for (let l = 0; l < Number(number); l++) {
        uncompressed += s[j];
      }
      // move j forward one character and move i to j's new position to repeat the algorithm
      j++;
      i = j;
      }
    }
  return uncompressed;
  }
​
​
module.exports = {
  uncompress,
};
​
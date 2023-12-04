
const compress = (s) => {
  // todo
  let i = 0;
  let j = 0;
  
  let compressed = [];
  
  while (j < s.length) {
    const char = s[j];
    if (char === s[j + 1]) {
      j++;
    } else {
      const coefficient = s.slice(i, j + 1).length
      if (coefficient !== 1) {
        compressed.push(coefficient.toString() + s[j])
      } else compressed.push(s[j]);
      
      i = j + 1;
      j = i;
    }
  }
  return compressed.join('')
};
​
module.exports = {
  compress,
};
​
console.log(compress('aabcccc'));
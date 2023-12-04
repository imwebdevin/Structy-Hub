
const anagrams = (s1, s2) => {
  // todo
  if (s1.length !== s2.length) {
    return false
  }
  
  counter1 = createCounterObject(s1);
  counter2 = createCounterObject(s2);
  
  function createCounterObject(string) {
    const counter = {}
    string.split('').forEach(letter => {
      {
        if (counter[letter]) {
          counter[letter]++
        }
        else {counter[letter] = 1}
      }
    })
    return counter;
  }
  
    for (const key in counter1) {
      if (counter1[key] !== counter2[key]) return false
    }
  return true
};
​
​
module.exports = {
  anagrams,
};
​
console.log(anagrams('restful', 'fluster'))
const isPrime = (n) => {
  // todo
  const primes = [];
  const composites = new Set();
  // i is the number to be tested for primeness
    for (let i = 2; i <= n; i++) {
      if (!composites.has(i)) {
        primes.push(i);
      } 
      // j is the coefficient for multiplying the primes in the sieve
      for (let j = 2; i * j <= n; j++) {
        if (!composites.has(i * j)) {
          composites.add(i * j);
        }
      }
    }
  return (primes.includes(n));
};
​
module.exports = {
  isPrime,
};
​
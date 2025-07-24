function countPrimeNumbers() {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  for (let n = 2; n <= 100; n++) {
    if (isPrime(n)) count++;
  }
  return count;
}

const { performance } = window;

const t0 = performance.now();
const result = countPrimeNumbers();
const t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
console.log(`Number of primes between 2 and 100: ${result}`);

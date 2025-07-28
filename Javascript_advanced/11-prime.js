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

setTimeout(() => {
  const t0 = performance.now();

  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }

  const t1 = performance.now();

  console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
}, 0);


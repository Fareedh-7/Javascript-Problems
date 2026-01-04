
let nums = [1,2,3,4,5];

var fourDivisors = function (nums) {
  function countDivisors(num) {
    const divisors = new Set();

    for (let i = 1; i * i <= num; i++) {
      if (num % i === 0) {
        divisors.add(i);
        divisors.add(num / i);
      }
    }
    return divisors;
  }
  let result = 0;
  for (const num of nums) {
    const divisors = countDivisors(num);
    if (divisors.size === 4) {
      const sum = [...divisors].reduce((acc, val) => acc + val, 0);
      result += sum;
    }
  }
  return result;
};

console.log(fourDivisors(nums));
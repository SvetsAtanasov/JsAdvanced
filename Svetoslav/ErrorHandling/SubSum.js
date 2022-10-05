function solve(arr, startIdx, endIdx) {
  let sum = 0;

  if (!Array.isArray(arr)) return NaN;

  if (startIdx < 0) startIdx = 0;

  if (endIdx > arr.length - 1) endIdx = arr.length - 1;

  for (let i = startIdx; i <= endIdx; i++) {
    const num = arr[i];

    if (typeof num !== "number") {
      return NaN;
    }

    sum += num;
  }

  return sum;
}

const sum = solve([10, 20, 30, 40, 50, 60], 3, 300);
console.log(sum);
const sum1 = solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
console.log(sum1);
const sum2 = solve([10, "twenty", 30, 40], 0, 2);
console.log(sum2);
const sum3 = solve([], 1, 2);
console.log(sum3);
const sum4 = solve("text", 0, 2);
console.log(sum4);
const sum5 = solve([true, true], 0, 1);
console.log(sum5);

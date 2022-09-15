function solve(n, k) {
  let sequence = [1];

  for (let i = 1; i < n; i++) {
    const idx = i < k ? 0 : sequence.length - k;
    const lastThree = sequence.slice(idx, sequence.length);
    let sum = 0;

    lastThree.map((x) => sum += x);
    sequence.push(sum);
  }

  return sequence;
}

solve(8, 2);

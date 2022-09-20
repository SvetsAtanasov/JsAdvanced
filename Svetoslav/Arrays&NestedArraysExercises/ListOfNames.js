function solve(names) {
  names.sort((a, b) => a.ocaleCompare(b));

  names.map((name, idx) => {
    console.log(`${idx + 1}.${name}`);
  });
}

solve(["John", "Bob", "Christina", "Ema"]);

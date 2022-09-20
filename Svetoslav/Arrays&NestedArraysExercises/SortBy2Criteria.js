function solve(strings) {
  const sorted = strings.sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    if (a.toUpperCase() < b.toUpperCase()) return -1;
    if (a.toUpperCase() > b.toUpperCase()) return 1;
  });

  console.log(sorted.join("\n"));
}

solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
solve(["test", "Deny", "omen", "Default"]);

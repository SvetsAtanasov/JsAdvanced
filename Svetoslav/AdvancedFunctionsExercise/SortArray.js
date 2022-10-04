function solve(arr, criteria) {
  const newArray = [...arr];

  function sortArr() {
    let sorted = [];

    if (criteria === "asc") sorted = newArray.sort((a, b) => a - b);
    else sorted = newArray.sort((a, b) => b - a);

    return sorted;
  }

  return sortArr();
}

solve([14, 7, 17, 6, 8], "asc");
solve([14, 7, 17, 6, 8], "desc");

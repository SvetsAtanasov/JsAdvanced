function solve(args) {
  const juice = {};
  const juiceBottles = {};

  for (const string of args) {
    const tokens = string.split(" => ");
    const fruit = tokens[0];
    let quantity = Number(tokens[1]);

    if (juice[fruit] === undefined) {
      juice[fruit] = quantity;
    } else {
      juice[fruit] += quantity;
    }

    if (parseInt(juice[fruit] / 1000) <= 0) continue;

    juiceBottles[fruit] = parseInt(juice[fruit] / 1000);

    if (juiceBottles[fruit] !== undefined)
      juiceBottles[fruit] = parseInt(juice[fruit] / 1000);
  }

  for (const [key, value] of Object.entries(juiceBottles)) {
    console.log(key + " => " + value);
  }
}

solve([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);

solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);

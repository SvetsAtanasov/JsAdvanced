function solve(heroes) {
  const heroesCopy = [...heroes];
  const heroeObjs = [];

  for (const heroe of heroesCopy) {
    let [name, level, items] = heroe.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];

    const heroeObj = {
      name,
      level,
      items,
    };

    heroeObjs.push(heroeObj);
  }

  console.log(JSON.stringify(heroeObjs));
}

const firstEx = solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

console.log(firstEx);

solve(["Jake / 1000 / Gauss, HolidayGrenade"]);

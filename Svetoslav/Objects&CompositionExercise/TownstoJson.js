function solve(arr) {
  const locations = [];

  for (const item of arr) {
    locations.push(
      item
        .replace(/([\| ])/g, " ")
        .trim()
        .split("   ")
    );
  }

  const result = [];

  for (let i = 1; i < locations.length; i++) {
    let obj = {
      Town: undefined,
      Latitude: undefined,
      Longitude: undefined,
    };
    const element = locations[i];

    for (const key of element) {
      if (obj.Town === undefined) obj.Town = key;
      else if (obj.Latitude === undefined)
        obj.Latitude = Number(Number(key).toFixed(2));
      else obj.Longitude = Number(Number(key).toFixed(2));
    }

    result.push(obj);
  }

  console.log(JSON.stringify(result));
}

solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

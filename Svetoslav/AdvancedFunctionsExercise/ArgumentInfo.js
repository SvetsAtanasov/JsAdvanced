function solve(...params) {
  let types = [];
  const obj = { ...params };

  for (const key of Object.keys(obj)) {
    const type = typeof obj[key];
    const newObj = {};

    if (!types.find((x) => x.hasOwnProperty(type))) {
      newObj[type] = 1;
      types.push(newObj);
    } else {
      types.find((x) => x.hasOwnProperty(type))[type]++;
    }

    console.log(`${type}: ${obj[key]}`);
  }

  let sortArr = [...types];
  sortArr = sortArr.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

  for (const obj of sortArr) {
    for (const key of Object.keys(obj)) {
      console.log(`${key} = ${obj[key]}`);
    }
  }
}

solve("cat", "cat", 42, function () {
  console.log("Hello world!");
});
solve({ name: "bob" }, 3.333, 9.999);

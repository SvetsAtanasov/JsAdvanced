function solve(area, vol, input) {
  const data = JSON.parse(input);
  const resultedObjects = [];

  for (const object of data) {
    const a = area.call(object);
    const v = vol.call(object);
    const result = {
      area: a,
      volume: v,
    };

    resultedObjects.push(result);
  }

  return resultedObjects;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

solve(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

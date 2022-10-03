function solve(input) {
  const newInput = [...input];
  const inherit = newInput.filter((x) => x.match("inherit"));

  function exec() {
    const objects = [];

    for (const input of newInput) {
      const tokens = input.split(" ");
      const command = tokens[0];

      if (command === "create") {
        const name = tokens[1];
        const createdObj = { name };

        if (tokens[2] === "inherit") {
          const decoratorName = tokens[3];
          const decorator = objects.find((x) => x.name === decoratorName);

          Object.keys(decorator).forEach((key) => {
            if (!(key in createdObj)) {
              createdObj[key] = decorator[key];
            }
          });
        }

        objects.push(createdObj);
      } else if (command === "set") {
        const obj = objects.find((x) => x.name === tokens[1]);
        const key = tokens[2];
        const val = tokens[3];

        obj[key] = val;

        for (const o of inherit) {
          const split = o.split(" ");

          const inheritName = split[3];
          const inheritObj = objects.find((x) => x.name === inheritName);
          const inheritingObj = objects.find((x) => x.name === split[1]);
  
          Object.keys(inheritObj).forEach((key) => {
            if (!inheritingObj.hasOwnProperty(key)) {
              inheritingObj[key] = inheritObj[key];
            }
          });
        }
      } else if (command === "print") {
        const objToPrint = objects.find((x) => x.name === tokens[1]);
        const output = [];

        for (const key of Object.keys(objToPrint).reverse()) {
          if (key !== "name") output.push(`${key}:${objToPrint[key]}`);
        }

        console.log(output.join(","));
      }
    }
  }

  return exec();
}

solve([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);

solve([
  "create pesho",
  "create gosho inherit pesho",
  "create stamat inherit gosho",
  "set pesho rank number1",
  "set gosho nick goshko",
  "print stamat",
]);

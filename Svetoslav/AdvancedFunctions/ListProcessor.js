function solve(input) {
  const newInput = [...input];

  function add(res, item) {
    res.push(item);
  }

  function print(res) {
    console.log(res.join(","));
  }

  function remove(res, match) {
    return res.filter((x) => x !== match);
  }

  function exec() {
    let result = [];

    for (let i = 0; i < newInput.length; i++) {
      const commands = newInput[i].split(" ");
      const command = commands[0];

      if (command === "add") {
        const item = commands[1];
        add(result, item);
      } else if (command === "print") {
        print(result);
      } else if (command === "remove") {
        const item = commands[1];

        result = remove(result, item);
      }
    }
  }

  return exec();
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);
solve(["add pesho", "add george", "add peter", "remove peter", "print"]);

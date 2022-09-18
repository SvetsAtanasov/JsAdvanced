function solve(commands) {
  let array = [];

  for (let i = 0; i < commands.length; i++) {
    let counter = i + 1;
    const command = commands[i];

    if (command === "add") {
      array.push(counter);
    } else {
      array.pop();
    }
  }

  if (array.length > 0) console.log(array.join("\n"));
  else console.log("Empty");
}

solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);

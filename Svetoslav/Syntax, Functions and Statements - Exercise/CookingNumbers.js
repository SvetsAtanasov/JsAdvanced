function CookingNumber(num, cmd1, cmd2, cmd3, cmd4, cmd5) {
  let number = Number(num);
  const commands = {
    command1: cmd1,
    command2: cmd2,
    command3: cmd3,
    command4: cmd4,
    command5: cmd5,
  };

  for (const command in commands) {
    switch (commands[command]) {
      case "chop":
        number /= 2;
        break;

      case "dice":
        number = Math.sqrt(number);
        break;

      case "spice":
        number += 1;
        break;

      case "bake":
        number *= 3;
        break;

      case "fillet":
        number -= number * 0.2;
        break;
    }

    console.log(number);
  }
}

CookingNumber("9", "dice", "spice", "chop", "bake", "fillet");

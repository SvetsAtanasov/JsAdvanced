function colorize() {
  const table = document.querySelectorAll("table tr");

  for (let i = 1; i < table.length; i++) {
    const element = table[i];

    if (i % 2 === 1) {
      element.style.background = "teal";
    }
  }
}

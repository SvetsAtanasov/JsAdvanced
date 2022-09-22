function extract(id) {
  const content = document.getElementById(id).innerText;
  const pattern = /\(([^)]+)\)/g;
  const result = [];

  let match = pattern.exec(content);

  while (match) {
    result.push(match[1]);
    match = pattern.exec(content);
  }

  return result;
}

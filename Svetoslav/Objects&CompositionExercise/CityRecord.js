function solve(array) {
  const newArray = [...array];
  const calorieList = {};

  for (let i = 0; i < newArray.length; i++) {
    const element = array[i];

    if (i % 2 === 0) {
      calorieList[element] = undefined;
    } else {
      calorieList[array[i - 1]] = Number(element);
    }
  }

  return calorieList;
}

solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

function solve(array, keywordOne, keywordTwo) {
  const indexOfFirstKeyword = array.indexOf(keywordOne);
  const indexOfSecondKeyword = array.indexOf(keywordTwo);
  const slicedArr = array.slice(indexOfFirstKeyword, indexOfSecondKeyword + 1);

  return slicedArr;
}

solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
solve(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);

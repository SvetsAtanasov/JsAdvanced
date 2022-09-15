function CircleArea(input) {
  const isNumber = typeof input === "number" ? true : false;
  const inputType = typeof(input);
  let circleArea = 0;

  if (isNumber) {
    circleArea = Math.pow(input, 2) * Math.PI;
    console.log(circleArea.toFixed(2));
  } else
    console.log(
      `We can not calculate the circle area, because we receive a ${inputType}.`
    );
}

CircleArea(5);
CircleArea("name");

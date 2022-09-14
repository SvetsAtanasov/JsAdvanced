function StringLength(...strings) {
  const strs = [...strings];
  let avgLen = 0;
  let lenghtSum = 0;

  strs.forEach((str) => {
    lenghtSum += str.length;
  });

  avgLen = Math.floor(lenghtSum / strs.length);

  console.log(lenghtSum);
  console.log(avgLen);
}

StringLength("pasta", "5", "22.3");

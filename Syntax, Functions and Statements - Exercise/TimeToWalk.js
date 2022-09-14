function solve(steps, stepLenght, speed) {
  let totalDistanceMeters = steps * stepLenght;
  let speedMetersinSec = speed / 3.6;
  let time = totalDistanceMeters / speedMetersinSec;
  let numOfBreaks = Math.floor(totalDistanceMeters / 500);

  let timeInHour = Math.floor(time / 3600);
  let timeInMin = Math.floor(time / 60);
  let timeInSec = Number((time % 60).toFixed(0));
  timeInMin += numOfBreaks;
  timeInHour += Math.floor(timeInMin / 60);
  timeInMin = timeInMin % 60;

  const formattedH = timeInHour < 10 ? `0${timeInHour}` : `${timeInHour}`;
  const formattedM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
  const formattedS = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

  console.log(`${formattedH}:${formattedM}:${formattedS}`);
}

solve(4000, 0.6, 5);

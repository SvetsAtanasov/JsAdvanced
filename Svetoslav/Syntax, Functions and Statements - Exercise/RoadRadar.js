function RoadRadar(speed, location) {
  let speedLimit = 0;
  let status = "";
  let diff = 0;

  switch (location) {
    case "city":
      speedLimit = 50;
      diff = speed - speedLimit;

      if (diff <= 20) status = "speeding";
      else if (diff > 20 && diff <= 40) status = "excessive speeding";
      else status = "reckless driving";

      speed <= 50
        ? console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        : console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
          );
      break;

    case "residential":
      speedLimit = 20;
      diff = speed - speedLimit;

      if (diff <= 20) status = "speeding";
      else if (diff > 20 && diff <= 40) status = "excessive speeding";
      else status = "reckless driving";

      speed <= 20
        ? console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        : console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
          );
      break;

    case "interstate":
      speedLimit = 90;
      diff = speed - speedLimit;

      if (diff <= 20) status = "speeding";
      else if (diff > 20 && diff <= 40) status = "excessive speeding";
      else status = "reckless driving";

      speed <= 90
        ? console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        : console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
          );
      break;

    case "motorway":
      speedLimit = 130;
      diff = speed - speedLimit;

      if (diff <= 20) status = "speeding";
      else if (diff > 20 && diff <= 40) status = "excessive speeding";
      else status = "reckless driving";

      speed <= 130
        ? console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        : console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
          );
      break;
  }
}

RoadRadar(40, "city");
RoadRadar(21, "residential");
RoadRadar(120, "interstate");
RoadRadar(200, "motorway");

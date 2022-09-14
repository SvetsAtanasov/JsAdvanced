function DayOfWeek(day) {
  let value = undefined;
  const daysOfWeek = {
    days: [
      { day: "Monday", val: 1 },
      { day: "Tuesday", val: 2 },
      { day: "Wednesday", val: 3 },
      { day: "Thursday", val: 4 },
      { day: "Friday", val: 5 },
      { day: "Saturday", val: 6 },
      { day: "Sunday", val: 7 },
    ],
  };

  for (const key of daysOfWeek.days) {
    if (key.day === day) {
      value = key.val;
      break;
    } else {
      value = "error";
    }
  }

  console.log(value);
}

DayOfWeek("Monday");
DayOfWeek("Friday");
DayOfWeek("Invalid");

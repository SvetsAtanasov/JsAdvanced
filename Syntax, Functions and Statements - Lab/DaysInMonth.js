function DaysInMonth(...params) {
  const [month, year] = [...params];

  const returnDaysInMonth = (m, y) => {
    return new Date(y, m, 0).getDate();
  };

  const daysInMonth = returnDaysInMonth(month, year);

  console.log(daysInMonth);
}

DaysInMonth(1, 2012);
DaysInMonth(2, 2021);

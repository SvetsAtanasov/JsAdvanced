function solve(array, criteria) {
  const newArray = [...array];
  const sortingCriteria = criteria;
  const tickets = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  for (const string of newArray) {
    const tokens = string.split("|");
    const destination = tokens[0];
    const price = Number(tokens[1]);
    const status = tokens[2];

    const ticket = new Ticket(destination, price, status);
    tickets.push(ticket);
  }

  return sortingCriteria === "price"
    ? tickets.sort((a, b) => a[sortingCriteria] + b[sortingCriteria])
    : tickets.sort((a, b) =>
        a[sortingCriteria].localeCompare(b[sortingCriteria])
      );
}

let res = solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|available",
    "Philadelphia|132.20|departed",
    "Chicago|140.20|available",
    "Dallas|144.60|sold",
    "New York City|206.20|sold",
    "New York City|240.20|departed",
    "New York City|305.20|departed",
  ],
  "price"
);

let res1 = solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);

console.log(res);
console.log(res1);
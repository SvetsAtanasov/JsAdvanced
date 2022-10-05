function solve(cardValue, cardSuit) {
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  if (!cards.some((x) => x === cardValue)) throw new Error("Error");

  switch (cardSuit) {
    case "S":
      cardSuit = "\u2660";
      break;

    case "H":
      cardSuit = "\u2665";
      break;

    case "D":
      cardSuit = "\u2666";
      break;

    case "C":
      cardSuit = "\u2663";
      break;

    default:
      throw Error("Error");
  }

  return {
    suit: cardSuit,
    val: cardValue,
    toString() {
      return this.val + this.suit;
    },
  };
}

const card = solve("2", "A");
const output = card.toString();
console.log(output);

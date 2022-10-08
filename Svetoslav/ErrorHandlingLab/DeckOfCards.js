function solve(cards) {
  let isInvalid = "";
  const deck = [];
  const vals = [
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

  const suits = ["H", "S", "D", "C"];

  cards.forEach((card) => {
    let split = undefined;
    let val = undefined;

    if (card.length === 3) {
      split = card.slice(0, 2);
      val = vals.find((x) => x === split);
    } else {
      split = card.slice(0, 1);
      val = vals.find((x) => x === split);
    }

    const suit = suits.find((x) => x.endsWith(card[card.length - 1]));

    if (val === undefined || suit === undefined) {
      isInvalid = "Invalid card: " + card;
      return;
    }

    deck.push(createCard(val, suit));
  });

  function createCard(value, suit) {
    switch (suit) {
      case "S":
        suit = "\u2660";
        break;

      case "H":
        suit = "\u2665";
        break;

      case "D":
        suit = "\u2666";
        break;

      case "C":
        suit = "\u2663";
        break;
    }

    return value + suit;
  }

  if (isInvalid !== "") {
    console.log(isInvalid);
    return;
  }

  console.log(deck.join(" "));
}

solve(["AS", "10D", "KH", "2C"]);

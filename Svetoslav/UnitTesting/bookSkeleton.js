const { assert } = require("chai");

const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};

describe("Book Unit Test", () => {
  describe("isGenreSuitable test", () => {
    it("Genre Thriller", () => {
      let exp = "Books with Thriller genre are not suitable for kids at 12 age";
      assert.equal(bookSelection.isGenreSuitable("Thriller", 12), exp);
    });

    it("Genre Horror", () => {
      let exp = "Books with Horror genre are not suitable for kids at 12 age";
      assert.equal(bookSelection.isGenreSuitable("Horror", 12), exp);
    });

    it("Genre Horror but age above 12", () => {
      let exp = "Those books are suitable";
      assert.equal(bookSelection.isGenreSuitable("Horror", 13), exp);
    });

    it("Requirements met", () => {
      let exp = "Those books are suitable";
      assert.equal(bookSelection.isGenreSuitable("Drama", 12), exp);
    });
  });

  describe("isItAffordable test", () => {
    it("price not a number", () => {
      let exp = "Invalid input";
      assert.throw(() => {
        bookSelection.isItAffordable("pesho", 200);
      }, exp);
    });

    it("budget not a number", () => {
      let exp = "Invalid input";
      assert.throw(() => {
        bookSelection.isItAffordable(100, "pesho");
      }, exp);
    });

    it("not enough money", () => {
      let exp = "You don't have enough money";
      assert.equal(bookSelection.isItAffordable(200, 100), exp);
    });

    it("enough money zero", () => {
      let exp = "Book bought. You have 0$ left";
      assert.equal(bookSelection.isItAffordable(200, 200), exp);
    });

    it("negative numbers", () => {
      let exp = "Book bought. You have 0$ left";
      assert.equal(bookSelection.isItAffordable(-200, -200), exp);
    });

    it("negative numbers", () => {
      let exp = "Book bought. You have 400$ left";
      assert.equal(bookSelection.isItAffordable(-200, 200), exp);
    });
  });

  describe("suitableTitles test", () => {
    it("input not an array", () => {
      let exp = "Invalid input";
      assert.throw(() => {
        bookSelection.suitableTitles(true, "Cartoon");
      }, exp);
    });

    it("wanted genre not a string", () => {
      let exp = "Invalid input";
      assert.throw(() => {
        bookSelection.suitableTitles(
          ["Drama", "Thriller", "Action", "Cartoon"],
          2
        );
      }, exp);
    });

    it("find cartoon genre", () => {
      let exp = "Tom & Jerry";
      let res = bookSelection.suitableTitles(
        [
          { genre: "Cartoon", title: "Tom & Jerry" },
          { genre: "Thriller", title: "Foo" },
          { genre: "Drama", title: "Bar" },
        ],
        "Cartoon"
      );

      console.log(res);

      assert.equal(res[0], exp);
    });

    it("find multiple book titles", () => {
      let exp = ["Tom & Jerry", "Tom & Jerry2"];
      let res = bookSelection.suitableTitles(
        [
          { genre: "Cartoon", title: "Tom & Jerry" },
          { genre: "Cartoon", title: "Tom & Jerry2" },
          { genre: "Thriller", title: "Foo" },
          { genre: "Drama", title: "Bar" },
        ],
        "Cartoon"
      );

      console.log(res);

      assert.equal(res.join(", "), exp.join(", "));
    });
  });
});

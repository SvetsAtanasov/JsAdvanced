function solve() {
  let list = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  function solution(input) {
    let message = "";

    const ingredients = {
      report() {
        let ingredientList = "";

        for (const key of Object.keys(list)) {
          if (typeof list[key] === "number") {
            ingredientList += `${key}=${list[key]} `;
          }
        }

        message = ingredientList.trimEnd();
      },
      isNotEnough(current, needed) {
        let isNotEnough = false;

        for (const key of Object.keys(needed)) {
          if (current[key] < needed[key]) {
            message = "Error: not enough " + key + " in stock";
            isNotEnough = true;
            break;
          }
        }

        return isNotEnough;
      },
      restock(ingredient, quantity) {
        list[ingredient] += Number(quantity);
        message = "Success";
      },
      prepare(recipe, quantity) {
        const recipes = {
          apple: { carbohydrate: 1 * quantity, flavour: 2 * quantity },
          lemonade: { carbohydrate: 10 * quantity, flavour: 20 * quantity },
          burger: {
            carbohydrate: 5 * quantity,
            fat: 7 * quantity,
            flavour: 3 * quantity,
          },
          eggs: {
            protein: 5 * quantity,
            fat: 1 * quantity,
            flavour: 1 * quantity,
          },
          turkey: {
            protein: 10 * quantity,
            carbohydrate: 10 * quantity,
            fat: 10 * quantity,
            flavour: 10 * quantity,
          },
        };

        if (recipe === "apple") {
          if (this.isNotEnough(list, recipes.apple)) return;

          message = "Success";
          list.carbohydrate -= recipes.apple.carbohydrate;
          list.flavour -= recipes.apple.flavour;
        } else if (recipe === "lemonade") {
          if (this.isNotEnough(list, recipes.lemonade)) return;

          message = "Success";
          list.carbohydrate -= recipes.lemonade.carbohydrate;
          list.flavour -= recipes.lemonade.flavour;
        } else if (recipe === "burger") {
          if (this.isNotEnough(list, recipes.burger)) return;

          message = "Success";
          list.carbohydrate -= recipes.burger.carbohydrate;
          list.fat -= recipes.burger.fat;
          list.flavour -= recipes.burger.flavour;
        } else if (recipe === "eggs") {
          if (this.isNotEnough(list, recipes.eggs)) return;

          message = "Success";
          list.protein -= recipes.eggs.protein;
          list.fat -= recipes.eggs.fat;
          list.flavour -= recipes.eggs.flavour;
        } else if (recipe === "turkey") {
          if (this.isNotEnough(list, recipes.turkey)) return;

          message = "Success";
          list.protein -= recipes.turkey.protein;
          list.carbohydrate -= recipes.turkey.carbohydrate;
          list.fat -= recipes.turkey.fat;
          list.flavour -= recipes.turkey.flavour;
        }
      },
    };
    const tokens = input.split(" ");
    const command = tokens[0];

    if (command === "restock") {
      const ingredient = tokens[1];
      const quantity = Number(tokens[2]);

      ingredients.restock(ingredient, quantity);
    } else if (command === "prepare") {
      const recipe = tokens[1];
      const quantity = Number(tokens[2]);

      ingredients.prepare(recipe, quantity);
    } else if (command === "report") {
      ingredients.report();
    }

    return message;
  }

  return solution;
}

const manager = solve();
console.log(manager("restock flavour 50"));
manager("prepare lemonade 4");
console.log(manager("restock carbohydrate 10"));
manager("restock flavour 10");
manager("prepare apple 1");
manager("restock fat 10");
manager("prepare burger 1");
console.log(manager("report"));

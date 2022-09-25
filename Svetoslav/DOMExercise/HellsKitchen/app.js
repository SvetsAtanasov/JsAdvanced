function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const textArea = JSON.parse(document.querySelector("textarea").value);
    const bestResto = document.querySelector("#bestRestaurant > p");
    const workers = document.querySelector("#workers > p");

    const factory = () => {
      const restaurants = [];

      for (const text of textArea) {
        const splitArrays = text.split(" - ");
        const restaurantName = splitArrays[0];
        const splitWorkers = splitArrays[1].split(", ");
        const restaurant = { restName: restaurantName, staff: [] };
        const restoExists = restaurants.some((x) => x.restName === restaurantName)

        for (const staffMember of splitWorkers) {
          const splitKeys = staffMember.split(" ");
          const name = splitKeys[0];
          const salary = Number(splitKeys[1]);
          const worker = { name: name, salary: salary };

          if (restoExists) {
            restaurants
              .find((x) => x.restName === restaurantName)
              .staff.push(worker);
          } else {
            restaurant.staff.push(worker);
          }
        }

        if (!restoExists)
          restaurants.push(restaurant);
      }

      return restaurants;
    };

    const library = () => {
      return {
        avarageSalary(arr) {
          for (const restaurant of arr) {
            let avgSalary = 0;

            for (const staffMember of restaurant.staff) {
              avgSalary += staffMember.salary;
            }

            restaurant.avarageSalary = (
              avgSalary / restaurant.staff.length
            ).toFixed(2);
          }
        },

        bestSalary(arr) {
          for (const restaurant of arr) {
            restaurant.staff.sort((a, b) => b.salary - a.salary);

            restaurant.bestSalary = restaurant.staff[0].salary.toFixed(2);
          }
        },

        bestRestaurant(arr) {
          const bestRestaurant = arr.sort(
            (a, b) => b.bestSalary - a.bestSalary
          )[0];

          return bestRestaurant;
        },
      };
    };

    const restaurants = factory(textArea);
    const lib = library();
    lib.avarageSalary(restaurants);
    lib.bestSalary(restaurants);
    const bestRestaurant = lib.bestRestaurant(restaurants);

    bestResto.textContent = `Name: ${bestRestaurant.restName} Average Salary: ${bestRestaurant.avarageSalary} Best Salary: ${bestRestaurant.bestSalary}`;

    let workersText = [];

    for (const worker of bestRestaurant.staff) {
      workersText.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
    }

    workers.textContent = workersText.join(" ");
  }
}

class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }

    this.plants.push({
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    });

    this.spaceAvailable -= spaceRequired;

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    if (!this.plants.some((x) => x.plantName === plantName)) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (this.plants.find((x) => x.plantName === plantName).ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    const plant = this.plants.find((x) => x.plantName === plantName);
    plant.ripe = true;
    plant.quantity += quantity;

    if (plant.quantity > 1) {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }

    return `${quantity} ${plantName} has successfully ripened.`;
  }

  harvestPlant(plantName) {
    if (!this.plants.find((x) => x.plantName === plantName)) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (this.plants.find((x) => x.plantName === plantName).ripe === false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    const plant = this.plants.find((x) => x.plantName === plantName);
    this.plants = this.plants.filter((x) => x.plantName !== plantName);
    this.storage.push(plant);
    this.spaceAvailable += plant.spaceRequired;

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    const plants = this.plants
      .sort((a, b) => {
        if (a.plantName < b.plantName) return -1;
        if (b.plantName > a.plantName) return 1;

        return 0;
      })
      .map((x) => {
        return `${x.plantName}`;
      });

    const result = [
      `The garden has ${this.spaceAvailable} free space left.`,
      `Plants in the garden: ${plants.join(", ")}`,
    ];

    if (this.storage < 1) {
      result.push("Plants in the storage: The storage is empty.");
    } else {
      const harvestedPlants = this.storage.map((x) => {
        return `${x.plantName} (${x.quantity})`;
      });

      result.push(`Plants in storage: ${harvestedPlants.join(", ")}`);
    }

    return result.join("\n");
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());

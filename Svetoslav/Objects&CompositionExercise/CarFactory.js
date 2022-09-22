function solve(order) {
  const car = { model: order.model };
  const carParts = {
    engines: [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 },
    ],

    carriages: [
      { type: "hatchback", color: null },
      { type: "coupe", color: null },
    ],
  };

  putEngine(carParts, car);
  putCarriage(carParts, car);
  car.wheels = putWheels();

  function putEngine(carParts, car) {
    for (const engine of carParts.engines) {
      if (order.power <= engine.power) {
        car.engine = { ...engine };
        break;
      }
    }
  }

  function putCarriage(carParts, car) {
    for (const carriage of carParts.carriages) {
      if (order.carriage === carriage.type) {
        const carr = { ...carriage };
        carr.color = order.color;

        car.carriage = { ...carr };
        break;
      }
    }
  }

  function putWheels() {
    let wheels = [];

    for (let i = 0; i < 4; i++) {
      if (order.wheelsize % 2 !== 1) order.wheelsize--;

      wheels.push(order.wheelsize);
    }

    return wheels;
  }

  return car;
}

solve({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});

solve({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});

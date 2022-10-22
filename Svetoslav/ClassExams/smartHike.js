class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals[peak] !== undefined) {
      return `${peak} has already been added to your goals`;
    }

    this.goals[peak] = altitude;
    return `You have successfully added a new goal - ${peak}`;
  }

  hike(peak, time, difficultyLevel) {
    if (this.goals[peak] === undefined) {
      throw new Error(`${peak} is not in your current goals`);
    }

    if (this.goals[peak] !== undefined && this.resources === 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    if (this.resources - time * 10 < 0) {
      return "You don't have enough resources to complete the hike";
    }

    this.resources -= time * 10;
    this.listOfHikes.push({
      peak,
      time,
      difficultyLevel,
    });

    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    this.resources += time * 10;

    if (this.resources > 100) {
      this.resources = 100;

      return `Your resources are fully recharged. Time for hiking!`;
    }

    return `You have rested for ${time} hours and gained ${
      time * 10
    }% resources`;
  }

  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria === "hard" || criteria === "easy") {
      if (!this.listOfHikes.some((x) => x.difficultyLevel === criteria)) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      if (this.listOfHikes.length === 1) {
        return `${this.username}'s best ${criteria} hike is ${this.listOfHikes[0].peak} peak, for ${this.listOfHikes[0].time} hours`;
      }

      const sortedHikes = this.listOfHikes.sort((a, b) => a.time - b.time);
      const bestHike = sortedHikes[0];

      return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    }

    const allHikes = ["All hiking records:"];
    this.listOfHikes.forEach((x) => {
      allHikes.push(`${this.username} hiked ${x.peak} for ${x.time} hours`);
    });

    return allHikes.join("\n");
  }
}
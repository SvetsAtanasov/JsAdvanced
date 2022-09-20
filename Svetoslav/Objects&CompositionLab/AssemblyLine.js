function createAssemblyLine() {
  return {
    hasClima(car) {
      const settings = {
        temp: 21,
        tempSettings: 21,
        adjustTemp() {
          if (this.temp < this.tempSettings) this.temp += 1;
          else if (this.temp > this.tempSettings) this.temp -= 1;
        },
      };

      return Object.assign(car, settings);
    },

    hasAudio(car) {
      const parameters = {
        currentTrack: null,
        nowPlaying() {
          if (this.currentTrack !== null)
            console.log(
              `Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`
            );
        },
      };

      return Object.assign(car, parameters);
    },

    hasParktronic(car) {
      const parameters = {
        checkDistance(distance) {
          if (distance < 0.1) console.log("Beep! Beep! Beep!");
          else if (distance >= 0.1 && distance < 0.25)
            console.log("Beep! Beep!");
          else if (distance >= 0.25 && distance < 0.5) console.log("Beep!");
          else console.log("");
        },
      };

      return Object.assign(car, parameters);
    },
  };
}

const assebmlyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

assebmlyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assebmlyLine.hasAudio(myCar);
myCar.currentTrack = {
  name: "Never Gonna Give You Up",
  artist: "Rick Astley",
};
myCar.nowPlaying();

assebmlyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

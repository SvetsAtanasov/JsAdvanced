class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    const players = [];
    let res = "You successfully invite ";

    footballPlayers.forEach((player) => {
      let [name, age, playerValue] = player.split("/");
      age = Number(age);
      playerValue = Number(playerValue);

      if (this.invitedPlayers.some((x) => name === x.name)) {
        const existingPlayer = this.invitedPlayers.find((x) => x.name === name);

        if (playerValue > existingPlayer.playerValue) {
          existingPlayer.playerValue = playerValue;
        }

        return;
      }

      this.invitedPlayers.push({
        name,
        age,
        playerValue,
      });

      players.push(`${name}`);
    });

    res += players.join(", ") + ".";

    return res;
  }

  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split("/");
    playerOffer = Number(playerOffer);
    const player = this.invitedPlayers.find((x) => x.name === name);

    if (player === undefined) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (playerOffer < player.playerValue) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${
          player.playerValue - playerOffer
        } million more are needed to sign the contract!`
      );
    }

    this.invitedPlayers.find((x) => x.name === name).playerValue = "Bought";

    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
  }

  ageLimit(name, age) {
    const player = this.invitedPlayers.find((x) => x.name === name);

    if (player === undefined) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (player.age < age) {
      if (age - player.age < 5) {
        return `${name} will sign a contract for ${
          age - player.age
        } years with ${this.clubName} in ${this.country}!`;
      } else if (age - player.age > 5) {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    } else {
      return `${name} is above age limit!`;
    }
  }

  transferWindowResult() {
    const res = ["Players list:"];
    this.invitedPlayers.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;

      return 0;
    });

    this.invitedPlayers.map((x) => {
      res.push(`Player ${x.name}-${x.playerValue}`);
    });

    return res.join("\n");
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

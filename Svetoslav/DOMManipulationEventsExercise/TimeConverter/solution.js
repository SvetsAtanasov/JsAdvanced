function attachEventsListeners() {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const btns = Array.from(document.querySelectorAll("input"));

  btns.forEach((btn) => {
    if (btn.id === "daysBtn") {
      btn.addEventListener("click", () => {
        const dayToHrs = Number(days.value) * 24;
        hours.value = dayToHrs;

        const hrsToMins = Number(hours.value) * 60;
        minutes.value = hrsToMins;

        const minsToSecs = Number(minutes.value) * 60;
        seconds.value = minsToSecs;
      });
    } else if (btn.id === "hoursBtn") {
      btn.addEventListener("click", () => {
        const hrsToDays = Number(hours.value) / 24;
        days.value = hrsToDays;

        const hrsToMins = Number(hours.value) * 60;
        minutes.value = hrsToMins;

        const minsToSecs = Number(minutes.value) * 60;
        seconds.value = minsToSecs;
      });
    } else if (btn.id === "minutesBtn") {
      btn.addEventListener("click", () => {
        const minsToHrs = Number(minutes.value) / 60;
        hours.value = minsToHrs;

        const minsToSecs = Number(minutes.value) * 60;
        seconds.value = minsToSecs;

        const hrsToDays = Number(hours.value) / 24;
        days.value = hrsToDays;
      });
    } else if (btn.id === "secondsBtn") {
      btn.addEventListener("click", () => {
        const secsToMins = Number(seconds.value) / 60;
        minutes.value = secsToMins;

        const minsToHrs = Number(minutes.value) / 60;
        hours.value = minsToHrs;

        const hrsToDays = Number(hours.value) / 24;
        days.value = hrsToDays;
      });
    }
  });
}

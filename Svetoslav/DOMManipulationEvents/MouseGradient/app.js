function attachGradientEvents() {
  const gradientBox = document.getElementById("gradient-box");
  const result = document.getElementById("result");

  gradientBox.addEventListener("mousemove", getPercent);
  gradientBox.addEventListener("mouseout", getPercentOut);

  function getPercent(event) {
    const percent = Math.trunc(
      (event.offsetX / event.target.clientWidth) * 100
    );
    result.textContent = `${percent}%`;
  }

  function getPercentOut() {
    result.textContent = "";
  }
}

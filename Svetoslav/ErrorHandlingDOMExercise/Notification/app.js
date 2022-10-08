function notify(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.addEventListener("click", hideMessage);
  const isVisible = notification.style.display === "block";

  if (!isVisible) {
    notification.style.display = "block";
  }

  function hideMessage() {
    notification.style.display = "none";
  }
}

function updateDateTime() {
  const currentUTCDate = new Date().toUTCString();
  const dateObject = new Date(currentUTCDate);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[dateObject.getUTCDay()];

  const currentTime = dateObject.toISOString().substr(11, 8);

  document.getElementById("currentDay").textContent = dayOfWeek;
  document.getElementById("currentTime").textContent = currentTime;
}

updateDateTime();

setInterval(updateDateTime, 1000);

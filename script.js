const currentUTCDay = document.getElementById("currentDay");
const currentUTCTime = document.getElementById("currentTime");
const date = new Date();

const updateDate = () => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = date.getDay();
  const currentDay = daysOfTheWeek[dayIndex];
  currentUTCDay.innerText = currentDay;
};

const updateUTCTime = () => {
  const date = new Date();
  const utcTimeMilliseconds = date.getTime();
  currentUTCTime.textContent = utcTimeMilliseconds;
};

updateDate();
updateUTCTime();
setInterval(updateUTCTime, 1);

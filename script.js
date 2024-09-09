let days = 3;
let today = new Date();

const displayDaysLeft = () => {
  const countdownP = document.getElementById("countdown-p");
  countdownP.textContent = "Days since I started: " + days;
};

const counter = () => {
  setInterval(() => {
    days++;
    console.log(days);
    displayDaysLeft();
  }, 86400);
};

counter();

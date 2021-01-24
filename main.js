// Selectors
const timeBtn = document.querySelector(`.main`);
const resetBtn = document.querySelector(`.reset`);
const panel = document.querySelector(`.time`);

// Functions variables
let interval;
let time = 0;
let flag = true;

// Timer function
const timer = () => {
  if (flag) {
    interval = setInterval(() => {
      time += 0.01;
      panel.textContent = time.toFixed(2);
    }, 10);

    timeBtn.textContent = "Stop";

    flag = !flag;
  } else {
    clearInterval(interval);

    timeBtn.textContent = "Start";

    flag = !flag;
  }
};

// Timer listener
timeBtn.addEventListener(`click`, timer);

// Reset function
const reset = () => {
  clearInterval(interval);

  time = 0;

  timeBtn.textContent = "Start";
  panel.textContent = "---";

  flag = true;
};

// Reset listener
resetBtn.addEventListener(`click`, reset);

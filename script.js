Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const v1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sample();
const v2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sample();
const o = ["+", "-", "*"].sample();
let target = eval(v1 + o + v2);
let question = v1 + o + v2;
let answer = document.getElementById("answer");
let start = document.querySelector("#start");
let againbutton = document.getElementById("tryagain");

document.getElementById("start").addEventListener("click", startCountdown);
document.getElementById("tryagain").addEventListener("click", tryNoDisplay);
function tryAgain() {
  againbutton.style.display = "block";
}
function tryNoDisplay() {
  againbutton.style.display = "none";
  startCountdown();
}

function startCountdown() {
  let countdown = 5; // 60 seconds

  let timer = setInterval(function () {
    countdown--;

    // Update the countdown display
    document.getElementById("countdown").textContent = countdown;

    if (countdown <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").textContent = "Countdown finished!";
      tryAgain();
    }
  }, 1000); // 1000 milliseconds = 1 second
}

document.write(question);

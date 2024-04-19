"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (msg) {
  document.querySelector(".message").textContent = msg;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);
  if (!guessNum) {
    // When input guess is empty or NaN
    displayMessage("⛔️ No number!");
  } else if (guessNum === secretNumber) {
    // When player wins
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".game").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "13rem";

    if (score > highscore) {
      // Update the value of highscore and re-display it.
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessNum !== secretNumber) {
    // When the guess number is wrong
    if (score > 1) {
      displayMessage(guessNum > secretNumber ? "📈 Too high!" : "📉 Too low!");
      // Decrease the current score of player by 1 point!
      score--;
      // Display remained score of player
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// This part is reserved for Lab 20.3
// Event of clicking on 'again' button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".game").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "10rem";
});

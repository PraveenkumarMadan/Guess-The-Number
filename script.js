"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
document.querySelector("#check").addEventListener("click", function () {
  const number = Number(document.querySelector("#num").value);
  if (!number || number < 1 || number > 20) {
    document.querySelector("#sentence").textContent =
      "📌 Pleae enter a valid Number";
  } else {
    if (secretNumber === number) {
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector("#secret-number").textContent = secretNumber;
      document.querySelector("#sentence").textContent =
        "🎉 You found the Number :)";
      document.querySelector("#check").disabled = true;
      if (score > highscore) {
        highscore = score;
        document.querySelector("#hscore").textContent = highscore;
      }
    } else {
      if (secretNumber < number) {
        document.querySelector("#sentence").textContent =
          "The number you are guessing is lower than this 📉";
      } else {
        document.querySelector("#sentence").textContent =
          "The number you are guessing is higher than this 📈";
      }
      score--;
      if (score < 0) {
        document.querySelector("#sentence").textContent =
          "You Lost the game :(";
        document.querySelector("#score").textContent = 0;
      } else {
        document.querySelector("#score").textContent = score;
      }
    }
  }
});
document.querySelector("#play-again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#efebe0";
  document.querySelector("#secret-number").textContent = "?";
  document.querySelector("#check").disabled = false;
  document.querySelector("#sentence").textContent = "Start the Game 🤜🤛";
  document.querySelector("#score").textContent = 20;
  document.querySelector("#num").value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

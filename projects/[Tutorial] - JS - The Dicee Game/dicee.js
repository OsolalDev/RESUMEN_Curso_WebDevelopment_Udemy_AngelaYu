var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var leftDice = document.querySelector(".img1");
var rightDice = document.querySelector(".img2");
var selectH1 = document.querySelector("h1");

var randomDiceImageLEFT = "./images/dice" + randomNumber1 + ".png";
var randomDiceImageRIGHT = "./images/dice" + randomNumber2 + ".png";

leftDice.setAttribute("src", randomDiceImageLEFT);
rightDice.setAttribute("src", randomDiceImageRIGHT);

if (randomNumber1 > randomNumber2) {
  selectH1.innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  selectH1.innerHTML = "Player 2 Wins!";
} else {
  selectH1.innerHTML = "Draw!";
}

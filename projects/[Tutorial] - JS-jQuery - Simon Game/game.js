let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;

// Random next color in the game
function nextSequence() {
  level++;
  $("h1").text("Level " + level);
  randomNumber = Math.floor(Math.random() * 4); // 0 - 3
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //   Animation of the next colour we have to press
  $("#" + randomChosenColour)
    .fadeOut(150)
    .fadeIn(150);

  // Playing the sound of the button we have to press
  playSound(randomChosenColour);
}

// What to do when clicking a button
$(".btn").click((e) => {
  let userChosenColour = e.target.attributes.id.value;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  //   console.log(userClickedPattern);
});

//
$(document).keypress(function () {
  if (!gameStarted) {
    $("h1").text("Level 0");
    nextSequence();
    gameStarted = true;
  }
});

//? FUNCTION TO PLAY A SOUND
function playSound(name) {
  switch (name) {
    case "red":
      let redAudio = new Audio("./sounds/red.mp3");
      redAudio.play();
      break;
    case "blue":
      let blueAudio = new Audio("./sounds/blue.mp3");
      blueAudio.play();
      break;
    case "green":
      let greenAudio = new Audio("./sounds/green.mp3");
      greenAudio.play();
      break;
    case "yellow":
      let yellowAudio = new Audio("./sounds/yellow.mp3");
      yellowAudio.play();
      break;

    default:
      console.log(
        "Something is wrong with this variable ... " + randomChosenColour
      );
      break;
  }
}

//? FUNCTION TO ANIMATE WHEN CLICKING A BUTTON
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
    }
  } else {
    let wrongAudio = new Audio("./sounds/wrong.mp3");
    wrongAudio.play();
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

//
function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  gameStarted = false;
}

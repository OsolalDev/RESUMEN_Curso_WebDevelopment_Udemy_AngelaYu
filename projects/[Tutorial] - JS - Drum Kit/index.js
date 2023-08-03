// document.querySelector("button").addEventListener("click", () => {
//   alert("I got clicked!");
// });

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked!");
// }

//! ADD LISTENER TO MORE THAN ONE ELEMENT AT A TIME.
let elements = document.querySelectorAll(".drum");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", () => {
    let buttonContent = elements[i].textContent;
    checkSwitchAudio(buttonContent);
    buttonAnimation(buttonContent);
  });
}

//? OTHER WAY TO WRITE IT
// elements.forEach((element) => {
//   element.addEventListener("click", () => {
//     alert("I got clicked!");
//   });
// });

//! ADD LISTENER TO THE WHOLE PAGE FOR WHEN PRESSING DOWN A KEY
document.addEventListener("keydown", (e) => {
  let keyCode = e.key;
  checkSwitchAudio(keyCode);
  buttonAnimation(keyCode);
});

//! AUXILIAR FUNCTION TO NOT REPEAT CODE FOR THE SWITCH
function checkSwitchAudio(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      break;
  }
}

//! AUXILIAR FUNCTION TO MAKE AN ANIMATION WHEN PRESSING KEY/CLICKING
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

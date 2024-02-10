// Start with grid being 16x16
let userChosenNumber = 16;

// Create a Div that can be used later - could do this in the HTML but this task is about testing JS skills
const div1 = document.createElement("div");
div1.id = "div1";
document.body.appendChild(div1);

const topTitle = document.createElement("p");
topTitle.id = "title";
topTitle.textContent = "Pixel Etch-a-Sketch";
topTitle.style.color = "white";
topTitle.style.fontSize = "70px";
topTitle.style.fontFamily = "titleFont";
topTitle.style.textAlign = "center";
div1.appendChild(topTitle);

const instructions = document.createElement("p");
instructions.id = "instructions";
instructions.textContent = "Move your mouse around to create a masterpiece!";
instructions.style.textAlign = "center";
instructions.style.color = "white";
instructions.style.fontFamily = "Arial";
div1.appendChild(instructions);

const titleButtons = document.createElement("div");
titleButtons.id = "buttons";
div1.appendChild(titleButtons);

// Randomises the colour - I didnt write this code myself
// I could have come up with a solution myself but it wouldn't have been as effective
function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

//Create a function that can be called upone later to reset the game
function resetter() {
  let boxes = document.getElementsByClassName("box");
  for (let m = 0; m < boxes.length; m++) {
    boxes[m].style.backgroundColor = "transparent";
  }
}

// Creates the Reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", resetter);
resetButton.classList.add("button");
titleButtons.appendChild(resetButton);

// Creates the play area - is a function so that it can be easily regenerated as different sizes
let playRound;
(playRound = function playAgain() {
  for (let i = 1; i <= userChosenNumber; i++) {
    // console.log(i)
    const xContainerDivs = [];
    xContainerDivs[i] = document.createElement("div");
    xContainerDivs[i].id = "container" + i;
    xContainerDivs[i].classList.add("container");
    container.appendChild(xContainerDivs[i]);
    for (let j = 1; j <= userChosenNumber; j++) {
      // console.log(`no of boxes` + j)
      const yBoxDivs = [];
      yBoxDivs[j] = document.createElement("div");
      yBoxDivs[j].id = "box" + j + "container" + i;
      yBoxDivs[j].classList.add("box");
      xContainerDivs[i].appendChild(yBoxDivs[j]);
    }
  }
})();

// Waits until the DOM has loaded and then creates a function that changes the color based on mousemovement
window.addEventListener("DOMContentLoaded", function () {
  let makeItColor;
  (makeItColor = function makingItColorful() {
    for (let k = 1; k <= userChosenNumber; k++) {
      // console.log(`no of k` + k)
      for (let l = 1; l <= userChosenNumber; l++) {
        document
          .getElementById(`box${k}container${l}`)
          .addEventListener("mouseenter", function () {
            // console.log(this.id);
            let color = random_rgba();
            this.style.backgroundColor = color;
          });
      }
    }
  })();

  // Creates a button that enables you to change the number of boxes/pixels
  const noOfBoxButton = document.createElement("button");
  noOfBoxButton.textContent = "Change pixel size";
  noOfBoxButton.addEventListener("click", function () {
    let userInput = prompt("How many vertical/horizontal pixels?");
    if (
      userInput > 0 &&
      userInput <= 100 &&
      function isNumeric(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
      }
    ) {
      userChosenNumber = userInput;
    } else {
      userInput = prompt("Pick a number between 1-100");
    }
    console.log("userInput" + userChosenNumber);
    document.querySelectorAll(".box").forEach((e) => e.remove());
    document.querySelectorAll(".container").forEach((e) => e.remove());
    playRound();
    resetter();
    makeItColor();
  });
  titleButtons.appendChild(noOfBoxButton);
});

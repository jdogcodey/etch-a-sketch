const container = document.querySelector(`#container`);

let i = 1;
let j = 1;
let k = 1;
let l = 1;
let m = 0;
let n = 0;

let userChosenNumber = 16; 

let userInput = 0;

const xContainerDivs = [];
const yBoxDivs = [];

function resetter() {
    let boxes = document.getElementsByClassName('box');
    for (let m = 0; m<boxes.length; m++) {
        boxes[m].style.backgroundColor = "transparent";
    };
}

const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.addEventListener('click', resetter);
document.body.appendChild(resetButton);

let playRound 
(playRound = function playAgain() {
for (i = 1; i <= userChosenNumber; i++) {
    // console.log(i)
    xContainerDivs[i] = document.createElement('div');
    xContainerDivs[i].id = 'container' + i;
    xContainerDivs[i].classList.add('container');
    container.appendChild(xContainerDivs[i]);
    for (j = 1; j <= userChosenNumber; j++) {
       // console.log(`no of boxes` + j)
        yBoxDivs[j] = document.createElement('div');
        yBoxDivs[j].id = 'box' + j + 'container' + i;
        yBoxDivs[j].classList.add('box');
        xContainerDivs[i].appendChild(yBoxDivs[j]);
        };
    }
})();

window.addEventListener("DOMContentLoaded", function () {
        let makeItRed
        (makeItRed = function makingItRed() {
        for (k = 1; k <= userChosenNumber; k++) {
        // console.log(`no of k` + k)
        for (l = 1; l <= userChosenNumber; l++) {
        document.getElementById(`box${k}container${l}`).addEventListener('mouseenter', function () {
            // console.log(this.id);
            this.style.backgroundColor = 'red';
        });
        };
        };
        })();
    
    const noOfBoxButton = document.createElement('button');
    noOfBoxButton.textContent = 'Change pixel size';
    noOfBoxButton.addEventListener('click', function() {
        let userInput = prompt('How many vertical/horizontal pixels?');
        if (userInput > 0 && userInput <= 100 && function isNumeric(num) {
            return !isNaN(parseFloat(num)) && isFinite(num);
        }) {
            userChosenNumber = userInput;
        }
        else {
            userInput = prompt('Pick a number between 1-100');
        };
        console.log('userInput' + userChosenNumber)
        document.querySelectorAll('.box').forEach(e => e.remove());
        document.querySelectorAll('.container').forEach(e => e.remove());
        playRound();
        resetter ();
        makeItRed();
    });
document.body.appendChild(noOfBoxButton);
});

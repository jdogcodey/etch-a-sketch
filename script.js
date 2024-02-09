const container = document.querySelector(`#container`);

i = 1;
j = 1;
k = 1;
l = 1;

const xContainerDivs = [];
const yBoxDivs = [];

for (i = 1; i <= 16; i++) {
    console.log(i)
    xContainerDivs[i] = document.createElement('div');
    xContainerDivs[i].id = 'container' + i;
    xContainerDivs[i].classList.add('container');
    container.appendChild(xContainerDivs[i]);
    for (j = 1; j <= 16; j++) {
        yBoxDivs[j] = document.createElement('div');
        yBoxDivs[j].id = 'box' + j + 'container' + i;
        yBoxDivs[j].classList.add('box');
        xContainerDivs[i].appendChild(yBoxDivs[j]);
        };
    }

window.addEventListener("DOMContentLoaded", function() {
    for (k = 1; k <= 16; k++) {
        for (l = 1; l <= 16; l++) {
        document.getElementById(`box${k}container${l}`).addEventListener('mouseenter', function () {
            console.log(this.id);
            this.style.backgroundColor = 'red';
        });
        };
    };
});
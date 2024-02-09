const container = document.querySelector(`#container`);

i = 1;
j = 0;

const xContainerDivs = [];
const yBoxDivs = [];

for (i = 1; i <= 16; i++) {
    console.log(i)
    xContainerDivs[i] = document.createElement('div');
    xContainerDivs[i].id = 'container' + i;
    xContainerDivs[i].class = 'container';
    xContainerDivs[i].textContent = `This is Div ${i}`
    container.appendChild(xContainerDivs[i]);
    for (j = 1; j <= 16; j++) {
        yBoxDivs[j] = document.createElement('div');
        yBoxDivs[j].id = 'box' + j;
        yBoxDivs[j].class = 'box';
        yBoxDivs[j].textContent = `This is box ${j}`;
        xContainerDivs[i].appendChild(yBoxDivs[j]);
    }
}

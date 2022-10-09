function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesRef.append(...boxes);
};

const createRef = document.querySelector('button[data-create]');
const destroyRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createRef.addEventListener('click', (event) => {
  const amount = document.querySelector('input').value;
  createBoxes(amount);
});

destroyRef.addEventListener('click', (event) => {
  boxesRef.innerHTML = '';
  document.querySelector('input').value = 0;
});


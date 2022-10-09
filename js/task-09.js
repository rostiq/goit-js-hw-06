function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const nameRef = document.querySelector('.color');

btnRef.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  nameRef.textContent = getRandomHexColor();
});



const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const nameRef = document.querySelector('.color');

btnRef.addEventListener('click', () => {
  const colors = getRandomHexColor();
  bodyRef.style.backgroundColor = colors;
  nameRef.textContent = colors;
});



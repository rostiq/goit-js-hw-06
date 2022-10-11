let counterValue = 0;
const valueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

decrementBtnRef.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}
);

incrementBtnRef.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
}
);
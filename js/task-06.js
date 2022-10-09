const inputRef = document.querySelector('#validation-input');
const dataLentgh = inputRef.getAttribute('data-length');

inputRef.addEventListener("blur", (event) => {
    if (event.target.value.length == dataLentgh) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
    });

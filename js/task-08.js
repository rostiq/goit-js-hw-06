const formRef = document.querySelector('.login-form');

formRef.addEventListener("submit", (event) => {
    event.preventDefault();

    const {email} = event.target.elements;
    const {password} = event.target.elements;

    if (email.value === "" || password.value === "") {
         alert("Всі поля мають бути заповнені!");
    }

    const formData = {
        email: email.value,
        password: password.value,
    };

    console.log(formData);
    event.target.reset();
}); 


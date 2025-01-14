const navbarToggle = document.querySelector('.navbar');
const navButton = document.querySelector('.logo'); 
navButton.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
});
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input, textarea");
const submitButton = form.querySelector(".form_btn");

form.addEventListener("submit", (event) => {
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.border = "1px solid red"; 
        } else {
            input.style.border = "1px solid #ddd"; 
        }
    });

    if (!isValid) {
        event.preventDefault(); 
        alert("Veuillez remplir tous les champs.");
    }
});

const buttons = document.querySelectorAll('.btn1, .btn2');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});
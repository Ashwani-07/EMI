

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const switchFormLink = document.querySelectorAll('.switch-form');


    switchFormLink.forEach(link => {
        link.addEventListener('click', () => {
            if (link.textContent.toLowerCase() === 'sign up') {
                container.classList.add('active-signup');
                container.classList.remove('active-login');
            } else {
                container.classList.add('active-login');
                container.classList.remove('active-signup');
            }
        });
    });


    const loginForm = document.querySelector('.login form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginForm.querySelector('input[type="email"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value.trim();


        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
            alert("Login successful! Redirecting...");
        
            window.location.href = "style.html";  
        } else {
            alert("This account does not exist or credentials are incorrect.");
        }
    });


    const signupForm = document.querySelector('.signup form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = signupForm.querySelector('input[type="email"]').value.trim();
        const password = signupForm.querySelector('input[type="password"]').value.trim();

        // Save credentials in localStorage
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Registration successful! You can now log in.");
        // Switch back to login form
        container.classList.add('active-login');
        container.classList.remove('active-signup');
    });
});

function validateSignupForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function (element) {
        element.innerHTML = '';
    });

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate first name
    if (firstName === '') {
        document.getElementById('firstNameError').innerText = 'First name is required';
        isValid = false;
    }

    // Validate last name
    if (lastName === '') {
        document.getElementById('lastNameError').innerText = 'Last name is required';
        isValid = false;
    }

    // Validate age
    if (age === '' || isNaN(age) || age <= 0) {
        document.getElementById('ageError').innerText = 'Please enter a valid age';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address';
        isValid = false;
    }

    // Validate password
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long and contain letters, numbers, and a special character';
        isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        isValid = false;
    }

    // If the form is valid, redirect to index.html
    if (isValid) {
        window.location.href = 'index.html'; // Redirect to index.html
    }

    return false; // Prevent form submission to allow redirection
}

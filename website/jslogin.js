function validateForm() {
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Regular expressions for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex pattern
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Alphanumeric + special character regex pattern

    // Error message elements
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    // Validate username (email)
    if (!emailPattern.test(username)) {
        usernameError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password (alphanumeric + special character)
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain letters, numbers, and a special character.';
        isValid = false;
    }

    return isValid; // Prevent form submission if any validation fails
}

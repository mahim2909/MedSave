function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function saveData() {
    // Perform validation and save data logic
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const userId = document.getElementById('user-id').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const contact = document.getElementById('contact').value;

    let valid = true;

    // Validation for first name
    if (firstName.trim() === '') {
        document.getElementById('first-name-error').textContent = 'First name is required';
        valid = false;
    } else {
        document.getElementById('first-name-error').textContent = '';
    }

    // Validation for user ID
    if (userId.trim() === '') {
        document.getElementById('user-id-error').textContent = 'User ID is required';
        valid = false;
    } else {
        document.getElementById('user-id-error').textContent = '';
    }

    // Validation for email
    if (email.trim() === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        valid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // Validation for password
    if (password.trim() === '') {
        document.getElementById('password-error').textContent = 'Password is required';
        valid = false;
    } else {
        document.getElementById('password-error').textContent = '';
    }

    // Confirm Password validation
    if (confirmPassword.trim() === '') {
        document.getElementById('confirm-password-error').textContent = 'Confirm Password is required';
        valid = false;
    } else if (confirmPassword !== password) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
        valid = false;
    } else {
        document.getElementById('confirm-password-error').textContent = '';
    }

    // Validation for contact
    if (contact.trim() === '') {
        document.getElementById('contact-error').textContent = 'Contact is required';
        valid = false;
    } else {
        document.getElementById('contact-error').textContent = '';
    }

    if (valid) {
        alert('Registration successful!');
        closePopup('registration-popup');
    }
}

function login() {
    const userId = document.getElementById('login-user-id').value;
    const password = document.getElementById('login-password').value;

    if (userId.trim() === '' || password.trim() === '') {
        alert('Please enter both User ID and Password');
    } else {
        alert('Login successful!');
        closePopup('login-popup');
    }
}

function sendOTP() {
    const email = document.getElementById('forgot-email').value;

    if (email.trim() === '') {
        alert('Please enter your email');
    } else {
        document.getElementById('otp-message').textContent = 'OTP sent to ' + email;
    }
}

function submitOTP() {
    const otp = document.getElementById('otp').value;

    if (otp.trim() === '') {
        alert('Please enter OTP');
    } else {
        alert('OTP verified!');
        closePopup('forgot-password-popup');
        openPopup('login-popup');
    }
}

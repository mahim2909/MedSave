function validateRegistration() {
    let valid = true;

    const firstName = document.getElementById("first-name").value.trim();
    const userId = document.getElementById("user-id").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const contact = document.getElementById("contact").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // First name validation
    if (!firstName) {
        document.getElementById("first-name-error").textContent = "First Name is required.";
        valid = false;
    } else {
        document.getElementById("first-name-error").textContent = "";
    }

    // User ID validation
    if (!userId) {
        document.getElementById("user-id-error").textContent = "User ID is required.";
        valid = false;
    } else {
        document.getElementById("user-id-error").textContent = "";
    }

    // Email validation
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").textContent = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    // Password validation
    if (!passwordPattern.test(password)) {
        document.getElementById("password-error").textContent = "Password must include uppercase, lowercase, digit, and special character.";
        valid = false;
    } else {
        document.getElementById("password-error").textContent = "";
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
        valid = false;
    } else {
        document.getElementById("confirm-password-error").textContent = "";
    }

    // Contact number validation
    if (contact.length !== 10 || isNaN(contact)) {
        document.getElementById("contact-error").textContent = "Contact number must be 10 digits.";
        valid = false;
    } else {
        document.getElementById("contact-error").textContent = "";
    }

    if (valid) {
        alert("Registration successful!");
        closePopup("registration-popup");
    }
}

function sendOTP() {
    const email = document.getElementById("forgot-email").value.trim();
    if (!email) {
        document.getElementById("otp-message").textContent = "Please enter a valid email to send OTP.";
    } else {
        document.getElementById("otp-message").textContent = `OTP has been sent to ${email}`;
    }
}

function submitOTP() {
    alert("OTP verified successfully.");
    closePopup("forgot-password-popup");
}

function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

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

    // Validate First Name
    if (!firstName) {
        document.getElementById("first-name-error").textContent = "First Name is required.";
        valid = false;
    } else {
        document.getElementById("first-name-error").textContent = "";
    }

    // Validate User ID
    if (!userId) {
        document.getElementById("user-id-error").textContent = "User ID is required.";
        valid = false;
    } else {
        document.getElementById("user-id-error").textContent = "";
    }

    // Validate Email
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").textContent = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    // Validate Password
    if (!passwordPattern.test(password)) {
        document.getElementById("password-error").textContent =
            "Password must be 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.";
        valid = false;
    } else {
        document.getElementById("password-error").textContent = "";
    }

    // Validate Confirm Password
    if (confirmPassword !== password) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
        valid = false;
    } else {
        document.getElementById("confirm-password-error").textContent = "";
    }

    // Validate Contact
    if (!/^\d{10}$/.test(contact)) {
        document.getElementById("contact-error").textContent = "Contact number must be exactly 10 digits.";
        valid = false;
    } else {
        document.getElementById("contact-error").textContent = "";
    }

    return valid;
}

function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

function sendOTP() {
    const email = document.getElementById("forgot-email").value.trim();
    if (!email) {
        alert("Please enter your email.");
    } else {
        document.getElementById("otp-message").textContent = `OTP has been sent to ${email}`;
    }
}

function submitOTP() {
    alert("OTP Submitted!");
}

// Function to open a popup
function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

// Function to close a popup
function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

// Function to validate registration
function validateRegistration() {
    const firstName = document.getElementById("first-name").value.trim();
    const userId = document.getElementById("user-id").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const contact = document.getElementById("contact-number").value.trim();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password must meet complexity requirements
    let valid = true;

    // First Name validation
    if (!firstName) {
        document.getElementById("first-name-error").textContent = "First Name is required.";
        valid = false;
    } else {
        document.getElementById("first-name-error").textContent = "";
    }

    // User ID validation (must be numeric)
    if (!userId) {
        document.getElementById("user-id-error").textContent = "User ID is required.";
        valid = false;
    } else if (!/^\d+$/.test(userId)) {
        document.getElementById("user-id-error").textContent = "User ID must be numeric.";
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

    // Confirm Password validation
    if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match.";
        valid = false;
    } else {
        document.getElementById("confirm-password-error").textContent = "";
    }

    // Contact Number validation
    if (contact.length !== 10 || isNaN(contact)) {
        document.getElementById("contact-error").textContent = "Contact number must be 10 digits.";
        valid = false;
    } else {
        document.getElementById("contact-error").textContent = "";
    }

    // Return the validation result to allow form submission
    return valid; // Prevent form submission if validation fails
}

// Function to clear all registration fields
function clearRegistration() {
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("user-id").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
    document.getElementById("contact-number").value = "";
    document.getElementById("first-name-error").textContent = "";
    document.getElementById("user-id-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirm-password-error").textContent = "";
    document.getElementById("contact-error").textContent = "";
}

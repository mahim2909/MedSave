<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mode = $_POST['mode'];

    // Database connection
    $con = new mysqli("localhost", "root", "", "medsave");
    if ($con->connect_error) {
        die("Failed to connect: " . $con->connect_error);
    }

    if ($mode === "register") {
        // Collect form fields
        $userId = trim($_POST['userId']);
        $firstName = trim($_POST['firstName']);
        $lastName = trim($_POST['lastName']);
        $email = trim($_POST['email']);
        $contact = trim($_POST['contact']);
        $address = trim($_POST['address']);
        $password = $_POST['password'];
        $confirmPassword = $_POST['confirmPassword'];

        // Validate inputs
        if (empty($userId) || empty($firstName) || empty($email) || empty($contact) || empty($password) || empty($confirmPassword)) {
            die("<h1>All required fields must be filled out.</h1>");
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            die("<h1>Invalid email format.</h1>");
        }

        if ($password !== $confirmPassword) {
            die("<h1>Passwords do not match.</h1>");
        }

        if (!preg_match('/^\d{10}$/', $contact)) {
            die("<h1>Contact number must be exactly 10 digits.</h1>");
        }

        if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $password)) {
            die("<h1>Password must include uppercase, lowercase, digit, and special character, and be at least 8 characters long.</h1>");
        }

        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert user data into the database
        $stmt = $con->prepare("INSERT INTO user (userId, firstName, lastName, email, contact, address, password) 
                               VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssss", $userId, $firstName, $lastName, $email, $contact, $address, $hashedPassword);

        if ($stmt->execute()) {
            echo "<h1>Registration Successful</h1>";
        } else {
            echo "<h1>Registration Failed: " . $stmt->error . "</h1>";
        }

        $stmt->close();
    } else {
        echo "<h1>Invalid Operation</h1>";
    }

    // Close the database connection
    $con->close();
}
?>

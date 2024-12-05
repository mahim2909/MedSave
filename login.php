<?php
// Start the session to store user data upon successful login
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form fields
    $userId = $_POST['userId']; // User ID entered by the user
    $password = $_POST['password']; // Password entered by the user

    // Database connection
    $con = new mysqli("localhost", "root", "", "medsave");
    if ($con->connect_error) {
        die("Failed to connect: " . $con->connect_error);
    }

    // Prepare SQL query to fetch the user data based on userId
    $stmt = $con->prepare("SELECT * FROM user WHERE userId = ?");
    $stmt->bind_param("s", $userId); // Bind the userId to the query

    // Execute the query and get the result
    $stmt->execute();
    $stmt_result = $stmt->get_result();

    // Check if the user exists
    if ($stmt_result->num_rows > 0) {
        // Fetch the user data
        $data = $stmt_result->fetch_assoc();

        // Verify the password using password_verify()
        if (password_verify($password, $data['password'])) {
            // Login successful, store session data
            $_SESSION['user_id'] = $data['userId'];  // Store userId in session
            $_SESSION['first_name'] = $data['firstName']; // Store first name in session
            $_SESSION['last_name'] = $data['lastName'];   // Store last name in session

            // Redirect to a secure page or dashboard
            echo "<h1>SUCCESSFULLY LOGGED IN!</h1>";
            
        } else {
            // Invalid password
            echo "<p>Invalid password. Please try again.</p>";
        }
    } else {
        // User not found
        echo "<p>No user found with the provided user ID. Please check your credentials.</p>";
    }

    // Close the prepared statement and the database connection
    $stmt->close();
    $con->close();
} else {
    // If the request method is not POST, show an error
    echo "Unauthorized access.";
}
?>

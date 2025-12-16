<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to      = "info@e-nerkom.com";
    $subject = "New Contact Message";

    $name    = htmlspecialchars(trim($_POST['name']));
    $email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email address.");
    }

    $body  = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    $headers = "From: no-reply@e-nerkom.com\r\n"; 
    $headers .= "Reply-To: $email\r\n"; 

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent!";
    } else {
        echo "Failed to send message.";
    }
}
?>


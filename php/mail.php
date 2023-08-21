<?php
// Define your custom email address
$customFromEmail = 'form@oviematthew.com';

// Define your email settings
$subject = 'OVIEMATTHEW CONTACT FORM';
$to = 'ovieenams@gmail.com';

// Sanitize user inputs
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$msg = htmlspecialchars($_POST['msg'], ENT_QUOTES, 'UTF-8');

// Validate email
if (!$email) {
    header("Location: ../failed.html");
    exit();
}

// Construct the message
$message = "Name: $name\n";
$message .= "Email Address: $email\n";
$message .= "Message: $msg\n";

// Create email headers
$headers = "From: $customFromEmail" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";

// Send the email
$mailSuccess = mail($to, $subject, $message, $headers);

if ($mailSuccess) {
    // Redirect to success page
    header("Location: ../success.html");
} else {
    // Redirect to failure page
    header("Location: ../failed.html");
}
?>

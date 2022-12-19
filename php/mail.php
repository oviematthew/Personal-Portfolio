<?php
$subject = 'OVIE CONTACT FORM'; // Subject of your email
$to = 'ovieenams@gmail.com';  //Recipient's E-mail


$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$msg = $_REQUEST['msg'];


$email_from = $name.'<'.$email.'>';


$message .= 'Name : ' . $name . "\n";
$message .= 'Email Address : ' . $email . "\n";
$message .= 'Message : ' . $msg . "\n";



if (@mail($to, $subject, $message, $email_from))
{
	// Transfer the value 'sent' to ajax function for showing success message.
	header("Location: ../success.html");
    
}
else
{
	// Transfer the value 'failed' to ajax function for showing error message.
	header("Location: ../failed.html");
}
?>
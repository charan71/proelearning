<?php
session_start();

$email = $_SESSION['email'];
$name =  $_SESSION['name'] ;

// multiple recipients

$to= $email;
// subject
$subject = 'PRO e-Learning';
// message
$message ="
<html>
  <body>
    <div style='background-color:#e8e6ea;text-align:center;padding:20px'>
      <p><img src='http://pro-elearning.com/images/logos/logo-h-70.png'/></p>
      <p><b>Hi $name,</b></p> 
      <p><b>Thank you for Contacting Pro-e Learning.  Our team will contact you within 24 hours</b></p>
    </div>
    <div style='text-align:center;padding:20px;'>
      <p><img width='500px' height='200px' src='http://pro-elearning.com/images/discount.png'/></p>
    </div>
  </body>
</html>
" ;
// To send HTML mail, the Content-type header must be set
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// Additional headers
$headers.= 'From: trainings@pro-elearning.com';

// Mail it
$sent=mail($to, $subject, $message, $headers);
if($sent)
echo "Success";
else
echo "Failed";
?>
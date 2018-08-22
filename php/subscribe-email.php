<?PHP
session_start();
$email = $_SESSION['email'];
$to = "$email";
$subject = "Pro-elearning";
$from = "noreply@pro-elearning.com";
$myAttachment = chunk_split(base64_encode(file_get_contents( "../documents/Corporate Training Broucher - Pro-elearning.pdf")));
 
$headers = "From: \"Pro-elearning\" <noreply@pro-elearning.com>\r\n" .
   "MIME-Version: 1.0\r\n" .
   "Content-Type: multipart/mixed; boundary= \"1a2a3a\"\r\n";
$body = "--1a2a3a\r\n" .
    "Content-Type: multipart/alternative; boundary= \"4a5a6a\"\r\n" .
     "--4a5a6a\r\n" .
      "Content-Type: text/plain; charset=\"iso-8859-1\"\r\n" .
      "Content-Transfer-Encoding: 7bit\r\n" .
  "The attachment contains the log-files .\r\n" .
     "--4a5a6a\r\n" .
      "Content-Type: text/html; charset=\"iso-8859-1\"\r\n" .
       "<html>
<body>
<div style='background-color:#e8e6ea;text-align:center;padding:20px'>
            <p><img src='http://pro-elearning.com/images/logos/logo-h-70.png'/></p>
            <p><b>Hi $email,</b></p> 
            <p><b>
Thank you for subscribing pro-elearning. We have sent our corporate training brochure as an attachment. you will also receive our newsletters and updates regularly.</b></p>
            </div>
</body>
</html>\r\n" .
    "--1a2a3a\r\n" .
     "Content-Type: application/pdf; name=\"corporate_training_broucher.pdf\"\r\n" .
     "Content-Transfer-Encoding: base64\r\n" .
     "Content-Disposition: attachment\r\n" .
  $myAttachment. "\r\n" .
  "--1a2a3a--";
 
   $success = mail($to, $subject, $body, $headers);
   if ($success) {
  echo "Success";
   }else {
  echo "Failed";
   }
 
   ?>
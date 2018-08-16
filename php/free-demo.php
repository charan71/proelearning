<?php

	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
    $data = json_decode(file_get_contents("php://input"));
    if(count($data) > 0) {
        $name = mysqli_real_escape_string($conn, $data->full_name);
        $email = mysqli_real_escape_string($conn, $data->email);
        $phone = mysqli_real_escape_string($conn, $data->phone);
        $courseName = mysqli_real_escape_string($conn, $data->course_name);
        $message = mysqli_real_escape_string($conn, $data->message);
        $dt = mysqli_real_escape_string($conn, $data->date_time);
        
        $query = "INSERT INTO `free_demos` (`full_name`, `email`, `phone`, `course_name`, `message`, `date_time`) VALUES ('$name', '$email', '$phone', '$courseName', '$message', '$dt')";
        
        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo "Error";
        }

        // Email from User to Admin
        $to = "trainings@pro-elearning.com";
        $from = "trainings@pro-elearning.com";
        $subject = "Contact Person Details";
        
        // message
        $message ="Below are the Contact Person Details:\r\n 
        <html>
            <body>
                <div>
                    <table border='2' style='border-collapse: collapse;'>
                        <tr>
                            <th><b>Name</b></th>
                            <td>$name</td>
                        </tr>
                        <tr>
                            <th><b>Email</b></th>
                            <td>$email</td>
                        </tr>
                        <tr>
                            <th><b>Mobile Number</b></th>
                            <td>$phone</td>
                        </tr>
                        <tr>
                            <th><b>Free Demo Course Name</b></th>
                            <td>$course_name</td>
                        </tr>
                        <tr>
                            <th><b>Message</b></th>
                            <td>$message</td>
                        </tr>
                        <tr>
                            <th><b>Date</b></th>
                            <td>$dt</td>
                        </tr>
                    </table>
                </div>
            </body>
        </html>
        ";
        
        // To send HTML mail, the Content-type header must be set
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
        
        // Additional headers
        $headers .= 'From: Pro-elearning <$from>';

        if(mail($to, $subject, $message, $headers)) {
            session_start();
            $_SESSION['email'] = $email;
            $_SESSION['name'] = $name;
            header('location:free-demos-email.php');
        }

    }
	
	$conn->close();
	
?>






















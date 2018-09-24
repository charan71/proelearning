<?php

	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
        $name = $_POST['full_name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $gender = $_POST['gender'];
        $country = $_POST['country'];
        $state = $_POST['state'];
        $current_company = $_POST['current_company'];
        $work_exp = $_POST['work_exp'];
        $training_exp = $_POST['training_exp'];
        $technology_exp = $_POST['technology_exp'];
        $message = $_POST['message'];
        $dt = $_POST['date_time'];
        print_r($_FILES);
        $tempPath = $_FILES['file']['tmp_name'];
        $uploadPath = '../upload/' . $_FILES['file']['name'];
        move_uploaded_file($tempPath, $uploadPath);
        
        $query = "INSERT INTO `trainers_list` (`full_name`, `email`, `phone`, `gender`, `country`, `state`, `current_company`, `work_exp`, `training_exp`, `technology_exp`, `resume`, `message`, `date_time`) VALUES ('$name', '$email', '$phone', '$gender', '$country', '$state', '$current_company', '$work_exp', '$training_exp', '$technology_exp', '".$_FILES['file']['name']."', '$message', '$dt')";
        
        // Email from Trainer to Admin
        $to = "trainings@pro-elearning.com";
        $from = "trainings@pro-elearning.com";
        $subject = "Registered Student Details";
        
        // message
        $message ="Below are the Registered Trainer Details:\r\n 
        <html>
            <body>
                <div>
                    <table border='2'style='border-collapse: collapse;'>
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
                            <th><b>Gender</b></th>
                            <td>$gender</td>
                        </tr>
                        <tr>
                            <th><b>Country</b></th>
                            <td>$country</td>
                        </tr>
                        <tr>
                            <th><b>State</b></th>
                            <td>$state</td>
                        </tr>
                        <tr>
                            <th><b>Current Company</b></th>
                            <td>$current_company</td>
                        </tr>
                        <tr>
                            <th><b>Work Experiance</b></th>
                            <td>$work_exp</td>
                        </tr>
                        <tr>
                            <th><b>Training Experiance</b></th>
                            <td>$training_exp</td>
                        </tr>
                        <tr>
                            <th><b>Technology Experiance</b></th>
                            <td>$technology_exp</td>
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
        if( mail($to, $subject, $message, $headers)) {
            session_start();
            $_SESSION['email'] = $email;
            $_SESSION['name'] = $name;
            header('location:trainer_reg-email.php');
        }

        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo 'Error';
        }
	
	$conn->close();
	
?>
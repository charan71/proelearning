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
        $gender = mysqli_real_escape_string($conn, $data->gender);
        $country = mysqli_real_escape_string($conn, $data->country);
        $state = mysqli_real_escape_string($conn, $data->state);
        $qualification = mysqli_real_escape_string($conn, $data->qualification);
        $profession = mysqli_real_escape_string($conn, $data->profession);
        $course = mysqli_real_escape_string($conn, $data->course);
        $message = mysqli_real_escape_string($conn, $data->message);
        $phone = mysqli_real_escape_string($conn, $data->phone);
		$dt = mysqli_real_escape_string($conn, $data->date_time);
        
        $query = "INSERT INTO `students_list` (`full_name`, `email`, `gender`, `country`, `state`, `qualification`, `profession`, `course`, `message`, `phone`, `date_time`) VALUES ('$name', '$email', '$gender', '$country', '$state', '$qualification', '$profession', '$course', '$message', '$phone', '$dt')";
        
        // Email from Student to Admin
        $to = "trainings@pro-elearning.com";
        $from = "trainings@pro-elearning.com";
        $subject = "Registered Student Details";

        // message
        $message = "Below are the Registered Student Details:\r\n 
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
                            <th><b>Qualification</b></th>
                            <td>$qualification</td>
                        </tr>
                        <tr>
                            <th><b>Profession</b></th>
                            <td>$profession</td>
                        </tr>
                        <tr>
                            <th><b>Mobile Number</b></th>
                            <td>$phone</td>
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

        if( mail($to, $subject, $message, $headers)){
            session_start();
            $_SESSION['email'] = $email;
            $_SESSION['name'] = $name;
            header('location:student_reg-email.php');
        }

        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo 'Error';
        }
    }
	
	$conn->close();

?>
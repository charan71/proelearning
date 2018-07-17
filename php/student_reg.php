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
        $occupation = mysqli_real_escape_string($conn, $data->occupation);
        $course = mysqli_real_escape_string($conn, $data->course);
        $message = mysqli_real_escape_string($conn, $data->message);
        $phone = mysqli_real_escape_string($conn, $data->phone);
		$dt = mysqli_real_escape_string($conn, $data->date_time);
        
        $query = "INSERT INTO `students_list` (`full_name`, `email`, `gender`, `country`, `state`, `qualification`, `occupation`, `course`, `message`, `phone`, `date_time`) VALUES ('$name', '$email', '$gender', '$country', '$state', '$qualification', '$occupation', '$course', '$message', '$phone', '$dt')";
        
        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo 'Error';
        }
    }
	
	$conn->close();

?>
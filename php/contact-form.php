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
        $category = mysqli_real_escape_string($conn, $data->category);
        $message = mysqli_real_escape_string($conn, $data->message);
        $dt = mysqli_real_escape_string($conn, $data->date_time);
        
        $query = "INSERT INTO `contacts_list` (`full_name`, `email`, `phone`, `category`, `message`, `date_time`) VALUES ('$name', '$email', '$phone', '$category', '$message', '$dt')";
        
        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo "Error";
        }
    }
	
	$conn->close();
	
?>






















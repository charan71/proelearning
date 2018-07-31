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
        $work_exp = $_POST['work_exp'];
        $training_exp = $_POST['training_exp'];
        $technology_exp = $_POST['technology_exp'];
        $message = $_POST['message'];
        $dt = $_POST['date_time'];
        print_r($_FILES);
        $tempPath = $_FILES['file']['tmp_name'];
        $uploadPath = '../upload/' . $_FILES['file']['name'];
        move_uploaded_file($tempPath, $uploadPath);
        
        $query = "INSERT INTO `trainers_list` (`full_name`, `email`, `phone`, `gender`, `country`, `state`, `work_exp`, `training_exp`, `technology_exp`, `resume`, `message`, `date_time`) VALUES ('$name', '$email', '$phone', '$gender', '$country', '$state', '$work_exp', '$training_exp', '$technology_exp', '".$_FILES['file']['name']."', '$message', '$dt')";
        
        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo 'Error';
        }
	
	$conn->close();
	
?>
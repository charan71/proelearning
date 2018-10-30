<?php

	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
    }
    
    $first_name = $_POST['first_name'];
    $middle_name = $_POST['middle_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
    $job_title = $_POST['job_title'];
    $tot_exp = $_POST['tot_exp'];
    $current_company = $_POST['current_company'];
    $skills = $_POST['skills'];
    $university = $_POST['university'];
    $degree = $_POST['degree'];
    $specialization = $_POST['specialization'];
    $year_of_graduation = $_POST['year_of_graduation'];
    $grade = $_POST['grade'];
    $dt = date('U');
    $dt = $dt * 1000;
        
    // Files Upload Code
    $tempPath = $_FILES['resume']['tmp_name'];
    $uploadPath = '../resumes/' . $_FILES['resume']['name'];
    move_uploaded_file($tempPath, $uploadPath);
    
    $query = "INSERT INTO `careers_registration` (`first_name`, `middle_name`, `last_name`, `email`, `password`, `phone`, `job_title`, `tot_exp`, `current_company`, `skills`, `resume`, `university`, `degree`, `specialization`, `year_of_graduation`, `grade`, `date_time`) VALUES ('$first_name', '$middle_name', '$last_name', '$email', '$password', '$phone', '$job_title', '$tot_exp', '$current_company', '$skills', '".$_FILES['resume']['name']."', '$university', '$degree', '$specialization', '$year_of_graduation', '$grade', '$dt')";
    
    if(mysqli_query($conn, $query)) {
        echo "Data Inserted...";
    } else {
        echo "Error";
    }
	
	$conn->close();
	
?>
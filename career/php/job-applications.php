<?php

	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
    }
    
    $job_id = $_POST['job_id'];
    $email = $_POST['email'];
    $first_name = $_POST['first_name'];
    $middle_name = $_POST['middle_name'];
    $last_name = $_POST['last_name'];
    $phone = $_POST['phone'];
    $tot_exp = $_POST['tot_experience'];
    $domain_exp = $_POST['domain_experience'];
    $dt = $_POST['date_time'];

    // File Upload
    $tempPath = $_FILES['file']['tmp_name'];
    $uploadPath = '../resumes/' . $_FILES['file']['name'];
    move_uploaded_file($tempPath, $uploadPath);

    // Fetch Position using Job ID
    $position_query = "SELECT `position`, `file` FROM `job_postings` WHERE `job_id` = '$job_id'";
    $result = mysqli_query($conn, $position_query);
    $row = mysqli_fetch_assoc($result);
    extract($row);
    echo $position;

    $query = "INSERT INTO `job_applications` (`job_id`, `position`, `job_description`, `email`, `first_name`, `middle_name`, `last_name`, `phone`, `tot_experience`, `domain_experience`, `file`, `date_time`) VALUES ('$job_id', '$position', '$file', '$email', '$first_name', '$middle_name', '$last_name', '$phone', '$tot_exp', '$domain_exp', '".$_FILES['file']['name']."', '$dt')";
    
    if(mysqli_query($conn, $query)) {
        echo "Data Inserted...";
    } else {
        echo 'Error Occurred!';
    }

	$conn->close();
	
?>
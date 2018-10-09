<?php

	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
    }
    
	// $btnName = $_POST['job_id'];
    // if($btnName == "Post New Job") {
        $job_id = $_POST['job_id'];
        $position = $_POST['position'];
        $min_exp = $_POST['min_experience'];
        $max_exp = $_POST['max_experience'];
        $posting_date = $_POST['posting_date'];
        $dt = $_POST['date_time'];
        print_r($_FILES);
        $tempPath = $_FILES['file']['tmp_name'];
        $uploadPath = '../jobPostings/' . $_FILES['file']['name'];
        move_uploaded_file($tempPath, $uploadPath);
        
        $query = "INSERT INTO `job_postings` (`job_id`, `position`, `min_experience`, `max_experience`, `posting_date`, `file`, `date_time`) VALUES ('$job_id', '$position', '$min_exp', '$max_exp', '$posting_date', '".$_FILES['file']['name']."', '$dt')";
        
        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo 'Error';
        }
    // }
	
	$conn->close();
	
?>
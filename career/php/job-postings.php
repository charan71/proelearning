<?php

	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
    }
    
	$btnName = $_POST['btnName'];
    if($btnName == "Post New Job") {
        $job_id = $_POST['job_id'];
        $position = $_POST['position'];
        $min_exp = $_POST['min_experience'];
        $max_exp = $_POST['max_experience'];
        $posting_date = $_POST['posting_date'];
        $dt = $_POST['date_time'];

        // Files Upload Code
        $tempPath = $_FILES['file']['tmp_name'];
        $uploadPath = '../../job-postings/' . $_FILES['file']['name'];
        move_uploaded_file($tempPath, $uploadPath);
        
        $query = "INSERT INTO `job_postings` (`job_id`, `position`, `min_experience`, `max_experience`, `posting_date`, `file`, `date_time`) VALUES ('$job_id', '$position', '$min_exp', '$max_exp', '$posting_date', '".$_FILES['file']['name']."', '$dt')";
        
        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo 'Error';
        }
    } else {
        // Update Job Posting details
        $sno = $_POST['sno'];
        $job_id = $_POST['job_id'];
        $position = $_POST['position'];
        $min_exp = $_POST['min_experience'];
        $max_exp = $_POST['max_experience'];
        $posting_date = $_POST['posting_date'];
        $dt = $_POST['date_time'];

        if(empty($_FILES['file']['name'])) {
            $query = "UPDATE `job_postings` SET `job_id`='$job_id', `position`='$position', `min_experience`='$min_exp', `max_experience`='$max_exp', `posting_date`='$posting_date', `date_time`='$dt' WHERE `sno`='$sno'";
        } else {
            // Files Upload Code
            print_r($_FILES);
            $tempPath = $_FILES['file']['tmp_name'];
            $uploadPath = '../../job-postings/' . $_FILES['file']['name'];
            move_uploaded_file($tempPath, $uploadPath);
            
            $query = "UPDATE `job_postings` SET `job_id`='$job_id', `position`='$position', `min_experience`='$min_exp', `max_experience`='$max_exp', `posting_date`='$posting_date', `file`='".$_FILES['file']['name']."', `date_time`='$dt' WHERE `sno`='$sno'";
        }
        
        if(mysqli_query($conn, $query)) {
            echo "Job Posting Updated Successfully..!";
        } else {
            echo 'Error Updating Job Posting from PHP';
        }
    }
	
	$conn->close();
	
?>
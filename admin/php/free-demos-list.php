<?php

	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
    }
    
	$btnName = $_POST['btnName'];
    if($btnName == "Post New Demo") {
        $course_name = $_POST['course_name'];
        $enrolled = $_POST['enrolled'];
        $batch_type = $_POST['batch_type'];
        $training_type = $_POST['training_type'];
        $next_batch = $_POST['next_batch'];
        $completion_rate = $_POST['completion_rate'];
        $dt = $_POST['date_time'];

        // Files Upload Code
        print_r($_FILES);
        $tempPath = $_FILES['file']['tmp_name'];
        $uploadPath = '../../images/icons/' . $_FILES['file']['name'];
        move_uploaded_file($tempPath, $uploadPath);
        
        $query = "INSERT INTO `free_demos_tbl` (`course_name`, `enrolled`, `batch_type`, `training_type`, `next_batch`, `completion_rate`, `file`, `date_time`) VALUES ('$course_name', '$enrolled', '$batch_type', '$training_type', '$next_batch', '$completion_rate', '".$_FILES['file']['name']."', '$dt')";
        
        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo 'Error';
        }
    } else {
        // Update Free Demos details
        $id = $_POST['id'];
        $course_name = $_POST['course_name'];
        $enrolled = $_POST['enrolled'];
        $batch_type = $_POST['batch_type'];
        $training_type = $_POST['training_type'];
        $next_batch = $_POST['next_batch'];
        $completion_rate = $_POST['completion_rate'];
        $dt = $_POST['date_time'];

        if(empty($_FILES['file']['name'])) {
            $query = "UPDATE `free_demos_tbl` SET `id`='$id', `course_name`='$course_name', `enrolled`='$enrolled', `batch_type`='$batch_type', `training_type`='$training_type', `next_batch`='$next_batch', `completion_rate`='$completion_rate', `date_time`='$dt' WHERE `id`='$id'";
        } else {
            // Files Upload Code
            print_r($_FILES);
            $tempPath = $_FILES['file']['tmp_name'];
            $uploadPath = '../jobPostings/' . $_FILES['file']['name'];
            move_uploaded_file($tempPath, $uploadPath);
            
            $query = "UPDATE `free_demos_tbl` SET `id`='$id', `course_name`='$course_name', `enrolled`='$enrolled', `batch_type`='$batch_type', `training_type`='$training_type', `next_batch`='$next_batch', `completion_rate`='$completion_rate', `file`='".$_FILES['file']['name']."', `date_time`='$dt' WHERE `id`='$id'";
        }
        
        if(mysqli_query($conn, $query)) {
            echo "Free Demo Updated Successfully...";
        } else {
            echo 'Error Updating Free Demo!';
        }
    }
	
	$conn->close();
	
?>
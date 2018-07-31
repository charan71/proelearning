<?php

include("../php/config.php");

$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

	$courseName = $_POST['course_name'];
	$courseDesc = $_POST['course_description'];
	$courseUrl = $_POST['course_url'];
	$coursePrice = $_POST['course_price'];
	$dt = $_POST['date_time'];
	print_r($_FILES);
	$tempPath = $_FILES['file']['tmp_name'];
	$uploadPath = '../../images/course-thumbnails/' . $_FILES['file']['name'];
	move_uploaded_file($tempPath, $uploadPath);
	
	$query = "INSERT INTO `courses_uploaded` (`course_name`, `course_description`, `course_url`, `course_image`, `course_price`, `date_time`) VALUES ('$courseName', '$courseDesc', '$courseUrl', '".$_FILES['file']['name']."', '$coursePrice', '$dt')";
	
	if(mysqli_query($conn, $query)) {
		echo "Data Inserted...";
	} else {
		echo 'Error';
	}

$conn->close();

?>
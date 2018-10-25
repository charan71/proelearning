<?php

	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
    }
    
    $data = json_decode(file_get_contents("php://input"));
    if(count($data) > 0) {
        $first_name = mysqli_real_escape_string($conn, $data->first_name);
        $middle_name = mysqli_real_escape_string($conn, $data->middle_name);
        $last_name = mysqli_real_escape_string($conn, $data->last_name);
        $email = mysqli_real_escape_string($conn, $data->email);
        $password = mysqli_real_escape_string($conn, $data->password);
        $phone = mysqli_real_escape_string($conn, $data->phone);
        $job_title = mysqli_real_escape_string($conn, $data->job_title);
        $tot_exp = mysqli_real_escape_string($conn, $data->tot_exp);
        $current_company = mysqli_real_escape_string($conn, $data->current_company);
        $skills = mysqli_real_escape_string($conn, $data->skills);
        $university = mysqli_real_escape_string($conn, $data->university);
        $degree = mysqli_real_escape_string($conn, $data->degree);
        $specialization = mysqli_real_escape_string($conn, $data->specialization);
        $year_of_graduation = mysqli_real_escape_string($conn, $data->year_of_graduation);
        $grade = mysqli_real_escape_string($conn, $data->grade);
        $dt = date('U');
        // Converting Seconds to Milliseconds
        $dt = $dt * 1000;

        // $first_name = $_POST['first_name'];
        // $middle_name = $_POST['middle_name'];
        // $last_name = $_POST['last_name'];
        // $email = $_POST['email'];
        // $password = $_POST['password'];
        // $phone = $_POST['phone'];
        // $job_title = $_POST['job_title'];
        // $tot_exp = $_POST['tot_exp'];
        // $current_company = $_POST['current_company'];
        // $skills = $_POST['skills'];
        // $university = $_POST['university'];
        // $degree = $_POST['degree'];
        // $specialization = $_POST['specialization'];
        // $year_of_graduation = $_POST['year_of_graduation'];
        // $grade = $_POST['grade'];
        // $dt = $_POST['date_time'];
        
        // Files Upload Code
        echo $_FILES['resume']['name'];
        print_r($_FILES);
        $tempPath = $_FILES['file']['tmp_name'];
        $uploadPath = '../resumes/' . $_FILES['file']['name'];
        move_uploaded_file($tempPath, $uploadPath);
        
        $query = "INSERT INTO `careers_registration` (`first_name`, `middle_name`, `last_name`, `email`, `password`, `phone`, `job_title`, `tot_exp`, `current_company`, `skills`, `resume`, `university`, `degree`, `specialization`, `year_of_graduation`, `grade`, `date_time`) VALUES ('$first_name', '$middle_name', '$last_name', '$email', '$password', '$phone', '$job_title', '$tot_exp', '$current_company', '$skills', '".$_FILES['file']['name']."', '$university', '$degree', '$specialization', '$year_of_graduation', '$grade', '$dt')";
        
        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo "Error";
        }
    }
	
	$conn->close();
	
?>
<?php  
 
	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
    $data = json_decode(file_get_contents("php://input"));
    if(count($data) > 0) {
        $btnName = mysqli_real_escape_string($conn, $data->btnName);

        if($btnName == "Insert") {
            // Insert course details
            $course_name = mysqli_real_escape_string($conn, $data->course_name);
            $start_date = mysqli_real_escape_string($conn, $data->start_date);
            // Converting Date & Time to seconds
            $convertedDateToSec = strtotime($start_date);
            // Converting Date & Time from seconds to milliseconds
            $convertedDateToMilliSec = $convertedDateToSec * 1000;
            $batch_type = mysqli_real_escape_string($conn, $data->batch_type);
            $training_type = mysqli_real_escape_string($conn, $data->training_type);
            $duration = mysqli_real_escape_string($conn, $data->duration);
            $trainer_name = mysqli_real_escape_string($conn, $data->trainer_name);
            $dt = mysqli_real_escape_string($conn, $data->date_time);
            
            $query = "INSERT INTO `course_schedules` (`course_name`, `start_date`, `batch_type`, `training_type`, `duration`, `trainer_name`, `date_time`) VALUES ('$course_name', '$convertedDateToMilliSec', '$batch_type', '$training_type', '$duration', '$trainer_name', '$dt')";
            
            if(mysqli_query($conn, $query)) {
                echo "New Course Schedule Inserted Successfully...";
            } else {
                echo 'Error from PHP';
            }
        } else {
            // Update course details
            $sno = mysqli_real_escape_string($conn, $data->sno);
            $course_name = mysqli_real_escape_string($conn, $data->course_name);
            $start_date = mysqli_real_escape_string($conn, $data->start_date);
            // Converting Date & Time to seconds
            $convertedDateToSec = strtotime($start_date);
            // Converting Date & Time from seconds to milliseconds
            $convertedDateToMilliSec = $convertedDateToSec * 1000;
            $batch_type = mysqli_real_escape_string($conn, $data->batch_type);
            $training_type = mysqli_real_escape_string($conn, $data->training_type);
            $duration = mysqli_real_escape_string($conn, $data->duration);
            $trainer_name = mysqli_real_escape_string($conn, $data->trainer_name);
            $dt = mysqli_real_escape_string($conn, $data->date_time);
            
            $query = "UPDATE `course_schedules` SET `course_name`='$course_name', `start_date`='$convertedDateToMilliSec', `batch_type`='$batch_type', `training_type`='$training_type', `duration`='$duration', `trainer_name`='$trainer_name', `date_time`='$dt' WHERE `sno`='$sno'";
            
            if(mysqli_query($conn, $query)) {
                echo "Course Schedule Updated Successfully..!";
            } else {
                echo 'Error from PHP';
            }
        }
    }
	
	$conn->close();

?>
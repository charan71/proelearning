<?php  
 
	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
    $data = json_decode(file_get_contents("php://input"));
    if(count($data) > 0) {
        $candidateName = mysqli_real_escape_string($conn, $data->candidate_name);
        $candidateEmail = mysqli_real_escape_string($conn, $data->candidate_email);
        $courseName = mysqli_real_escape_string($conn, $data->course_name);
        $certificateId = mysqli_real_escape_string($conn, $data->certificate_id);
        $dt = date('U');
        $dt = $dt * 1000;
        
        $query = "INSERT INTO `certificates_info` (`candidate_name`, `candidate_email`, `course_name`, `certificate_id`, `date_time`) VALUES ('$candidateName', '$candidateEmail', '$courseName', '$certificateId', '$dt')";

        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo 'Error';
        }
    }
	
	$conn->close();

?>
<?php  
 
	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
    $data = json_decode(file_get_contents("php://input"));
    $sno = mysqli_real_escape_string($conn, $data->sno);
    
    $query = "DELETE FROM `course_schedules` WHERE `sno`=$sno";
        
    if(mysqli_query($conn, $query)) {
        echo "Data Deleted successfully...";
    } else {
        echo 'Error deleting Data!';
    }
	
	$conn->close();

?>
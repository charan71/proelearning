<?php  
 
	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
    $data = json_decode(file_get_contents("php://input"));
    if(count($data) > 0) {
        $pageVisitCount = mysqli_real_escape_string($conn, $data->visit_count);
        
        $query = "UPDATE `website_visits` SET `visit_count`=$pageVisitCount WHERE `id`=99";

        if(mysqli_query($conn, $query)) {
            echo "Data Inserted...";
        } else {
            echo 'Error';
        }
    }
	
    $conn->close();
    
?>
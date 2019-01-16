<?php  
 
	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
    $pageCountValue;
    $query = "SELECT `visit_count` FROM `website_visits` WHERE `id`=99";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);
    $pageCountValue = $row['visit_count'];
	
    $conn->close();
    
    header("Content-Type: application/json;");

    echo json_encode($pageCountValue);

?>
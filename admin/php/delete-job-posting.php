<?php  
 
	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
    $data = json_decode(file_get_contents("php://input"));
    $sno = mysqli_real_escape_string($conn, $data->sno);
    $filename = mysqli_real_escape_string($conn, $data->file);
    echo $filename;

    // Delete internal file
    // $filename="ProDesign Corporate Profile .pdf";
    $dir = "../jobPostings/";
    $dirHandle = opendir($dir);
    while ($file = readdir($dirHandle)) {
        if($file == $filename) {
            unlink($dir.'/'.$file);
        }
    }

    $query = "DELETE FROM `job_postings` WHERE `sno`=$sno";
        
    if(mysqli_query($conn, $query)) {
        echo "Data Deleted successfully...";
    } else {
        echo 'Error deleting Data!';
    }
	
	$conn->close();

?>
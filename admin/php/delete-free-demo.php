<?php  
 
	include("../php/config.php");
    
	$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
    $data = json_decode(file_get_contents("php://input"));
    $id = mysqli_real_escape_string($conn, $data->id);
    $filename = mysqli_real_escape_string($conn, $data->file);
    echo $filename;

    // Delete internal file
    $dir = "../../images/icons/";
    $dirHandle = opendir($dir);
    while ($file = readdir($dirHandle)) {
        if($file == $filename) {
            unlink($dir.'/'.$file);
        }
    }

    $query = "DELETE FROM `free_demos_tbl` WHERE `id`=$id";
    
    if(mysqli_query($conn, $query)) {
        echo "Record Deleted successfully...";
    } else {
        echo 'Error deleting record!';
    }
	
	$conn->close();

?>
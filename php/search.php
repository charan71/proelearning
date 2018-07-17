<?php

include("../php/config.php");

$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

$query = $conn->query("SELECT * FROM contacts_list WHERE (`full_name` LIKE '%".$data->data."%')") or die(mysqli_error());

$ar = array();

while($row = mysqli_fetch_assoc($query)) {
    $ar[] = $row;
}

echo json_encode($ar);

$conn->close();


?>
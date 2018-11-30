<?php

include("../php/config.php");

$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));
$email = $data->email;


$query = $conn->query("SELECT * FROM `job_applications` WHERE `email` = '$email' ORDER BY `sno` DESC");
$ar = array();

while($row = mysqli_fetch_assoc($query)) {
    $ar[] = $row;
}

$conn->close();

header("Content-Type: application/json;");
echo json_encode($ar);

?>

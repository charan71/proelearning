<?php

include("../php/config.php");

$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = $conn->query("SELECT * FROM `trainers_list` ORDER BY `sno` DESC");
$ar = array();

while($row = mysqli_fetch_assoc($query)) {
    $ar[] = $row;
}

$conn->close();

header("Content-Type: application/json;");
echo json_encode($ar);

?>

<?php

include("../php/config.php");

$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
$query = $conn->query("SELECT * FROM `job_postings` ORDER BY `sno` DESC");
$ar = array();

while($row = mysqli_fetch_assoc($query)) {
    $ar[] = $row;
}

$conn->close();

header("Content-Type: application/json;");
echo json_encode($ar);

?>

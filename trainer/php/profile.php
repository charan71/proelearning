<?php

header('Content-Type: application/json');

include("../php/config.php");

if(!isset($_POST) || !isset($_POST['id'])) die();

session_start();

if($_SESSION['id'] != $_POST['id']) die(); // CSRF (CROSS SITE REQUEST) ATTACK

$response = [];

$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);

$newPass = mysqli_real_escape_string($conn, $_POST['newPass']);

$query = "UPDATE `trainer_users` SET `password` = '$newPass' WHERE `trainer_email` = '".$_SESSION['email']."'";

$result = mysqli_query($conn, $query);

if($result) {
	$response['status'] = 'done';
} else {
	$response['status'] = 'error';
}

$conn->close();

echo json_encode($response);

?>
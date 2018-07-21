<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include("../php/config.php");

if(!isset($_POST)) die();

session_start();

$response = [];

$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);

$email = mysqli_real_escape_string($conn, $_POST['trainer_email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

$query = "SELECT * FROM `trainer_users` WHERE `trainer_email`='$email' AND `password`='$password'";

$result = mysqli_query($conn, $query);

$row = mysqli_fetch_assoc($result);
extract($row);

if(mysqli_num_rows($result) > 0) {
	$response['status'] = 'loggedin';
	$response['username'] = $username;
	$response['pwd'] = $password;
	$response['email'] = $email;
	$response['phone'] = $phone;
	$response['id'] = md5(uniqid());
	$_SESSION['id'] = $response['id'];
	$_SESSION['email'] = $email;
} else {
	$response['status'] = 'error';
}

$conn->close();

echo json_encode($response);

?>
<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include("../php/config.php");

if(!isset($_POST)) die();

session_start();

$response = [];

$conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);

$email = mysqli_real_escape_string($conn, $_POST['admin_email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

$query = "SELECT * FROM `admin_users` WHERE `admin_email`='$email' AND `password`='$password'";

$result = mysqli_query($conn, $query);

$row = mysqli_fetch_assoc($result);

if(mysqli_num_rows($result) > 0) {
    extract($row);
	$response['status'] = 'loggedin';
	$response['username'] = $username;
	$response['pwd'] = $password;
	$response['email'] = $email;
	$response['phone'] = $phone;
    $response['id'] = md5(uniqid());
    $_SESSION['id'] = $response['id'];
    $_SESSION['email'] = $email;
} else {
    $response['status'] = 'Connection error!';
}

$conn->close();

echo json_encode($response);

?>
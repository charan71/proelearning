<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if(!isset($_POST)) die();

session_start();

$response = [];

$conn = mysqli_connect('localhost', 'root', '', 'test_site');

$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

$query = "SELECT * FROM `users` WHERE username='$username' AND password='$password'";

$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0) {
		$response['status'] = 'loggedin';
		$response['user'] = $username;
        $response['id'] = md5(uniqid());
        $_SESSION['id'] = $response['id'];
        $_SESSION['user'] = $username;
} else {
    $response['status'] = 'error';
}

echo json_encode($response);

?>
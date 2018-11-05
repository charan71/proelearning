<?php

    include("config.php");

    $conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->email;
    $resText = '';
    if($email != '') {
        // Check email
        $sel = mysqli_query($conn, "select * from `subscribers` where `email` = '".$email."' ");
        $row = mysqli_fetch_assoc($sel);
        if($row > 0) {
            $resText = 'You have already subscribed with us!';
        } else {
            $resText = '';
        }
    }
    echo $resText;
?>
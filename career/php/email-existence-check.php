<?php

    include("config.php");

    $conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->email;
    $table_name = $data->table_name;
    $resText = '';
    if($email != '') {
        // Check email
        $sel = mysqli_query($conn, "select * from `".$table_name."` where `email` = '".$email."' ");
        $row = mysqli_fetch_assoc($sel);
        if($row > 0) {
            $resText = 'You have already registered with us!';
        } else {
            $resText = '';
        }
    }
    echo $resText;
?>

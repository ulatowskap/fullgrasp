<?php
$email = $_POST["name"];

$date = strtotime("now");
$ip = $_SERVER['REMOTE_ADDR'];

$user = array($email, $ip, $date);

file_put_contents('users', json_encode($user), FILE_APPEND);

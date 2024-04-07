<?php

$response = ["status" => "error"];

if (isset($_POST["email"]) && file_put_contents("email.txt", $_POST["email"])) {
    $response = ["status" => "success", "email" => $_POST["email"]];
}

echo json_encode($response);

exit;
<?php
include_once '../Model/Database.php';
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $user_id = $data['user_id'];
    $session_id = $data['session_id'];

    $sql = "INSERT INTO session_member (user_id, session_id) VALUES ('$user_id', '$session_id')";
    if (mysqli_query($conn, $sql)) {
        echo json_encode(array('success' => true, 'message' => 'Member added successfully'));
    } else {
        echo json_encode(array('success' => false, 'error' => mysqli_error($conn)));
    }
}
?>
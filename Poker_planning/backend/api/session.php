<?php
include_once '../Model/Database.php';
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $description = $data['description'];
    $moderator = $data['moderator'];

    $sql = "SELECT UUID() as uuid";
    $result = mysqli_query($conn, $sql);
    $row  = mysqli_fetch_assoc($result);
    $uuid = ($row["uuid"]);


    $sql = "INSERT INTO sessions (name, description, code, moderator) VALUES ('$name', '$description', '$uuid', '$moderator' )";
    if (mysqli_query($conn, $sql)) {
        $session_id = mysqli_insert_id($conn); // get the session ID
        echo json_encode(array('success' => true, 'session_id' => $session_id, 'uuid' => $uuid , 'Session created successfully'));
    } else {
        echo json_encode(array('success' => false, 'Error: ' . mysqli_error($conn)));
    }
}
?>
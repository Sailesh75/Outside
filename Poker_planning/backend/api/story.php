<?php
include_once '../Model/Database.php';
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data) || empty($data)) {
        echo json_encode(array('success' => false, 'message' => 'No stories found in request'));
        exit();
    }

    $stories = $data;

    $success = true;
    $errors = array();

    foreach ($stories as $story) {

        $title = $story['title'];
        $description = $story['description'];
        $session_id = $story['session_id'];

        $sql = "INSERT INTO stories (title, description, session_id) VALUES ('$title', '$description', '$session_id' )";

        if (!mysqli_query($conn, $sql)) {
            $success = false;
            array_push($errors, mysqli_error($conn));
        }
    }

    if ($success) {
        echo json_encode(array('success' => true, 'message' => 'Stories saved successfully'));
    } else {
        echo json_encode(array('success' => false, 'errors' => $errors));
    }
}
?>

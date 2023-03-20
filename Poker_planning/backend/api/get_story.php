<?php
include_once '../Model/Database.php';
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];

        $sql = "SELECT * FROM stories WHERE session_id=$id";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }
            echo json_encode($data);
        } else {
            echo json_encode(array('message' => 'No stories found with ID: ' . $id));
        }
    } else {
        $sql = "SELECT * FROM sessions";
        $result = mysqli_query($conn, $sql);
        $data = array();
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }
            echo json_encode($data);
        } else {
            echo json_encode(array('message' => 'No stories found'));
        }
    }
}
?>
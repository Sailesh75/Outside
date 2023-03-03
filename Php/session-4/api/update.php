<?php
include_once '../Model/Database.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];

    $id = $_GET['id'];

    $sql = "UPDATE contact_form SET name='$name', email='$email', phone='$phone' WHERE id=$id";
    if (mysqli_query($conn, $sql)) {
        echo json_encode(array('message' => 'Contact form updated successfully'));
    } else {
        echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
    }
}
?>

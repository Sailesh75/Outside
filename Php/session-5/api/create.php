<?php
include_once '../Model/Database.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];

    $sql = "INSERT INTO contact_form (name, email, phone) VALUES ('$name', '$email', '$phone')";
    if (mysqli_query($conn, $sql)) {
        echo json_encode(array('message' => 'Contact form submitted successfully'));
    } else {
        echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
    }
}
?>

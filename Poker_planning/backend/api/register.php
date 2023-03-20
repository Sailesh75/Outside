<?php
include_once '../Model/Database.php';
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $email = $data['email'];
    $password = $data['password'];
    $password_hash = password_hash($password, PASSWORD_BCRYPT);
    
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        $user = mysqli_fetch_assoc($result);
        echo json_encode(array('success' => false,  'Email already exist'));
    }

    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password_hash')";
    if (mysqli_query($conn, $sql)) {
        echo json_encode(array('success' => true, 'Contact form submitted successfully'));
    } else {
        echo json_encode(array('success' => true, 'Error: ' . mysqli_error($conn)));
    }
}
?>

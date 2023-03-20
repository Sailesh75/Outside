<?php
include_once '../Model/Database.php';
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$password = $data['password'];

$sql = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {
  $user = mysqli_fetch_assoc($result);

  if (password_verify($password, $user['password'])) {

    $_SESSION['user_id'] = $user['id'];

    echo json_encode(array('success' => true, 'user_id' => $user['id']));
  } else {

    echo json_encode(array('success' => false , 'Password is wrong'));
  }
} else {

  echo json_encode(array('success' => false,  'Email does not exist wrong'));
}
}
?>

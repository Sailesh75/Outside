<?php
include 'connect.php';
$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$contact = $_POST['phone'];

$sql = "UPDATE contact_form SET name = '$name', email = '$email' ,phone = '$contact' WHERE id = $id";
$result = mysqli_query($conn,$sql);
if($result){
    header('Location:index.php');
}
?>
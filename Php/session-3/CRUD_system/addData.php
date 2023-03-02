<?php
include 'connect.php';
$name = $_POST['name'];
$email = $_POST['email'];
$contact = $_POST['contact'];

echo "Name is $name , email is $email and contactNum is $contact" ;

$sql = "INSERT INTO contact_form (name,email,phone)
 VALUES ('$name','$email','$contact')";
$result = mysqli_query($conn, $sql);

if($result){
    header('Location:index.php');
}
?>
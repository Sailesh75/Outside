<?php
include 'connect.php';
$id = $_GET['id'];
$sql = "DELETE FROM contact_form WHERE id = $id";
$result = mysqli_query($conn,$sql);
if($result){
    header('Location:index.php');
}
?>
<?php
    include_once '../Model/Database.php';
    header('Content-Type: application/json');
 
    if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        $id = $_GET['id'];
        
        $result = mysqli_query($conn, "SELECT * FROM contact_form WHERE id=$id");
        if (mysqli_num_rows($result) == 0) {
            echo "Error: No record found with ID $id";
            exit;
        }
        
        $sql = "DELETE FROM contact_form WHERE id=$id";
        if (mysqli_query($conn, $sql)) {
            echo json_encode(array('message' => 'Contact form submitted successfully'));
        } else {
            echo json_encode(array('message' => 'Error: ' . mysqli_error($conn)));
        }
    }
?>
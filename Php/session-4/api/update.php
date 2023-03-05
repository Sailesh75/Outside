<?php
include_once '../Model/Database.php';

class Update {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function updateContact() {
        $data = json_decode(file_get_contents("php://input"), true);
        $name = $data['name'];
        $email = $data['email'];
        $phone = $data['phone'];

        $id = $_GET['id'];

        $sql = "UPDATE contact_form SET name='$name', email='$email', phone='$phone' WHERE id=$id";
        if ($this->conn->query($sql)) {
            echo json_encode(array('message' => 'Contact form updated successfully'));
        } else {
            echo json_encode(array('message' => 'Error: ' . $this->conn->error));
        }
    }
}

$update = new Update($conn);
if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $update->updateContact();
}
?>

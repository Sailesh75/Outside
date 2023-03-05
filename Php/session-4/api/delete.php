<?php
include_once '../Model/Database.php';

class Delete {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function deleteContact() {
        $id = $_GET['id'];
        
        $result = $this->conn->query("SELECT * FROM contact_form WHERE id=$id");
        if ($result->num_rows == 0) {
            echo "Error: No record found with ID $id";
            exit;
        }
        
        $sql = "DELETE FROM contact_form WHERE id=$id";
        if ($this->conn->query($sql)) {
            echo json_encode(array('message' => 'Contact form deleted successfully'));
        } else {
            echo json_encode(array('message' => 'Error: ' . $this->conn->error));
        }
    }
}

$delete = new Delete($conn);
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $delete->deleteContact();
}
?>

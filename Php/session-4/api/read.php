<?php
include_once '../Model/Database.php';
header('Content-Type: application/json');

class ReadContactForm
{
    private $conn;
    private $id;

    public function __construct($conn, $id)
    {
        $this->conn = $conn;
        $this->id = $id;
    }

    public function readContactForm()
    {
        if ($this->id) {
            $sql = "SELECT * FROM contact_form WHERE id=$this->id";
            $result = mysqli_query($this->conn, $sql);
            if (mysqli_num_rows($result) > 0) {
                $row = mysqli_fetch_assoc($result);
                echo json_encode($row);
            } else {
                echo json_encode(array('message' => 'No contact form found with ID: ' . $this->id));
            }
        } else {
            $sql = "SELECT * FROM contact_form";
            $result = mysqli_query($this->conn, $sql);
            $data = array();
            if (mysqli_num_rows($result) > 0) {
                while ($row = mysqli_fetch_assoc($result)) {
                    $data[] = $row;
                }
                echo json_encode($data);
            } else {
                echo json_encode(array('message' => 'No contact forms found'));
            }
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $readContactForm = new ReadContactForm($conn, $id);
        $readContactForm->readContactForm();
    } else {
        $readContactForm = new ReadContactForm($conn, null);
        $readContactForm->readContactForm();
    }
}
?>

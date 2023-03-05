<?php
include_once '../Model/Database.php';
header('Content-Type: application/json');

class CreateContactForm
{
    private $conn;
    private $name;
    private $email;
    private $phone;

    public function __construct($conn, $name, $email, $phone)
    {
        $this->conn = $conn;
        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
    }

    public function createContactForm()
    {
        $sql = "INSERT INTO contact_form (name, email, phone) VALUES ('$this->name', '$this->email', '$this->phone')";
        if (mysqli_query($this->conn, $sql)) {
            echo json_encode(array('message' => 'Contact form submitted successfully'));
        } else {
            echo json_encode(array('message' => 'Error: ' . mysqli_error($this->conn)));
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];

    $createContactForm = new CreateContactForm($conn, $name, $email, $phone);
    $createContactForm->createContactForm();
}
?>

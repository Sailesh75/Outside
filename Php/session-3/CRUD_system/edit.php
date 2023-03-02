<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Contact application</title>
</head>
<body>
    <h2>Update Contact Information</h2>
    <?php
    include 'connect.php';
    $id = $_GET['id'];
    $sql = "SELECT * FROM contact_form WHERE id =".$id;
    $result = mysqli_query($conn,$sql);

    if($result){
        $row= mysqli_fetch_assoc($result);
            $updateName = $row['name'];
            $updateEmail = $row['email'];
            $updateContact = $row['phone'];          
}
?>
    <form action="editaction.php" method="post">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" value="<?php global $updateName; echo $updateName?>" required><br><br>
        <label for="email">Email:</label><br>
        <input type="text" id="email" name="email" value="<?php global $updateEmail; echo $updateEmail?>" required><br><br>
        <label for="contact">Contact Number:</label><br>
        <input type="text" id="contact" name="phone" value="<?php global $updateContact; echo $updateContact?>" required><br><br>
        <input type="hidden" id="id" name="id" value="<?php global $id; echo $id?>" required>
        <input type="submit" value="Update">
    </form> 
</body>
</html>

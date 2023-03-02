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
    <h1>
        Contact application
    </h1>
    <form action="addData.php" method="post">
        <label for="fname">Name:</label><br>
        <input type="text" id="fname" name="name" required><br><br>
        <label for="lname">Email:</label><br>
        <input type="text" id="lname" name="email" required><br><br>
        <label for="lname">Contact Number:</label><br>
        <input type="text" id="lname" name="contact" required><br><br>
        <input type="submit" value="Save">
    </form> 

    <hr>
    <h3>Contact lists</h3>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Action</th>
        </tr>

    <?php
    include_once 'connect.php';

    $sql = "SELECT * FROM contact_form";
    $result = mysqli_query($conn,$sql);
    if($result){
        while($row= mysqli_fetch_assoc($result)){
            $id = $row['id'];
            $name = $row['name'];
            $email = $row['email'];
            $contact = $row['phone'];
            ?>

            <tr>
                <td><?php echo $name ?> </td>
                <td><?php echo $email ?> </td>
                <td><?php echo $contact ?> </td>
                <td>
                    <a href='edit.php?id=<?php echo $id?>'>Update</a>
                    <a href="delete.php?id=<?php echo $id?>">Delete</a>
                </td>
             </tr>

            <?php
        }
    }
?>

</table>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class work</title>
</head>
<body>

<?php

//abstract class
 abstract class Animal1 {
    abstract public function Sound();     //must contain an abstract method and it is just declared here but not initialized
 }

 class Dogsound extends Animal1{
    public function Sound(){          
        echo "Bark!";
    }
 }

 $animal = new Dogsound();
 $animal->Sound();


//interface class
interface Animal2 {
    public function Sound(); 
 }
 
 class Catsound implements Animal2 {       //must contain implement keyword to run interface class
   public function Sound() {
     echo "Meow!";
   }
 }
 
 $animal = new CatSound();
 $animal->Sound();

?>

</body>
</html>
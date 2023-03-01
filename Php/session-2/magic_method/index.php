<?php
// magic methods 

//1. __construct() --> This method gets called automatically every time the object of a particular class is created.
class Student{
    public function  __construct(){
        echo nl2br("This is an example of magic method.\n");
    } 
}

$student = new Student(); 


//2. __call() --> This method gets called when a method or property is called which has not been defined.

class Students{
    public function __call($name , $parameters){
        echo nl2br("Name of the student is " . $name. "\n");
        print_r($parameters);
    }
}
 
$studentName = new Students();
$studentName->getName("Sailesh" , "Ram");

?>
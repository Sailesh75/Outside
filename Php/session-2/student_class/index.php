<?php
class Student{
    public $name;
    public $rollNum;
    public function  __construct($name, $rollNum){
        $this->name = $name; 
        $this->rollNum = $rollNum;
    } 
    public function getName(){
        return $this->name;
    }
    public function getRollNum(){
        return $this->rollNum;
    }
}

class Mathematics extends Student{
    public $name;
    public $rollNum;
    public $physics;
    public $maths;
    public $chemistry;
    function __construct($name, $rollNum, $physics, $maths, $chemistry){
        parent::__construct($name, $rollNum);
        $this->physics = $physics;
        $this->maths = $maths;
        $this->chemistry = $chemistry;
    }
    function getAverage(){
        $sum = $this->physics + $this->maths + $this->chemistry;
        $average = $sum/3;
        return $average;
    }
}


class ComputerScience extends Student{
    public $name;
    public $rollNum;
    public $AI;
    public $informationSystem;
    public $dataCommunication;
    function __construct($name, $rollNum, $AI, $informationSystem, $dataCommunication){
        parent::__construct($name, $rollNum);
        $this->AI = $AI;
        $this->informationSystem = $informationSystem;
        $this->dataCommunication = $dataCommunication;
    }
    function getAverage(){
        $sum = $this->AI + $this->informationSystem + $this->dataCommunication;
        $average = $sum/3;
        return $average;
    }
}

$mathematicsStudent = new Mathematics("Sailesh Kafle",1 ,80, 60, 75);
$computerScienceStudent = new ComputerScience("Matt damon",2, 68, 72, 90);

$mathsStudentName = $mathematicsStudent->getName();
$mathStudentAverageValue = $mathematicsStudent->getAverage();

$csStudentName = $computerScienceStudent->getName();
$csStudentAverageValue = $computerScienceStudent->getAverage();

echo nl2br("Average marks of $mathsStudentName is:  $mathStudentAverageValue \n Average marks of $csStudentName is:  $csStudentAverageValue") ;






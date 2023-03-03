<?php
class Person {
    private $name;
    protected $age;
    public $gender;

    public function __construct($name, $age, $gender) {
        $this->name = $name;
        $this->age = $age;
        $this->gender = $gender;
    }

    public function getName() {
        return $this->name;
    }

    public function getAge() {
        return $this->age;
    }

    public function setAge($newAge) {
        $this->age = $newAge;
    }

    private function secretFunction() {
        echo "This is a secret function.\n";
    }
}

$person = new Person("John", 30, "Male");

// Access public properties directly
echo "Gender: " . $person->gender . "\n";

// Access private and protected properties using public getter methods
echo "Name: " . $person->getName() . "\n";
echo "Age: " . $person->getAge() . "\n";

// Modify protected property using public setter method
$person->setAge(40);
echo "New age: " . $person->getAge() . "\n";

// Attempt to access private method - this will result in a fatal error
// $person->secretFunction();
?>
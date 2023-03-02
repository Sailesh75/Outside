<?php
class Integer {
    private $value;

    public function __construct($value) {
        $this->value = $value;
    }

    public function getValue() {
        return $this->value;
    }

    public function __toString() {
        return (string) $this->value;
    }

    public function __invoke() {
        return $this->value;
    }

    public function __clone() {
        $this->value--;
    }

    public function decrement() {
        $this->value--;
    }
}

// Create a new Integer object with value 10
$number = new Integer(10);

// Decrement the value using the clone method
$number_clone = clone $number;

// Print the value of the original object
echo "Original value: " . $number . "\n";

// Print the value of the cloned object
echo "New value: " . $number_clone . "\n";

// Decrement the value using the decrement method
$number->decrement();

// Print the value of the original object again
echo "New value after decrement: " . $number . "\n";
?>

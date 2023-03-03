<?php
    $myFile = fopen('input.txt', 'r');
    $text = fread($myFile, filesize("input.txt"));
    // Splitting the string into an array of sets of calorie values, with each set separated by newline characters ("\n")
    $calorieSet = explode("\n", $text);
    // Looping through each set of calorie values to calculate the total calorie count for that set
    foreach ($calorieSet as $calorie) {
        $totalCalorie[] = array_sum(explode("\n", $calorie));
    }
    $maxCalorie = max($totalCalorie);
    // using  max function
    echo ("Maximum calorie is: $maxCalorie ");
    // Sorting the array of calorie counts in descending order using the rsort function
    rsort($totalCalorie);
    echo nl2br("\nTop 3 calories are: ");
    for ($i = 0; $i < 3; $i++) {
        echo ($totalCalorie[$i] . "\r\n");
    }
?> 



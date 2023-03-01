 <?php
    $myFile = fopen('input.txt', 'r');
    $text = fread($myFile, filesize("input.txt"));
    $calorie_carried = explode("\n\n", $text);
    foreach ($calorie_carried as $calorie) {
        $sum_calorie[] = array_sum(explode("\n", $calorie));
    }
    $max = max($sum_calorie);
    echo ("Maximum calorie is: $max ");
    rsort($sum_calorie);
    echo nl2br("\nTop 3 calories are: ");
    for ($i = 0; $i < 3; $i++) {
        echo "zero $i";
        echo ($sum_calorie[$i] . "\r\n");
    }
?> 



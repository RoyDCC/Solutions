<?php
// Jenny's secret message - 8 kyu
function greet($name) {
    if ($name === 'Johnny') {
        return 'Hello, my love!';
    }
    return "Hello, $name!";
}


// Highest and Lowest - 7 kyu
function highAndLow($numbers){
    $numbers = explode(" ",$numbers);
    return max($numbers)." ".min($numbers);
}


// You Can't Code Under Pressure #1 - 8 kyu
function doubleInteger($i){
    return $i*2;
}
?>
/*
Convert PascalCase string into snake_case - 5 kyu
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers.
If the method gets a number as input, it should return a string.

Examples:
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/

function toUnderscore(str){    
    str +="";
    str = str.replace(/([A-Z])/g, "_$1").toLowerCase();
    if (str[0]=="_") {
        return str.substring(1)
    }
    return str;
}

/*
Kebabize - 6 kyu
Modify the kebabize function so that it converts a camel case string into a kebab case.

Examples:
"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"      -->  "camels-have-humps"
"CAMEL"                 -->  "c-a-m-e-l"
*/

function kebabize(str){    
    str +="";
    str = str.replace(/([A-Z])/g, "-$1").toLowerCase();
    if (str[0]=="-") {
        return str.substring(1).replace(/[0-9]/,'')
    }
    return str.replace(/[0-9]/,'');
}

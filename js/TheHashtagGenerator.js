// The Hashtag Generator - 5 kyu

/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!
Here's the deal:
    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples:
    " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
    "    Hello     World   "                  =>  "#HelloWorld"
    ""                                        =>  false
*/

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function generateHashtag (str) {
    str = str.replace( /  +/g, ' ' ).trim().split(" ");
    let hashtag = "#";

    str.forEach(w => {
        hashtag += capitalizeFirstLetter(w);
    });
    
    if (hashtag.length>140 || hashtag == "#") {
        return false;
    }else{
        return hashtag;
    }
}
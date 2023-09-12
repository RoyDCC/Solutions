// Multiply - 8 kyu
function multiply(a, b){
    return a * b
}

//Sum of positives - 8 kyu
function positiveSum(arr) {
    let sum = 0;
    arr.forEach(n => {
        if (n>0) sum+=n;
    });
    return sum;
}

//Check same case - 8 kyu
function sameCase(a, b){
    let upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if ((upper.includes(a) && upper.includes(b)) || (lower.includes(a) && lower.includes(b))){
        return 1;
    }else if ((upper.includes(a) || lower.includes(a)) && (upper.includes(b) || lower.includes(b))){
        return 0;
    }else{
        return -1;
    }
}
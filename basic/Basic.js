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
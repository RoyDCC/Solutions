// Split Strings - 6 kyu
function solution(str){
    let arr = []
    
    if (str.length%2!=0){
        str +="_";
    }

    for (let i = 0; i < str.length; i+=2) {
        arr.push(str.slice(i,i+2));
    }

    return arr;
}
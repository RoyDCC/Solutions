// Multiply - 8 kyu
function multiply(a, b){
    return a * b
}


// Sum of positives - 8 kyu
function positiveSum(arr) {
    let sum = 0;
    arr.forEach(n => {
        if (n>0) sum+=n;
    });
    return sum;
}


// Check same case - 8 kyu
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


// Counting sheep... - 8 kyu
function countSheeps(sheep) {
    let count = 0;
    sheep.forEach(e => {
        if (e) count++;
    });   
    return count;
}


// Count the Ones (binary number) - 7 kyu
function hammingWeight(x) {
    let i = 0
    while (x > 0) {
      i += x & 1
      x >>= 1
    }
    return i
}


// Over The Road - 7 kyu
function overTheRoad(address, n){
    return n*2 - address + 1;
}


// Get Planet Name By ID - 8 kyu
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
  }
  
  return name;
}


// Return to Sanity - 8 kyu
function mystery() {
  var results = {sanity: 'Hello'};
  return results;
}


// Incorrect division method - 8 kyu
const solve = (x, y) => x / y


// Capitalization and Mutability - 8 kyu
function capitalizeWord(word) {
  return word[0].toUpperCase()+word.substring(1);
}


//Unexpected parsing - 8 kyu
function getStatus(isBusy) { //1st
  var msg = (isBusy ? "busy" : "available");
  return {status: msg}
}
function getStatus(isBusy) { //2nd
  var msg = (isBusy ? "busy" : "available");
  return (
  {
    status: msg
  })
}

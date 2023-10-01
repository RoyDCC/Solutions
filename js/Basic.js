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


// Unexpected parsing - 8 kyu
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


// Russian postal code checker - 7 kyu
function zipvalidate(postcode){ //1st
  return postcode.match(/^[12346]\d{5}$/) ? true:false;
}

let  zipvalidate = p => p.match(/^[12346]\d{5}$/) ? true:false; //2nd


// Disemvowel Trolls - 7 kyu
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g,'');
}


// Every archer has its arrows - 7 kyu
function archersReady(archers){
  if (archers.length<1) return false
  return archers.every(a => a>=5);
}


// Get the Middle Character - 7 kyu
function getMiddle(str){
  let middle= (str.length/2)-1;
  if(str.length%2==0){
      return str.substring(middle, middle+2);
  }else{
      return str.substring(middle+1, middle+2);
  }
}


// You Can't Code Under Pressure #1 - 8 kyu
function doubleInteger(i) {
  return i * 2;
}


// FIXME: Replace all dots - 8 kyu
var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}


// Ninja vs Samurai: Strike - 7 kyu
class Warrior {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
  
  strike(enemy, swings) {
    enemy.health = Math.max(0, enemy.health - (swings * 10));   
  }
}

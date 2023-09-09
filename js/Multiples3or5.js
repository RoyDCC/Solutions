// Multiples of 3 or 5 - 6 kyu
function solution(num) {
  if (num < 0) {
    return 0;
  }
  let sum = 0;
  for (let i = num - 1; i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
function times2(x){
  return x+x;
}
function doubleAll(numbers) {
  // SOLUTION GOES HERE
  return numbers.map(times2);
}

module.exports = doubleAll;
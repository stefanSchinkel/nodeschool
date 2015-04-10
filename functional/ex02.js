function repeat(operation, num) {
  var i;
  for (i=0; i < num; i++){
    operation();
  }
  // if (num <= 0) return
  // operation()
  // return repeat(operation, --num)

}

// Do not remove the line below
module.exports = repeat;

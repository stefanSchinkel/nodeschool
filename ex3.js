var fs = require('fs');
var fileName = process.argv[2];
var buf = fs.readFileSync(fileName);
var str = buf.toString();

var xs = str.split('\n');

console.log(xs.length - 1);
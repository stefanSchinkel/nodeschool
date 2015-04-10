var fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, function cb(err,data) {

  var len = data.toString().split('\n').length - 1;
  console.log(len);

});



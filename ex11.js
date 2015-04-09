var http = require('http');
var util = require('util');
var fs= require('fs');

var dataFile = process.argv[3];

var server = http.createServer(function (req, res) {
  // request handling logic...
  src = fs.createReadStream(dataFile);
  src.pipe(res);

});



server.listen(process.argv[2]);




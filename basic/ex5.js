var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.'+process.argv[3];
var file;

fs.readdir(dir, function cb(err,fileList) {

  for (file in fileList) {
    if (path.extname(fileList[file]) === ext) {
      console.log(fileList[file]);
    }
  }


});



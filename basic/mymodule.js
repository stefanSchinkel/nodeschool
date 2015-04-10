var fs = require('fs');
var path = require('path');

var file;
var result = [];

module.exports = function (dir, ext, callback) {
  ext = '.' + ext;
  fs.readdir(dir, function (err, fileList) {
    if (err) {
      return callback(err); // early return
    }

    for (file in fileList) {
      if (path.extname(fileList[file]) === ext) {
        result.push(fileList[file]);
      }
    }

  return callback(null, result);

  });
};


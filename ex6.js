var dir = process.argv[2];
var ext = process.argv[3];
var mymodule = require('./mymodule');

function cb(err,data){
  if (err) { console.log(err); }

  for (var file in data){
    console.log(data[file]);
  }
}
mymodule(dir, ext, cb);


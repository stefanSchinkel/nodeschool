var http = require('http');
var url = process.argv[2];

var response = http.get(url, function (res){
  var all = '';
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    all = all + chunk;
  });

  res.on('end', function (){
    console.log(all.length);
    console.log(all);
  })
});



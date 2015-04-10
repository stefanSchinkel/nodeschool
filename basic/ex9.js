var http = require('http');
var result = [];
var count = 0;


function printRes(){
  for (var i=2; i<5; i++){
    console.log(result[i]);
  }
}
function getData(idx) {

  http.get(process.argv[idx], function (res){

  var all='';

    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      all = all + chunk;
    });

    res.on('end', function (){
      result[idx] = all;
      count += 1;
        if (count === 3){ printRes();}

    });
  });

}

for (var i=2; i<5;i++){
  getData(i);
}

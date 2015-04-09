var net = require('net');
var util = require('util');

function dString(){
  var str = '';
  var date = new Date();
  var day =  date.getDate();
  if (day < 10) {  day = '0'+day; }

  var month = date.getMonth() + 1;
  if (month < 10) { month = '0'+month; }
  str = util.format('%d-%s-%s ', date.getFullYear(), month, day);
  str = str + util.format('%d:%d\n', date.getHours(), date.getMinutes());
  return str;
}




var server = net.createServer(function (socket) {
  socket.write(dString());
  socket.end();
});

server.listen(process.argv[2]);




function filterLen(x){
  return x.message.length <=50;
}
function retMess(x){
  return x.message;
}
function getShortMessages(messages) {
  var arr = [];
  return messages.filter(filterLen).map(retMess);
}
module.exports = getShortMessages;



function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    function getIDs(x) {
      return x.id;
    }

    function isGood(item){
      if (good.indexOf(item) === -1){
        return false;
      }
      return true;
    }

    var good = goodUsers.map(getIDs);
    var current = submittedUsers.map(getIDs);
    return current.every(isGood);

    // suggested
    // return submittedUsers.every(function (submittedUser) {
    //   return goodUsers.some(function (goodUser) {
    //     return goodUser.id === submittedUser.id;
    //   });
    // });


  };
}

module.exports = checkUsersValid;

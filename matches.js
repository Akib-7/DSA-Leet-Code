var solution = (array) => {
  var playerArray = [];

  for (var i = 0; i < array.length; i++) {
    var winnerPlayer = array[i][0].toString(); // Get the winner player
    var loserPlayer = array[i][1].toString(); // get the loser player

    // Check if winnerPlayer already exists in playerArray
    var found1 = false;
    var found2 = false;
    for (var k = 0; k < playerArray.length; k++) {
      var obj = playerArray[k];
      if (obj.hasOwnProperty(winnerPlayer)) {
        found1 = true;
      }

      if (obj.hasOwnProperty(loserPlayer)) {
        //increasing the loss value
        obj[loserPlayer] += 1;
        found2 = true;
      }
      if (found1 && found2) {
        break;
      }
    }

    // If winnerPlayer doesn't exist, add it to playerArray with initial value -1
    if (!found1) {
      var newObj = {};
      newObj[winnerPlayer] = -1;
      playerArray.push(newObj);
    }
    if (!found2) {
      var newObj = {};
      newObj[loserPlayer] = 1;
      playerArray.push(newObj);
    }
  }

  return playerArray;
};

var array = [
  [1, 3],
  [2, 4],
  [3, 4],
];
console.log(solution(array)); // Output: [ { '1': -1 }, { '2': -1 }, { '3': -1 } ]

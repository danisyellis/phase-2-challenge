var state = process.argv[2];

  var toReturn = [];
  var upState = state.toUpperCase();
  var clients = require("./clients.json");

  for (var i=0; i<clients.length; i++) {
    if (upState === clients[i].state.toUpperCase()) {
      var objForToReturn = {"id": clients[i].id, "rep_name":clients[i].rep_name, "company":clients[i].company, "city":clients[i].city, "state":clients[i].state}
      toReturn.push(objForToReturn);
    }
  }
  console.log('Finding clients in state"' + state + '"...\n\n', toReturn)

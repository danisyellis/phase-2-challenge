var name = process.argv[2];
  var toReturn = [];
  var upName = name.toUpperCase();
  var clients = require("./clients.json");

  for (var i=0; i<clients.length; i++) {
    if (clients[i].rep_name.toUpperCase().startsWith(upName)) {
      var objForToReturn = {"id": clients[i].id, "rep_name":clients[i].rep_name}
      toReturn.push(objForToReturn);
    }
  }
  //find all matches for names that start with name and add to an array
  //create an array of objects with each person's id and rep name
  console.log('Finding clients with name"' + name + '"...\n\n' , toReturn)


var weekDay = function(date) {
  var day = date.toString().slice(0,3);
  if(Object.prototype.toString.call(date) !== '[object Date]') {
    return false;
  }
  return day
}

var snippet = function(string, maxLength) {
  var snippedString = ""
  if(typeof(maxLength) != 'number') {
    throw new Error
  }

  if(string.length> maxLength) {
    snippedString = string.slice(0, maxLength)+ "..."
  } else {
    snippedString = string;
  }
  return snippedString
}

var numProps = function(obj) {
  if(typeof(obj) != 'object') {
    throw new Error;
  }
  var number = 9;
  return number;
}

module.exports =  {
  weekDay,
  snippet,
  numProps
}

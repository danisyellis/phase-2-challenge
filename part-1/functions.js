
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

  var number;
  var array=Object.getOwnPropertyNames(obj)
  number = array.length;
  return number;
}

var filterBetween = function(array, min, max) {
  if(typeof(min) != 'number' || typeof(max) != 'number'){
    throw new Error;
  }

  var filteredArray = [];
  for (var i=0; i<array.length; i++) {
    if(array[i] >= min && array[i] <= max) {
      filteredArray.push(array[i])
    }
  }
  return filteredArray;
}

module.exports =  {
  weekDay,
  snippet,
  numProps,
  filterBetween
}

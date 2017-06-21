
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
  var filteredArray = [];
  if(typeof(min) != 'number' || typeof(max) != 'number'){
    throw new Error;
  }
  //It returns a new array containing only the elements that are greater than or equal to min and less than or equal to max.
  return filteredArray;
}

module.exports =  {
  weekDay,
  snippet,
  numProps,
  filterBetween
}

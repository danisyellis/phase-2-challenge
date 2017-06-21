
var weekDay = function(date) {
  var day = date.toString().slice(0,3);
  if(Object.prototype.toString.call(date) !== '[object Date]') {
    return false;
  }
  return day
}

module.exports =  {
  weekDay
}

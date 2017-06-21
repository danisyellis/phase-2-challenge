const assert = require('chai').assert;
const functions = require('../functions.js');

describe('myFunctions', function() {
  describe('showWeekday', function() {
    it('weekDay should return Mon', function() {
      var result = functions.weekDay(new Date(2017, 5, 19))
      assert.equal(result, 'Mon');
    });
    it('weekDay should return false if it is not given a date', function() {
      var result = functions.weekDay("oh hai!");
      assert.equal(result, false)
    })
  })

  describe('getSnippet', function() {
    it('throws an error if invalid input', function() {
      assert.throws(function() { functions.getSnippet("test string", "notANumber") }, Error);
    })
    it('returns a string', function() {
      assert.typeOf( functions.getSnippet("test string", 9), 'string');
    })
  })
})

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

  describe('snippet', function() {
    it('throws an error if invalid input', function() {
      assert.throws(function() { functions.snippet("test string", "notANumber") }, Error);
    })
    it('returns a string', function() {
      assert.typeOf( functions.snippet("test string", 9), 'string');
    })
  })

  describe('numProps', function() {
    it('throws an error if invalid input', function() {
      assert.throws(function() { functions.numProps("not an object") }, Error);
    })
    it('returns a number', function() {
      assert.typeOf( functions.numProps({name: 'Dominique', age: 30, phone: '555-555-5555'
      }), 'number');
    })
  })

  describe('filterBetween', function() {
    it('throws an error if invalid input', function() {
      assert.throws(function() { functions.filterBetween([1,2], "not a number", 5) }, Error);
    })
    it('returns an array', function() {
      assert.isArray( functions.filterBetween([1, 2, 3, 4, 5, 6], 2, 6));
    })
  })
})

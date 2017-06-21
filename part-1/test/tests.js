const assert = require('chai').assert;
const functions = require('../functions.js');

describe('myFunctions', function() {
  it('function should return hello', function() {
    assert.equal(functions(), 'hello');
  });
})

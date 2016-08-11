

require("must/register");
var _ = require('lodash');

describe('Easy - needs a single lodash function, with optional scalar arguments', function () {
  it('#1', function () {
    var input = ['prague', 'london', 'rome', 'berlin', 'paris'];
    var expected = ['rome', 'berlin', 'paris'];
    var actual = _.identity(input);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#2', function () {
    var input1 = ['batman', 'superman', 'green lantern'];
    var input2 = ['the flash', 'wonder woman'];
    var expected = ['batman', 'superman', 'green lantern', 'the flash', 'wonder woman'];
    var actual = _.identity(input1);   // <----- Edit this line
    actual.must.eql(expected);
  });

  it('#3', function () {
    var input1 = [5, 6, 4, 9, 0, 5, 6, 4, 9, 0];
    var input2 = 0;
    var expected = 4;
    var actual = _.identity(input1);   // <----- Edit this line
    actual.must.eql(expected);
  });
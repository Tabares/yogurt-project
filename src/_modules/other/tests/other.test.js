'use strict';

var Other = require('../other');

describe('Other View', function() {

  beforeEach(function() {
    this.other = new Other();
  });

  it('Should run a few assertions', function() {
    expect(this.other).toBeDefined();
  });

});

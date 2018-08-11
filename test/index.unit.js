'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export luxcore-lib', function() {
    var luxcore = require('../');
    should.exist(luxcore.lib);
    should.exist(luxcore.lib.Transaction);
    should.exist(luxcore.lib.Block);
  });
});

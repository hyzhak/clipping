var clipper = require('../index'),
    expect = require('chai').expect;

describe('Clipper', function() {
    it('should be "you" convert to "U"', function() {
        expect(clipper('you')).to.equal('U');
    });
});
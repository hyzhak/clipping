var clipper = require('../index'),
    expect = require('chai').expect;

describe('Clipper', function() {
    it('should return null on undefined', function() {
        expect(clipper()).to.equal('');
    });

    describe('words', function() {
        it('should "you" convert to "U"', function() {
            expect(clipper('you')).to.equal('U');
        });

        it('shouldnt convert part of word', function() {
            expect(clipper('youth')).to.equal('youth');
        });

        it('should "github" convert to "gh"', function() {
            expect(clipper('github')).to.equal('gh');
        });

        it('should right merge back modified punctuations', function() {
            expect(clipper('who are you?!')).to.equal('who are U?!');
        });
    });
});
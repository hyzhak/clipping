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
    });

    it('should right merge back modified punctuations', function() {
        expect(clipper('who are you?!')).to.equal('who r U?!');
    });

    it('should not add extra space after comma', function() {
        expect(clipper('apple, tomato')).to.equal('apple, tomato');
    });

    it('should preserve _', function() {
        expect(clipper('word _ word')).to.equal('word _ word');
    });

    it('should preserve __', function() {
        expect(clipper('word __ word')).to.equal('word __ word');
    });

    describe('readability', function() {
        it('should use as short as possible version without restrictions on readability', function() {
            expect(clipper('love')).to.equal('♥');
        });

        it('should use as short as possible version if available readability is zero', function() {
            expect(clipper('love', 0)).to.equal('♥');
        });

        it('should use longer version if available readability is .3', function() {
            expect(clipper('love', 0.3)).to.equal('luv');
        });

        it('should keep original version if available readability is more than half', function() {
            expect(clipper('love', 0.5)).to.equal('love');
        });
    });
});
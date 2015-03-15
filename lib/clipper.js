var _ = require('lodash'),
    natural = require('natural'),
    tokenizer = new natural.WordPunctTokenizer();

var words = _([
    {org: 'github', mod: 'gh'},
    {org: 'tomorrow', mod: 'tmrw'},
    {org: 'you', mod: 'U'}
]);

var spaceMarker = '_';

module.exports = function(text) {
    text = text || '';
    text = text.replace(/\s/g, ' '+ spaceMarker + ' ');
    var tokens = tokenizer.tokenize(text);
    return tokens
        .map(function(token) {
            var alt = words.find({org: token});
            if (alt) {
                return alt.mod;
            }
            return token;
        })
        .map(function(token) {
            return token === spaceMarker?' ':token;
        })
        .join('');
};
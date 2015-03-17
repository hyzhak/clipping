var _ = require('lodash'),
    natural = require('natural'),
    tokenizer = new natural.WordPunctTokenizer();

var words = _([
    {org: 'github', mod: 'gh'},
    {org: 'tomorrow', mod: 'tmrw'},
    {org: 'you', mod: 'U'}
]);

var spaceMarker = '_',
    markerOfMarkerSymbol = spaceMarker + spaceMarker,
    regexpForSpaceMarker = new RegExp(spaceMarker, 'g');

module.exports = function(text) {
    text = text || '';
    text = text.replace(regexpForSpaceMarker, markerOfMarkerSymbol);
    text = text.replace(/\s/g, ' '+ spaceMarker + ' ');
    var tokens = tokenizer.tokenize(text);
    return tokens
        .map(function(token) {
            var alt = words.find({org: token});
            if (alt) {
                return alt.mod;
            }
            return token.trim();
        })
        .map(function(token) {
            return token === spaceMarker?' ':token;
        })
        .map(function(token) {
            var l = (token.match(regexpForSpaceMarker) || []).length;
            if (l % 2 !== 0 || l === 0) {
                return token;
            }

            return token.substring(0, l >> 1);
        })
        .join('');
};
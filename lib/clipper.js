var _ = require('lodash');

var words = _([
    ['you', 'U'],
    ['github', 'gh']
]);

module.exports = function(text) {
    return words.reduce(function(result, word) {
        return result.replace.apply(result, word);
    }, text || '');
};
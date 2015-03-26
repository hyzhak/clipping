var _ = require('lodash'),
    natural = require('natural'),
    tokenizer = new natural.WordPunctTokenizer();

var words = _([
    //
    //readability:
    //
    //0.1 looks almost the same
    //0.75 looks inconvenient
    //0.5 lost rhythm
    //0.25 looks strange
    //0.0 looks extremely strange

    //
    //type:
    //* abbr(eviation)
    //* symbol
    //* sound
    //* ? - is not defined yet

    {org: 'about', mod: 'abt', readability: 0.25, type: 'abbreviation'},
    {org: 'alcohol', mod: 'alc', readability: 0.75, type: '?'},
    {org: 'again', mod: 'agen', readability: 0.25, type: '?'},
    {org: 'and', mod: '&', readability: 0.5, type: 'symbol'},
    {org: 'are', mod: 'r', readability: 0.5, type: 'sound'},
    {org: 'awkward', mod: 'awk', readability: 0.75, type: '?'},

    {org: 'background', mod: 'bgd', readability: 0.3, type: '?'},
    {org: 'because', mod: 'b/c', readability: 0.5, type: '?'},
    {org: 'before', mod: 'b4', readability: 0.6, type: 'sound'},
    {org: 'but', mod: 'bt', readability: 0.5, type: '?'},

    {org: 'characters', mod: 'chars', readability: 0.75, type: '?'},
    {org: 'check', mod: 'chk', readability: 0.2, type: '?'},
    {org: 'could', mod: 'cld', readability: 0.2, type: '?'},
    {org: 'click', mod: 'clk', readability: 0.2, type: '?'},
    {org: 'cigarette', mod: 'cig', readability: 0.75, type: '?'},
    {org: 'choreography', mod: 'choreo', readability: 0.75, type: '?'},
    {org: 'collaboration', mod: 'collab', readability: 0.75, type: '?'},
    {org: 'create', mod: 'cre8', readability: 0.6, type: 'sound'},

    {org: 'enough', mod: 'enuf', readability: 0.25, type: '?'},
    {org: 'email', mod: 'EM', readability: 0.25, type: '?'},

    {org: 'favorite', mod: 'fav', readability: 0.75, type: '?'},
    {org: 'for', mod: '4', readability: 0.5, type: 'sound'},

    {org: 'github', mod: 'gh', readability: 0.75, type: '?'},

    {org: 'liquor', mod: 'liq', readability: 0.75, type: '?'},
    {org: 'love', mod: 'luv', readability: 0.3, type: '?'},
    {org: 'love', mod: '♥', readability: 0.25, type: 'symbol'},

    {org: 'have', mod: 'hav', readability: 0.5, type: '?'},

    {org: 'make', mod: 'mke', readability: 0.5, type: '?'},
    {org: 'merchandise', mod: 'merch', readability: 0.75, type: '?'},

    {org: 'people', mod: 'ppl', readability: 0.75, type: '?'},

    {org: 'obvious', mod: 'obvi', readability: 0.75, type: '?'},

    {org: 'sentence', mod: 'sentnce', readability: 0.75, type: '?'},
    {org: 'should', mod: 'shld', readability: 0.75, type: '?'},

    {org: 'the', mod: 'd', readability: 0.25, type: 'sound'},
    {org: 'the', mod: 'da', readability: 0.5, type: 'sound'},
    {org: 'that', mod: 'dat', readability: 0.5, type: 'sound'},
    {org: 'to', mod: '2', readability: 0.5, type: 'sound'},
    {org: 'tomorrow', mod: 'tmrw', readability: 0.75, type: '?'},
    {org: 'twitter', mod: 'twtr', readability: 0.75, type: '?'},

    {org: 'we', mod: 'V', readability: 0.5, type: 'sound'},
    {org: 'with', mod: 'w/', readability: 0.5, type: '?'},
    {org: 'without', mod: 'w/o', readability: 0.5, type: '?'},
    {org: 'whatever', mod: 'wtv', readability: 0.5, type: '?'},
    {org: 'you', mod: 'U', readability: 0.5, type: 'sound'},
    {org: 'your', mod: 'ur', readability: 0.5, type: 'sound'},

    //days of week
    {org: 'sunday', mod: 'Su', readability: 0.3, type: 'abbr'},
    {org: 'monday', mod: 'Mo', readability: 0.3, type: 'abbr'},
    {org: 'tuesday', mod: 'Tu', readability: 0.3, type: 'abbr'},
    {org: 'wednesday', mod: 'We', readability: 0.3, type: 'abbr'},
    {org: 'thursday', mod: 'Th', readability: 0.3, type: 'abbr'},
    {org: 'friday', mod: 'Fr', readability: 0.3, type: 'abbr'},
    {org: 'saturday', mod: 'Sa', readability: 0.3, type: 'abbr'},

    //months
    {org: 'january', mod: 'jan', readability: 0.75, type: 'abbr'},
    {org: 'february', mod: 'feb', readability: 0.75, type: 'abbr'},
    {org: 'march', mod: 'mar', readability: 0.75, type: 'abbr'},
    {org: 'april', mod: 'apr', readability: 0.75, type: 'abbr'},
    {org: 'august', mod: 'aug', readability: 0.75, type: 'abbr'},
    {org: 'september', mod: 'sept', readability: 0.75, type: 'abbr'},
    {org: 'october', mod: 'oct', readability: 0.75, type: 'abbr'},
    {org: 'november', mod: 'nov', readability: 0.75, type: 'abbr'},
    {org: 'december', mod: 'dec', readability: 0.75, type: 'abbr'},

    //TODO: can be modeling?!

    //TODO: numbers
    {org: 'first', mod: '1st', readability: 0.75, type: 'number'},
    {org: 'one', mod: '1', readability: 0.75, type: 'number'},

    //TODO: synonyms
    {org: 'hello', mod: 'hi', readability: 0.75, type: 'synonym'},

    //TODO: track more than one word

    //As soon as possible -> asap
    //background -> BR
    //by the way -> btw
    //face to face -> f2f
    //I see -> IC
    //I don't know -> ids
    //To be honest -> tbh
    //Of course -> ofc
]);

var spaceMarker = '_',
    markerOfMarkerSymbol = spaceMarker + spaceMarker,
    regexpForSpaceMarker = new RegExp(spaceMarker, 'g');

/**
 *
 * @param text
 * @param readability
 * @returns {*}
 */
module.exports = function(text, readability) {
    readability = readability || 0;
    text = text || '';
    text = text.replace(regexpForSpaceMarker, markerOfMarkerSymbol);
    text = text.replace(/\s/g, ' '+ spaceMarker + ' ');

    return tokenizer.tokenize(text)
        .map(function(token) {
            var alts = words
                .filter({
                    org: token.toLowerCase()
                })
                .filter(function(item) {
                    return item.readability >= readability;
                })
                .sortBy(function(item) {
                    return item.mod.length;
                });

            if (alts.size()) {
                return alts.first().mod;
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
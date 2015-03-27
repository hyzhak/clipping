# clipping [![npm version](https://badge.fury.io/js/clipping.svg)](http://badge.fury.io/js/clipping) [![Build Status](https://travis-ci.org/hyzhak/clipping.svg)](https://travis-ci.org/hyzhak/clipping)

clipping words - is a text shortening service. Do it before twitting!

![](http://redcrosschat.org/wp-content/uploads/2012/10/205547170462558700_Ks134xFV_c.jpg)

Image courtesy of [the Red Cross Chat blog](http://redcrosschat.org/2012/10/17/in-case-of-fire/).

# the goal

is provide tool for clipping sentense before putting it to twitter. so it works like any URL shortening but for pure text and do it without losing readability.

# usage

``` shell

$ npm install clipping --save

```

# build

``` shell
$ gulp build
```

# roadmap

* support multi word clipping (```As soon as possible -> asap```);
* synonyms (```hello -> hi```);
* numbers (```first -> 1st```);
* adaptive cliping. Clip only if we need and with right rate to fit to requirements;

# theory

*In linguistics, clipping is the word formation process which consists in the reduction of a word to one of its parts (Marchand: 1969).*
[Clipping (morphology) at Wikipedia](http://en.wikipedia.org/wiki/Clipping_%28morphology%29)

## analogs

* http://txtn.us/text-reduction - replase group of symbols with single. Like `This little tool will reduce text` => `This littᇉ tᅇl wiᄔ reduŒ text `

## publications

* Contextual Bearing on Linguistic Variation in Social Media by [Stephan Gouws](https://twitter.com/sgouws) [pdf](http://don-metzler.net/presentations/gouws-lsm11.pdf)
research reasons of words clipping in Social Media (twitter, mobile and so on).

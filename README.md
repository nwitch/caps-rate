# caps-rate

[![Build Status](https://travis-ci.org/nwitch/caps-rate.svg?branch=master)](https://travis-ci.org/nwitch/caps-rate)
[![Dependency Status](https://gemnasium.com/nwitch/caps-rate.png)](https://gemnasium.com/nwitch/caps-rate)

Get how much a string IS YELLING.

## Example

``` javascript
var caps = require('caps-rate');

caps('hello WORLD');
// => 0.45454545454545453
```

## Installation

``` bash
$ npm install caps-rate
```

## API

``` javascript
var caps = require('caps-rate');
```

### caps(value)

Returns how frequently caps are used in `value`.
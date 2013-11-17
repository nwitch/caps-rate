var caps = require('../');
var test = require('tape');

test('works', function(t) {
  var TEST_ARRAY = [
    ['kitten', 0.0],
    ['Kitten', 1 / 6.0],
    ['KItten', 1 / 3.0],
    ['KITten', 0.5],
    ['KITTen', 2 / 3.0],
    ['KITTEn', 5 / 6.0],
    ['KITTEN', 1.0],
    ['kittens ARE COOL', 7 / 16.0]
  ];

  t.plan(TEST_ARRAY.length);

  TEST_ARRAY.forEach(function(value) {
    t.equal(caps(value[0]), value[1]);
  });

  console.log(caps('hello WORLD'))
});
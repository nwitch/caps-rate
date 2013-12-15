var caps = require('../');
var test = require('tape');

function testMessage(str, rate) {
  return 'caps(\'' + str + '\') === ' + rate;
}

test('works', function(t) {
  var TEST_ARRAY = [
    ['kitten', 0],
    ['Kitten', 1 / 6],
    ['KItten', 1 / 3],
    ['KITten', 0.5],
    ['KITTen', 2 / 3],
    ['KITTEn', 5 / 6],
    ['KITTEN', 1],
    ['kittens ARE COOL', 7 / 16],
    ['', 0],
    ['kitteñ', 0],
    ['kitteÑ', 1 / 6],
    ['kittÉÑ', 1 / 3]
  ];

  t.plan(TEST_ARRAY.length);

  TEST_ARRAY.forEach(function(value) {
    var str = value[0];
    var rate = value[1];
    t.equal(caps(str), rate, testMessage(str, rate));
  });
});
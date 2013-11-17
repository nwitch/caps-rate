module.exports = function(value) {
  var caps = 0;

  var index = -1;
  var length = value.length;
  while (index++ < length) {
    var chr = value[index];
    if (chr >= 'A' && chr <= 'Z') {
      caps++;
    }
  }

  return caps / (value.length * 1.0);
};
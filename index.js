module.exports = function(value) {
  var length = value.length;

  // If `value` is an empty string, then it will have 0 caps and a length of 0,
  // which, when divided, will yield `NaN`. A string with a length of 0 will
  // obviously have no caps.
  if (!length) {
    return 0;
  }

  var caps = 0;
  var index = -1;
  while (++index < length) {
    var chr = value[index];
    if (chr.toLowerCase() !== chr && chr.toUpperCase() === chr) {
      caps++;
    }
  }

  return caps / length;
};
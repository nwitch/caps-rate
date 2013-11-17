module.exports = function(value) {
  var caps = 0;

  var index = -1;
  var length = value.length;
  while (index++ < length) {
    var chr = value[index];
    if (chr.toLowerCase() !== chr && chr.toUpperCase() === chr) {
      caps++;
    }
  }

  return caps / (length * 1.0);
};

'use strict';

/**
 * @param {string} value
 * @returns {number}
 */
module.exports = function(value) {
  const length = value.length;

  // A string with a length of 0 will obviously have no caps.
  if (!length) {
    return 0;
  }

  let caps = 0;
  let index = -1;
  while (++index < length) {
    const chr = value.charAt(index);
    if (chr.toLowerCase() !== chr && chr.toUpperCase() === chr) {
      caps++;
    }
  }

  return caps / length;
};

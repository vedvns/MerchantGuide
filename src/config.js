/*
file: config.js
contains the roman character and value,
Regular expression for all 4 types of lines
Regular expression for roman number as per the restrictions.
*/
module.exports = {
  romanNumerals : [ 'i', 'v', 'x', 'l', 'c', 'd', 'm' ],
  isValueRegEx : new RegExp(/^[a-z]+\s+is\s+[i|v|x|l|c|d|m]$/i),
  isCreditRegEx : new RegExp(/^([a-z\s]+)is\s+(\d+.?\d*)\s+credits$/i),
  HowMuchRegEx : new RegExp(/^how\s+much\s+is\s+([a-z\s]+)[?]$/i),
  HowManyRegEx : new RegExp(/^how\s+many\s+credits\s+is\s+([a-z\s]+)[?]$/i),
  isValidRomanRegEx : new RegExp(/^m{0,3}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$/),
  romanNumeralsVal : { i: 1, v: 5, x: 10, l: 50, c: 100, d: 500, m: 1000 }
}

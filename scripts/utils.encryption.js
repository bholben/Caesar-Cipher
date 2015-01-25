
// Encryption / decryption routine is in this file.

var isLower = function (charCode) {
  if (charCode >= 97 && charCode <= 122) {
    return 97;
  };
};

var isUpper = function (charCode) {
  if (charCode >= 65 && charCode <= 90) {
    return 65;
  };
};

var rotChar = function (direction, offset, char) {
  var charCodeOld = char.charCodeAt(0),
      upper = isUpper(charCodeOld),
      lower = isLower(charCodeOld);
  if (upper || lower) {
    if (direction === 'Decrypt') { offset = 26 - offset };
    var charCodeA = upper || lower;
    charCodeNew = (charCodeOld - charCodeA + offset) % 26 + charCodeA;
    return String.fromCharCode(charCodeNew);
  };
  return char;
};

var rotString = function (direction, offset, str) {
  var result = '';
  for (i in str) {
    result += rotChar(direction, offset, str[i]);
  };
  return result;
};


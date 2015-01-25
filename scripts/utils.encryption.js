
// Encryption / decryption routine is in this file.

var utils = {
  isLower: function (charCode) {
    if (charCode >= 97 && charCode <= 122) {
      return 97;
    };
  },

  isUpper: function (charCode) {
    if (charCode >= 65 && charCode <= 90) {
      return 65;
    };
  }
};

var rotEncryption = {

  char: function (direction, offset, char) {
    var charCodeOld = char.charCodeAt(0),
        upper = utils.isUpper(charCodeOld),
        lower = utils.isLower(charCodeOld);
    // console.log(charCodeOld, upper, lower);
    if (upper || lower) {
      if (direction === 'Decode') { offset = 26 - offset };
      var charCodeA = upper || lower;
      console.log(charCodeA);
      charCodeNew = (charCodeOld - charCodeA + offset) % 26 + charCodeA;
      return String.fromCharCode(charCodeNew);
    };
    return char;
  },

  text: function (direction, offset, text) {
    console.log(direction, offset, text)
    var result = '';
    for (i in text) {
      result += this.char(direction, offset, text[i]);
    };
    console.log(result);
    return result;
  }

};

console.log(rotEncryption.text('Encode', 1, 'abcdef'));

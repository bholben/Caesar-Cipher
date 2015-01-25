
// View control is in this file.

(function () {

  var chosenSelect =  $('.chosen-select'),
      textBox =       $('#inputText')[0],
      runButton =     $('input[value="Encode"], input[value="Decode"]'),
      resetButton =   $('input[value="Clear Text"]'),
      wrapper =       $('.wrapper');

  var buildDropDown = function () {
    var i, rotVal;
    for (i = 1; i < 26; i++) {
      rotVal = 'ROT' + i;
      chosenSelect.append('<option value="' + rotVal + '">' + rotVal + '</option>');
    }
    chosenSelect.val('ROT13').chosen();
  };

  var clearResults = function () {
    $('.results').remove();
  };

  runButton.on('click', function (e) {
    var direction = e.target.value,
        offset = Number(chosenSelect.val().slice(3)),
        text = textBox.value;
    clearResults();
    wrapper.append('' +
      '<div class="results">' +
        '<h4>' + direction + 'd text:</h4>' +
        '<p>' + rotEncryption.text(direction, offset, text) + '</p>' +
      '</div>')
  });

  resetButton.on('click', function () {
    textBox.value = '';
    clearResults();
  });

  buildDropDown();

}());
